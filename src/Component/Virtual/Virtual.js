import React from 'react';
import css from "./Virtual.module.css";
import Shead from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";


function Virtual() {
  return (
    <div className={css.Virtual}>
        <div className={css.left_side}>
            <span>Virtual Try-On</span>
            <span>Never buy the wrong shead again!</span>
            <button>Try now!</button>
            <img src={Shead} alt="try_Now" />
        </div>

        <div className={css.right_side}>
          <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before} rightImage={After} hover={true} />
          </div>
          
        </div>
    </div>
  )
}

export default Virtual;