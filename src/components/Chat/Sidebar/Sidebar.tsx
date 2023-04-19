import Header from './Header';
import Chat from './Chat';
import Search from './Search';
import './styles/sidebar.scss';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <Header />
      <Search />
      <div className='Sidebar__chats'>
        <Chat />
      </div>
    </div>
  );
};
export default Sidebar;
