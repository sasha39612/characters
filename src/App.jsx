import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CharactersList } from './components/characterslist/CharactersList';
import { CharacterItem } from './components/characteritem/CharacterItem';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './App.scss';

const App = () => {

  return (

  <>
    <Header />

      <main className="charac">
          <Switch>
            <Route exact path="/characters" component={CharactersList} />
            <Route path="/characters/:characterId" component={CharacterItem} />
            
            <Route>Not found page</Route>
          </Switch>
      </main>

    <Footer />
    </>
  )
}

  export default App;
