import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Row,Col, Container, FormGroup, Input, Label, Button } from 'reactstrap';
import { AuthContext } from '../Auth/AuthContext';
import Navbar from '../Basic/Navbar';

function PhoneNumber() {
    const [number, setNumber] = useState();
    const { token, googleId } = useContext(AuthContext);
    const history = useHistory();

    async function updatePhoneNumber() {
        try {
            const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/patients/update-phone`,
                {
                    googleId: googleId,
                    phoneNumber: number
                }
            )
            // console.log(res);
            if (res.status === 200) {
                history.push('/patient')
            }
            else {
                console.log(res.message)
            }
        }
        catch(err){
            console.log(err);
        }
    }

    if (!token) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <div>
            <Navbar />
            <Container className="mt-5 p-5 bg-dark text-white w-50 center">
                <FormGroup >

                    <Row>
                        <Col >
                        <Label for='number' ><h5>Phone/Mobile Number</h5> </Label>  
                        </Col>
                        <Col  >
                        <Input 
                        
                            type='text'
                            name='phone'
                            id='phone'
                            placeholder='provide your phone/mobile number'
                            
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        </Col>
                        
                    </Row>
                    

                       
                

                    <Button  className="mt-4" block color='primary' onClick={updatePhoneNumber}>Add Phone Number</Button>
                </FormGroup>
            </Container>
        </div>
    )
}

export default PhoneNumber;