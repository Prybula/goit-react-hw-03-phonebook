import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
  padding: 16px;
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Input = styled.input`
  width: 220px;
  padding: 4px 8px;
  font-size: 16px;
  border: 1px solid black;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;
  background-color: white;

  transition: border 250ms ease-in, color 250ms ease-in,
    background-color 250ms ease-in;

  &:hover {
    border: 2px solid green;
  }

  &:focus {
    color: white;
    background-color: green;
  }
`;
