const Button = ({ answer, handleAnswer, correctChoice }) => (
  <>
    {" "}
    <button onClick={(e) => handleAnswer(e, answer, correctChoice)}>
      {answer}
    </button>
    <style jsx>{`
      button {
        font-size: 1rem;
        border-radius: 10px;
        width: 100%;
        border: 2px solid var(--dark-main-color);
        background-color: var(--white);
        padding: 1em;
        margin-top: 1em;
        margin-bottm: 1em;
      }
      button:hover {
        background-color: var(--dark-main-color);
        color: var(--white);
      }
    `}</style>
  </>
);

export default Button;
