import Image from "next/image";
import house from "../public/listings/house.jpg";
import styles from "../styles/Listings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import listings from "../public/data/listings";

const Listings = () => {
  return (
    <div className="row mx-0 mt-1 gy-3 px-3">
      {listings.map((listing) => (
        <div key={listing.id} className="col-3">
          <div>
            <div>
              <Image
                className={`${styles.imageListings}`}
                src={house}
                width={335}
                height={320}
                alt="Image of a house"
              />
            </div>
            <div className="row mx-0">
              <div className="col-8">
                <p className={`fw-bold my-0`}>{listing.name}</p>
                <p className={`fw-light my-0 text-muted`}>{listing.host}</p>
                <p className={`mb-0 fw-light text-muted`}>{listing.date}</p>
                <p className={`mt-1 fw-light`}>
                  <span className="fw-bold">{listing.price}</span> night
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
