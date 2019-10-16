import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, CardImg, CardBody, CardHeader, CardText, Button } from "reactstrap";
import Moment from "react-moment";

export class Event extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store, actions }) => {
						let eidNumber = this.props.match.params.eid;
						eidNumber = parseInt(eidNumber.replace(/[^a-zA-Z0-9]/g, ""));
						let obj = "something";
						actions.getEvents(eidNumber, function(eobj) {
							obj = eobj;
							console.log("obj from callback", obj);
							// if (obj.length > 0) {
							return (
								<div>
									<p>return inside context consumer </p>
								</div>
							);
							// }
						});
					}}
				</Context.Consumer>
				<p>return outside context consumer</p>
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
