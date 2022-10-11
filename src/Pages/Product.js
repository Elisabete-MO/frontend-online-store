import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { getProductByRealId } from '../services/api';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getDataFromProduct();
  }

  getDataFromProduct = async () => {
    const { match: { params } } = this.props;
    const data = await getProductByRealId(params.id);
    this.setState({ data });
  };

  addCarrinho = async () => {
    const { data } = this.state;
    const productsLocalStorage = JSON.parse(localStorage.getItem('listCart'));
    if (productsLocalStorage === null) {
      localStorage.setItem('listCart', JSON.stringify([data]));
    } else {
      localStorage.setItem('listCart', JSON
        .stringify([...productsLocalStorage, data]));
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Link to="/shopping-card" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <h2 data-testid="product-detail-name">{data.title}</h2>
        <img
          src={ data.thumbnail }
          data-testid="product-detail-image"
          alt="Foto do Produto"
        />
        <p data-testid="product-detail-price">{` Preço: ${data.price} R$`}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addCarrinho }
        >
          Adcionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Product;