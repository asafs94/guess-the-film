import { FC } from "react";
import Icons from "../../assets/icons";
import GameState from "../../constants/gameState.constants";
import Game from "../../containers/Game.container";
import GameOver from "../../containers/GameOver.container";
import { SwitchTransition } from "react-transition-group";
import Grow from "../Animations/Grow";

const GameStateComponent = {
  [GameState.Playing]: Game,
  [GameState.GameOver]: GameOver,
  [GameState.Correct]: Icons.Correct,
  [GameState.Wrong]: Icons.Wrong
} as const


type Props = {
  gameState: GameState,
}

const GameContent: FC<Props> = ({ gameState }) => {

  const Component = GameStateComponent[gameState as keyof typeof GameStateComponent] as any;
  return <SwitchTransition>
    <Grow key={gameState} addEndListener={(node: any, done: boolean) => node.addEventListener("transitionend", done, false)} >
      <Component />
    </Grow>
  </SwitchTransition>
    ;
}


export default GameContent;