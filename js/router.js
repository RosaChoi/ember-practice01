App.Router.map(function() {
  this.resource('about', function(){
    this.route('show', {path: '/:show_id'});
  })
  this.route('photos');
});
