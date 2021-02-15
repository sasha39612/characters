import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import facePicture from '../images/face_0.jpg';

import './CharacterInfo.scss';

export const CharacterInfo = ({ characterId }) => {
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    if (localStorage.characters) {
      setCharacterInfo((JSON.parse(localStorage.getItem(`characters`) || '[]')
      .filter(character => character.url.split('/')[5] === characterId).pop())
      );
    }
  }, []);

  if (!characterInfo) {
    return '...'
  }

  return (
    <div className="CharacterInfo">
      <h2>Character:</h2>

      <ul className="characterInfo__item">
        
          <li
            className="characterInfo__positions"
            >
            <div className="characterInfo__photo characterInfo__wrapper">
               <img
                className="characterInfo__image;"
                src={facePicture}
                alt={`face of ${characterInfo.gender}`}
              >
              </img>
            </div> 

            <div className="characterInfo__item--name">
              {characterInfo.name}
            </div>

            <table className="characterInfo__table">
              <thead className="characterInfo__tr">
                <tr>
                  <th
                    className="characterInfo__th"
                  >
                    Datas
                  </th>
                  <th
                    className="characterInfo__th"
                  >
                    Parametrs
                  </th>
                </tr>
              </thead>
              
              <tbody>
                <tr className="characterInfo__tr">
                  <td className="characterInfo__td"
                  >
                    birth_year</td>
                  <td
                    className="characterInfo__td"
                  >
                    {characterInfo.birth_year}
                  </td>
                </tr>

                <tr className="characterInfo__tr">
                  <td className="characterInfo__td"
                  >
                    gender
                  </td>
                  <td
                    className="characterInfo__td"
                  >
                    {characterInfo.gender}
                  </td>
                </tr>

                <tr className="characterInfo__tr">
                  <td
                    className="characterInfo__td"
                  >
                    hair_color
                  </td>
                  <td
                    className="characterInfo__td"
                  >
                    {characterInfo.hair_color}
                  </td>
                </tr>

                <tr className="characterInfo__tr">
                  <td
                    className="characterInfo__td"
                  >
                    eye_color
                  </td>
                  <td
                    className="characterInfo__td"
                  >
                    {characterInfo.eye_color}
                  </td>
                </tr>

                <tr className="characterInfo__tr">
                  <td
                    className="characterInfo__td"
                  >
                    skin_color
                  </td>
                  <td
                    className="characterInfo__td"
                  >
                    {characterInfo.skin_color}
                  </td>
                </tr>

                <tr className="characterInfo__tr">
                  <td
                    className="characterInfo__td"
                  >
                    height
                  </td>
                  <td
                    className="characterInfo__td"
                  >
                    {characterInfo.height}
                  </td>
                </tr>

                <tr className="characterInfo__tr">
                  <td
                    className="characterInfo__td"
                  >
                    mass
                  </td>
                  <td
                    className="characterInfo__td"
                  >
                    {characterInfo.mass}
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

      </ul>
    </div>
  );
};

CharacterInfo.propTypes = {
  userId: PropTypes.digit,
  getSelectedPostId: PropTypes.func,
  postId: PropTypes.digit,
}.isRequired;