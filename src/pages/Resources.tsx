import type { JSX } from "react";
import styles from "./Resources.module.css";
import regionalPhoto from "../images/regionalphoto.webp";
import nationalPhoto from "../images/veym.jpg";

const Resources = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.resource}>
        <h2>Regional Website</h2>
        <p>Liên Đoàn Phaolô Hạnh's Official Webpage</p>
        <a
          href="https://www.liendoanphaolohanh.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={regionalPhoto}
            alt="Liên Đoàn Phaolô Hạnh Website"
            className={styles.photo}
          />
        </a>
      </div>

      <div className={styles.resource}>
        <h2>National Website</h2>
        <p>VIETNAMESE EUCHARISTIC YOUTH MOVEMENT</p>
        <a
          href="https://veym.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={nationalPhoto}
            alt="Vietnamese Eucharistic Youth Movement"
            className={styles.photo}
          />
        </a>
      </div>
    </div>
  );
};

export default Resources;
