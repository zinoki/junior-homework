import React, { Component } from 'react';
import './normalize.css';
import HeaderComponent from './components/header/header';
import RecipeComponent from './components/recipe/recipe';
import RelatedProductsComponent from './components/related/relatedProducts';

import data from './data/data.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {recipe: data};
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <RecipeComponent recipe={this.state.recipe} />
        <RelatedProductsComponent />
      </div>
    );
  }
}

export default App;
