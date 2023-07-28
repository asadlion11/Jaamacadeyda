import { Link } from 'react-router-dom'
import style from './home.module.scss'
import {motion} from 'framer-motion'
const Home = () => {
  return (
   <header className={style.header} >
      <motion.div 
      animate = {{y:30}}
      transition={{type:'spring', bounce:100}}
      className={style.logo}>
        <Link className={style.logo} to='/'>Jaamacadeyda</Link> 
      </motion.div>
   </header>

  )
}
export default Home