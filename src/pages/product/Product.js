import React, { Component } from "react";
import api_key from "../../services/api";
import history from "../../history";
import {Container, ProductStyle, Title, Paragraph, Link, Button} from './ProductStyle';


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
      <Container>
        <ProductStyle>
          <Title>{product.title}</Title>
          <Paragraph>{product.description}</Paragraph>
          <Paragraph>
            URL: <Link href={product.url}>{product.url}</Link>
          </Paragraph>
        </ProductStyle>
        <Button onClick={this.prevPage}>Voltar</Button>
      </Container>
    );
  }
}
