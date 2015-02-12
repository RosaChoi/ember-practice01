App.AboutRoute = Ember.Route.extend({
  model: function(){
    return [
      {id: 1, Title: "Bio", Content: "BOD: August 22, 2014, Tracy, California   Breed: American Eskimo", image: "img/my_momo.jpg" },
      {id: 2, Title: "Hobbies", Content: "Barking, Giving kisses, Chasing birds, and Chewing Ping Pong Balls", image: "img/my_momo.jpg"},
      {id: 3, Title: "Favorite Food", Content: "Salmon, Cheese and anything that Human creatures eat!", image: "img/momo05.jpg"},
      {id: 4, Title: "Favorite Toys", Content: "Orange Ping Pong Balls, Sticks and Big Leaves", image: "img/momo04.jpg"},
      {id: 5, Title: "Favorite Playgrounds", Content: "Fort Funston and Stern Grove", image: "img/momo02.jpg"},
      {id: 6, Title: "Favorite Human", Content: "Mom", image: "img/mom.jpg"},
    ]
  }
});
