import { Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import './styles/chat.scss';
import { useAppSelector } from '../../../store/hooks';
import { selectUser } from '../../../store/userSlice';

const Chat = (props) => {
  const elapsedTime = moment().startOf('hour').fromNow();
  const user = useAppSelector(selectUser);

  return (
    <div className='Chat'>
      <Avatar src={user?.photoURL} />
      <div className='Chat__info'>
        <h1>{props.title}</h1>
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
