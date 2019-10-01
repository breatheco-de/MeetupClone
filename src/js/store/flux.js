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
				return meetupArr[0];
			},
			getMeetupEvents: meetupID => {
				const store = getStore();
				const meetupEvArr = store.events.filter(event => event.meta_keys._meetup === meetupID);
				return meetupEvArr;
			},
			getEvents: eventID => {
				const store = getStore();
				const eventArr = store.events.filter(event => event.ID === eventID);
				return eventArr[0];
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
