import React, {useLayoutEffect, useState} from "react";
import {Fact} from "../types/Fact";
import catFactsApi from "../services/catFacts";

const getRandomFact = (callback: (data: Fact) => void) => {
    catFactsApi.getRandomFact().then(data => callback(data))
}

export const CatFact = () => {
    const [fact, setFact]=  useState<Fact>();


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
            <div>{fact?.fact}</div>
        </div>
    </div>
}