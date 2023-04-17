import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './styles/header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <IconButton>
        <Avatar src='http://unsplash.it/400/400' />
      </IconButton>
      <div className='Chat__info'>
        <h1>Ali Eljerrari</h1>
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
