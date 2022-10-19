import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMap } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={`sticky-bottom`}>
      <div
        className={`text-white d-flex justify-content-center align-items-center ${styles.mapButton}`}
      >
        <p className="m-0">
          Show map
          <FontAwesomeIcon
            className="ms-2"
            color="#fff"
            size="lg"
            icon={faMap}
            alt="Map icon"
          />
        </p>
      </div>
      <div
        className={`border fw-light row mx-0 bg-white py-3 px-4 ${styles.smallFont}`}
      >
        <div className="col">
          <ul className="list-unstyled d-flex m-0">
            <li>©2022 Airbnb, Inc.</li>
            <li className="mx-2">· Privacy</li>
            <li>· Terms</li>
            <li className="mx-2">· Sitemap</li>
            <li>· Destinations</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-unstyled d-flex justify-content-end m-0 fw-bold">
            <li>
              <FontAwesomeIcon
                color="#000"
                size="lg"
                icon={faGlobe}
                alt="Globe icon"
              />
            </li>
            <li className="mx-3">English(UK)</li>
            <li>₦ NGN</li>
            <li className="ms-3">Support & resources</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
