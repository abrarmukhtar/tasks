import React, { useState } from "react";

export default function BeatButtons() {
  const [currClicked, setCurrClicked] = useState("");
  const Links = [
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/smart_alarm.mp3?alt=media&token=c6ed8ce0-4863-4b0f-8539-e186c2de5079",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/smart_watch.mp3?alt=media&token=6d44e53e-ee16-4bc7-9fbd-e41461e226b2",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/tunes%20for%20Beats%2Fbreak_the_glass.mp3?alt=media&token=e45a793b-7606-4db6-b9b8-4b537606631d",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/tunes%20for%20Beats%2Fbusiness_sms_tone_12.mp3?alt=media&token=87431a3d-de1d-4cca-9433-8c167530a262",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/tunes%20for%20Beats%2Fmgs_3_d_alert_tone.mp3?alt=media&token=5ee33260-9eb1-4cc6-87f2-ec042b7cff62",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/tunes%20for%20Beats%2Fwhippoorwill.mp3?alt=media&token=1da3f011-a726-4ba4-aa75-36166aae2e9e",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/tunes%20for%20Beats%2Fclick.mp3?alt=media&token=713c0f01-7181-4333-90c3-d160f40d02c1",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/tunes%20for%20Beats%2Fcute_click_effect.mp3?alt=media&token=6f322406-4450-4af2-a209-748718e9fdf8",
    "https://firebasestorage.googleapis.com/v0/b/new-project-b8582.appspot.com/o/tunes%20for%20Beats%2Fmouse_click.mp3?alt=media&token=f311ae3e-1f16-4312-8d0a-763c0a24638e",
  ];

  let beats = [
    { btn: "65", beat: new Audio(Links[0]), btnColor: "#00fffe" },
    { btn: "66", beat: new Audio(Links[1]), btnColor: "#00fffe" },
    { btn: "67", beat: new Audio(Links[2]), btnColor: "#00fffe" },
    { btn: "68", beat: new Audio(Links[3]), btnColor: "#FF00FF" },
    { btn: "69", beat: new Audio(Links[4]), btnColor: "#FF00FF" },
    { btn: "70", beat: new Audio(Links[5]), btnColor: "#FF00FF" },
    { btn: "71", beat: new Audio(Links[6]), btnColor: "#FF00FF" },
    { btn: "72", beat: new Audio(Links[7]), btnColor: "#FFFFFF" },
    { btn: "73", beat: new Audio(Links[8]), btnColor: "#FFFFFF" },
  ];

  const playSound = (beat) => {
    
    var kes = document.getElementById(beat.btn);


    kes.style.backgroundColor = beat.btnColor;

    kes.style.boxShadow = `0px 0px 17px 0px ${beat.btnColor}`;

    setCurrClicked(beat.btn);

    beat.beat.currentTime = 0;

    beat.beat.play();
  };

  var keyp = (e) => {
    let ky = e.keyCode;
    beats.map((arr, index) => {
      if (e.keyCode == arr.btn) {
        playSound(arr);
      }
    });
  };
  document.addEventListener("keydown", keyp);

  const [beatsList, setBeatsList] = useState(beats);

  const endOfTransitioned = (e) => {
    if (currClicked) {
      var kes = document.getElementById(currClicked);

      kes.style.backgroundColor = "transparent";

      kes.style.boxShadow = "none";
    }
  };

  document.addEventListener("transitionend", endOfTransitioned);
  return (
    <div>
      <h1 className="Beat_Title"> Beat The Button</h1>
      <audio id="bflat"> </audio>
      <div className="main_Beat_Container">
        <div className="beatBox">
          {beatsList.map((arr, index) => {
            return (
              <div className="beat" key={index}>
                <button
                  className="button"
                  style={{
                    borderColor: arr.btnColor,
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                  onClick={() => playSound(arr)}
                  id={arr.btn}
                >
                  {String.fromCharCode(arr.btn)}
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
