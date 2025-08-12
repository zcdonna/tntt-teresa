import type { JSX } from "react";
import styles from "./About.module.css";

// TODO: Make this collapsable and expandable

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
        {/*Priest first picture, and then 2 rows of 5*/}
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
        <p><i>Legend: Rev - Reverend, Tr. - Trưởng, TT. - Trợ Tá</i></p>
          <div className={styles.pastBoardMembers}>
            <p>2021-2023 Chapter Executive Committee Members</p>
            <ul>
              <li>Cha Tuyên Uý - Chapter Chaplain: Rev. Philip Phan Xuân Lành</li>
              <li>Đoàn Trưởng - Chapter President: Tr. Joan of Arc Trần Valentina</li>
              <li>Đoàn Phó Quản Trị - Chapter VP of Administrative Affairs: Tr. Đôminicô Trạch Trần HuyThành</li>
              <li>Đoàn Phó Nghiên Huấn - Chapter VP of Academic Affairs: Tr. Maria Nguyễn Vy</li>
              <li>Thư Ký Đoàn - Chapter Secretary: Tr. Maria Vũ Cynthia</li>
              <li>Thủ Quỷ Đoàn - Chapter Treasurer: Tr. Giuse Lựu Nguyễn MinhHiếu</li>
              <li>Ngành Trưởng Ấu Nhi - Division Leader Seedling Specialist: Tr. Maria Nguyễn Bảo Quỳnh</li>
              <li>Ngành Trưởng Thiếu Nhi - Division Leader Search Specialist: Tr. Phaolô Lê Bảo Tịnh Trần HuyThắng</li>
              <li>Ngành Trưởng Nghĩa Sĩ - Division Leader Companion Specialist: Tr. Giuse Nguyễn Huy</li>
              <li>Ngành Trưởng Hiệp Sĩ - Division Leader Knights of the Eucharist Specialist: Tr. Đôminicô Trạch Trần HuyThành</li>
              <li>Trưởng Ban Trợ Tá - Lay Chaplain-Assistant Head: TT. Lawrence Nguyễn Cường</li>
            </ul>
          </div>

          <div className={styles.pastBoardMembers}>
            <p>2019-2021 Chapter Executive Committee Members</p>
            <ul>
              <li>Cha Tuyên Uý - Chapter Chaplain: Rev. Philip Phan Xuân Lành</li>
              <li>Đoàn Trưởng - Chapter President: Tr. Maria Nguyễn Vy</li>
              <li>Đoàn Phó Quản Trị - Chapter VP of Administrative Affairs: Tr. Joan of Arc Trần Valentina</li>
              <li>Đoàn Phó Nghiên Huấn - Chapter VP of Academic Affairs: Tr. Maria Huỳnh Nhung</li>
              <li>Thư Ký Đoàn - Chapter Secretary: Tr. Đôminicô Trạch Trần HuyThành</li>
              <li>Thủ Quỷ Đoàn - Chapter Treasurer: Tr. Giuse Lựu Nguyễn MinhHiếu</li>
              <li>Ngành Trưởng Ấu Nhi - Division Leader Seedling Specialist: Tr. Maria Nguyễn Bảo Quỳnh</li>
              <li>Ngành Trưởng Thiếu Nhi - Division Leader Search Specialist: Tr. Louis Nguyễn ThiênQuốc</li>
              <li>Ngành Trưởng Nghĩa Sĩ - Division Leader Companion Specialist: Tr. Giuse Nguyễn Huy</li>
              <li>Ngành Trưởng Hiệp Sĩ - Division Leader Knights of the Eucharist Specialist: Tr. Đaminh Nguyễn Tài</li>
              <li>Trưởng Ban Trợ Tá - Lay Chaplain-Assistant Head: TT. Lawrence Nguyễn Cường</li>
            </ul>
          </div>

          <div className={styles.pastBoardMembers}>
            <p>2016-2019 Chapter Executive Committee Members</p>
            <ul>
              <li>Cha Tuyên Uý - Chapter Chaplain: Rev. Augstinô Nguyễn Minh Tân</li>
              <li>Đoàn Trưởng - Chapter President: Tr. Đôminicô Trạch Trần HuyThành</li>
              <li>Đoàn Phó Quản Trị - Chapter VP of Administrative Affairs: Tr. Giuse Lê Trung</li>
              <li>Đoàn Phó Nghiên Huấn - Chapter VP of Academic Affairs: Tr. Maria Huỳnh Nhung</li>
              <li>Thư Ký Đoàn - Chapter Secretary: Tr. Têrêsa Nguyễn Châu</li>
              <li>Thủ Quỷ Đoàn - Chapter Treasurer: Tr. Giuse Nguyễn Lực</li>
              <li>Ngành Trưởng Ấu Nhi - Division Leader Seedling Specialist: Tr. Maria Lê Minh Thư</li>
              <li>Ngành Trưởng Thiếu Nhi - Division Leader Search Specialist: Tr. Louis Nguyễn ThiênQuốc</li>
              <li>Ngành Trưởng Nghĩa Sĩ - Division Leader Companion Specialist: Tr. Maria Trần Hoa</li>
              <li>Ngành Trưởng Hiệp Sĩ - Division Leader Knights of the Eucharist Specialist: Tr. Đôminicô Trạch Trần HuyThành</li>
              <li>Trưởng Ban Trợ Tá - Lay Chaplain-Assistant Head: TT. Lawrence Nguyễn Cường</li>
            </ul>
          </div>



      </div>
    </div>
  );
};

export default About;
