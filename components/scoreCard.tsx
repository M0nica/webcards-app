const ScoreCard = ({ score, strikes }) => (
  <>
    {" "}
    <div className="scoreCard">
      <h2 className="header">Score</h2>
      <p className="score">{score}</p>
      <p className="strikes">{strikes}</p>
    </div>
    <style jsx>{`
      .scoreCard {
        text-align: center;
        padding: 1em;
      }
      .strikes {
        color: red;
      }
    `}</style>
  </>
);

export default ScoreCard;
