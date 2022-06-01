import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border: transparent;
  h4{
    color:#0095f6 ;
  }
  div{
      display: flex;
      gap: 50px;
  }

  button{
      width: 200px;
      border-radius:12px;
      border: transparent;
  }
`;
