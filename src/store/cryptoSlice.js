import { createSlice } from '@reduxjs/toolkit';
import btc from '../assets/bitcoin.png';
import eth from '../assets/etherum.png';
import usdt from '../assets/tether.png'; // temporary fallback

import xrp from '../assets/xrp.png';
import bnb from '../assets/binance.png';
import chart from '../assets/chart.png';


const initialState = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: '19.85M',
    logo: btc,
    chartUrl: chart,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1802.46,
    change1h: 0.6,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: '120.71M',
    logo: eth,
    chartUrl: chart,
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    change1h: 0.0,
    change24h: 0.0,
    change7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: '145.27B',
    logo: usdt,
    chartUrl: chart,
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    price: 2.22,
    change1h: 0.46,
    change24h: 0.54,
    change7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: '58.39B',
    logo: xrp,
    chartUrl: chart,
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    price: 606.65,
    change1h: 0.09,
    change24h: -1.2,
    change7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: '140.89M',
    logo: bnb,
    chartUrl: chart,
  },
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    simulateUpdate: (state) => {
      return state.map((asset) => {
        const rand = () => (Math.random() * 2 - 1) * 2;
        return {
          ...asset,
          price: +(asset.price * (1 + rand() / 100)).toFixed(2),
          change1h: +(rand()).toFixed(2),
          change24h: +(rand()).toFixed(2),
          change7d: +(rand()).toFixed(2),
          volume24h: +(asset.volume24h * (1 + rand() / 100)).toFixed(0),
        };
      });
    },
  },
});

export const { simulateUpdate } = cryptoSlice.actions;
export const selectCryptoAssets = (state) => state.crypto;
export default cryptoSlice.reducer;