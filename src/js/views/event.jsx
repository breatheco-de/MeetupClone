import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button } from "reactstrap";
import Moment from "react-moment";

export class Event extends React.Component {
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

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						let eidNumber = this.props.match.params.eid;
						eidNumber = parseInt(eidNumber.replace(/[^a-zA-Z0-9]/g, ""));
						let obj = "";
						let meetObj = "";
						let midLink = "";
						actions.get1Event(eidNumber, function(eobj) {
							obj = eobj;
							console.log("obj from callback", obj);
							if (obj && obj.meta_keys._group) {
								let eventMeetupID = parseInt(obj && obj.meta_keys._group);
								console.log("eventMeetupID ", eventMeetupID); // LOGS CORRECTLY
								actions.getMeetupByID(eventMeetupID, function(mobj) {
									meetObj = mobj;
									console.log("meetObj ", meetObj); // LOGS CORRECTLY
									console.log("1meetObj && meetObj.post_title ", meetObj && meetObj.post_title); // LOGS CORRECTLY
									console.log("2meetObj && meetObj.ID ", meetObj && meetObj.ID);
									midLink = "/meetup/:" + meetObj.ID;
									return meetObj;
								});
								console.log("3meetObj && meetObj.post_title ", meetObj && meetObj.post_title); // LOGS CORRECTLY
								console.log("4meetObj && meetObj.ID ", meetObj && meetObj.ID);
								// midLink = "/meetup/:" + meetObj.ID;
								console.log("midLink ", midLink);
							}
						});
						return (
							<div className="top-div">
								<div className="row event-row1">
									<div className="col-sm-7 ">
										<div className="row">
											<div className="col-sm-2 calendar-icon-column">
												<i className="far fa-calendar-alt event-calendar-icon" />
											</div>
											<div className="col-sm-10 event-title-column">
												<p className="attending">
													<Moment format="MMMM DD, YYYY">{obj && obj.meta_keys.day}</Moment>
												</p>
												<h2>{obj && obj.post_title}</h2>
												<p>
													Hosted by <Link to={midLink}>{meetObj && meetObj.post_title}</Link>
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-5 ">
										<div className="row">
											<div className="col-sm-1 ">
												<p className="attending">
													<i className="fas fa-user-friends" />
												</p>
											</div>
											<div className="col-sm-11 ">
												<p>{Math.floor(Math.random() * 100 + 1)} attending</p>
											</div>
										</div>
										<h4>Are you going?</h4>
										<div className="btn rsvp-btn">
											{" "}
											{/* onClick={changeButtonClass()}  */}
											<i className="fas fa-check" />
										</div>
										<div className="btn rsvp-btn">
											<strong>X</strong>
										</div>
									</div>
								</div>
								<div className="row event-row2">
									<div className="col-sm-7 ">
										<div className="event-img-container">
											<img
												className="event-img img-fluid"
												src={this.randomPic()}
												alt="Card image cap"
											/>
										</div>
									</div>
									<div className="col-sm-5 ">
										<div className="row event-details-row">
											{" "}
											{/* date */}
											<div className="col-sm-1 ">
												{" "}
												{/* date icon */}
												<p className="attending">
													<i className="far fa-clock" />
												</p>
											</div>
											<div className="col-sm-11 ">
												{" "}
												{/* date text */}
												<p>
													<Moment format="MMMM DD, YYYY">{obj && obj.meta_keys.day}</Moment>
													<br />
													<Moment format="LT" parse="HH:mm:ss">
														{obj && obj.meta_keys.time}
													</Moment>
												</p>
											</div>
										</div>
										<div className="row event-details-row">
											{" "}
											{/* price */}
											<div className="col-sm-1 ">
												{" "}
												{/* price icon */}
												<p className="attending">
													<i className="fas fa-ticket-alt" />
												</p>
											</div>
											<div className="col-sm-11 ">
												{" "}
												{/* price text */}
												<strong>Price: </strong>
												Free
											</div>
										</div>
										<div className="row event-details-row">
											{" "}
											{/* location */}
											<div className="col-sm-1 ">
												{" "}
												{/* location icon */}
												<p className="attending">
													<i className="fas fa-map-marker-alt" />
												</p>
											</div>
											<div className="col-sm-11 ">
												{" "}
												{/* location text */}
												{this.randomPlace()}
											</div>
										</div>
									</div>
								</div>
								<div className="row event-row3">
									<div className="col-sm-7 ">
										<h4>Details</h4>
										<p>{obj && obj.post_content}</p>
									</div>
									<div className="col-sm-5 " />
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Event.propTypes = {
	match: PropTypes.object
};

// <div className="container-fluid">
// <row>
// 	<div className="bg-dark text-white p-5 m-3 col">
// 		<h1>{eventObj.post_title}</h1>
// 		<h4>Miami, FL</h4>
// 		<p>{eventObj.post_content}</p>
// 	</div>
// </row>
// 	</div>

{
	/* <div>
	<p>asdf {obj && obj.ID}</p>
</div> */
}
