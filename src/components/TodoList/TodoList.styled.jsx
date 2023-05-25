import styled from '@emotion/styled';

export const List = styled.ul`
  width: 150px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  outline: 1px solid green;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  > p {
    width: 100px;
    margin: 0;
  }

  > button {
    border-radius: 100%;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #f9b5b5;
    }
  }
`;
