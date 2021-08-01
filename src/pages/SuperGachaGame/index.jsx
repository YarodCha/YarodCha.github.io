import React, { useState } from "react";
import "./SuperGachaGame.css";
import useGachaSystem from "./useGachaSystem";

export default function SuperGachaGame() {
  const { gachaPrizes, addPrize } = useGachaSystem();
  const [nombrePremio, setNombrePremio] = useState("");
  const [cantidadPremio, setCantidadPremio] = useState("");

  return (
    <div className="supergachagame-container">
      <header className="supergachagame-header">
        <h1>Super Gacha Game 👋</h1>
        <small>Bienvenidos</small>
      </header>
      <div className="supergachagame-content">
        <ul>
          {gachaPrizes.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <br />
        <div className="supergachagame-modal">
          <h4>Añade items al gacha</h4>
          <div>
            <label htmlFor="nombre_premio">Nombre del premio</label>
            <input
              value={nombrePremio}
              onChange={(e) => setNombrePremio(e.target.value)}
              id="nombre_premio"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="cantidad_premio">Cantidad</label>
            <input
              value={cantidadPremio}
              onChange={(e) => setCantidadPremio(e.target.value)}
              id="cantidad_premio"
              type="number"
            />
          </div>
          <div>
            <button onClick={() => addPrize(nombrePremio)}>Agregar</button>
          </div>
        </div>
      </div>
      <aside className="supergachagame-history">
        <h3>Historial</h3>
        <ol>
          <li>
            <b>Pepito</b> obtuvo <b>1 autoban</b>
          </li>
          <li>
            <b>Pepito</b> obtuvo <b>1 autoban</b>
          </li>
        </ol>
      </aside>
    </div>
  );
}
