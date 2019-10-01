import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button } from "reactstrap";
import Moment from "react-moment";

export class eventDetail extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<div>
					<h3>About this event</h3>
				</div>
				<Context.Consumer>
					{({ store }) => {
						return store.events.map((event, index) => {
							return (
								<Card
									className="text-center mb-5 mt-5 mx-auto"
									style={{ width: "40%", height: "auto" }}
									key={index}>
									<CardImg
										top
										src="https://images.pexels.com/photos/1020323/pexels-photo-1020323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940older.js/100px180"
									/>
									<CardBody>
										<CardHeader tag="h3">{event.post_title}</CardHeader>
										<CardText>
											<p>
												<br />
												<strong>Description:</strong>
												<br />
												{event.post_content}
												<br />
												<br />
												<strong>Date:</strong>
												<br />
												<Moment format="MM/DD/YYYY">{event.meta_keys.day}</Moment>
												<br />
												<br />
												<strong>Time:</strong>
												<br />
												<Moment format="LT" parse="HH:mm:ss">
													{event.meta_keys.time}
												</Moment>
												<br />
												<br />
												<strong>Meetup Group:</strong>
												<br />
												<Link to="#">Meetup name</Link>
											</p>
										</CardText>
									</CardBody>
								</Card>
							);
						});
					}}
				</Context.Consumer>
				<hr className="my-4" />
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}
