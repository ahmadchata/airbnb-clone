import Image from "next/image";
import house from "../public/listings/house.jpg";
import styles from "../styles/Listings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import listings from "../public/data/listings";

const Listings = () => {
  // Liking of listings
  const likeListing = (e) => {
    const id = document.getElementById(e);
    id.classList.toggle(styles.red);
  };

  return (
    <div className="row mx-0 mt-1 gy-3 px-3">
      {listings.map((listing) => (
        <div key={listing.id} className="col-3">
          <div>
            <div className="position-relative">
              <Image
                className={`${styles.imageListings}`}
                src={house}
                width={335}
                height={320}
                alt="Image of a house"
              />
              <div
                id={listing.id}
                onClick={() => {
                  likeListing(listing.id);
                }}
                className={styles.like}
              >
                <FontAwesomeIcon size="lg" icon={faHeart} alt="Heart icon" />
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-8">
                <p className={`fw-bold my-0 ${styles.smallFont}`}>
                  {listing.name}
                </p>
                <p className={`fw-light my-0 text-muted`}>{listing.host}</p>
                <p className={`mb-0 fw-light text-muted`}>{listing.date}</p>
                <p className={`mt-1 fw-light`}>
                  <span className={`${styles.smallFont} fw-bold`}>
                    {listing.price}
                  </span>{" "}
                  night
                </p>
              </div>
              <div className="col text-end">
                <FontAwesomeIcon
                  color="#000"
                  size="xs"
                  icon={faStar}
                  alt="Star icon"
                />
                <span className="fw-light ms-1">{listing.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
