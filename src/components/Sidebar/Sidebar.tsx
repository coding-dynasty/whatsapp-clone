import Header from '../Header/Header';
import Search from './Search';
import './styles/sidebar.scss';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <Header />
      <Search />
    </div>
  );
};
export default Sidebar;
