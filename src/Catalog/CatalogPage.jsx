import React from 'react';
import { Catalog } from './Catalog';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions/ItemsAction';
import { addProduct } from '../../redux/actions/BasketAction';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.drop = this.drop.bind(this);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.props.getData();
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev, item) {
    const j = JSON.stringify(item);
    ev.dataTransfer.setData('text', j);
  }
  drop(ev) {
    ev.preventDefault();
    const item = JSON.parse(ev.dataTransfer.getData('text'));
    this.props.addItem(item);
  }
  render() {
    return (
      <Catalog
        products={this.props.items}
        drag={this.drag}
        allowDrop={this.allowDrop}
        drop={this.drop}
        addProduct={this.props.addProduct}
        basket={this.props.basket}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.items.items,
  basket: state.basket.basket,
});

export default connect(mapStateToProps, { getData, addProduct })(CatalogPage);
