import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Box from './components/Box/Box';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='my-5'>
        <div className='container'>
          <Banner />
          <Box />
          <Cards />



        </div>
      </div>
      {/* 
     
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
