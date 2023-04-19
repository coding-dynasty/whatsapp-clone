import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { userAdd } from '../../store/userSlice';
import { useAppDispatch } from '../../store/hooks';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL, uid } = result.user;
        dispatch(userAdd({ displayName, email, photoURL, uid }));
        navigate('/chat');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Please log in to start chatting!</h1>
      <div onClick={handleSignIn}>
        <img
          src='https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951'
          alt=''
          width={100}
        />
        <p>Sign in with Google</p>
      </div>
    </div>
  );
};
export default Login;
