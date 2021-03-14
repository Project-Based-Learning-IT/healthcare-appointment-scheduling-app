import React from 'react';
import Footer from '../Basic/Footer';
import Navbar from '../Basic/Navbar';
import LoginForm from '../Doctorlogin/LoginForm';


const DoctorLogin=()=>{

    return(
        <div >
            <div style={{height: "71vh"}}>
            <Navbar/>
            <LoginForm/>
            </div>
           
            <div style={{width: "100%"}}>
            <Footer />
            </div>
            
        </div>
    )

}

export default DoctorLogin