import React, { useState, useEffect } from "react";
import Beats from "./Beats.js";
import Footer from "./Footer";
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

  const colors = {
    p1: "#00fffe",
    p2: "#FF00FF",
    p3: "#FFFFFF",
  };

  const beats = [
    { btn: "65", beat: new Audio(Links[0]), btnColor: colors.p1 },
    { btn: "66", beat: new Audio(Links[1]), btnColor: colors.p1 },
    { btn: "67", beat: new Audio(Links[2]), btnColor: colors.p1 },
    { btn: "68", beat: new Audio(Links[3]), btnColor: colors.p2 },
    { btn: "69", beat: new Audio(Links[4]), btnColor: colors.p2 },
    { btn: "70", beat: new Audio(Links[5]), btnColor: colors.p2 },
    { btn: "71", beat: new Audio(Links[6]), btnColor: colors.p2 },
    { btn: "72", beat: new Audio(Links[7]), btnColor: colors.p3 },
    { btn: "73", beat: new Audio(Links[8]), btnColor: colors.p3 },
  ];
  const [beatsList, setBeatsList] = useState(beats);

  //play sound when click or key press
  const playSound = (beat) => {
    var kes = document.getElementById(beat.btn);

    kes.style.backgroundColor = beat.btnColor;

    kes.style.boxShadow = `0px 0px 17px 0px ${beat.btnColor}`;

    setCurrClicked(beat.btn);

    beat.beat.currentTime = 0;

    beat.beat.play();
  };

  //when user press key
  const keyp = (e) => {
    const ky = e.keyCode;
    beatsList.map((arr) => {
      if (e.keyCode == arr.btn) {
        playSound(arr);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", keyp);

    return () => {
      window.removeEventListener("keydown", keyp);
    };
  }, [keyp]);

  //when transition end this code run
  const endOfTransitioned = (e) => {
    if (currClicked) {
      var kes = document.getElementById(currClicked);

      kes.style.backgroundColor = "transparent";

      kes.style.boxShadow = "none";
    }
  };
  useEffect(() => {
    document.addEventListener("transitionend", endOfTransitioned);
    return () => {
      document.removeEventListener("transitionend", endOfTransitioned);
    };
  }, [endOfTransitioned]);

  return (
    <>
      <div>
        <h1 className="Beat_Title"> Beat The Button</h1>

        <div className="main_Beat_Container">
          <div className="beatBox">
            {beatsList.map((arr, index) => {
              return (
                <Beats key={index} arr={arr} playSound={(e) => playSound(e)} />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
