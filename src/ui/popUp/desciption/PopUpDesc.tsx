import classes from './popUPDesc.module.css';
const Desc = () => {
  const phases = [
    {
      title: 'Phase 1',
      id: 211,
      desc: [
        'First you need to calculate the basic metabolism:',
        'For men: 9.99*(weight in kg) + 6.25*(height in cm) - 4.92*(age in years) + 5.',
        'For women: 9.99*(weight in kg) + 6.25*(height in cm) - 4.92*(age in years) - 161.',
      ],
    },
    {
      title: 'Phase 2',
      id: 212,
      desc: [
        'We calculate the norm based on activity.',
        'The activity coefficient varies from 1.2 (sedentary lifestyle, practically no physical activity) to 1.9 (Very hard physical labor / 2 intensive workouts per day).',
      ],
    },
  ];
  return (
    <div className={classes.phases}>
      {phases.map((el) => (
        <div className={classes.phaseWrapper} key={el.id}>
          <div className={classes.item}>{el.title}</div>
          {el.desc.map((item) => (
            <div
              className={classes.descItem}
              key={Math.round(Math.random() * 100)}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Desc;
