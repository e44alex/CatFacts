import './App.css'
import { CatFact } from "./compoents/cat-facts/CatFact";
import { translationKeys } from "./translationKeys";
import { useTranslation } from "react-i18next";
import { LanguageChanger } from "./compoents/language-changer/LanguageChanger";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const {t, i18n} = useTranslation();

  return (
    <div className="App">
      <h1>
        {t(translationKeys.app.welcome)} ({i18n.language})
      </h1>
      <CatFact/>
      <LanguageChanger/>
    </div>
  )
}
