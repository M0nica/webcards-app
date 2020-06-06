import Head from "next/head";
import Card from "../components/card";
import ScoreCard from "../components/scoreCard";
import { scrambledAnswer, questions } from "../utils/answers";
import { useState, SyntheticEvent } from "react";

function Home() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [wrong, setWrong] = useState([]);

  function handleAnswer(
    e: React.SyntheticEvent,
    value: string | number,
    correctChoice: number
  ) {
    e.preventDefault();
    if (correctChoice == scrambledAnswer(value)) {
      setScore(score + 1);
    } else {
      setWrong(wrong.concat("X"));
    }
    setRound(round + 1);
  }

  return (
    <div className="container">
      <Head>
        <title>Webcards Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Webcards</h1>
        <ScoreCard score={score} strikes={wrong} />
        <p className="description">
          {round == 0 && `Get started by choosing an answer below:`}
          {round > 0 &&
            questions[round] &&
            `You've attempted ${round} question(s)`}
          {round > 0 && !questions[round] && `Thanks for playing!`}
        </p>{" "}
        <div>
          {questions[round] && (
            <Card questions={questions[round]} handleAnswer={handleAnswer} />
          )}
        </div>
      </main>

      <footer>
        <a href="https://github.com/M0nica/webcards-app">
          {" "}
          Contribute on Github{" "}
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid var(--white);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: var(--dark-main-color);
          text-decoration: none;
        }

        .title {
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: var(--bg-color);
          padding: 0;
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        :root {
          --bg-color: #eaf1ff;
          --white: #fff;
          --accent-color: #b5838d;
          --dark-accent-color: #a6757f;
          --main-color: #6d6875;
          --dark-main-color: blue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Home;
