import React from 'react';
import '../StyleSheets/ArrayBars.css';

export default class ArrayBars extends React.Component {
    render() {
        const {bars, compare, swap, sorted } = this.props;
        return (
            <div className="array">
                {bars.map((bar, index) => {
                    let backgroundColor = "aquamarine";
                    if (compare && (index === compare[0] || index === compare[1])) {
                        backgroundColor = "yellow";
                    }
                    if (swap && (index === swap[0] || index === swap[1])) {
                        backgroundColor = "red";
                    }
                    else if (sorted && sorted.includes(index)) {
                        backgroundColor = "#48d627"; /* green */
                    }
                    const style = {
                        "backgroundColor": backgroundColor,
                        "height": `${bar * Math.min(16.5, Math.ceil(window.innerWidth / bars.length) - 6)}px`,
                    };
                    return (
                        <div className="bar" 
                            key={index}
                            style={style}
                        >{bar}</div>
                    )
                }   
            )
        }
        </div>
    );
    }
}