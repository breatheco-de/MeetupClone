import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row, Col } from "reactstrap";
import Moment from "react-moment";

export class AllMeetups extends React.Component {
	constructor(props) {
		super(props);
	}

	randomPic = () => {
		var photoArray = [
			"https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1206059/pexels-photo-1206059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1231230/pexels-photo-1231230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1543895/pexels-photo-1543895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/374845/pexels-photo-374845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1311518/pexels-photo-1311518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1963622/pexels-photo-1963622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/53958/team-motivation-teamwork-together-53958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1732280/pexels-photo-1732280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1615810/pexels-photo-1615810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.pexels.com/photos/1139489/pexels-photo-1139489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
			"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1504022462188-88f023db97bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1470754260170-299cad39501f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1458891216473-4f26bb4eb40e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1520127877998-122c33e8eb38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
			"https://images.unsplash.com/photo-1427384906349-30452365b5e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
			"https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
			"https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1058&q=80"
		];
		var randomPhoto = photoArray[Math.floor(Math.random() * photoArray.length)];
		console.log(randomPhoto);
		return randomPhoto;
	};

	randomPlace = () => {
		var placeArray = [
			"Miami, FL",
			"Fort Lauderdale, FL",
			"Aventura, FL",
			"Hialeah, FL",
			"West Palm Beach, FL",
			"Boca Raton, FL",
			"Coconut Grove, FL",
			"Kendall, FL"
		];
		var randomCity = placeArray[Math.floor(Math.random() * placeArray.length)];
		console.log(randomCity);
		return randomCity;
	};

	render() {
		return (
			<div className="top-div">
				<div className="hero-container">
					<div className="img-container">
						<div className="meetups-hero-image">
							<div className="meetups-hero-text">
								<h2>Explore all meetups</h2>
								<h4>Your new friends, new skills, and new experiences await.</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="row title-row">
					<div className="col-sm-12 ">
						<h5 className="event-section-title">Meetups near you</h5>
						<h6 className="event-section-text">Check out what meetup groups exist in your area.</h6>
					</div>
				</div>
				<div className="row card-row">
					<Context.Consumer>
						{({ store }) => {
							return store.groups.map((group, index) => {
								let midLink = "/meetup/:" + group.ID;
								return (
									<div className="col-sm-4 card-column" key={index}>
										<div className="card d-flex event-card">
											<img className="card-img-top" src={this.randomPic()} alt="Card image cap" />
											<div className="card-body">
												<h5 className="card-title">{group.post_title}</h5>
												<p className="attending">
													<i className="fas fa-map-marker-alt" /> {this.randomPlace()}
												</p>
												<p>{group.post_content}</p>
												<p className="attending">
													<i className="fas fa-user-friends" />{" "}
													{Math.floor(Math.random() * 100 + 1)} members
												</p>
												<Link to={midLink} className="btn stretched-link hidden-btn" />

												{/* <a href="#" className="btn btn-primary">
													Go somewhere
												</a> */}
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
				<div className="white-space-row" />
			</div>
		);
	}
}

{
	/* <Card
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
</Card> */
}
