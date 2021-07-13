import { PropsWithChildren } from 'react';
import { Provider as StoreProvider } from 'react-redux'
import AppForm from './contexts/form.context';
import RandomTvShow from './contexts/randomTvShow.context';
import store from './redux/store';


function AppProviders({ children }: PropsWithChildren<{}>) {
  return <StoreProvider store={store}>
    <RandomTvShow.Provider>
      <AppForm.Provider>
        {children}
      </AppForm.Provider>
    </RandomTvShow.Provider>
  </StoreProvider >
}


export default AppProviders;