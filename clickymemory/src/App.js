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

shuffleArray(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
        this.setState({
          friends: arra1
        });
      }
    return arra1;
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