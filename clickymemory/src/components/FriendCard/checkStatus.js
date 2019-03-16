import friends from "../../friends.json"
import shuffleArray from "./shuffleArray"
import score from "../../App"
import endRound from "../../components/FriendCard/endRound"
import addClicked from "./addClicked"

const checkStatus = () => {
    if(this.clicked === "true") {
      endRound();
    }
    else {
      addClicked();
    }
  }

  export default checkStatus;