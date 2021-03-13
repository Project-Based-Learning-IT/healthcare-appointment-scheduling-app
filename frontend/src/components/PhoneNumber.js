import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Col, Container, FormGroup, Input, Label, Button } from 'reactstrap';
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
            <Container>
                <FormGroup row>
                    <Label for='number' sm={3}>Phone/Mobile Number</Label>
                    <Col sm={9}>
                        <Input
                            type='text'
                            name='phone'
                            id='phone'
                            placeholder='provide your phone/mobile number'
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </Col>
                    <Button block color='primary' onClick={updatePhoneNumber}>Add Phone Number</Button>
                </FormGroup>
            </Container>
        </div>
    )
}

export default PhoneNumber;