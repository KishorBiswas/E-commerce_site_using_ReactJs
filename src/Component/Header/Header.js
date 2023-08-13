import React, { useState } from "react";
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import { FaCartPlus, FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



let Header = () => {

    let [showMenu, setShowMenu] = useState(false);
    let menuToggle = () => {setShowMenu((showMenu) => !showMenu )};
    return(
        <div className={css.container}>
            <div className={css.logo}>
              <img src={Logo} alt="Brand_logo"/>
              <span>E-shope</span>
            </div>

            <div className={css.right}>

                <div className={css.menuBar}>
                   <FaBars onClick={menuToggle}/>
                </div>
                {/* style={{display: showMenu? "inherit" : "none"}} */}
                <div className={showMenu ? `${css.menu} ${css.mobile_Ui}` : css.menu} >
                    <ul className={showMenu ? `${css.menu} ${css.mobile_Ui}` : css.menu} >
                        <li>Collection</li>
                        <li>Brand</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                </div>

                <input type="text" className={css.search} placeholder="Search here.." />
                <FaCartPlus className={css.cart}/>

            </div>
        </div>
    )
}

export default Header;