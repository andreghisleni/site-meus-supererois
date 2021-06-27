import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { ContainerImages } from '../styles/pages/home';

import PhotoIronMain from '../assets/photos/iron-man.jpg';
import PhotoCapitao from '../assets/photos/capitao.jpg';
import PhotoHulk from '../assets/photos/hulk.jpg';
import PhotoPantera from '../assets/photos/pantera.jpg';
import PhotoThor from '../assets/photos/thor.jpg';
import PhotoScottLang from '../assets/photos/scott-lang.png';
import PhotoVespa from '../assets/photos/vespa.jpg';
import PhotoGaviao from '../assets/photos/gaviao.jpg';

const images = {
  'iron-man.jpg': PhotoIronMain,
  'capitao.jpg': PhotoCapitao,
  'hulk.jpg': PhotoHulk,
  'pantera.jpg': PhotoPantera,
  'thor.jpg': PhotoThor,
  'scott-lang.png': PhotoScottLang,
  'vespa.jpg': PhotoVespa,
  'gaviao.jpg': PhotoGaviao,
};

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>The Avengers - Deshbord</title>
      </Head>

      <main>
        <section className="callaction">
          <div className="container">
            <div className="row">
              <h1>Os Super-Heróis mais Fortes da Terra</h1>
            </div>
            <div className="row">
              <p>
                Os Vingadores: Os Super-Heróis mais Fortes da Terra é um desenho
                norte-americano, baseado nos super-heróis da Marvel Comics, Os
                Vingadores. A série foi ao ar nos Estados Unidos dia 22 de
                setembro de 2010, no canal Disney XD; e no Brasil, a série teve
                uma pré-estreia VIP no dia 31 de outubro de 2010, no canal
                Disney XD, e estreou no dia 27 de novembro. A partir do dia 14
                de maio de 2012 a série passa a ser transmitida pela Rede Globo,
                na TV Globinho. A série inclui os super-heróis Homem de Ferro,
                Hulk, Thor, Capitão América, Viúva Negra, Homem-Formiga, Vespa,
                Pantera Negra, Gavião Arqueiro etc. Eles lutam contra vários
                vilões, como Loki, Encantor, Gangue da Demolição, Caveira
                Vermelha, Graviton, Barão Zemo e a Hidra. No mesmo ano, foi
                anunciado que a série seria cancelada e sendo substituída por
                Avengers Assemble que seria a continuação tendo novos herois.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>
              Fotos do II Encontro de Ensino de Astronomia do Oeste Catarinense
            </h2>
            <ContainerImages>
              <ul>
                <li>
                  <Image
                    src={images['iron-man.jpg']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
                <li>
                  <Image
                    src={images['capitao.jpg']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
                <li>
                  <Image
                    src={images['hulk.jpg']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
                <li>
                  <Image
                    src={images['pantera.jpg']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
                <li>
                  <Image
                    src={images['thor.jpg']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
                <li>
                  <Image
                    src={images['scott-lang.png']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
                <li>
                  <Image
                    src={images['vespa.jpg']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
                <li>
                  <Image
                    src={images['gaviao.jpg']}
                    placeholder="blur"
                    layout="responsive"
                  />
                </li>
              </ul>
            </ContainerImages>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
