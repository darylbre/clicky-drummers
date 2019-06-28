import React from "react";
import "./App.css";
import drummers from "./drummers.json";
import DrummerCard from "./Components/DrummerCard";

class App extends React.Component {
  state = {
    drummers: drummers,
    score: 0,
    highScore: 0,
    checkClick: []
  };

  handleClick = id => {
    console.log(id);
    this.setState(
      {
        score: this.state.score + 1
      },() =>{
        this.checkClick(id);
      }
      
    );
    
     
  };
  //if id is clicked again then it set a high score and restarts the game reset checkclicked array to empty 
  checkClick = drummerClickedId => {
    //if this.state.checkClick is empty then push this.state.drummerClickedId to the array
    console.log(this.state.checkClick);
    if (this.state.checkClick.length==0) {
      let copy = []
      this.setState({checkClick: [drummerClickedId]});
      console.log('first click')
      console.log(this.state.checkClick)
    }
    //if id is clicked again then it set a high score and restarts the game reset checkclicked array to empty

    this.state.checkClick.forEach(checkClickId => {
      // checkClickId = id
      // if checkClickId exists in the array then do nothing, else if checkClickId exists set high score, restart game, and set the state of checkclicked to an empty array
      console.log('checkClicked ',checkClickId)
      console.log('drummerClicked ', drummerClickedId)
      console.log('---------')
  
      if (checkClickId == drummerClickedId) {
        console.log('already clicked')
      } else {
        // then add the drummerClickedId to the checkClick array to be checked
        const  copy = [...this.state.checkClick, drummerClickedId];
        this.setState({checkClick: copy});
      }
     
    });
    console.log(this.state.checkClick);
    this.shuffle ()
  };

  checkHighScore() {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
  }
  //shuffle drummers array when the id is clicked

  shuffle = () => {
    let temp = this.state.drummers.slice();

    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ drummers: temp });
  };

  render() {
    return (
      <div className="card">
        <h1>Drummer Click</h1>
        <h2>Score: {this.state.score}</h2>
        <h2>High Score: {this.state.highScore}</h2>
        <div className="img-container" />
        {this.state.drummers.map(drummer => (
          <DrummerCard
            handleClick={this.handleClick}
            id={drummer.id}
            key={drummer.id}
            image={drummer.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
