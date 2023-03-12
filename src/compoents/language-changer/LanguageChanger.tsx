import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { translationKeys } from "../../translationKeys";

const languageKeys: Record<string, string> = translationKeys.language;

export const LanguageChanger = () => {
  const {t, i18n} = useTranslation();
  const [language, setLanguage] = useState('en');

  const onLanguageChange = useCallback((language: string) => {
    i18n.changeLanguage(language).then(r => setLanguage(language));
  }, []);

  return <div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {t(languageKeys[language])}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {Object.keys(languageKeys)
          .map(langKey => (
            <Dropdown.Item key={langKey} onClick={() => onLanguageChange(langKey)}>
              {t(languageKeys[langKey])}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
}