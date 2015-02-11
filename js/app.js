App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
  this.route('photos');
});


$(document).ready(function(){
  infoListClick();
});


$('#meetMomo').on('click', function(){
  $('#tagLine').append()

});

function infoListClick(){
  $('#aboutList li').on('click', '.dob', function(){
    console.log('clicked')
  })

}





// <li>BOD: August, 22, 2014</li>
// <li>Breed: American Eskimo</li>
// <li>Favorite Food: Salmon, Cheese and anything that stinks</li>
// <li>Favorite Toy: Orange Ping Pong Ball</li>
// <li>Favorite Playground: Fort Funston</li>
// <li>Favorite Human: Mom</li>
