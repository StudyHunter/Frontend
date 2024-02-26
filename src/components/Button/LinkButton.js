import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = (props) => {
  return (
    <Button to={props.address} basis={props.basis} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};
export default LinkButton;

const Button = styled(Link)`
  flex-basis: ${(props) => props.basis}%;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.basic};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.basicHover};
  }
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
