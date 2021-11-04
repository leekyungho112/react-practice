import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [invert, setInvert] = useState(false);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (e) => {
    setUsd(e.target.value);
  };
  const onClick = () => {
    setInvert((prev) => !prev);
  };
  return (
    <div>
      <h1>The Coins!{coins.length}</h1>
      {loading ? (
        'loading....'
      ) : (
        <>
          {/* <select>
            {' '}
            {coins.slice(0, 200).map((coin) => (
              <option key={coin.id}>
                {invert ? (
                  `you are buy BTC: ${coin.name} ${Math.floor(
                    coin?.quotes?.USD.price / usd
                  )}`
                ) : (
                  <Link to={`/detail/${coin.id}`}>
                    `${coin.name} (USD:${coin?.quotes?.USD.price})`
                  </Link>
                )}
              </option>
            ))}{' '}
          </select> */}
          <ul>
            {coins.slice(0, 200).map((coin) => (
              <li key={coin.id}>
                <Link to={`/detail/${coin.id}`}>
                  {coin.name} (USD:${coin?.quotes?.USD.price})
                </Link>
              </li>
            ))}
          </ul>

          {/* <input type="number" value={usd} onChange={onChange} />
          <button onClick={onClick}>계산하기</button> */}
        </>
      )}
    </div>
  );
};

export default Coins;
