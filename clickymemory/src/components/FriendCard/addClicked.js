import friends from "../../friends.json"
import shuffleArray from "./shuffleArray"
import score from "../../App"

const addClicked = (friends) => {
    this.clicked = true;
    score++;
    shuffleArray(friends);
  }
  export default addClicked;