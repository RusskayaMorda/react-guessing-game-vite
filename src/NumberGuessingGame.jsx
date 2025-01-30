import { useState } from "react";
import GuessControl from "./GuessControl";
import GameOver from "./GameOver";
import GuessMessage from "./GuessMessage";

const MAX_ATTEMPTS = 5;

function NumberGuessingGame(){
  const[numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random()*100)+1);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  const isGameOver = numberOfGuesses >= MAX_ATTEMPTS || latestGuess === numberToGuess;
  const isCorrectGuess = latestGuess === numberToGuess;

  const handleGuess = (guess) => {
    setLatestGuess(guess);
    setNumberOfGuesses(numberOfGuesses+1)
  };
  const handleReset = () => {
    setNumberToGuess(Math.floor(Math.random()*100)+1)
    setNumberOfGuesses(0);
    setLatestGuess(null)
  }
  return (
    <div>
      <h2>I am thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}

export default NumberGuessingGame;
