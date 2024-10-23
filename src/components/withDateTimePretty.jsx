/* eslint-disable react/prop-types */
import moment from 'moment/moment';

/**
 * HOC Компонент. Создается, как обертка компонента DateTime для представления даты в новом формате
 *
 * @param {string} props.date дата видео
 */
// eslint-disable-next-line react/display-name
const withDateTimePretty = (Component) => (props) => {
  const { date } = props;

  const changeDateFormat = (date) => {
    const dateDifference = moment().diff(moment(date));
    if (dateDifference < 60 * 60 * 1000) {
      return '12 минут назад';
    } else if (
      dateDifference >= 60 * 60 * 1000 &&
      dateDifference < 24 * 60 * 60 * 1000
    ) {
      return '5 часов назад';
    } else {
      return `${moment().diff(moment(date), 'days')} дней назад`
    }
  };

  return <Component date={changeDateFormat(date)} />;
};

export default withDateTimePretty;
