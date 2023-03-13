import { Container,
         HeaderContainer,
         TitleContainer,
         InputContainer
        } from './styles/Home';
import { BsSearch } from 'react-icons/bs'

function App() {

  return (
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <h1>Github Finder</h1>
        </TitleContainer>
        <InputContainer>
          <input 
            type="text" 
            placeholder="Digite o Usuario"
          />
          <button>
            <BsSearch
              size={25}
              color="#FFF"
            />
          </button>
        </InputContainer>
        
      </HeaderContainer>
    </Container>
  )
}

export default App
