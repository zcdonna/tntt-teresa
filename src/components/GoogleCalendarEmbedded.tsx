import styles from "./GoogleCalendarEmbedded.module.css";

const GoogleCalendarEmbed = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.calendar}
        src="https://calendar.google.com/calendar/embed?src=dchow%40indeed.com&ctz=America%2FNew_York"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
      <section className={styles.announcements}>
        <h2>Announcements</h2>
        <h5>Click on the event to download the PDF.</h5>
        <p><strong>Aug 15:</strong> Youth Group Picnic</p>
        <p><strong>Aug 22:</strong> Volunteer Meeting</p>
        <p><strong>Sep 5:</strong> Community Service Day</p>
      </section>
    </div>
  );
};

export default GoogleCalendarEmbed;
