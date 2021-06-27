import React from 'react';

import Image from 'next/image';

import Link from './Link';

import VingadoresLogo from '../../assets/logo.png';

import {
  Container,
  ContainerImages,
  ContainerNavigation,
  ContentMenu,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <ContainerImages>
            <Image src={VingadoresLogo} alt="Logo Vingadores" />
          </ContainerImages>
        </div>
        <div className="row">
          <ContainerNavigation>
            <ContentMenu>
              <ul>
                <Link href="/">Home</Link>
                <Link href="/the-avengers">Os vingadores</Link>
                <Link href="/community">Comunidade</Link>
                <Link href="/creator">Criador</Link>
              </ul>
            </ContentMenu>
            <div className="divider" />
          </ContainerNavigation>
        </div>
      </div>
    </Container>
  );
};

export default Header;
