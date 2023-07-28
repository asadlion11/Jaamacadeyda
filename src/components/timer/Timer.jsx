import Time from './Time';
import style from './timer.module.scss'
import Countdown from 'react-countdown'
const Timer = () => {
    // Random component
const Completion = () => <span>Voting Time Ended</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completion />;
  } else {
    // Render a countdown
    return(
        <Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
};

  return (
    <div className={style.countDown}>
        {/* They use milliseconds so pass your date as milliseconds and 
        you get the formula bellow:
        1000 millisecond * 60 seconds * 60 minutes * 24 = 1 day how many days you need */}
        <Countdown date={Date.now() + 2592000000} renderer={renderer}/>
    </div>
  )
}
export default Timer
