import { useState } from "react";
import logo from "../../assets/gameCraftLogo.png";
import styles from "./Footer.module.css";
import {
  FaPhoneSquareAlt,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaCopyright
} from "react-icons/fa";
import {
  IoMdMail,
  IoMdArrowForward,
  IoIosArrowDown
} from "react-icons/io";

function Footer() {
  const [legal, setLegal] = useState(false);
  const [help, setHelp] = useState(false);
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerCompInfo}>
          <div className={styles.footerlogo}>
            <img src={logo} alt="logo" />
            <div>
              <p>GAMER</p>
              <p>RECRAFT</p>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <ul>
              <li>
                <FaPhoneSquareAlt className={styles.footerIcon} />{" "}
                +91-9306748005
              </li>
              <li>
                <IoMdMail className={styles.footerIcon} />{" "}
                support@gamerrecraft.in
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerContent}>
          <h3>
            Legal & Privacy{" "}
            <IoIosArrowDown
              className={`${styles.footerIcon} ${legal ? `${styles.rotateUp}` : `${styles.rotateDown}`}`}
              onClick={() => {
                setLegal(!legal);
              }}
            />
          </h3>
          <ul
            className={`${styles.footerMobileDropdown} ${
              legal ? `${styles.showMobile}` : `${styles.clossMobile}`
            }`}
          >
            <li>Terms And Condition</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <h3>
            Need Help{" "}
            <IoIosArrowDown
              className={`${styles.footerIcon} ${help ? `${styles.rotateUp}` : `${styles.rotateDown}`}`}
              onClick={() => {
                setHelp(!help);
              }}
            />
          </h3>
          <ul
            className={`${styles.footerMobileDropdown} ${
              help ? `${styles.showMobile}` : `${styles.clossMobile}`
            }`}
          >
            <li>
              FAQ<span>s</span>
            </li>
            <li>My Account</li>
            <li>My Orders</li>
            <li>Meet the Team</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <div className={styles.footerContact}>
            <div className={styles.footerContactIcons}>
              <h4>Connect with us.</h4>
              <ul>
                <li>
                  <FaInstagramSquare />
                </li>
                <li>
                  <FaFacebookSquare />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
            <div className={styles.footerlogo}>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerQuote}>
        <p>Compete</p>
        <IoMdArrowForward />
        <p>Win</p>
        <IoMdArrowForward />
        <p>Earn</p>
        <IoMdArrowForward />
        <p>Repeat</p>
      </div> 
      <div className={styles.footerCopyRight}>
      <FaCopyright/>
      <p>GR Pvt Ltd</p>
      </div>
    </footer>
  );
}

export default Footer;
