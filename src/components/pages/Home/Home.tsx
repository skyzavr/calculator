import classes from './home.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '@/ui/button/Button';
import Brocollini from './Brocollini/Brocollini';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <Brocollini />
      <Button type="filled" onClickHandler={() => navigate('/form')}>
        Start
      </Button>
    </div>
  );
};
export default Home;
