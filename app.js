
// targets the div with an id of 'events'
new Vue({
	el: '#events',

	// register any values or collections that hold data for the application
	data: {
		event: {name: '', description: '', date: ''},
		events: []
	},

	// anything in ready will run when the application loads
	ready: function() {
		// when the application loads, we want to call on this method to initialize some data
		this.fetchEvents();
	},
	// methods we want to use in our application are registered here
	methods: {
		fetchEvents: function() {
			// when the application loads, we want to call the method that initializes some data
			var events = [
				{
					id: 1,
					name: 'TIFF',
					description: 'Toronto International Film Festival',
					date: '2015-10-02'
				},
				{
					id: 2,
					name: 'The Martian Premiere',
					description: 'The Martian comes to theatres.',
					date: '2015-10-02'
				},
				{
					id: 3,
					name: 'SXSW',
					description: 'Music, film and interactive festival in Austin, TX'
					date: '2016-03-11'
				}
			];
			// $set is a convenience method provided by Vue that is similar to pushing an event onto an array
			this.$set('events', events);
		},
		// adds an event to existing events array
		addEvent: function() {
			if(this.event.name) {
				this.events.push(this.event)
				this.event = { name: '', description: '', date: ''};
			}
		}
	}
})

