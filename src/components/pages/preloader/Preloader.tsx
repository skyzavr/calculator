import classes from './preloader.module.css';
const Preloader = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.loader}>
        <svg viewBox="0 0 80 80"></svg>
      </div>
      <p>Loading..</p>
    </section>
  );
};
export default Preloader;
