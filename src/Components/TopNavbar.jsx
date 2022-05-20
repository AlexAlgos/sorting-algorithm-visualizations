import React from 'react';
import '../StyleSheets/TopNavbar.css';

export default class TopNavBar extends React.Component {
    render() {
        const {populateArray, changeArraySize, arraySize, changeAnimationSpeed, speed, changeAlgo, changeSort, sortChoice, isSorting, isComplete} = this.props;
        const ANIMATION_SPEED = Math.ceil(500 / speed);
        return (
            <div className="navbar">Sorting Algorithm Visualizations
                <div className="animation-speed">
                    <label htmlFor="speed">Animation Speed</label>
                    <input type="range" id="speed" name="speed" onChange={changeAnimationSpeed} min="1" max="11" value={ANIMATION_SPEED} disabled={isSorting}></input>
                </div>
                <div className="arr-size">
                    <label htmlFor="size">Array Size</label>
                    <input type="range" id="size" name="size" onChange={changeArraySize} min="9" max="45" step="1" disabled={isSorting} value={arraySize}></input>
                </div>
                <div className="dropDownMenu">
                    <select onChange={changeAlgo} disabled={isSorting} value={sortChoice}>
                        <option value="mergeSort">Merge Sort</option>
                        <option value="bubbleSort">Bubble Sort</option>
                        <option value="quickSort">Quick Sort</option>
                        <option value="insertionSort">Insertion Sort</option>
                    </select>
                </div>
                <button type="button" className="button" onClick={populateArray} disabled={isSorting}>New Array</button>
                <button type="button" className="button" onClick={changeSort} disabled={isSorting || isComplete}>Run Sort</button>
            </div>
        )
    }
}