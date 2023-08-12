import React from 'react';
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { IoCallSharp, IoMailSharp, IoLinkSharp } from "react-icons/io5";
import { VscSignIn } from "react-icons/vsc";


function Footer() {
  return (
    <div className={css.footerWrapper}>

        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt='Site_Logo' />
                <span>E-Shop</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contuct Us</span>
                    <span className={css.pngLine}>
                        <FaLocationDot className={css.icon}/>
                        <span>5th Floor, salt Lake, Kolkata - 700086</span>
                    </span>
                    <span className={css.pngLine}>
                        <IoCallSharp className={css.icon}/>
                        <span>+91-9453157856</span>
                    </span>

                    <span className={css.pngLine}>
                        <IoMailSharp className={css.icon}/>
                        <span>example2023@gmail.com</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <VscSignIn className={css.icon}/>
                        <span>Sing In</span>
                    </span>
                   
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <FaPeopleGroup className={css.icon}/>
                        <span>About Us.</span>
                    </span>
                   
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <IoLinkSharp className={css.icon}/>
                        <span>Accept privecy & police</span>
                    </span>
                   
                </div>
            </div>

        </div>

        <div className={css.copyRight}>
            <span>copyRight &copy; in 2023 by E-shop</span>
            <span>All right reserved</span>
        </div>


    </div>
  )
}

export default Footer;