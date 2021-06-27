import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Axios from 'axios';

import Image from 'next/image';

import PhotoIronMain from '../../assets/photos/iron-man.jpg';
import PhotoCapitao from '../../assets/photos/capitao.jpg';
import PhotoHulk from '../../assets/photos/hulk.jpg';
import PhotoPantera from '../../assets/photos/pantera.jpg';
import PhotoThor from '../../assets/photos/thor.jpg';
import PhotoScottLang from '../../assets/photos/scott-lang.png';
import PhotoVespa from '../../assets/photos/vespa.jpg';
import PhotoGaviao from '../../assets/photos/gaviao.jpg';

import { Container } from '../../styles/pages/the-avenger';

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

interface IPowers {
  strong: string;
  text: string | IPowers[];
}
interface IPageAvenger {
  character: {
    id: string;
    name: string;
    image: string;
    abstract: string;
    text: string[];
    powers: IPowers[];
  };
}

const PageAvenger: React.FC<IPageAvenger> = ({ character }) => {
  return (
    <>
      <Head>
        <title>The Avengers - {character.name}</title>
      </Head>

      <main>
        <section className="callaction">
          <div className="container">
            <div className="row">
              <h1>{character.name}</h1>
            </div>
            <div className="row">
              <Image src={images[character.image]} placeholder="blur" />
            </div>
            <div className="row">
              {character.text.map(t => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <Container className="row">
              <p>
                <ul>
                  {character.powers.map(({ strong, text }) => {
                    if (text instanceof Array) {
                      return (
                        <li>
                          <b>{strong}</b>
                          <ul>
                            {text.map(({ strong: s, text: t }) => (
                              <li>
                                <strong>{s}</strong>
                                {t}
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                    return (
                      <li>
                        <strong>{strong}</strong>
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </p>
            </Container>
          </div>
        </section>
      </main>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await Axios.get('http://localhost:3333/characters');
  const paths = response.data.map(character => ({
    params: {
      id: character.id,
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params;

  const response = await Axios.get(`http://localhost:3333/characters?id=${id}`);

  return {
    props: { character: response.data[0] },
  };
};
export default PageAvenger;
