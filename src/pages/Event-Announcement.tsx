import type { JSX } from "react"
import GoogleCalendarEmbed from "../components/GoogleCalendarEmbedded";
import styles from "./Event-Announcement.module.css"

const EventAnnouncement = (): JSX.Element => {
    return (
        <div>
            <h1 className={styles.eventHeader}>Events Calendar</h1>
            <GoogleCalendarEmbed />
        </div>
    )
}

export default EventAnnouncement;