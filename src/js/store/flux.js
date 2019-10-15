const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			events: [],
			meetups: []
		},
		actions: {
			getMeetupByID: meetupID => {
				const store = getStore();
				const meetupArr = store.meetups.length > 0 && store.meetups.filter(meetup => meetup.ID == meetupID);
				console.log("This is meetupArr, the product of getMeetupByID function: " + meetupArr);
				// return meetupArr[0];
			},
			getMeetupEvents: meetupID => {
				const store = getStore();
				const meetupEvArr = store.events.filter(event => event.meta_keys._meetup === meetupID);
				return meetupEvArr;
			},
			getEvents: (eventIDfromURL, callback) => {
				const store = getStore();
				if (store.events.length > 0) {
					console.log("flux.js1 -- store.events[0].ID ", store.events[0].ID);
				}
				let filteredEvents = [];
				filteredEvents = store.events.filter(event => event.ID === eventIDfromURL);
				if (filteredEvents.length > 0) {
					console.log("flux.js2 -- filteredEvents ", filteredEvents);
					console.log("flux.js3 -- filteredEvents[0] ", filteredEvents[0]);
				}
				callback(filteredEvents[0]);
				// filteredEvents = store.events.filter(
				// 	event =>
				// 		console.log("event.ID, eventIDfromURL", event.ID, eventIDfromURL) || event.ID === eventIDfromURL
				// );
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
