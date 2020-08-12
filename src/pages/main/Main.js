import React, { Component } from "react";
import api from "../../services/api";
import {Description, Title, Item, ProductList, Link, Button, Actions} from './mainStyles';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
  };
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;
    this.setState({ products: docs, productInfo, page });
  };
  nextPage = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) return;
    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };
  prevPage = () => {
    const { page } = this.state;
    if (page <= 1) return;
    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };
  render() {
    const { products, page, productInfo } = this.state;
    return (
      <ProductList>
        {products.map((product) => (
          <Item key={product._id}>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Link href={`/products/${product._id}`}>Acessar</Link>
          </Item>
        ))}
        <Actions>
          <Button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </Button>
          <Button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Próximo
          </Button>
        </Actions>
      </ProductList>
    );
  }
}
