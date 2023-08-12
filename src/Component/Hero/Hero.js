import React from 'react';
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { FaShoppingBag , FaArrowRight} from "react-icons/fa";
import {delay, motion} from "framer-motion";




function Hero() {

const transition = {duration: 3, type: "spring"};

  return (
    <div className={css.container}>
        
        {/* Left side */}
        <div className={css.h_side}>
            <span className={css.text1}>Skin Protection Creem</span>
            <div className={css.text2}>
                <span>Treainding Colection</span>
                <span>Consetetur sanctus aliquyam tempor et et a eos no ut, sanctus.</span>
            </div>
        </div>


        {/* Middle section and   */}

        <div className={css.wraper}>
            {/* farmer Motion animation on blue circle */}
            <motion.div
            initial = {{bottom: "2rem"}}
            whileInView={{bottom: "0rem"}}
            transition={transition}
            className={css.blueCircle}></motion.div>


            {/* farmer Motion animation on Here Image */}
            <motion.img
            transition={transition}
            initial={{bottom:"-2rem"}}
            whileInView={{bottom:"0rem"}}
            src={HeroImg} alt="Hero_image" width={600}/>


            {/* farmer Motion animation on Cart menu Icon */}
            <motion.div
            initial={{right: "7%"}}
            whileInView={{right: "2%"}}
            transition={transition}
            className={css.cart2}>
                <FaShoppingBag className={css.icon}/>

                <div className={css.singUp}>
                    <span>Best Sing Up offer..</span>
                    <FaArrowRight />
                </div>
            </motion.div>
        </div>


        {/* right Section here */}

        <div className={css.h_side}>
            <div className={css.traffic}>
                <span>1.8M</span>
                <span>Monthly</span>
            </div>

            <div className={css.customer}>
                <span>100K</span>
                <span>Happy Customer.. </span>
            </div>
        </div>


    </div>
  )
}

export default Hero;