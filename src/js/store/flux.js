const getState = ({ getStore, setStore }) => {
	return {
		store: {
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

			// getEvents works by receiving the eventID as the first param,
			// filtering all events to find the one with that ID,
			// and returning a new array with the first object in that array.

			getEvents: (eventIDfromURL, callback) => {
				const store = getStore();
				if (store.events.length > 0) {
					console.log("flux.js1 -- store.events[0].ID ", store.events[0].ID); // logs correctly
				}
				let filteredEvents = [];
				filteredEvents = store.events.filter(event => event.ID === eventIDfromURL);
				if (filteredEvents.length > 0) {
					console.log("flux.js2 -- filteredEvents ", filteredEvents); // logs correctly
					console.log("flux.js3 -- filteredEvents[0] ", filteredEvents[0]); // logs correctly
				}
				console.log(filteredEvents);
				callback(filteredEvents[0]); // it then passes this object back into the callback function in event.jsx, line 17.
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
