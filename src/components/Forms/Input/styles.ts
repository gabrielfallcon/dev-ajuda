import styled from 'styled-components';

export const InputBox = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    border: 1px solid #505050;
    border-radius: 5px;
    background: #141617;
    padding: 0 14px;
    color: #ffffff;

    &::placeholder {
      color: #4F4F4F;
      font-size: 16px;
    }
  }

  .label {
    font-ize: 18px;
    color: #F3F3F3;
    margin-bottom: 5px;

    span {
      color: #05FF00;
    }
  }
`;