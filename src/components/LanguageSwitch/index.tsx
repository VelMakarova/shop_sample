import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RUS, ENG } from '../../constants/languages.js';
import { switchLanguage } from '../../actions';
import { SHOW_ENG, SHOW_RUS } from '../../types';
import { RootState } from '../../reducers/rootReducer';

const LanguageSwitsh: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const [isOpen, setOpen] = useState(false);
  const switchClass = isOpen ? 'lang-switch is-open' : 'lang-switch';

  const setEng = () => dispatch(switchLanguage(SHOW_ENG, ENG));
  const setRus = () => dispatch(switchLanguage(SHOW_RUS, RUS));

  return (
    <div className={switchClass} onClick={() => setOpen(!isOpen)}>
      <div className="lang-switch-trigger">
        {language}
        <div className="lang-switch-arrow has-icon">
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
      </div>
      <ul className="lang-switch-dropdown">
        <li className="lang-switch-option" onClick={() => setEng()}>
          {ENG}
        </li>
        <li className="lang-switch-option" onClick={() => setRus()}>
          {RUS}
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitsh;
