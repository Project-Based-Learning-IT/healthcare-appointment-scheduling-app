import React, { useEffect, useState } from 'react';
import Navbar from '../Basic/Navbar';
import { Row, Input, Button } from 'reactstrap'
import { Link, useHistory, useParams } from 'react-router-dom';
import StarPicker from 'react-star-picker';
import Spinner from "react-bootstrap/Spinner";
import axios from 'axios';

const FeedbackDetails = () => {
	const { id } = useParams();
	const [feedback, setFeedback] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const history = useHistory();

	useEffect(async () => {
		setIsLoading(true);
		const { data } = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/doctors/appointment/${id}`
		);
		
		setFeedback(data?.feedback);

		setIsLoading(false);
	}, [])

	if (isLoading) {
		return (
			<div>
				<Navbar />
				<div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: '20px' }}>
					<Spinner animation="border" variant="danger" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</div>
			</div>
		)
	}

	return (<div>
		<Navbar />
		<div class="container mt-5 mb-5"
			style={{
				display: 'flex',
				flexFlow: 'column',
				padding: '20px',
				border: "15px solid #03203C ",
				height: "max-content",
				backgroundColor: "#35BDD0",
			}}
		>
			<Row style={{ justifyContent: 'center' }}>
				<StarPicker value={feedback?.stars} size={40}></StarPicker>
			</Row>
			<Row className="m-3">
				<Input
					readOnly='true'
					value={feedback?.title}
				/>
			</Row>
			<Row className="m-3">
				<Input
					type="textarea"
					maxLength="50px"
					style={{ height: "30vh" }}
					readOnly='true'
					value={feedback?.review}
				/>
			</Row>

			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					padding: '20px 0px'
				}}>
				<Link to="/doctor/payment-history">
					<Button color="danger">GO BACK</Button>
				</Link>
			</Row>
		</div>
	</div>)

}

export default FeedbackDetails;