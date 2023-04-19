import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './styles/header.scss';
import { useAppSelector } from '../../../store/hooks';
import { selectUser } from '../../../store/userSlice';

const Header = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className='Header'>
      <IconButton>
        <Avatar src={user.photoURL} />
      </IconButton>
      <div className='Chat__info'>
        <h1>{user.displayName}</h1>
        <p>last seen today at 19:50</p>
      </div>
      <div className='Chat__details'>
        <IconButton>
          <SearchIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <MoreVertIcon fontSize='large' />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
