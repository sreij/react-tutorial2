import {useState} from "react";

export default function App() {
  const [name, setName] = useState("Bob");
  const [newName, setNewName] = useState("");
  const [showStory, setShow] = useState(false);
  const insertX = [["Willy the Goblin"],["Big Daddy"],["Father Christmas"]];
  const insertY = [["the soup kitchen"],["Disneyland"],["the White House"]];
  const insertZ = [["spontaneously combusted"],["melted into a puddle on the sidewalk"],["turned into a slug and crawled away"]];
  const [xItem, setX] = useState("");
  const [yItem, setY] = useState("");
  const [zItem, setZ] = useState("");
  const [ukus, setUKUS] = useState("us");
  const [temp, setTemp] = useState("fahrenheit")

  function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  /*
  function result(event){
    if(event.target.value !== ""){
      setName(event.target.value);
    }else{
      setName("Bob");
    }
  }
    */
  
  function buttonClicked(event) {
    setShow(true);
    setX(randomValueFromArray(insertX));
    setY(randomValueFromArray(insertY));
    setZ(randomValueFromArray(insertZ));
    if(newName !== ""){
      setName(newName);
    }else{
      setName("Bob");
    }
  }
  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" onChange={(event) => {setNewName(event.target.value)}}/>
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} onChange={() => setUKUS("us")}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} onChange={() => setUKUS("uk")}/>
      </div>
      <div>
        <button onClick={buttonClicked}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}