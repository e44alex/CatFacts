import './App.css'
import { CatFact } from "./compoents/CatFact";
import { translationKeys } from "./translationKeys";
import { useTranslation } from "react-i18next";

export default function App() {
  const {t} = useTranslation();

  return (
    <div className="App">
      <h1>
        {t(translationKeys.app.welcome)}
      </h1>
      <CatFact/>
    </div>
  )
}
