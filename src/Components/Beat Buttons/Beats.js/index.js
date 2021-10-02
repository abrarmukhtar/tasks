import React from "react";
import Footer from "../Footer";
export default function Beats({ arr, playSound }) {
  return (
    <>
    <div className="beat">
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
    </>
  );
}
