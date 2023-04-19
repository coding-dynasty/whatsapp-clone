import Chat from './Chat';
import Header from './Header';
import Input from './Input';
import './styles/main.scss';

const Main = () => {
  return (
    <div className='Main'>
      <Header />
      <Chat />
      {/* Chat */}
      <Input />
    </div>
  );
};

export default Main;
