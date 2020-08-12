import styled from "styled-components";

export const ProductList = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;
`;
export const Item = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;
export const Title = styled.strong`
  font-weight: strong;
`;
export const Description = styled.p`
  font-size: 16px;
  color: #999;
  margin-top: 5px;
  line-height: 24px;
`;
export const Link = styled.a`
  height: 42px;
  border-radius: 5px;
  border: 2px solid #da552f;
  background: none;
  margin-top: 10px;
  color: #da552f;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    background: #da552f;
    color: #fff;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background: #da552f;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &[Disabled], &[Disabled]:hover{
    opacity: 0.5;
    cursor: default;
  }
`;
