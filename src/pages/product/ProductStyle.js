import styled from "styled-components";
export const ProductStyle = styled.div`
  margin: 20px auto 0;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
export const Title = styled.h1`
  font-size: 32px;
`;

export const Paragraph = styled.p`
  color: #666;
  line-height: 24px;
  margin-top: 5px;
`;
export const Link = styled.a`
  color: #069;
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 700px;
`;
export const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 0;
  background: #da552f;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;