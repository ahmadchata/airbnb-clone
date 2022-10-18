import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faSearch,
  faBars,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav
      className={`p-3 border d-flex justify-content-between align-items-center ${styles.smallFont}`}
    >
      <div>
        <Image src="/logo.png" width={111} height={42} alt="Airbnb logo" />
      </div>
      <div className={`border py-3 ps-3 pe-2 shadow-sm ${styles.rounded}`}>
        <span class={`px-3 ${styles.bold}`}>Anywhere</span>
        <span class={`px-3 border-start border-end ${styles.bold}`}>
          Any week
        </span>
        <span className={`px-3 ${styles.thin}`}>Add guests</span>
        <span className={`rounded-circle p-2 ${styles.homeRed}`}>
          <FontAwesomeIcon
            color="#fff"
            size="md"
            icon={faSearch}
            alt="Search icon"
          />
        </span>
      </div>
      <div>
        <span className={`${styles.bold}`}>Become a Host</span>
        <span className="mx-3">
          <FontAwesomeIcon
            color="#000"
            size="lg"
            icon={faGlobe}
            alt="Globe icon"
          />
        </span>
        <span className={`border ps-3 pe-2 py-2 ${styles.rounded}`}>
          <span className="me-2">
            <FontAwesomeIcon
              color="#000"
              size="lg"
              icon={faBars}
              alt="Hamburger icon"
            />
          </span>
          <span>
            <FontAwesomeIcon
              color="#848081"
              size="lg"
              icon={faCircleUser}
              alt="Avatar icon"
            />
          </span>
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
