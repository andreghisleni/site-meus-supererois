import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  ul {
    li {
      padding: 40px;

      border-radius: 10px;

      background: ${props => props.theme.colors.background};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      display: flex;
      flex-direction: row;

      margin-bottom: 30px;

      div {
        h2 {
          float: left;
          font-size: 20px;
        }
        p {
          text-indent: 0px;
          padding: 0;
        }
        &.image {
          width: 300px;
        }
        &.img {
          width: 180px;
        }
        &.name {
          width: 200px;
        }
        &.text {
          width: calc(100% - 500px);
        }
      }
      &:hover {
        border: 0.5px solid #7ca8ed;
        cursor: pointer;
      }
    }
  }
`;
