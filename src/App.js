import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import JumbotronComponent from './components/JumbotronComponent';
import PictureCardComponent from './components/PictureCardComponent';
import './App.css';
import characters from './characters.json';

class App extends Component {
	state = {

		characters: characters,
		score: 0,
		topScore: 0
	};

	 componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.characters) });
  };

  handleCorrectGuess = newData =>{

  	const score = this.state.score;
  	const topScore = this.state.topScore;
  	const newScore = score + 1;
  	const newTopScore = newScore > newTopScore ? newScore : topScore;
  	this.setState({

  		data: this.shuffleData(newData),
  		score: newScore,
  		topScore: newTopScore

  	});
  };

  handleIncorrectGuess = data =>{
  	this.setState({
  		data: this.resetData(data),
  		score: 0

  	});
  };

  resetData = data =>{
  	const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  }

  shuffleData = data => {
    let counter = data.length - 1;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // And swap the last element with it
        let temp = data[counter];
        data[counter] = data[index];
        data[index] = temp;

        // Decrease counter by 1
        counter--;
    }

    return data;
};

handleItemClick = id => {
	let guessedCorrectly = false;
	const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
  };

  render () {
  	return(
  		<div>
  		<HeaderComponent brandname="Clicky Game" heading = "Click an image to start game!" score={ this.state.score } topScore={ this.state.topScore }>
  		</HeaderComponent>
  		<JumbotronComponent></JumbotronComponent>
  		<div className="container row mx-auto">
  			{this.state.characters.map(item => (
            <div className="col" key={item.id}>
          <PictureCardComponent
            key={item.id}
            dataid={item.id}
            name={item.name}
            image={item.image}
            handleIncrement = { this.handleItemClick }
          />
          </div>
          ))}
  		</div>

  		<FooterComponent>Clicky Game</FooterComponent>
     </div>
  		);
  }


	}

	export default App;