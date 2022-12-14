import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import filter from "../public/data/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faSearch,
  faBars,
  faCircleUser,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

const NextArrow = (props) => {
  useEffect(() => {
    window.onscroll = () => {
      scroll();
    };
  }, []);

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        background: "#c7c5c5",
        border: "1px solid #c7c5c5",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        background: "#c7c5c5",
        border: "1px solid #c7c5c5",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
};

// Adds shadow to navbar after scrolling
const scroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".sticky-top").classList.add("shadow-sm");
  } else {
    document.querySelector(".sticky-top").classList.remove("shadow-sm");
  }
};

const NavBar = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="sticky-top bg-white">
      <nav
        className={`p-3 border d-flex justify-content-between align-items-center ${styles.smallFont}`}
      >
        <div>
          <Image src="/logo.png" width={111} height={42} alt="Airbnb logo" />
        </div>
        <div className={`border py-3 ps-3 pe-2 shadow-sm ${styles.rounded}`}>
          <span className={`px-3 ${styles.bold}`}>Anywhere</span>
          <span className={`px-3 border-start border-end ${styles.bold}`}>
            Any week
          </span>
          <span className={`px-3 ${styles.thin}`}>Add guests</span>
          <span className={`rounded-circle p-2 ${styles.homeRed}`}>
            <FontAwesomeIcon
              color="#fff"
              size="lg"
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
      <div className="row mx-0">
        <div className="pt-1 ps-5 col-11">
          <Slider {...settings}>
            {filter.map((icon) => (
              <Link href="#" key={icon.id}>
                <a className="text-decoration-none text-muted">
                  <div className="text-center pt-3">
                    <FontAwesomeIcon
                      color="#848081"
                      size="xl"
                      icon={icon.icon}
                      alt="Icon"
                    />
                    <p className={`mt-2 ${styles.tinyFont}`}>{icon.name}</p>
                  </div>
                </a>
              </Link>
            ))}
          </Slider>
        </div>
        <div
          className={`col ms-3 d-flex align-items-center justify-content-center`}
        >
          <p className={`border py-2 px-2 ${styles.filterRounded}`}>
            <FontAwesomeIcon
              className="me-1"
              color="#000"
              size="sm"
              icon={faSliders}
              alt="Globe icon"
            />
            <span className={`fw-bold ${styles.tinyFont}`}>Filter</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
