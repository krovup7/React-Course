import React from 'react';
import { Route, Switch } from 'react-router';
import { CatalogPage } from './Catalog/CatalogPage';
import { ProductCard } from './ProductCard/ProductCard';
import Navbar from './Navbar/Navbar';
import UaContext from './../context';
import { NotFound } from './NotFound/NotFound';
import { BasketPage } from './Basket/BasketPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState({
      items: this.state.items.concat(item),
    });
  }

  render() {
    return (
      <UaContext.Provider
        value={{
          items: this.state.items,
          addItem: this.addItem,
        }}
      >
        <div className="app-wrapper">
          <div className="app-wrapper-content">
            <Navbar />
            <Switch>
              <Route exact path='/' component={CatalogPage} />
              <Route exact path='/ProductCard/:id?' component={ProductCard} />
              <Route exact path='/Basket' component={BasketPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </UaContext.Provider>
    );
  }
}

export default App;
