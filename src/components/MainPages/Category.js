import { useCallback } from 'react';
import styled from 'styled-components';
const Category = ({ onClick, categoryList }) => {
  //category 요소 생성 함수

  function makeCategoryBox(categoryList) {
    const result = [];
    for (const [key, value] of Object.entries(categoryList)) {
      result.push(
        <CategoryContent key={key} value={value} onClick={onClick}>
          {key}
        </CategoryContent>
      );
    }
    return result;
  }
  return <CategoryBox>{makeCategoryBox(categoryList)}</CategoryBox>;
};
export default Category;

const CategoryContent = styled.button`
  padding: 15px;
  margin: 3px;
  border: 1px solid ${(props) => props.theme.whiteGray};
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  ${(props) => {
    if (!props.value) {
      return `
        background-color: #ffffff;
        `;
    } else {
      return `
      background-color : ${props.theme.whiteGray};
      border: 1px solid ${props.theme.whiteGray};
        `;
    }
  }}
`;
const CategoryBox = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 40%;
`;
