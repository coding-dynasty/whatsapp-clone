import { Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import './styles/header.scss';
import { useAppSelector } from '../../../store/hooks';
import { selectUser } from '../../../store/userSlice';

const Header = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className='Header'>
      <IconButton>
        <Avatar src={user?.photoURL} />
      </IconButton>
      <div>
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
