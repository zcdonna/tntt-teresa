import type { JSX } from "react";
import styles from "./Home.module.css"

const Home = (): JSX.Element => {
    return (
        <>
        <div className = {styles.infoAndPictureContainer}>
            <div>
                <h1>Schedule</h1>
                <p>Holy Mass Time: Sunday @ 2:00 PM (Vietnamese)</p>
                <p>Activities: Sunday @ 12:00 PM - 1:45 PM (as scheduled on our academic calendar)</p>
            </div>
            <div>
                <h1>Photo Gallery Placeholder</h1>
                <p>Photo 1</p>
                <p>Photo 2</p>
                <p>Photo 3</p>
            </div>
        </div>
        </>
    )
}

export default Home;