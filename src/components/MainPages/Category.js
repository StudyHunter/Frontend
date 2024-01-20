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
  padding: 20px;
  margin: 3px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  ${(props) => {
    if (!props.value) {
      return `
        background-color: rgba(10, 10, 35, 0.8);
        // &:hover {
        //   background-color: rgba(125, 125, 160, 0.8);
        // }
        `;
    } else {
      return `
        background-color: rgba(125, 125, 160, 0.8);
        // &:hover {
        //   background-color: rgba(10, 10, 35, 0.8);
        // }
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
  justify-contenet: center;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;
