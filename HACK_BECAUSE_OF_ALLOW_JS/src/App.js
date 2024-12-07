import React, { useState } from 'react';
function App() {
    const [result, setResult] = useState('');
    const rollDice = () => {
        const diceRoll = Math.floor(Math.random() * 6) + 1; // Simulate dice roll
        setResult(`You rolled: ${diceRoll}`);
    };
    return (<div>
            <h1>Roll the Dice!</h1>
            <button onClick={rollDice}>Roll Dice</button>
            <p>{result}</p>
        </div>);
}
export default App;
