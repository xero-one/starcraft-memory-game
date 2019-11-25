/*Imports section for our React, this is basically like our routing to render certain elements within the app especially important elements like header, footer and cards for our gane*/
import React, { Component } from 'react';

import Sound from 'react-sound';

import './app.css';

import Header from '../header/header.js';

import Alerts from '../alerts/alerts.js';

import Score from '../score/score.js';

import Main from '../main/main.js';

import Footer from '../footer/footer.js';

import Card from '../card/card.js';

import cards from '../../assets/json/cards.json';

import soundCorrect from '../../assets/sounds/correctFX.wav';

import soundIncorrect from '../../assets/sounds/wrongFX.wav';

import theme from '../../assets/sounds/starcraftTHEME.mp3';

/*This is the lifestat command to load all elements and functions for the page*/
class App extends Component{

/*Set the default state of the application*/
    state = {
        cards,
        score: 0,
        topScore: 0,
        selected: [],
        soundURL: theme,
        soundPosition: 0,
        soundStatus: Sound.status.PLAYING,
        shake: "",
        message1: "Select a Starcraft hero to begin the game!",
        message2: "",
        alertType: "info",
        topScoreType: "info",
        volume: "on"
    };

    /*An "onClick" function that suffles the cards upon mouse click*/
    shuffle = id => {
        this.setState({
            cards: this.state.cards.sort(function(a,b){
                    return 0.5 - Math.random();
                }
            )
        })
    }
    
    /*An "onClick" function that plays music when a card is selected*/
    volumeClick = () => {
        if(this.state.volume === "off"){
            this.setState({ 
                volume: "on",
                soundStatus: Sound.status.PLAYING
            });
        }
        else{
            this.setState({ 
                volume: "off",
                soundStatus: Sound.status.PAUSED,
                soundURL: theme
            });
            
        }
    };

    /*Dynamically change the score with a large block of boolean statements through the "incrementClick" function*/
    incrementClick = id => {
        let ids = this.state.selected
        const incorrect = ids.includes(id);
        if(!incorrect){
            this.state.selected.push(id);
            let newScore = this.state.score + 1;
            this.setState({score: newScore});
            if(newScore === 12){
                this.setState({
                    score: 0,
                    selected: [],
                    topScore: newScore,
                    message1: "Congratulations you win!",
                    message2: "",
                    alertType: "success"
                });
                if(this.state.volume === "on"){
                    this.setState({ 
                        soundStatus: Sound.status.PLAYING,
                        soundPosition: 0,
                        soundURL: soundCorrect
                    });
                }
            }
            else if(newScore > this.state.topScore){
                this.setState({
                    topScore: newScore, 
                    message1: "LET'S GO!",
                    message2: "You guessed correctly!",
                    alertType: "success",
                    topScoreType: "success"
                });
                if(this.state.volume === "on"){
                    this.setState({ 
                        soundStatus: Sound.status.PLAYING,
                        soundPosition: 0,
                        soundURL: soundCorrect
                    });
                }
            }
            else{
                this.setState({
                    message1: "LET's GO!",
                    message2: "You guessed correctly!",
                    alertType: "success",
                    topScoreType: "info"
                });
                if(this.state.volume === "on"){
                    this.setState({ 
                        soundStatus: Sound.status.PLAYING,
                        soundPosition: 0,
                        soundURL: soundCorrect
                    });
                }
            }
        }
        
        else{
            this.setState({
                score: 0,
                selected: [], 
                shake: "incorrect",
                message1: "YOU ARE WRONG!",
                message2: "Start over and try again!",
                alertType: "danger",
                topScoreType: "info"
            });
            if(this.state.volume === "on"){
                this.setState({ 
                    soundStatus: Sound.status.PLAYING,
                    soundPosition: 0,
                    soundURL: soundIncorrect
                });
            }
            setTimeout(function(){ 
                this.setState({ shake: "" }); 
            }.bind(this), 1000);
        }
    };

    /*Our render section is going to render the elements on the page from our js and css files*/
    render(){
        return(
            <div className="app">
                <Header/>
                <Alerts
                    message1={this.state.message1}
                    message2={this.state.message2}
                    alertType={this.state.alertType}
                />
                <Score 
                    shake={this.state.shake}
                    score={this.state.score} 
                    topScore={this.state.topScore}
                    alertType={this.state.alertType}
                    topScoreType={this.state.topScoreType}
                />
                <Main 
                    shake={this.state.shake}
                    volumeOn={this.state.volume}
                    volume={this.volumeClick}
                >
                    {this.state.cards.map((cards,i) => (
                        <Card 
                            id={cards.id} 
                            name={cards.name} 
                            image={cards.image} 
                            key={i} 
                            increment={this.incrementClick} shuffle={this.shuffle}
                        />
                    ))}
                </Main>
                <Sound 
                    autoLoad={true} 
                    url={this.state.soundURL} 
                    playStatus={this.state.soundStatus} 
                    playPosition={this.state.soundPosition}
                />
                <Footer/>
            </div>
        );
    };
}

/*Export app code to react app config*/
export default App;