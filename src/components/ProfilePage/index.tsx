import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>
                    Editar Perfil
                </EditButton>

                <h1>Ericson Xavier</h1>
                <h2>@oitavo_sonny</h2>

                <p>
                    Developer at <a href="https://www.araposistemas.com.br">@araposistemas</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Paraná, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 08 de Dezembro de 1993
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>101</strong>
                    </span>
                    <span>
                        <strong>624 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
}

export default ProfilePage;