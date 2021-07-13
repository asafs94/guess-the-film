import { FC } from "react";
import GameState from "../../constants/gameState.constants";
import Game from "../../containers/Game.container";
import GameOver from "../../containers/GameOver.container";
import { SwitchTransition } from "react-transition-group";
import Grow from "../Animations/Grow";
import correctImage from "../../assets/correct.png"
import wrongImage from "../../assets/wrong.png"

const GameStateComponent = {
  [GameState.Playing]: <Game />,
  [GameState.GameOver]: <GameOver />,
  [GameState.Correct]: <img src={correctImage} alt="correct" />,
  [GameState.Wrong]: <img src={wrongImage} alt="wrong" />
} as const


type Props = {
  gameState: GameState,
}

const GameContent: FC<Props> = ({ gameState }) => {

  const content = GameStateComponent[gameState as keyof typeof GameStateComponent] as any;
  return <SwitchTransition>
    <Grow key={gameState} addEndListener={(node: any, done: boolean) => node.addEventListener("transitionend", done, false)} >
      {content}
    </Grow>
  </SwitchTransition>
    ;
}


export default GameContent;