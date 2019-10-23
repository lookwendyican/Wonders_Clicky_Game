import React, { Component } from "react";
import WondersCard from "./components/WondersCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import wonders from "./wonders.json";

class App extends Component {
  // Setting this.state.wonders to the wonders json array
  state = {
    wonders
  };

  // Map over this.state.wonders and render a FriendCard component for each friend object
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
