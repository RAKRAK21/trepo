import styled from 'styled-components';
import { useEffect, useState, React } from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import Highlight from "./coinpages/highlight";
import TopGainer from "./coinpages/topgainer";
import TopVolume from "./coinpages/topvolume";

// https://www.binance.com/en/markets/overview
// https://github.com/dition0221/react-crypto_coin_tracker/tree/main/src
// https://github.com/fromnowwon/coin-tracker/blob/main/src/components/CoinTable.tsx
// https://dev.to/onlyayep/how-i-build-crypto-tracker-chart-with-react-4k9h
// https://velog.io/@sjoleee_/React-CRYPTO-TRACKER%EB%A5%BC-%EB%A7%8C%EB%93%A4%EB%A9%B0-%EB%B0%B0%EC%9A%B4-%EA%B2%83%EB%93%A4

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	
`;

const SubleftContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	
`;

const SublContainer2 = styled.div`
	display: flex;
	justify-content: space-between;
`;


const ChartContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	
	
`;

const TokensContainer = styled.div`
	display: flex;
  	flex-direction: column;
	width: 100%;
    max-width: 800px;
`;

const Button = styled.button`
	display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
	

    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상 */
    background: #228be6;
    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
`;

function Main() {
	
	 const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
		const filteredCoins = json.slice(0,50)
        setCoins(filteredCoins);
      });
  }, []);
	
	return (
		<MainContainer>
			<SubleftContainer>
				<SublContainer2>
					<nav>
						<Link to="/">
							<Button>Highlight Coin</Button>
						</Link>
						<Link to="/topgainer">
							<Button>Top gainer Coin</Button>
						</Link>
						<Link to="/topvolume">
							<Button>Top volume Coin</Button>
						</Link>
					</nav>
					<Routes>
						<Route path="/" element={<Highlight />} />
						<Route path="/topgainer" element={<TopGainer />} />
						<Route path="/topvolume" element={<TopVolume />} />
					</Routes>
				</SublContainer2>
			</SubleftContainer>
			
			
			<ChartContainer>
				<h2>차트</h2>
			</ChartContainer>
			<TokensContainer>
				<h1>The Coins! </h1>
					<ul>
					  {coins.map((coin) => (
						<li key={coin.id}>
						  {coin.symbol} {coin.quotes.USD.percent_change_24h}% ${coin.quotes.USD.price} USD
						</li>
					  ))}
					</ul>
			</TokensContainer>
			
		</MainContainer>
	);
}

export default Main;