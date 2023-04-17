import { Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import './styles/chat.scss';

const Chat = () => {
  const elapsedTime = moment().startOf('hour').fromNow();

  return (
    <div className='Chat'>
      <Avatar src='http://unsplash.it/400/400' />
      <div className='Chat__info'>
        <h1>Ali Eljerrari</h1>
        <p>this is my message...</p>
      </div>
      <div className='Chat__details'>
        <p>{elapsedTime}</p>
        <ExpandMoreIcon fontSize='large' />
      </div>
    </div>
  );
};
export default Chat;
