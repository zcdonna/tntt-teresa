import type { JSX } from "react"
import GoogleCalendarEmbed from "../components/GoogleCalendarEmbedded";

const EventAnnouncement = (): JSX.Element => {
    return (
        <div>
            <h1>Event & Announcement</h1>
            <GoogleCalendarEmbed />
        </div>
    )
}

export default EventAnnouncement;