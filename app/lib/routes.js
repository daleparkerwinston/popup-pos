Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/events', {
	name: 'events',
	controller: 'EventsController',
	action: 'list',
	where: 'client'
});

Router.route('/events/create', {
	name: 'createEvent',
	controller: 'EventsController',
	action: 'create',
	where: 'client'
});

Router.route('events/:_id', {
	name: 'editEvent',
	controller: 'EventsController',
	action: 'edit',
	where: 'client'
});