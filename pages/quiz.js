import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import Link from 'next/link'

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

const Linker = styled.footer`
  a {
    color: white;
    text-decoration: underline;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Phyton Quiz</title>
        <meta property="og:title" content="Phyton Quiz" key="title" />
        <meta property="og:image" content={db.bg}/>
        <meta property="og:image:type" content="image/jpg"/>
      </Head>   
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <p>
                <Linker>
                  <Link href="/" replace>
                    <a>Voltar para home</a>
                  </Link>
                </Linker>
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/martsallan" />
      </QuizBackground>
    </>
  );
}
