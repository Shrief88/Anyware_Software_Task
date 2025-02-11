import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Welcome to Anyware Software</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Home;