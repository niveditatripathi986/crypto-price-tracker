import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCryptoAssets, simulateUpdate } from './store/cryptoSlice';

const App = () => {
  const cryptoAssets = useSelector(selectCryptoAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(simulateUpdate());
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Crypto Tracker</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
            <th>Circulating Supply</th>
            <th>Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptoAssets.map((crypto, index) => (
            <tr key={crypto.symbol} style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}>
              <td>{index + 1}</td>
              <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={crypto.logo} alt={crypto.name} style={{ width: '24px' }} />
                {crypto.name} <span style={{ color: 'gray' }}>{crypto.symbol}</span>
              </td>
              <td>${crypto.price.toLocaleString()}</td>
              <td style={{ color: crypto.change1h >= 0 ? 'green' : 'red' }}>{crypto.change1h}%</td>
              <td style={{ color: crypto.change24h >= 0 ? 'green' : 'red' }}>{crypto.change24h}%</td>
              <td style={{ color: crypto.change7d >= 0 ? 'green' : 'red' }}>{crypto.change7d}%</td>
              <td>${crypto.marketCap.toLocaleString()}</td>
              <td>${crypto.volume24h.toLocaleString()}</td>
              <td>{crypto.circulatingSupply}</td>
              <td>
                <img src={crypto.chartUrl} alt="chart" style={{ width: '100px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
