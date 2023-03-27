import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 4em;
  background-color: #f1c40f;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${props => props.primary ? "paleviolet" : "purple"};
  color: ${props => props.primary ? "green" : "red"};
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid paleviolet;
  border-radius: 5px;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Hello World!</Title>
        <Button type="button">Normal</Button>
        <Button primary type="button">Primary</Button>
      </Wrapper>
    </div>
  );
}

export default App;
