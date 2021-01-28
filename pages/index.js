/* eslint-disable func-names */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>Hogwarts Quiz</title>
          <link rel="icon" type="image/png" href={db.icon} />
          <meta property="og:title" content="Hogwarts Quiz" key="title" />
          <meta property="og:image" content={db.bg} />
          <meta property="og:image:type" content="image/jpg" />
        </Head>

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
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  placeholder="Qual o seu nome?"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header><h1>Quiz da Galera</h1></Widget.Header>
            <Widget.Content>
              <ul>
                <li><a href="https://aluraquiz-coffee.leonardot07.vercel.app/">Coffee Quiz</a></li>
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
