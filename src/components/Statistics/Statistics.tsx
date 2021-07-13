import { FC, HTMLAttributes } from "react";

type Props = Statistics & HTMLAttributes<HTMLUListElement>

const Statistics: FC<Props> = ({ wrongGuesses, rightGuesses, hintsTaken }) => {
  return (
    <ul>
      <li>
        Right Guesses: {rightGuesses}
      </li>
      <li>
        Wrong Guesses: {wrongGuesses}
      </li>
      <li>
        Hints Used: {hintsTaken}
      </li>
    </ul>
  )
}

export default Statistics;