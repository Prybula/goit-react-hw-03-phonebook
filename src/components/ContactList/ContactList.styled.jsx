import styled from 'styled-components';

export const Contact = styled.li`
  height: 32px;
  list-style: none;

  &: not(: last-child) {
    margin-bottom: 20px;
  }
`;

export const ContactInfo = styled.p`
  display: inline-block;
  width: 300px;
  height: 100%;
  margin: 0;
`;

export const DeleteButton = styled.button`
  margin-left: 18px;
  padding: 0;
  width: 100px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 16px;

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
