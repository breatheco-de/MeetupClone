const getState = ({ getStore, setStore }) => {
	return {
		store: {
			events: [],
			groups: []
		},

		actions: {
			/* getMeetupByID receives the meetupID (event.meta_keys._group), filters 
			all meetups to find the one with that ID, and returns a new array with 
			the first object in that array. */
			getMeetupByID: (meetupIDpassed, callback) => {
				const store = getStore();
				if (store.groups.length > 0) {
					console.log("DONE", store.groups[0].ID);
				}
				let filteredMeetups = [];
				filteredMeetups = store.groups.filter(meetup => meetup.ID === meetupIDpassed);
				if (filteredMeetups.length > 0) {
					console.log("DONE", filteredMeetups);
					console.log("DONE", filteredMeetups[0]);
				}
				console.log("getMeetupbyID - filteredMeetups ", filteredMeetups);
				callback(filteredMeetups[0]);
			},

			/* getMeetupEvents receives the meetupID, filters all events for the event.meta_keys._group
			that match it, and returns an array of matching event objects.  */
			getMeetupEvents: meetupID => {
				const store = getStore();
				if (store.events.length > 0) {
					console.log(store.events[0].ID);
				}
				let filteredEvents = [];
				filteredEvents = store.events.filter(event => event.meta_keys._group === meetupID);
				console.log("getMeetupEvents - filteredEvents: ", filteredEvents);
				return filteredEvents;
			},

			// getEvents works by receiving the eventID as the first param,
			// filtering all events to find the one with that ID,
			// and returning a new array with the first object in that array.
			get1Event: (eventIDfromURL, callback) => {
				const store = getStore();
				if (store.events.length > 0) {
					console.log("get1Event-1 store.events[0].ID ", store.events[0].ID); //
				}
				let filteredEvents = [];
				filteredEvents = store.events.filter(event => event.ID === eventIDfromURL);
				if (filteredEvents.length > 0) {
					console.log("get1Event-2 filteredEvents", filteredEvents); //
				}
				console.log("get1Event-3 filteredEvents[0]", filteredEvents[0]);
				callback(filteredEvents[0]);
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

// getMeetupByID: meetupID => {
// 	const store = getStore();
// 	const meetupArr = store.meetups.length > 0 && store.meetups.filter(meetup => meetup.ID == meetupID);
// 	console.log("This is meetupArr, the product of getMeetupByID function: " + meetupArr);
// 	return meetupArr[0];
// },
