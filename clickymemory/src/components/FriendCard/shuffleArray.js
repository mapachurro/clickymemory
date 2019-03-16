import friends from "../../friends.json";

function shuffleArray(friends) {
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
  
  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [array[i], array[j]] = [array[j], array[i]];
  //       array = friends
  //       return;
  //   }
  // }
  
  // Used like so
  // var arr = [2, 11, 37, 42];
  // arr = shuffle(arr);
  // console.log(arr);
  
  export default shuffleArray;