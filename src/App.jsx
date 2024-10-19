import {useState} from "react";

export default function App() {
  const [showStory, setShow] = useState(false);
  const insertX = [["Willy the Goblin"],["Big Daddy"],["Father Christmas"]];
  const insertY = [["the soup kitchen"],["Disneyland"],["the White House"]];
  const insertZ = [["spontaneously combusted"],["melted into a puddle on the sidewalk"],["turned into a slug and crawled away"]];
  const [xItem, setX] = useState("");
  const [yItem, setY] = useState("");
  const [zItem, setZ] = useState("");
  const ukus = "us";

  function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }
  function buttonClicked() {
    setShow(true);
    setX(randomValueFromArray(insertX));
    setY(randomValueFromArray(insertY));
    setZ(randomValueFromArray(insertZ));
  }
  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} />
      </div>
      <div>
        <button onClick={buttonClicked}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {randomValueFromArray(xItem)} went for a walk. When they
          got to {randomValueFromArray(yItem)}, they stared in horror for a few moments, then {randomValueFromArray(zItem)}.
          Bob saw the whole thing, but was not surprised — {randomValueFromArray(xItem)} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}