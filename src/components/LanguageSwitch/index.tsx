import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../../store/ui/actions";
import { RootState } from "../../store/rootReducer";
import Language from "../../constants/language";

const LanguageSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.uiSettings.language);
  const [isOpen, setOpen] = useState(false);
  const switchClass = isOpen ? "lang-switch is-open" : "lang-switch";

  return (
    <div
      tabIndex={0}
      role="button"
      className={switchClass}
      onClick={() => setOpen(!isOpen)}
      onKeyDown={() => setOpen(!isOpen)}
    >
      <div className="lang-switch-trigger">
        {language}
        <div className="lang-switch-arrow has-icon">
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
      </div>
      <ul className="lang-switch-dropdown">
        <li className="lang-switch-option">
          <button
            className="lang-switch-btn"
            type="button"
            onClick={() => dispatch(switchLanguage(Language.en))}
          >
            {Language.en}
          </button>
        </li>
        <li className="lang-switch-option">
          <button
            className="lang-switch-btn"
            type="button"
            onClick={() => dispatch(switchLanguage(Language.ru))}
          >
            {Language.ru}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitch;
