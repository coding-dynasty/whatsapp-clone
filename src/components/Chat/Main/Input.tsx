import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import './styles/input.scss';
import { useState } from 'react';
import { IconButton } from '@mui/material';

const Input = () => {
  const [message, setMessage] = useState('');

  return (
    <div className='Input'>
      <div className='Input__Icons'>
        <IconButton>
          <EmojiEmotionsIcon fontSize='large' />
        </IconButton>
        <IconButton>
          <AttachFileIcon fontSize='large' />
        </IconButton>
      </div>
      <form className='Input__container'>
        <input
          type='text'
          value={message}
          placeholder='Type a message'
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <IconButton>
        <MicIcon fontSize='large' />
      </IconButton>
    </div>
  );
};
export default Input;
