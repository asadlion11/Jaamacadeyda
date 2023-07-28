import Modal from 'react-modal';
import style from './vote.module.scss'
import { AiOutlinePlus, AiOutlineMinus,AiFillCloseCircle } from "react-icons/ai";
import { handleModal } from '../../feutures/modal/modalSlice';
import { useSelector,useDispatch } from 'react-redux';
import { addVoteToUniversity, decreaseVote, increaseVote,resetState } from '../../feutures/universities/universitiesSlice';
import { Toaster, toast } from 'react-hot-toast';
import {motion} from 'framer-motion'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const VoteModal = () => {
const {isOpen} = useSelector((store) => store.modal)
const {currentUniversity,voteCount} = useSelector((store) => store.university)
const dispatch = useDispatch()
function closeModal() {
  dispatch(handleModal())
}



if(!currentUniversity) return
const backgroundStyle = {
  width: "100%",
  height: "400px",
  background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('${currentUniversity.Logo}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderBottomRightRadius: '10px'
};
const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(addVoteToUniversity(currentUniversity.Id))
  dispatch(resetState())
  closeModal()
  toast.success('Your Vote Successfully!')
}
  return (
    <div>
        {/* <button onClick={() => dispatch(handleModal())}>Open Modal</button> */}
        <Modal
        animate = {{x:100, y:100}}
        transition = {{duration:2}}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={style.modal}
        overlayClassName={style.overlay}>
          <motion.div 
          animate = {{rotate:360}}
          transition={{duration:0.5}}
          className ={style.modal_container}>
            <div className={style.close}>
              <motion.div 
              whileHover = {{scale:2}}
              transition={{duration: 1}}
              className={style.closeIcon}>
              <AiFillCloseCircle onClick={closeModal}/>
              </motion.div>
            </div>
            <div className={style.university_info}>
              <div style={backgroundStyle}></div>
              <div className={style.bio}>
                  <div className={style.divider}>
                    <label htmlFor="">University Name: </label>
                    <span>{currentUniversity.Name}</span>
                  </div>
                  <div className={style.divider}>
                    <label htmlFor="">Date Established </label>
                    <span>{currentUniversity.Established}</span>
                  </div>
                  <div className={style.divider}>
                    <label htmlFor="">No. of Campuses </label>
                    <span>{currentUniversity.Campuses}</span>
                  </div>
                  <div className={style.divider}>
                    <label htmlFor="">No. of Faculties </label>
                    <span>{currentUniversity.Faculties}</span>
                  </div>
                  <div className={style.divider}>
                    <label htmlFor="">No. of Votes Have </label>
                    <span>{currentUniversity.Votes}</span>
                  </div>
              </div>
            </div>
            <div className={style.vote_container}>
            <form onSubmit={handleSubmit}>
              <div className={style.vote_count}>
                <span>Number of Votes</span>
                <div className={style.vote_controls}>
                  <button type='button'>
                      <AiOutlineMinus className={style.icon}
                      onClick={() => dispatch(decreaseVote())}/>
                  </button>
                  <span>{voteCount}</span>
                  <button type='button'>
                      <AiOutlinePlus className={style.icon}
                      onClick={() => dispatch(increaseVote())}/>
                  </button>
                </div>
              </div>
                  {/* <input type="number" placeholder='Votes you wants' className={style.form_control} style={{
                     marginLeft: '300px'
                  }}/> */}
                  <button type='submit' className={style.me}>Vote Now</button>
                  </form>
            </div>
          </motion.div>   
      </Modal>
    </div>
  )
}
export default VoteModal