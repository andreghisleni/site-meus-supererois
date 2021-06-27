import React from 'react';
import Head from 'next/head';

import Image from 'next/image';

import Axios from 'axios';
import { useRouter } from 'next/router';

import { GetStaticProps } from 'next';
import PhotoIronMain from '../../assets/photos/iron-man.jpg';
import PhotoCapitao from '../../assets/photos/capitao.jpg';
import PhotoHulk from '../../assets/photos/hulk.jpg';
import PhotoPantera from '../../assets/photos/pantera.jpg';
import PhotoThor from '../../assets/photos/thor.jpg';
import PhotoScottLang from '../../assets/photos/scott-lang.png';
import PhotoVespa from '../../assets/photos/vespa.jpg';
import PhotoGaviao from '../../assets/photos/gaviao.jpg';

import { Container } from '../../styles/pages/the-avengers';

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

interface ICharacter {
  id: string;
  name: string;
  image: string;
  abstract: string;
}
interface IPageAvengers {
  characters: ICharacter[];
}
const PageAvengers: React.FC<IPageAvengers> = ({ characters }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>The Avengers - Os Vingadores</title>
      </Head>

      <main>
        <section className="callaction">
          <div className="container">
            <div className="row">
              <h1>Os vingadores</h1>
            </div>
          </div>
        </section>

        <section className="callaction">
          <div className="container">
            <div className="row">
              <Container>
                <ul>
                  <li>
                    <div className="image">
                      <h2>Imagem</h2>
                    </div>
                    <div className="name">
                      <h2>Nome</h2>
                    </div>
                    <div className="text">
                      <h2>Resumo</h2>
                    </div>
                  </li>

                  {characters.map(character => (
                    <li
                      key={character.id}
                      onClick={() =>
                        router.push(`the-avengers/${character.id}`)
                      }
                    >
                      <div className="image">
                        <div className="img">
                          <Image
                            src={images[character.image]}
                            placeholder="blur"
                          />
                        </div>
                      </div>
                      <div className="name">
                        <h2>{character.name}</h2>
                      </div>
                      <div className="text">
                        <p>{character.abstract}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Container>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await Axios.get(`http://localhost:3333/characters`);

  return {
    props: { characters: response.data },
  };
};

export default PageAvengers;
