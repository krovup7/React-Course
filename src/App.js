import React from 'react';
import { Route, Switch } from 'react-router';
import CatalogPage from './Catalog/CatalogPage';
import Navbar from './Navbar/Navbar';
import { NotFound } from './NotFound/NotFound';
import BasketPage from './Basket/BasketPage';
import ProductCardContainer from './ProductCard/ProductCardContainer';
import { ImageView } from './ProductCard/ProductCard';

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
      <div className="app-wrapper">
        <div className="app-wrapper-content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <CatalogPage />
            </Route>
            <Route exact path="/ProductCard/:id?" component={ProductCardContainer} />
            <Route exact path="/Basket" component={BasketPage} />
            <Route path="/img/:id?" children={<ImageView />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
