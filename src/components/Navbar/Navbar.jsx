import logo from "../../assets/gameCraftLogo.png";
import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import styles from "./Navbar.module.css";
function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }
  return (
    <nav>
      <div className={styles.hamBurgerMenu} onClick={handleMobileMenu}>
        {
            showMobileMenu ? <RxCross1 className={`${styles.icon} ${styles.rotateCross}`}/> : <RxHamburgerMenu className={styles.icon}/>
        }
      </div>
      <div className={styles.navlogo}>
        <img src={logo} alt="logo" />
        <div>
          <p>GAMER</p>
          <p>RECRAFT</p>
        </div>
      </div>
      <div>
      <ul className={`${styles.navBarContent} ${styles.navMobileDropdown} ${showMobileMenu ? styles.showMobile : styles.clossMobile}`}>
          <li>Tournaments</li>
          <li>Games</li>
          <li>News</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </div>
      <div>
      <ul className={styles.navBarContent}>
          <li><IoSearchSharp className={styles.icon}/></li>
          <li>Sign in</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
