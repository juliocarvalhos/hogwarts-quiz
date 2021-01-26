/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <Head>
        <title>Hogwarts Quiz</title>
        <meta property="og:title" content="Hogwarts Quiz" key="title" />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpg" />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <input
                  onChange={
                    function (infosDoEvento) {
                      setName(infosDoEvento.target.value);
                    }
}
                  placeholder="Qual o seu nome?"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {' '}
                  {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header><h1>Quiz da Galera</h1></Widget.Header>
            <Widget.Content>
              <ul>
                <li><a href="https://phyton-quiz.vercel.app/">Python Quiz</a></li>
                <li><a href="https://thequizofcrente.vercel.app/">Quiz of crente</a></li>
              </ul>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/juliocarvalhos" />
      </QuizBackground>
    </>
  );
}
