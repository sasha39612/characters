import React from 'react';
import { CharacterInfo } from '../CharacterInfo/CharacterInfo.';
import { CommentsForm } from '../CommentsForm/CommentsForm';

import './CharacterItem.scss';

export const CharacterItem = ({ match }) => {
  
  return (
    <>    
      <article className="characterInfo">
        <section className="characterInfo__details">
          <CharacterInfo
            characterId={match.params.characterId}
          />

        </section>

        <section className="characterInfo__comment">
          <CommentsForm
            characterId={match.params.characterId}
          />

        </section>

      </article>
    </>
  )
}
