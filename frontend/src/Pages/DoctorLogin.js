import React from 'react';
import Footer from '../Basic/Footer';
import Navbar from '../Basic/Navbar';
import LoginForm from '../Doctorlogin/LoginForm';


const DoctorLogin=()=>{

    return(
        <div >
            <Navbar/>
            <LoginForm/>
            <div style={{ position:"absolute", left: 0, bottom:"0", width: "100%"}}>
            <Footer />
            </div>
            
        </div>
    )

}

export default DoctorLogin