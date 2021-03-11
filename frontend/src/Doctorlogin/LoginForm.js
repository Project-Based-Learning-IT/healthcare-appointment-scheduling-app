import React from 'react';
import { Link } from "react-router-dom";
import {Container,Row,Col,Card,Form, CardHeader, CardBody,FormGroup, CardFooter,Button,Label,Input} from 'reactstrap'
const LoginForm=()=>{
    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5 '>
					<Card>
						<Form>
							<CardHeader className=''>SignIn here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value=""
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value=""
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);

}

export default LoginForm;