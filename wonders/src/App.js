import React, { Component } from "react";
import WondersCard from "./components/WondersCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import wonders from "./wonders.json";

class App extends Component {
  // Setting this.state.wonders to the wonders json array
  state = {
    wonders,
    score: 0,
    topScore: 0,
    message: "Memory! Click as many images as you can without repeating!"
  };

  // function gets called when the page loads
  componentDidMount() {
    // reorders the dataarray on state changes
    this.setState({ wonders: this.shuffleDeck(this.state.wonders) });
  }

  // shuffle the imported data array in random order
  shuffleDeck = wonders => {
    let newWonders = wonders.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    return newWonders;
  };
  // Map over this.state.wonders and render a WonderCard component for each friend object
  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          {this.state.wonders.map(wonder => (
            <WondersCard
              id={wonder.id}
              key={wonder.id}
              name={wonder.name}
              image={wonder.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
