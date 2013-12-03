Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about', {path: 'about'});
})


if (Meteor.isClient) {
  Meteor.startup(function () {
    // display info in the console to tell the user more info.
    console.log('Type in projects() to see me projects.');
  })
  function projects() {
    console.log('projects');
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
