import Video from './Video';
import { nanoid } from 'nanoid';

/**
 * Вывод блока отображения списка элементов видео. Родитель - App. Дочка - Video
 *
 * @param {object} props.list список объектов с данными видео файлов
 */
const VideoList = (props) => {
  const { list } = props;

  return list.map((item) => (
    <Video key={nanoid()} url={item.url} date={item.date} />
  ));
};

export default VideoList;
