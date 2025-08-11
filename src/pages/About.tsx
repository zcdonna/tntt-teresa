import type { JSX } from "react";
import styles from "./About.module.css";

const About = (): JSX.Element => {
  return (
    <div>
      <div>
        <h2>History</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          molestiae autem, perferendis maxime quas atque? Recusandae, enim
          molestiae? Accusantium vel blanditiis quia doloribus iusto expedita
          id numquam reiciendis eius voluptas. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ab maiores, laudantium similique natus
          repellendus possimus quod, magni iste facilis dolorem hic earum
          voluptate distinctio exercitationem dolor itaque soluta laborum
          perferendis?
        </p>
      </div>

      <div>
        <h2>2023 - 2025 Board Members</h2>
        <div className={styles.boardMemberContainer}>
          <div className={styles.boardMember}>
            <img src="img1.png" alt="Board Member 1" />
            <p>Board Member 1</p>
            <p>Board Member 1 Bio</p>
          </div>
          <div className={styles.boardMember}>
            <img src="img1.png" alt="Board Member 2" />
            <p>Board Member 2</p>
            <p>Board Member 2 Bio</p>
          </div>
          <div className={styles.boardMember}>
            <img src="img1.png" alt="Board Member 3" />
            <p>Board Member 3</p>
            <p>Board Member 3 Bio</p>
          </div>
        </div>
      </div>

      <div className={styles.pastBoardMembersContainer}>
        <h2>Past Board Members</h2>
        <div className={styles.pastBoardMembers}>
          <p>2020 - 2022 Board Member</p>
          <ul>
            <li>Board Member 1</li>
            <li>Board Member 2</li>
            <li>Board Member 3</li>
          </ul>
          <ul>
            <li>Board Member 4</li>
            <li>Board Member 5</li>
            <li>Board Member 6</li>
          </ul>
        </div>
        <div className={styles.pastBoardMembers}>
          <p>2017 - 2019 Board Member</p>
          <ul>
            <li>Board Member 1</li>
            <li>Board Member 2</li>
            <li>Board Member 3</li>
          </ul>
          <ul>
            <li>Board Member 4</li>
            <li>Board Member 5</li>
            <li>Board Member 6</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
