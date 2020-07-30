import React, { Component } from "react";
import api_key from "../../services/api";
import history from '../../history';
import "./style.css";

export default class Product extends Component {
  state = {
    product: {},
  };
  prevPage() {
    history.goBack();
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api_key.get(`/products/${id}`);

    this.setState({ product: response.data });
  }
  render() {
    const { product } = this.state;
    return (
      <div className="container">
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            URL: <a href={product.url}>{product.url}</a>
          </p>
        </div>
        <button onClick={this.prevPage}>Voltar</button>
      </div>
    );
  }
}
