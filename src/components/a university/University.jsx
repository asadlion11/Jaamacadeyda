import style from './university.module.scss';
import { MdHowToVote } from "react-icons/md";
import { handleModal } from '../../feutures/modal/modalSlice';
import { setCurrentUniversity } from '../../feutures/universities/universitiesSlice';
import { useDispatch } from 'react-redux';
import {motion} from 'framer-motion'
const University = ({university}) => {
    const backgroundStyle = {
		width: "500px",
		// height: "500px",
		background: `linear-gradient(#0000,#000),url(${university.Logo})`,
		backgroundSize: "cover",
		backgroundRepeat:'no-repeat'
	};
  const dispatch = useDispatch()
  const voteNow = () => {
    dispatch(setCurrentUniversity(university))
    dispatch(handleModal())
  }
  return (
    <motion.div
    animate = {{rotate:[0,90,-90,0]}}
    transition={{repeat: Infinity, duration:10}} 
    className={style.university}
    onClick={voteNow}
    style ={backgroundStyle}>
        <div className={style.info}>
            <span className={style.name}>{university.Name}</span>
            <span className={style.vote_count}>Total Votes : {university.Votes}</span>
        </div>

        {/* <motion.div className={style.vote} 
          whileHover={{scale: 2}}
          transition={{duration:1}}
        >
            <MdHowToVote className={style.vote_icon} 
            onClick={voteNow}/>
        </motion.div> */}
    </motion.div>
  )
}
export default University