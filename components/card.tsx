import Button from "./button";

const Card = ({ questions, handleAnswer }) => (
  <>
    <div className="card">
      <h3>{questions.question} </h3>
      <p>{questions.description}</p>
      {questions.choices.map((choice) => (
        <Button
          answer={choice}
          correctChoice={questions.correctChoice}
          handleAnswer={handleAnswer}
          key={choice}
        />
      ))}
    </div>

    <style jsx>{`
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        background-color: var(--white);
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
    `}</style>
  </>
);

export default Card;
