import { useEffect, useState } from "react";

function TopVolume() {
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // 코인을 24시간 동안의 변동률(%)을 기준으로 정렬
        const sortedCoins = json.slice(0,50).sort( //탑 200 코인 중에서 24시간 변동률 기준으로 정렬
          (a, b) => b.quotes.USD.volume_24h - a.quotes.USD.volume_24h
        );

        // 상위 3개의 코인 선택
        const top3Coins = sortedCoins.slice(0, 3);
        
        setCoins(top3Coins);
      });
  }, []);
  
  return (
    <div>
      <h1>The Coins! </h1>
      <ol>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.symbol} {coin.quotes.USD.percent_change_24h}% ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TopVolume;
