import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Navber from './Components/Navber/Navber'

function App() {

  return (
   <div className='max-w-[1440px] mx-auto'>
      <Header />
      <Navber />
      <Banner/>
   </div>
  )
}

export default App
