import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import Circle from '../../assets/circle.png';
import Cross from '../../assets/cross.png';

function TicTacToe() {
    let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const toggle = (e, num) => {
        if (lock) {
            return;
        }
        if (data[num] !== "") {
            return;
        }
        let newData = [...data];
        if (count % 2 === 0) {
            newData[num] = "x";
            e.target.innerHTML = `<img src = '${Cross}' >` 
        } else {
            newData[num] = "o";
            e.target.innerHTML = `<img src = '${Circle}' >` 
        }
        setData(newData);
        setCount(count + 1);
        checkWin(newData);
    };

    const checkWin = (newData) => {
        if (newData[0] === newData[1] && newData[1] === newData[2] && newData[2] !== "") {
            won(newData[2]);
        } else if (newData[3] === newData[4] && newData[4] === newData[5] && newData[5] !== "") {
            won(newData[5]);
        } else if (newData[6] === newData[7] && newData[7] === newData[8] && newData[8] !== "") {
            won(newData[8]);
        } else if (newData[0] === newData[3] && newData[3] === newData[6] && newData[6] !== "") {
            won(newData[6]);
        } else if (newData[1] === newData[4] && newData[4] === newData[7] && newData[7] !== "") {
            won(newData[7]);
        } else if (newData[2] === newData[5] && newData[5] === newData[8] && newData[8] !== "") {
            won(newData[8]);
        } else if (newData[0] === newData[4] && newData[4] === newData[8] && newData[8] !== "") {
            won(newData[8]);
        } else if (newData[2] === newData[4] && newData[4] === newData[6] && newData[6] !== "") {
            won(newData[6]);
        }
    };

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src='${Cross}' alt='X' /> Wins`;
        } else if (winner === "o") {
            titleRef.current.innerHTML = `Congratulations: <img src='${Circle}' alt='O' /> Wins`;
        }
    };

    const reset = () => {
        setLock(false);
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        titleRef.current.innerHTML = 'Tic Tac Toe Game In <span>React</span>';
        box_array.forEach((box) => {
            box.current.innerHTML = "";
        });
    };

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span> </h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='resetBtn' onClick={reset}>Reset</button>
        </div>
    );
}

export default TicTacToe;
