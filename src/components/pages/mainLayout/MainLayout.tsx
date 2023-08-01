import classes from './mainLayout.module.css';
import { FC } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Form from '@pages/form/Form';
import StepResult from '@pages/form/formPages/StepResult/FormResult';
const MainLayout: FC = () => {
  return (
    <section className={classes.wrapper}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/formResult" element={<StepResult />} />
        </Routes>
      </Router>
    </section>
  );
};
export default MainLayout;
