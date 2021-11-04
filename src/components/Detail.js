import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
      .then((res) => res.json())
      .then((json) => setCoin(json));
  }, []);
  console.log(coin);
  return (
    <div>
      <h1>{coin.name}</h1>
      <h2>{coin.symbol}</h2>
      <h3>{coin?.quotes?.USD.price}</h3>
    </div>
  );
};

export default Detail;
