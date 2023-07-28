import React from 'react'
import style from './timer.module.scss'
import {motion} from 'framer-motion'
const Time = ({days, hours, minutes, seconds}) => {
  return (
    <motion.div
    animate = {{y:30}}
    transition = {{type:'spring', bounce:100}}
    className={style.timer}
    >
        <h1>VOTING ENDS IN</h1>
        <div className={style.time}>
            <div className={style.digit_text}>
                <span className={style.digit}>{days}:</span>
                <span className={style.text}>Days</span>
            </div>
            <div className={style.digit_text}>
                <span className={style.digit}>{hours}:</span>
                <span className={style.text}>Hours</span>
            </div>
            <div className={style.digit_text}>
                <span className={style.digit}>{minutes}:</span>
                <span className={style.text}>Minutes</span>
            </div>
            <div className={style.digit_text}>
                <span className={style.digit}>{seconds}</span>
                <span className={style.text}>Seconds</span>
            </div>
        </div>
    </motion.div>
  )
}

export default Time