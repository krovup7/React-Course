import React from 'react';
import { Basket } from './Basket';
import { connect } from 'react-redux';

class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Basket items={this.props.basket} />;
  }
}
const mapStateToProps = (state) => ({
  basket: state.basket.basket,
});
export default connect(mapStateToProps, {})(BasketPage);
