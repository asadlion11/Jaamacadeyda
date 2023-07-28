import style from './universities.module.scss'
import University from '../a university/University'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
const Universities = () => {
    const {universities} = useSelector((store) => store.university)
  return (
    <div 
    className={style.universities_container}>
        <div className={style.universities_header}>
            <span>Jaamacadeyda</span>
           <p>
                Jaamacadeyda is a program that allow you to vote your University easily,
                please click the image to vote.
           </p>
        </div>
        <div
        className={style.universities}>
            {
                universities.map((university) => (
                    <University university={university}  key ={university.Id}/>                
                ))
            }
        </div>
    </div>
  )
}
export default Universities