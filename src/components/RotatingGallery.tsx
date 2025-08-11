import { useState, useEffect } from "react";
import type { JSX } from "react";
import styles from "./Home.module.css";

const photos = [
  "/path/to/photo1.jpg",
  "/path/to/photo2.jpg",
  "/path/to/photo3.jpg",
  // add more image paths here
];

const RotatingGallery = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // rotate every 3 seconds

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
