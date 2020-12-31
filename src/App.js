import React, { Component } from 'react';
import './App.css';
import { faTwitterSquare, faTumblrSquare } from "@fortawesome/free-brands-svg-icons";
import NewLyricDisplay from './NewLyricDisplay';
import NewBarButton from './NewBarButton';
import LyricList from './LyricList';
import SocialButton from './SocialButton';


class App extends Component {
  constructor() {
    super();
    this.state = {
      randomIndex: 4
    }
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.setState({
        randomIndex: Math.floor(Math.random() * 8)
    });
}
render() {

  let twitterURL = 'https://twitter.com/intent/tweet?text="';
  return (
    <div className="AppBgd">
      <div id="quote-box">
      <NewLyricDisplay bar={LyricList[this.state.randomIndex].lyric} song={LyricList[this.state.randomIndex].song}/>
      <div className="buttons">
        <div className="socMed">
        <SocialButton socialIcon={faTwitterSquare} socialMediaId={'tweet-quote'} sendURL={twitterURL + LyricList[this.state.randomIndex].lyric}/>
        <SocialButton socialIcon={faTumblrSquare} socialMediaId={'tumblr-quote'}/>
        </div>
        <NewBarButton newBar={this.changeQuote}/>
      </div>
      </div>
    </div>
    
  );
}
  
}

export default App;
