import friends from "../../friends.json"
import shuffleArray from "./shuffleArray"
import score from "../../App"


const endRound = (friends) => {
    alert("Sorry, you already clicked " + this.name + "! Try again!");
    friends.forEach(clicked => {
      clicked = false;
    });
    score++;
    shuffleArray(friends);
  }
  export default endRound;