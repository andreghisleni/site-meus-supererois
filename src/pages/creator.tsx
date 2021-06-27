import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import PhotoAvatar from '../assets/avatar.png';
import { Container } from '../styles/pages/creator';

const PageCreator: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>The Avengers - Criador</title>
      </Head>

      <main>
        <section className="callaction">
          <div className="container">
            <div className="row">
              <h2>Criador</h2>
            </div>
          </div>
        </section>
        <section className="callaction">
          <div className="container">
            <div className="row" style={{ marginBottom: 30 }}>
              <Image src={PhotoAvatar} placeholder="blur" />
            </div>
            <div className="row">
              <h2>André Ghisleni Raimann</h2>
            </div>
            <div className="row">
              <p>
                Sempre estudou programação por meios convencionas (leitura,
                pesquisa, e testes de codigos)
              </p>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};
export default PageCreator;
