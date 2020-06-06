import Button from "./button";

const Card = ({ data, handleAnswer }) => (
  <>
    <div className="card">
      <h3>{data.question} </h3>
      <p>{data.description}</p>
      {data.choices.map((choice) => (
        <Button
          answer={choice}
          correctChoice={data.correctChoice}
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
