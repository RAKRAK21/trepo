import { useEffect, useState } from "react";

function Highlight() {

 
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
		const filteredCoins = json.slice(0,50).filter((coin) => //filter함수를 이용. 가져온 코인들 중 탑 50에 해당하는 것 중에서.
          ["BNB", "BTC", "ETH"].includes(coin.symbol) //하이라이트 코인임.
        );
        setCoins(filteredCoins);
      });
  }, []);
  return (
    <div>
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

export default Highlight