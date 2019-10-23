import React from "react";
import { BrowserRouter, Route, Switch, hashHistory } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { AllMeetups } from "./views/allmeetups.jsx";
import { eventDetail } from "./views/eventdetail.jsx";
import { meetupDetail } from "./views/meetupdetail.jsx";
import { Meetup } from "./views/meetup.jsx";
import { Event } from "./views/event.jsx";
import { About } from "./views/about.jsx";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100 layout-div">
				<BrowserRouter basename={basename} history={hashHistory}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} /> {/* list of all events */}
							<Route exact path="/meetups" component={AllMeetups} /> {/* list of all meetups */}
							<Route exact path="/about" component={About} />
							<Route path="/event/:eid" component={Event} /> {/* info of 1 event */}
							<Route path="/meetup/:mid" component={Meetup} /> {/* info of 1 meetup */}
							{/* <Route render={() => <h1>Not found! This is in Layout.js</h1>} /> */}
							<Route component={Home} />
							{/* <Route render={() => <h1>Not found! This is in Layout.js</h1>} /> */}
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
