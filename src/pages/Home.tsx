import type { JSX } from "react";
import styles from "./Home.module.css";

const Home = (): JSX.Element => {
  return (
    <main className={styles.container}>
      <div className={styles.infoAndPictureContainer}>
        <section className={styles.infoSection}>
          <h2 className={styles.title}>
            St. Theresa of the Child Jesus Chapter - Bridgeport, CT
          </h2>
          <p className={styles.subTitle}>St. Paul Hanh League of Chapters - LDPH</p>
          <p className={styles.subTitle}>Vietnamese Eucharistic Youth Movement</p>

          <div className={styles.schedule}>
            <h3>Schedule</h3>
            <p>Holy Mass Time: Sunday @ 2:00 PM (Vietnamese)</p>
            <p>Activities: Sunday @ 12:00 PM - 1:45 PM (as scheduled on our academic calendar)</p>
          </div>

          <address className={styles.address}>
            <h3>Location</h3>
            <p>St. Augustine Cathedral</p>
            <p>Vietnamese Martyrs Quasi-Parish</p>
            <p>359 Washington Ave, Bridgeport, CT 06604</p>
          </address>
        </section>

        <section className={styles.gallerySection}>
          <h3>Photo Gallery</h3>
          <div className={styles.photos}>
            <div className={styles.photoPlaceholder}>Photo 1</div>
            <div className={styles.photoPlaceholder}>Photo 2</div>
            <div className={styles.photoPlaceholder}>Photo 3</div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
