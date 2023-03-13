import { Container,
         HeaderContainer,
         TitleContainer,
         InputContainer, 
         Main
        } from './styles/Home';
import { BsSearch } from 'react-icons/bs';
import { Profile } from './components/Profile';

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

      <Main>
        <Profile/>
      </Main>
    </Container>
  )
}

export default App
