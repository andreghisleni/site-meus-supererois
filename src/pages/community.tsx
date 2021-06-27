import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import PhotoEmBreve from '../assets/em-breve.jpg';

const PageCommunity: React.FC = () => {
  return (
    <>
      <Head>
        <title>The Avengers - Comunidade</title>
      </Head>

      <main>
        <section className="callaction">
          <div className="container">
            <div className="row">
              <h2>Comunidade</h2>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <Image src={PhotoEmBreve} placeholder="blur" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default PageCommunity;
