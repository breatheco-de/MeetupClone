import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row, Col } from "reactstrap";
import Moment from "react-moment";
import rebeccaHeadshot from "../../img/rebeccaheadshot.jpg";

export class About extends React.Component {
	render() {
		return (
			<div className="top-div">
				<div className="hero-container">
					<div className="img-container">
						<div className="about-hero-image">
							<div className="hero-text">
								<h2>A simple clone of Meetup.com. Just because.</h2>
								{/* <h4>Learn something new, share the things you love, or meet new local friends.</h4> */}
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid about-container" id="about">
					<div className="row about-row-1">
						<div className="col-md-4 d-flex">
							<img className="img-fluid rounded-circle rebeccaheadshot" src={rebeccaHeadshot} />
						</div>
						<div className="col-md-8 about-text right-column">
							<div className="row about-text1">
								<h2>About This Project</h2>
							</div>
							<div className="row about-text2">
								<p>
									This project attempts to make a simple recreation of{" "}
									<a href="https://www.meetup.com/">Meetup.com</a>. It fetches a prewritten list of
									meetup groups and events from an API shared by the kind folks over at{" "}
									<a href="https://www.4geeksacademy.co/">4Geeks Academy</a>. You can browse{" "}
									<Link to="/">all events</Link>, <Link to="/meetups">all meetup groups</Link>, or
									individual events or groups.
									<br />
									<br />I built it in <strong>React</strong>, using <strong>React Router</strong> and{" "}
									<strong>Context Consumer</strong>, as well as <strong>HTML</strong>,{" "}
									<strong>CSS</strong>, <strong>Bootstrap</strong>, and <strong>Javascript</strong>.
									<br />
									<br />
									Want to learn more about me? Head on over to my portfolio at{" "}
									<a href="https://rebwill.github.io/">rebwill.github.io</a>. Or...let&apos;s go to a{" "}
									<a href="https://www.meetup.com/members/9709458/">Meetup together</a>?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
