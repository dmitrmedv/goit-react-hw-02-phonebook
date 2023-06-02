import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 16px;
  width: 300px;
  > button {
    width: 100px;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  > input {
    margin-top: 8px;
    height: 28px;
  }
`;
