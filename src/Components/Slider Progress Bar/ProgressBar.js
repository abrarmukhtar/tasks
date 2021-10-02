import React, { useState } from "react";

import RangeSlider from "react-bootstrap-range-slider";

export default function ProgressBar(props) {



  const comperisons = (e) => {
    let Sum =
      parseInt(props.per1) + parseInt(props.per2) + parseInt(props.per3);

    let xtraNum = 0;
    let xtraNum2 = 0;
    
    if (Sum > 100) {
      xtraNum = Math.ceil(Math.round((Sum - 100) / 2)); // this return partial value
    } else {
      xtraNum = Math.ceil(Math.round((100 - Sum) / 2)); // this return partial value
      
    }

    if (Sum % 2 == 1) {
      // this checks that given value is Odd or Even
      xtraNum2 = xtraNum - 1;
    } else {
      xtraNum2 = xtraNum;
    }


    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    //this is code handle if sum greater than or less than 100
    switch (e.target.name) {
      case "l1":
        p2 = parseInt(props.per2);
        p3 = parseInt(props.per3);

        if (Sum > 100) {
          p2 = p2 - parseInt(xtraNum);
          p3 = p3 - parseInt(xtraNum2);

          if (p3 < 0) {
            p2 = p2 + p3;
            p3 = 0;
          }

          if (p2 < 0) {
            p3 = p3 + p2;
            p2 = 0;
          }
        } else {
          p2 = p2 + parseInt(xtraNum);
          p3 = p3 + parseInt(xtraNum2);
        }
        props.changeFn2(p2);
        props.changeFn3(p3);
        break;
      case "l2":
        p1 = parseInt(props.per1);
        p3 = parseInt(props.per3);
        if (Sum > 100) {
          p1 = p1 - parseInt(xtraNum);
          p3 = p3 - parseInt(xtraNum2);

          if (p3 < 0) {
            p1 = p1 + p3;
            p3 = 0;
          }

          if (p1 < 0) {
            p3 = p3 + p1;
            p1 = 0;
          }
        } else {
          p1 = p1 + parseInt(xtraNum);
          p3 = p3 + parseInt(xtraNum2);
        }
        props.changeFn1(p1);
        props.changeFn3(p3);

        break;
      case "l3":
        p1 = parseInt(props.per1);
        p2 = parseInt(props.per2);
        if (Sum > 100) {
          p1 = p1 - parseInt(xtraNum);
          p2 = p2 - parseInt(xtraNum2);

          if (p2 < 0) {
            p1 = p1 + p2;
            p2 = 0;
          }

          if (p1 < 0) {
            p2 = p2 + p1;
            p1 = 0;
          }
        } else {
          p1 = p1 + parseInt(xtraNum);
          p2 = p2 + parseInt(xtraNum2);
        }
        props.changeFn1(p1);
        props.changeFn2(p2);
        break;
      default:
        console.log("nothing matched");
    }
  };

  return (
    <div className="progress-container">
      <div className="sliderGroup">
        <RangeSlider
          // style={{ width: "780px" }}
          className='s'
          name="l1"
          onAfterChange={comperisons}
          onKeyUp={comperisons}
          value={props.per1}
          onChange={(e) => props.changeFn1(e.target.value)}
          tooltip='off'
        />
        <p className="progress-per"> {`%${props.per1}`} </p>
      </div>
      <div className="sliderGroup">
        <RangeSlider
          // style={{ width: "780px" }}
          name="l2"
          className='s'
          value={props.per2}
          onChange={(e) => props.changeFn2(e.target.value)}
          onAfterChange={comperisons}
          onKeyUp={comperisons}
          tooltip='off'
        />
        <p className="progress-per"> {`%${props.per2}`} </p>
      </div>

      <div className="sliderGroup">
        <RangeSlider
          // style={{ width:  "780px" }}
          name="l3"
          className='s'
          value={props.per3}
          onChange={(e) => props.changeFn3(e.target.value)}
          tooltip='off'
          // onKeyUp={(e) => props.changeFn3(e.target.value)}
          onAfterChange={comperisons}
          onKeyUp={comperisons}
        />
        <p className="progress-per"> {`%${props.per3}`} </p>
      </div>
    </div>
  );
}
