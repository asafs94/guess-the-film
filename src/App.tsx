import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import styles from './App.module.scss';
import Icons from './assets/icons';
import GameStatus from './components/GameData';
import Modal from './components/Modal';
import Paper from './components/Paper';
import classNames from 'classnames';
import { useSelector } from 'react-redux'
import { selectGameState, selectStatistics } from './redux/selectors';
import Statistics from './components/Statistics/Statistics';
import Footer from './components/Footer/Footer';
import { useGame } from './hooks/game.hook';
import GameContent from './components/GameContent/GameContent';
import useSaveToStorage from './hooks/saveToStorage.hook';
import useFetchStatistics from './hooks/fetchStatistics.hook';
import { StorageKey } from './constants/storage.constants';
import AppForm from './contexts/form.context';

const getStatisticsModal = (statistics: Statistics) => ({
  content: <Statistics {...statistics} />, header: 'Statistics'
})

const getHintModal = (hint: ReactNode) => ({
  header: 'Hint', content: hint || '',
})


function App() {
  const { gameStatus, tvShow, onHintTaken, error } = useGame()
  const statistics = useSelector(selectStatistics);
  const formRef = useContext(AppForm.Context)
  const [modal, setModal] = useState<{ show: boolean, content: React.ReactNode, header?: string }>({
    show: false,
    content: '',
    header: ''
  })
  const gameState = useSelector(selectGameState)
  const [gameStarted, setGameStarted] = useState(false);
  useFetchStatistics();
  useSaveToStorage(StorageKey.Statistics, statistics);

  useEffect(() => {
    setTimeout(() => setGameStarted(true), 1000);
  }, [])


  const submit = () => {
    formRef.current?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
  }

  const onStatistics = () => {
    setModal({ show: true, ...getStatisticsModal(statistics) })
  }

  const onHint = () => {
    onHintTaken();
    setModal({ show: true, ...getHintModal(tvShow?.overview) });
  }

  if (error) return <div>An Error has occured. Please try again later</div>
  return (
    <div className={styles.Root}>
      <Icons.Logo className={classNames(styles.Logo, { [styles.center]: !gameStarted })} />
      <button className={styles.StatisticsButton} onClick={onStatistics}>Statistics</button>
      <GameStatus className={styles.GameState} {...gameStatus} />
      <Paper className={classNames(styles.Content)} >
        <div className={classNames(styles.StartAnimation, { [styles.transparent]: !gameStarted })}>
          <GameContent gameState={gameState} />
        </div>
      </Paper>
      <Footer className={styles.Footer} onHint={onHint} onGuess={submit} />
      <Modal show={modal.show} header={modal.header} onClose={() => setModal(m => ({ ...m, show: false }))} >
        {modal.content}
      </Modal>
    </div >
  );
}

export default App;
