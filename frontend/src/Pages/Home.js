import React from 'react';
import Footer from '../Basic/Footer';
import Navbar from '../Basic/Navbar';
import About from '../Home/About';
import Jumbo from '../Home/Jumbo';
import LoginButton from '../Home/LoginButton';


const Home=()=>{
    return(
<div>
   <Navbar/>
   <Jumbo/> 
   <About/>
   <LoginButton/>
   <Footer/>

</div>
    )
}

export default Home;
