import styled from 'styled-components';
import LinkButton from '../Button/LinkButton';
import { Link } from 'react-router-dom';
const Tree = () => {
  return (
    <LinkButton basis="10" address="../pages/MakeRoom">
      트리 꾸미기
    </LinkButton>
  );
};
export default Tree;
