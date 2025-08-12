import { useState, useEffect } from "react";
import type { JSX } from "react";
import styles from "./RotatingGallery.module.css";

import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.jpg";

const photos = [photo1, photo2, photo3];

const RotatingGallery = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.rotatingGallery}>
      <img
        src={photos[currentIndex]}
        alt={`Gallery photo ${currentIndex + 1}`}
        className={styles.rotatingPhoto}
      />
    </div>
  );
};

export default RotatingGallery;
