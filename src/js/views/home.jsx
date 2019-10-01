import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row, Col } from "reactstrap";
import Moment from "react-moment";

export class Home extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="bg-dark pt-5 pb-5">
					<div className="text-center text-white">
						<h1>Fake Meetup.com</h1>
						<h3>A project by Rebecca Willett</h3>
					</div>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return store.events.map((event, index) => {
							const meetupObj = actions.getMeetupByID(event.meta_keys._meetup);

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
											<Moment format="MM/DD/YYYY" tag="h5">
												{event.meta_keys.day}
											</Moment>
											<br />
											<Moment format="LT" parse="HH:mm:ss" tag="h5">
												{event.meta_keys.time}
											</Moment>
											<p>{event.post_content}</p>
											{/*<Link to="#"> {meetupObj.post_title}</Link>*/}
										</CardText>
									</CardBody>
								</Card>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}
