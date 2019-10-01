import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row, Col } from "reactstrap";
import Moment from "react-moment";

export class AllMeetups extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="bg-dark pt-5 pb-5">
					<row className="text-center text-white">
						<h1>Fake Meetup.com</h1>
						<h3>A project by Rebecca Willett</h3>
					</row>
				</div>
				<row className="p-5">
					<h5>Here&apos;s a list of all the Meetups!</h5>
				</row>
				<Context.Consumer>
					{({ store }) => {
						return store.meetups.map((meetup, index) => {
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
										<CardHeader tag="h3">{meetup.post_title}</CardHeader>
										<CardText>
											<p>
												<br />
												<strong>Description:</strong>
												<br />
												{meetup.post_content}
												<br />
												<br />
												<Link to="/meetup/:mid">See more about this meetup</Link>
											</p>
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
