import React from "react";
import { Link } from "react-router-dom";
import redM from "../../img/redm.png";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand nav-title" href="/">
					Meetup [Clone]
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="nav-div collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link1" to="#">
								Start a new group <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item nav-link2">
							<p>|</p>
						</li>
						<li className="nav-item">
							<Link className="nav-link2" to="/meetups">
								See all meetups
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link2" to="/about">
								About
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
