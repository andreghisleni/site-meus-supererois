import React from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="A Associação Apontador de Estrelas e a UDESC Oeste realizarão, nos dias 22 e 23 de julho de 2021, o III Encontro de Ensino de Astronomia do Oeste Catarinense. O objetivo deste encontro é promover a capacitação de professores do ensino fundamental e médio da região oeste de Santa Catarina e aproximar estes de astrônomos profissionais, amadores e pesquisadores da área de Educação em Astronomia e apresentar métodos práticos de ensino de Astronomia. O público-alvo são os professores do ensino fundamental ou médio e alunos de licenciatura das áreas de pedagogia, ciências, geografia, física e ou matemática, ou qualquer professor que seja responsável pelo ensino dos conteúdos de astronomia nas escolas. Devido as condições sanitárias impostas pela pandemia de Covid-19, o evento será realizado de forma online, utilizando as plataformas Moodle UDESC e canal de Youtube da Associação Apontador de Estrelas. Serão realizadas palestras online, transmissão de sessão do planetário e observação do céu com o telescópio. Estão confirmados como assessores deste encontro o Prof. Dr. Rodolfo Langhi (UNESP/Bauru), Prof. Dr. Marcos Daniel Longhini (Universidade Federal de Uberlândia), Profa. Mestre e doutoranda Gleicy Kelly de Lima (UNESP/Bauru e IFC Rio do Sul), Profa. Especialista e mestranda Vanessa Simões da Silva Oliveira (Rede municipal de educação de Curitiba e UTFPR). Será emitido certificado (15 horas) pela Universidade do Estado de Santa Catarina (UDESC Oeste). O evento é gratuito e, no momento da inscrição, deverão ser escolhidos os turnos de participação (manhã e noite ou tarde e noite)."
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
