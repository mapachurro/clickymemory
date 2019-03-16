import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import checkStatus from "./components/FriendCard/checkStatus"
import shuffleArray from "./components/FriendCard/shuffleArray"
// import shuffle from "shuffle-array"
//eslint-disable-next-line
let score = 0;

console.log(friends);

// onClick functionality: 
// onClick = {             }
 
const increaseScore = (score) => {
  score++;
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
            onClick={checkStatus(friends)}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;