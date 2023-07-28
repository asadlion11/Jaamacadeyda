import { Route, Routes } from 'react-router';
import Universities from './components/all universities/Universities';
import Home from './components/home/Home';
import VoteModal from './components/modal/VoteModal';
import Timer from './components/timer/Timer';
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div className='app'>
      <Home />
      <Toaster
  position="top-center"
  reverseOrder={false}/>
      <Timer />
      <Universities />
      <VoteModal />
    </div>
  )
}
export default App

