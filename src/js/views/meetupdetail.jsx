// // import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
// import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row } from "reactstrap";
// import Moment from "react-moment";

// export class meetupDetail extends React.Component {
// 	render() {
// 		return (
// 			<div className="jumbotron">
// 				<Row>
// 					<h4>Here&apos;s a list of all the Meetups!</h4>
// 				</Row>
// 				<Context.Consumer>
// 					{({ store }) => {
// 						return store.meetups.map((meetup, index) => {
// 							return (
// 								<Card
// 									className="text-center mb-5 mt-5 mx-auto"
// 									style={{ width: "40%", height: "auto" }}
// 									key={index}>
// 									<CardImg
// 										variant="top"
// 										src="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
// 									/>
// 									<CardBody>
// 										<CardHeader as="h3">{meetup.post_title}</CardHeader>
// 										<CardText>
// 											<p>
// 												<br />
// 												<strong>Description:</strong>
// 												<br />
// 												{meetup.post_content}
// 											</p>
// 										</CardText>
// 									</CardBody>
// 								</Card>
// 							);
// 						});
// 					}}
// 				</Context.Consumer>

// 				<hr className="my-4" />

// 				<Link to="/">
// 					<span className="btn btn-primary btn-lg" href="#" role="button">
// 						Back home
// 					</span>
// 				</Link>
// 			</div>
// 		);
// 	}
// }
