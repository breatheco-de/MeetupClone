import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button, Row, Col, Media } from "reactstrap";
import Moment from "react-moment";

export class Meetup extends React.Component {
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
		return randomCity;
	};

	randomPerson = () => {
		var nameArray = [
			"Katherine Fowler",
			"Betty Bowman",
			"Elizabeth Wilson",
			"Gloria Reid",
			"Susan Fernandez",
			"Andrea Nelson",
			"Nancy Morris",
			"Jean Oliver"
		];
		var randomName = nameArray[Math.floor(Math.random() * nameArray.length)];
		return randomName;
	};

	render() {
		return (
			<div className="top-meetup-div">
				<Context.Consumer>
					{({ store, actions }) => {
						let midNumber = this.props.match.params.mid;
						midNumber = parseInt(midNumber.replace(/[^a-zA-Z0-9]/g, ""));
						let meetObj = "";
						actions.getMeetupByID(midNumber, function(mobj) {
							meetObj = mobj;
							console.log("meetup.jsx -- meetObj from callback ", meetObj);
						});
						return (
							<div className="2nd-return-div">
								<div className="row meetup-row1">
									<div className="col-sm-7 ">
										<div className="meetup-img-container">
											<img
												className="meetup-img img-fluid"
												src={this.randomPic()}
												alt="Card image cap"
											/>
										</div>
									</div>
									<div className="col-sm-5 ">
										<div className="row meetup-detail-row">
											<div className="col-12">
												<h2>{meetObj && meetObj.post_title}</h2>
											</div>
										</div>
										<div className="row meetup-detail-row attending">
											<div className="col-sm-1 ">
												<p className="attending inline-block">
													<i className="fas fa-map-marker-alt" />
												</p>
											</div>
											<div className="col-sm-11 ">
												<p className="inline-block">{this.randomPlace()}</p>
											</div>
										</div>
										<div className="row meetup-detail-row attending">
											<div className="col-sm-1 ">
												<p className="attending inline-block">
													<i className="fas fa-user-friends" />
												</p>
											</div>
											<div className="col-sm-11 ">
												<p className="inline-block">
													{Math.floor(Math.random() * 100 + 1)} members
												</p>
											</div>
										</div>
										<div className="row meetup-detail-row attending">
											<div className="col-sm-1 ">
												<p className="attending inline-block">
													<i className="fas fa-user" />
												</p>
											</div>
											<div className="col-sm-11 ">
												<p className="inline-block">
													Organized by <strong>{this.randomPerson()}</strong>
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="row meetup-row2">
									<div className="col-sm-7 ">
										<h4 className="meetup-desc-title">What we&apos;re about</h4>
										{/* <p>{obj && obj.post_content}</p> */}
										<p>{meetObj && meetObj.post_content}</p>
									</div>
									<div className="col-sm-5 " />
								</div>
								<div className="row meetup-row3">
									<h4 className="meetup-upcoming-title">Upcoming events</h4>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<div className="meetup-bottom-section">
					<Context.Consumer>
						{({ store, actions }) => {
							let midNumber = this.props.match.params.mid;
							midNumber = parseInt(midNumber.replace(/[^a-zA-Z0-9]/g, ""));
							let eventObj = "";
							actions.getMeetupEvents(midNumber, function(eobj) {
								eventObj = eobj;
								console.log("meetup.jsx -- eventObj from callback ", eventObj);
							});
							return store.events.map((event, index) => {
								let eidLink = "/event/:" + event.ID;
								return (
									<div className="row meetup-event-row" key={index}>
										<div className="col-sm-7 meetup-card-column">
											<div className="card d-flex event-card">
												<img
													className="card-img-top"
													src={this.randomPic()}
													alt="Card image cap"
												/>
												<div className="card-body">
													<span className="date-time">
														<Moment format="MMM DD, ">{event.meta_keys.day}</Moment>
														<Moment format="LT" parse="HH:mm:ss">
															{event.meta_keys.time}
														</Moment>
													</span>
													<h5 className="card-title">{event.post_title}</h5>
													{/* <p>Meetup Group</p> */}
													<p className="attending">
														<i className="fas fa-map-marker-alt" /> {this.randomPlace()}
													</p>
													<p className="attending">
														<i className="fas fa-user-friends" />{" "}
														{Math.floor(Math.random() * 100 + 1)} attending
													</p>
													<Link to={eidLink} className="btn stretched-link hidden-btn" />
												</div>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

Meetup.propTypes = {
	match: PropTypes.object
};
