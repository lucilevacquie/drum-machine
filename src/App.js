import React, {useRef, useState, useEffect} from "react";
import './App.css';
import Audio1 from "./assets/audio1.wav";
import Audio2 from "./assets/audio2.wav";
import Audio3 from "./assets/audio3.wav";
import Audio4 from "./assets/audio4.wav";
import Audio5 from "./assets/audio5.wav";
import Audio6 from "./assets/audio6.wav";
import Audio7 from "./assets/audio7.wav";
import Audio8 from "./assets/audio8.wav";
import Audio9 from "./assets/audio9.wav";

const DrumMachine = () => {

  const data = [
    {
      key : "Q",
      id : "bass1",
      src : Audio1,
      description: "Bass sound",
      keycode: 81,
      ref: useRef()
    },
    {
      key : "W",
      id : "hi-hat",
      src : Audio2,
      description: "Hi-hat",
      keycode: 87,
      ref: useRef()
    },
    {
      key : "E",
      id : "guitar",
      src : Audio3,
      description: "Guitar string",
      keycode: 69,
      ref: useRef()
    },
    {
      key : "A",
      id : "triangle",
      src : Audio4,
      description: "Triangle",
      keycode: 65,
      ref: useRef()
    },
    {
      key : "S",
      id : "clap",
      src : Audio5,
      description: "Clap",
      keycode: 83,
      ref: useRef()
    },
    {
      key : "D",
      id : "drop",
      src : Audio6,
      description: "Rim shot",
      keycode: 68,
      ref: useRef()
    },
    {
      key : "Z",
      id : "crash",
      src : Audio7,
      description: "Crash",
      keycode: 90,
      ref: useRef()
    },
    {
      key : "X",
      id : "bass2",
      src : Audio8,
      description: "Square bass",
      keycode: 88,
      ref: useRef()
    },
    {
      key : "C",
      id : "click",
      src : Audio9,
      description: "Kick drum",
      keycode: 67,
      ref: useRef()
    }
  ]

  const [lastClickedButton, setLastClickedButton] = useState({})

  const onClickButton = (item) => {
    console.log(item)
    item.ref.current.play()
    setLastClickedButton(item)
  }

  useEffect(() => {
    const keyPress = event => {
      data.forEach(item => {
        if(event.keyCode === item.keycode){
          return onClickButton(item)
        }
      })
    }
    window.addEventListener("keydown", keyPress)
    return () => {window.removeEventListener("keydown", keyPress)}
  }, [data])

  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">
        {data.map(item => (
            <button onClick={() => onClickButton(item)} class="drum-pad" id={item.id}>{item.key}
              <audio ref={item.ref} class="clip" id={item.key} src={item.src}/>
            </button>
        ))}
      <p id="description">{lastClickedButton.description}</p>
      </div>
    </div>
  )
}

export default DrumMachine;
