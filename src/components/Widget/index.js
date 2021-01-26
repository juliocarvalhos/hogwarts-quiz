import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: -2rem;
    padding: 2rem;
  }
  form input {
    padding: 12px;
    border: 1px solid rgba(255,255,255, .1);
    border-radius: .2rem;
    margin-bottom: .5rem;
    background: transparent;
    &::placeholder{
      color: rgba(255,255,255, .4);
    }
  }
  button {
    font-size: 1.2rem;
    font-weight: 700;
    color: #FFF;
    padding: .6rem;
    background: #ffc500;
    border: none;
    border-radius: .2rem;
    transition: all .2s;
    opacity: 1;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
      text-align: center;
      margin-bottom: 8px;
      padding: .2rem;
      border-radius: 2px;
      background: #ffc500;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 700;
      color: #FFF;
    }
`;

export default Widget;
