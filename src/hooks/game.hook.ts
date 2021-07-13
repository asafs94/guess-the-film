import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { selectGameData } from "../redux/selectors";
import RandomTvShow from "../contexts/randomTvShow.context";
import actions from "../redux/actions";

export const useGame = () => {
  const gameStatus = useSelector(selectGameData);
  const { tvShow, getNextTvShow, error } = useContext(RandomTvShow.Context);
  const [stageHintTaken, setStageHintTaken] = useState(false); //Wether hin was taken in this stage.
  const dispatch = useDispatch();

  const onGuess = (name: string) => {
    if (name.toLowerCase() === tvShow?.name.toLowerCase()) {
      dispatch(actions.success())
    } else {
      dispatch(actions.failure())
    }
    getNextTvShow();
  }

  const onHintTaken = () => {
    if (!stageHintTaken) {
      setStageHintTaken(true);
      dispatch(actions.hintTaken());
    }
  }

  useEffect(() => {
    setStageHintTaken(false)
  }, [tvShow])

  const onRestart = () => {
    getNextTvShow();
    dispatch(actions.restart());
  }

  return { gameStatus, tvShow, error, onHintTaken, onGuess, onRestart }

}