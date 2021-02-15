import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharactersFromApi } from '../../api/Api';

import './CharactersList.scss';

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (localStorage.characters) {
      setCharacters(JSON.parse(localStorage.getItem('characters')));
    } else {
      getCharactersFromApi()
        .then((characterFromServer) => {
          const charactersWithComments = characterFromServer.results.map(character => ({
            ... character, comments: [],
            
          }));
          setCharacters(charactersWithComments);
          localStorage.setItem('characters', JSON.stringify(charactersWithComments));
        });
    }
  }, []);

  if (!characters) {
    return '...'
  }

  return (
    <ul className="characters">
      {characters.map((character) => (
        <li
          className="character"
          key={character.url.split('/')[5]}
        >
          <section className="character__photo">
            <img
              className="character__image"
              src="/images/face_0.jpg"
              alt={`face of ${character.gender}`}
            >
            </img>
  
          </section>

          <section className="character__details">
            <p className="character__name">
              {character.name}
              
            </p>
              
            <p className="character__date-birth">
                {character.birth_year}
            </p>

            <section className="character__extra">
              <p 
                className="character__comment"
              >
                <Link
                  to={`/characters/${character.url.split('/')[5]}`}
                  className="character__button"
                >
                  Comment
                </Link>
              </p>
            </section>
          </section>
        </li>
      ))}
    </ul>
  )
}
