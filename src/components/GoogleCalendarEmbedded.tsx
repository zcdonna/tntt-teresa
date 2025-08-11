const GoogleCalendarEmbed = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=dchow%40indeed.com&ctz=America%2FNew_York"
      style={{ border: 0 }}
      width="800"
      height="600"
      frameBorder="0"   // camelCase here
      scrolling="no"
      title="Google Calendar"
    ></iframe>
  );
};

export default GoogleCalendarEmbed;
