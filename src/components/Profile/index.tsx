import { Container,
         Avatar,
         DataProfile,
         FollowContainer 
        } from './styles';

export interface ProfileProps{
    name: string;
    login: string;
    followers: number;
    following: number;
    location: string;
    html_url: string;
}

export function Profile({ name,
                          login, 
                          followers, 
                          following, 
                          location, 
                          html_url 
                        } : ProfileProps){
    return(
        <Container>
            <Avatar src={`https://github.com/${login}.png`}/>
            <DataProfile>
                <h1>{name}</h1>
                <h3>@{login}</h3>
                <FollowContainer>
                    <h3>Seguidores: <span>{followers}</span></h3>
                    <h3>Seguindo: <span>{following}</span></h3>
                </FollowContainer>
                <h3>{location}</h3>
                <button>
                    <a 
                        href={`https://github.com/${login}`}
                        target='_blank'
                    >
                    Visitar Repositório
                    </a>
                </button>
            </DataProfile>
        </Container>
    )
}