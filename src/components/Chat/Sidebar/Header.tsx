import { useState } from 'react';
import { Avatar } from '@mui/material';
import { ref, set } from 'firebase/database';
import { useAppSelector } from '../../../store/hooks';
import { selectUser } from '../../../store/userSlice';
import { database } from '../../../../firebase';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/scss/bootstrap.scss';
import './styles/header.scss';

const Header = () => {
  const [show, setShow] = useState(false);
  const [chat, setChat] = useState('');
  const user = useAppSelector(selectUser);

  const addChat = () => {
    set(ref(database, 'chats/' + chat), {
      username: user?.displayName,
      email: user?.email,
      uid: user?.uid,
      photoURL: user?.photoURL,
    })
      .then(() => {
        setChat('');
        handleShow();
      })
      .catch((err) => console.log(err));
  };

  const handleShow = () => setShow(!show);

  return (
    <div className='Header'>
      <IconButton>
        <Avatar src={user?.photoURL} />
      </IconButton>
      <div>
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton onClick={handleShow}>
          <CommentIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <>
        <Modal
          show={show}
          onHide={handleShow}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type='text'
              placeholder='chat'
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={handleShow}
            >
              Close
            </Button>
            <Button
              variant='primary'
              onClick={addChat}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Header;
