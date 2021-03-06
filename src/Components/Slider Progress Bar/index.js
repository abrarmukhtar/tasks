import React, { useState, useEffect } from "react";
import {Link, useHistory} from 'react-router-dom'
import ProgressBars from "../Slider Progress Bar/ProgressBar";

export default function SliderProgressBar() {
  
  const history = useHistory();
  const [state1, setstate1] = useState(100);
  const [state2, setstate2] = useState(0);
  const [state3, setstate3] = useState(0);

  const [sumOf, setSumOf] = useState(0);


  useEffect(() => {
    setSumOf(parseInt(state1) + parseInt(state2) + parseInt(state3));
  }, []);

  return (
    <div className="main-container">
      <h2 className="progress_title"> Progress App</h2>
      <ProgressBars
        per1={state1}
        per2={state2}
        per3={state3}
        changeFn1={setstate1}
        changeFn2={setstate2}
        changeFn3={setstate3}
        Nums={setSumOf}
      />
      <h4 style={{textAlign: "center", margin: "0px"}}> {"Total %" + sumOf}</h4>
      <h4 style={{textAlign: "center", cursor: "pointer"}} onClick={()=> history.push('/')} as={Link}> Click to move "Beats Button" </h4>
    </div>
  );
}
