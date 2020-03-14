import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  border-radius: 10px;

  padding: 50px;
  background-color: #abcdff;

  & > div {
    margin-right: 20px;

    & > div {
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > button {
        &.submit-button {
          border: 1px solid #78e801;
        }

        font-weight: bold;
        padding: 10px;
        margin-top: 20px;
        width: 140px;
        background-color: white;
        border: 1px solid red;

        border-radius: 5px;
      }
    }

    & > section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 300px;
      margin: 10px 0px 10px 0px;

      & > span {
        margin-top: 5px;
        color: red;
        font-weight: bold;
      }

      & > label {
        font-weight: bold;
        margin-bottom: 5px;
      }

      & > input {
        font-weight: bold;
        border: none;
        border-radius: 5px;
        padding: 10px;
      }

      & > select {
        font-weight: bold;
        border: none;
        border-radius: 5px;
        padding: 10px;
      }
    }
  }
`;
