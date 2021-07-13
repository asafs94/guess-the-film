import { createContext, ReactNode, useEffect, useState } from 'react'
import filmApi from '../api/films';
import { generateRandomIndex, randomIntInRange } from '../utils';

const RandomTvShowContext = createContext<{
  tvShow: TvShow | null,
  getNextTvShow: () => void,
  error: Error | null
}>({ tvShow: null, getNextTvShow: () => { }, error: null });

type Props = {
  children: ReactNode
}

function RandomTvShowProvider({ children }: Props) {

  const [tvShowsHistory, setTvShowsHistory] = useState<Array<TvShow>>([]);
  const [selectedTvShow, setSelectedTvShow] = useState<TvShow | null>(null);
  const [lastPage, setLastPage] = useState<number | undefined>();
  const [error, setError] = useState<Error | null>(null);


  const filmWasGuessed = (film: TvShow) => {
    return tvShowsHistory.some(f => f.id === film.id)
  }

  const getUnguessedTvShow = (results: Array<TvShow>) => {
    if (tvShowsHistory.length === 0) return results[generateRandomIndex(results)];
    return results.find(f => !filmWasGuessed(f));
  }

  const fetchRandomTvShow = async () => {
    const randomPage = lastPage ? randomIntInRange(1, lastPage + 1) : 1;
    try {
      const data = await filmApi.getTopRatedMovies(randomPage);
      const { total_pages, results } = data;
      setLastPage(total_pages);
      const film = getUnguessedTvShow(results)
      if (!film) {
        fetchRandomTvShow();
        return;
      }
      setTvShowsHistory(h => [...h, film]);
      setSelectedTvShow(film);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    fetchRandomTvShow();
  }, [])


  return (
    <RandomTvShowContext.Provider value={{
      tvShow: selectedTvShow,
      getNextTvShow: fetchRandomTvShow,
      error
    }}>
      {children}
    </RandomTvShowContext.Provider>
  )
}


const RandomTvShow = {
  Provider: RandomTvShowProvider,
  Context: RandomTvShowContext
}

export default RandomTvShow;