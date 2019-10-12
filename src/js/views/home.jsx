import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row, Col } from "reactstrap";
import Moment from "react-moment";
// import { peopleDancing } from "../../img/peopledancing.mp4";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="hero-container">
					<div className="img-container">
						<div className="home-hero-image">
							{/* <img
                                className="home-hero-image"
                                src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            /> */}
							{/*<source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" />*/}
							<div className="home-hero-text">
								<h2>Join a meetup. Find your people.</h2>
								<h4>Learn something new, share the things you love, or meet new local friends.</h4>
							</div>
						</div>
					</div>
				</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return store.events.map((event, index) => {
							// const meetupObj = [];
							// const origMeetupObj = actions.getMeetupByID(event.meta_keys._meetup);
							// const meetupObj = actions.getMeetupByID(event.meta_keys._meetup); // represents Meetup object with same meetup ID as event

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
											{event.post_content}

											{/* <Link to="#"> {this.meetupObj.post_title}</Link> */}
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
