import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

function randomize(friends) {
  var n = friends.length;
  var tempArr = [];
  for ( var i = 0; i < n-1; i++ ) {
    // The following line removes one random element from arr
    // and pushes it onto tempArr
    tempArr.push(friends.splice(Math.floor(Math.random()*friends.length),1)[0]);
  }
  // Push the remaining item onto tempArr
  tempArr.push(friends[0]);
  friends=tempArr;
  console.log(friends)
  // Return it back to the app
  return friends;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky-Clicky Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            onClick={randomize()}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;