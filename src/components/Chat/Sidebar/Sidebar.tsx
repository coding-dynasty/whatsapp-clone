import { useState } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import Header from './Header';
import Chat from './Chat';
import Search from './Search';
import './styles/sidebar.scss';

const Sidebar = () => {
  const [chats, setChats] = useState([]);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `chats/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setChats(Object.keys(snapshot.val()));
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className='Sidebar'>
      <Header />
      <Search />
      <div className='Sidebar__chats'>
        {chats.map((chat, index) => (
          <Chat
            title={chat}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
