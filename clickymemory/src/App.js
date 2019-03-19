import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json"

console.log("initial friend state: " + friends);

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0, 
    currentFriend: ""
  };

  clicked(){
    console.log ("clicked!")
  }


  shuffleArray(friends) {
    var n = friends.length;
    var tempArr = [];
    for ( var i = 0; i < n-1; i++ ) {
      // The following line removes one random element from arr
      // and pushes it onto tempArr
      tempArr.push(friends.splice(Math.floor(Math.random()*friends.length),1)[0]);
      // Push the remaining item onto tempArr
    tempArr.push(friends[0]);
    friends=tempArr;
    }
    console.log(friends)
    // Return it back to the app
    return friends;
  }

  endRound = (friends) => {
    alert("Sorry, you already clicked " + this.name + "! Try again!");
    friends.forEach(clicked => {
      clicked = false;
    });
    this.shuffleArray(friends);
  }
  
 addClicked = () => {
    this.clicked = true;
    // this.setState ({score: this.state.score++});
    this.shuffleArray(friends);
  }

  checkStatus = () => {
    console.log("checking status")
    if(this.clicked === "true") {
      this.endRound();
    }
    else {
      this.addClicked();
    }
  }

  // chooseFriend = (event) => {
  //   this.setState ({currentFriend: this.name})
  // }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky-Clicky Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            onClick={this.checkStatus}
            name={friend.name}
            key={friend.id}
            image={friend.image}
            // clicked={friend.clicked}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;