import React, { useState, useEffect } from 'react';
import '../App.css';

import TopNavbar from '../Components/TopNavbar.jsx';
import ArrayBars from '../Components/ArrayBars.jsx';

import bubbleSort from '../Sorts/bubbleSort.jsx';
import insertionSort from '../Sorts/insertionSort.jsx';
import mergeSort from '../Sorts/mergeSort.jsx';
import quickSort from '../Sorts/quickSort.jsx';

export default function Visualizations() {

    /**
     * Function that populate a scrambled size of an array.
     * @param arraySize - The size of an array.
     */
	function populateArray(arraySize) {
		setCompleted(false)
		setSorting(false)
		setSortedIndex([])

		const generateArray = Array.from(Array(arraySize + 1).keys()).slice(1);
		
		for (var i = generateArray.length-1; i > 0 ; i--) {
			const generateIdx = Math.floor(Math.random() * (i - 1));
			const temp = generateArray[i];
			generateArray[i] = generateArray[generateIdx];
			generateArray[generateIdx] = temp;
		}
		setBars(generateArray);
	}

	const [sortChoice, setSortChoice] = useState("mergeSort");
	const [arraySize, setArraySize] = useState(30);
	const [bars, setBars] = useState([]);
	const [isSorting, setSorting] = useState(false);
	const [isComplete, setCompleted] = useState(true);
	const [speed, setSpeed] = useState(150);
	const [compare, setCompare] = useState([]);
	const [swap, setSwap] = useState([]);
	const [sortedIndex, setSortedIndex] = useState([]);

	// ComponentDidUpdate populate a new array when user change the size or sorting algorithm. ComponentDidMount renders the first populate array. 
	useEffect(() => {
		populateArray(arraySize);
	}, [arraySize, sortChoice]);

    /**
     * Function that changes the sorting algorithm based on user choice on drop down menu.
     * @param e - The event of the user.
     */
	function changeAlgo(e) { setSortChoice(e.target.value);}

    /**
     * Function that changes the size of the array based on user clicking on 'New Array' button.
     * @param e - The event of the user.
     */
	function changeArraySize (e) {setArraySize(Number(e.target.value));}

    /**
     * Function that changes the animation speed based on user event.
     * @param e - The event of the user.
     */
	function changeAnimationSpeed (e) {setSpeed(Math.ceil(500 / Number(e.target.value)));}

	// Sort based on the sorting algorithm selected by the user and manage the sorting pattern to each sorting algorithm.
	function changeSort() {
		function sortingSequence(sequence) {
			(function idx(i) {
				setTimeout(()=> {
					const [firstElement, secondElement, arr, index] = sequence[i];
					setCompare([firstElement, secondElement]);
					setSwap([]);

					if(index !== null) {
						setSortedIndex((prevState) => (
							[...prevState, index]
						));
					}
					if (arr) {
						setBars(arr); //update the bar everytime swap occured
						if(firstElement !== null || secondElement != null) {
							setSwap([firstElement, secondElement]);
						}
					}
					if (i++ < sequence.length - 1) {
						idx(i);
					} else {
						setSorting(false);
						setCompleted(true);
					}   
				}, speed)
			})(0);
		}
		setSorting(true);

		sortChoice === "mergeSort" ? sortingSequence(mergeSort(bars)) : 
		sortChoice === "bubbleSort" ? sortingSequence(bubbleSort(bars)) : 
		sortChoice === "quickSort" ? sortingSequence(quickSort(bars)) : 
		sortChoice === "insertionSort" ?  sortingSequence(insertionSort(bars)) :
    (() => {
			setSorting(false);
			setCompleted(true);
		})()
	}

	return (
		<div className="App">
			<TopNavbar 
				populateArray={() => populateArray(arraySize)}
				arraySize={arraySize}
				changeArraySize={changeArraySize} 
				changeAnimationSpeed={changeAnimationSpeed}
				speed={speed}
				changeAlgo={changeAlgo}
				changeSort={changeSort}
				sortChoice={sortChoice}
				isSorting={isSorting}
				isComplete={isComplete}
			/>
			<ArrayBars
				bars={bars} 
				compare={isSorting && compare}
				swap={isSorting && swap}
				sorted={sortedIndex} 
			/>
		</div>
	);
}