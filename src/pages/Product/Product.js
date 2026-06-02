import React, { Component } from 'react';
import axios from 'axios';

import './Product.css';

class ProductPage extends Component {
  state = { isLoading: true, product: null };

  componentDidMount() {
    this.fetchProductData();
  }

  fetchProductData = () => {
    this.setState({ isLoading: true });
    axios
      .get('http://localhost:3100/products/' + this.props.match.params.id)
      .then((productResponse) => {
        this.setState({ isLoading: false, product: productResponse.data });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log(err);
        this.props.onError(
          'Loading the product failed. Please try again later',
        );
      });
  };

  deleteProductHandler = () => {
    axios
      .delete('http://localhost:3100/products/' + this.props.match.params.id)
      .then((response) => {
        this.setState({ product: null, isLoading: false });

        this.props.history.push('/products');
      })
      .catch((err) => {
        console.log(err);
        this.props.onError(
          'Deleting the product failed. Please try again later.',
        );
      });
  };

  render() {
    let content = <p>Is loading...</p>;

    if (!this.state.isLoading && this.state.product) {
      content = (
        <main className="product-page">
          <h1>{this.state.product.name}</h1>
          <h2>{this.state.product.price}</h2>
          <div
            className="product-page__image"
            style={{
              backgroundImage: "url('" + this.state.product.image + "')",
            }}
          />
          <p>{this.state.product.description}</p>

          <button className="btn-danger" onClick={this.deleteProductHandler}>
            Delete Product
          </button>
        </main>
      );
    }
    if (!this.state.isLoading && !this.state.product) {
      content = (
        <main>
          <p>Found no product. Try again later.</p>
        </main>
      );
    }
    return content;
  }
}

export default ProductPage;
