import styled from '@emotion/styled';

export const Box = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 350px;
`;

export const Title = styled.h2`
  margin: 0 0 15px 0;
  text-align: center;
`;

export const ColorBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Color = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
  border: none;
  scale: ${({ index, currentIdx }) => index === currentIdx && '1.2'};
  border-radius: ${({ index, currentIdx }) => index === currentIdx && '20%'};
  transition: 250ms;
`;
