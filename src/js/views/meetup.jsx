import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row, Col, Media } from "reactstrap";
import Moment from "react-moment";

export class Meetup extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store, actions }) => {
						/* first function starts here */
						if (store.meetups.length > 0) {
							let meetupObj = actions.getMeetupByID(this.props.match.params.mid);
							return (
								<div className="container-fluid">
									<row>
										<div className="bg-dark text-white p-5 m-3 col">
											<h1>{meetupObj.post_title}</h1>
											<h4>Miami, FL</h4>
											<p>{meetupObj.post_content}</p>
										</div>
									</row>
								</div>
							);
						}
					}}
				</Context.Consumer>
				<Context.Consumer>
					{({ store, actions }) => {
						/* second function starts here */
						let meetupEventsArr = actions.getMeetupEvents(this.props.match.params.mid);
						return meetupEventsArr.map((event, index) => {
							return (
								<div key={index}>
									<Card
										className="text-center mb-5 mt-5 mx-auto"
										style={{ width: "40%", height: "auto" }}>
										<CardBody>
											<CardHeader tag="h3">{event.post_title}</CardHeader>
											<CardText>
												<Moment format="MM/DD/YYYY" tag="h5">
													{event.meta_keys.day}
												</Moment>
												<br />
												<Moment format="LT" parse="HH:mm:ss">
													{event.meta_keys.time}
												</Moment>
												<p>{event.post_content}</p>
											</CardText>
										</CardBody>
									</Card>
								</div>
							);
						});
					}}
				</Context.Consumer>
				<div>
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		);
	}
}

Meetup.propTypes = {
	match: PropTypes.object
};
