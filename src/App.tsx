import { useState } from 'react';
import { Container,
         HeaderContainer,
         TitleContainer,
         InputContainer, 
         Main
        } from './styles/Home';
import { BsSearch } from 'react-icons/bs';
import { Profile } from './components/Profile';
import { api } from './services/api';
import { ProfileProps } from './components/Profile';

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState<ProfileProps[]>([]);

  async function handleSearch(){
    if(!user){
      alert("Digite um Usuario")
      return;
    }

    const response = await api.get(`/users/${user}`)
    setUserData(response.data)
    setUser("");
  }

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
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button
            onClick={handleSearch}
          >
            <BsSearch
              size={25}
              color="#FFF"
            />
          </button>
        </InputContainer>
      </HeaderContainer>

      {
        Object.keys(userData).length > 0 && (
          <Main>
            <Profile
              name={userData.name}
              login={userData.login}
              followers={userData.followers}
              following={userData.following}
              location={userData.location}
              html_url={userData.html_url}
          />
        </Main>
        )
      
      }

      
    </Container>
  )
}

export default App
