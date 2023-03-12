import React, { useLayoutEffect, useMemo, useState } from "react";
import { Fact } from "../../types/Fact";
import catFactsApi from "../../services/catFacts";
import { useTranslation } from "react-i18next";
import { translate } from "../../i18n";
import { TranslateResponse } from "../../types/translations";

const getRandomFact = (callback: (data: Fact) => void) => {
  catFactsApi.getRandomFact().then(data => callback(data))
}

export const CatFact = () => {
  const {t, i18n} = useTranslation();
  const [fact, setFact] = useState<Fact>();

  const translatedFact = useMemo((): string | undefined => {
    if (fact?.fact) {
      let translation = fact?.fact;
      translate(fact?.fact!, 'en', i18n.language)
        .then((data: TranslateResponse) => translation = data?.translations?.translation);

      return translation;
    }

    return fact?.fact
  }, [fact])

  useLayoutEffect(() => {
    let mounted = true;

    getRandomFact(data => {
      if (mounted) setFact(data)
    });
    setInterval(() => {
      getRandomFact(data => {
        if (mounted) setFact(data)
      });
    }, 10 * 1000)

    return () => {
      mounted = false
    };
  }, []);

  return <div className="cat-fact">
    <div className="cat-fact__image">
      <img src='src/assets/catNinja.jpg' alt="ninja cat"/>
      <div>{translatedFact}</div>
    </div>
  </div>
}