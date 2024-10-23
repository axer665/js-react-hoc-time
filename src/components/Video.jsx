/* eslint-disable react/prop-types */
import DateTime from "./DateTime";
import withDateTimePretty from "./withDateTimePretty";

const DateTimePretty = withDateTimePretty(DateTime);

/**
 * Вывод блока отдельного видео. Родитель - VideoList. Дочка - DateTimePretty (DateTime обернутый в HOC withDateTimePretty)
 *
 * @param {string} props.url адрес видео
 * @param {string} props.date дата видео
 */
const Video = (props) => {
  const { url, date } = props
  return (
    <div className="video">
      <iframe
        src={url}
        title={url}
        allow="autoplay; encrypted-media"
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};

export default Video;
