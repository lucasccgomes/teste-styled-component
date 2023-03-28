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
  secondary?: boolean;
  tertiary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${props =>
    props.primary ? "#0077B5" : props.secondary ? "#000000" : props.tertiary ? "#C13584" : "transparent"};
  color: ${props => (props.primary || props.secondary) ? "#FFFFFF" : "#FFFFFF"};
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid paleviolet;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: ${props =>
      props.primary ? "#2867B2" : props.secondary ? " #24292E" : props.tertiary ? "#E1306C" : "transparent"};
  }
`;

const TomatoButton = styled(Button)`
  color: #24292E;
  border-color: tomato;
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Hello World!</Title>
        <Button as="a" primary href="https://www.linkedin.com/in/lucasccgomes/" target="_blank" type="button">Meu Linkedin</Button>
        <Button as="a" secondary href="https://github.com/lucasccgomes" target="_blank" type="button">Meu GitHub</Button>
        <TomatoButton as="a" tertiary href="https://www.instagram.com/lucasolivergomes/" target="_blank" type="button">Meu Instagram</TomatoButton>
      </Wrapper>
    </div>
  );
}

export default App;
