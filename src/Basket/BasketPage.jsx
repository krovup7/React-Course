import React from 'react';
import UAContext from '../../context';
import { Basket } from './Basket';

export class BasketPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <UAContext.Consumer>{(context) => <Basket items={context.items} />}</UAContext.Consumer>;
  }
}
