import { useEffect, useState } from "react";
import { GachaPrize, GachaSystem } from "./models";

const data = {
    prizes: [
        {
            name: "Un cupón",
            quantity: 5,
        },
        {
            name: "juego gratis",
            quantity: 1,
        },
        {
            name: "paga 30 piedritas",
            quantity: 4,
        },
        {
            name: "paga 100 piedritas",
            quantity: 3,
        },
        {
            name: "paga 1000 piedritas",
            quantity: 1,
        },
    ],
};

export default function useGachaSystem() {
    const [gachaPrizes, setGachaPrizes] = useState([]);
    const [gachaHistory, setGachaHistory] = useState([]);
    const [gachaSystem] = useState(new GachaSystem());

    useEffect(() => {
        const prizes = data.prizes.map((p) => new GachaPrize(p.name, p.quantity));
        setGachaPrizes(prizes);
        gachaSystem.setPrizes(prizes);
        gachaSystem.generateGachaPercentages();
    }, [gachaSystem]);

    const addPrize = (item) => {
        if (!item.name || !item.quantity) {
            return;
        }
        const newGachaPrize = new GachaPrize(item.name, item.quantity);
        setGachaPrizes((prevGachaPrizes) => [...prevGachaPrizes, newGachaPrize]);
    };

    //   const removePrize = (item) => {};

    const pullGacha = (nombre = 'Jugador') => {
        const prize = gachaSystem.pullGacha();
        if (prize) {
            setGachaHistory(prevHistory => [...prevHistory, `${nombre} obtuvo ${prize.name}`])
            return `${nombre} obtuvo ${prize.name}`
        } else {
            return 'No hay premios para sortear'
        }
    }

    return {
        gachaPrizes,
        gachaHistory,
        addPrize,
        pullGacha,
    };
}
