import React from 'react';
import { ProductCard } from './ProductCard';
import { Products } from '../constants/Products';

class ProductCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectPicture = this.selectPicture.bind(this);
    this.leftPhoto = this.leftPhoto.bind(this);
    this.rightPhoto = this.rightPhoto.bind(this);

    this.state = {
      selectedPicture: '',
      selectedIndex: null,
      item: {},
      pictures: [
        {
          id: 0,
          url:
            'https://mamico.md/i.ashx?i=/i/products/1/9277.jpg',
          main: true,
        },
        { id: 1, url: 'https://mamico.md/i.ashx?i=/i/products/1/9277.jpg', main: false },
        {
          id: 2,
          url:
            'https://mamico.md/i.ashx?i=/i/products/1/9277.jpg',
          main: false,
        },
      ],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    const product = Products.find((product) => product.id === Number(id));
    this.setState({ item: product });
    this.state.pictures.map((item, index) => {
      if (item.main === true) {
        this.setState({ selectedPicture: item.url, selectedIndex: index });
      }
    });
    this.timerId = setInterval(this.rightPhoto, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  selectPicture(index) {
    this.setState({ selectedPicture: this.state.pictures[index].url, selectedIndex: index });
  }

  leftPhoto() {
    let NewIndex = this.state.selectedIndex - 1;
    if (NewIndex < 0) {
      NewIndex = this.state.pictures.length - 1;
    }
    this.setState({ selectedPicture: this.state.pictures[NewIndex].url, selectedIndex: NewIndex });
  }
  rightPhoto() {
    let NextIndex = this.state.selectedIndex + 1;
    if (NextIndex > this.state.pictures.length - 1) {
      NextIndex = 0;
    }
    this.setState({
      selectedPicture: this.state.pictures[NextIndex].url,
      selectedIndex: NextIndex,
    });
  }

  render() {
    return (
      <ProductCard
        product={this.state.item}
        rightPhoto={this.rightPhoto}
        leftPhoto={this.leftPhoto}
        selectPicture={this.selectPicture}
        selectedIndex={this.state.selectedIndex}
        pictures={this.state.pictures}
        selectedPicture={this.state.selectedPicture}
      />
    );
  }
}
export default ProductCardContainer;
