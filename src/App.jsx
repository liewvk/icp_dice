import React, { useState } from 'react';

function App() {
    const [result, setResult] = useState('');

    const rollDice = () => {
        const diceRoll = Math.floor(Math.random() * 6) + 1; // Simulate dice roll
        setResult(`You rolled: ${diceRoll}`);
    };

    return (
 <main>
 <img src="/logo2.svg" alt="DFINITY logo" />
        <div align="center">
            <h1 align="center">Roll the Dice!</h1>
            <button onClick={rollDice}>Roll Dice</button>
            <p align="center">{result}</p>
        </div>
    </main>
    );
}

export default App;



