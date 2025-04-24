import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCryptoAssets, simulateUpdate } from '../store/cryptoSlice';

export const CryptoTable = () => {
  const assets = useSelector(selectCryptoAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(simulateUpdate());
    }, 1500); // Updates every 1.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dispatch]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-sm text-left text-gray-700">
        <thead className="bg-gray-100 uppercase text-xs">
          <tr>
            <th className="px-4 py-2">Name</th> {/* Moved to first */}
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">1h %</th>
            <th className="px-4 py-2">24h %</th>
            <th className="px-4 py-2">7d %</th>
            <th className="px-4 py-2">Market Cap</th>
            <th className="px-4 py-2">Volume(24h)</th>
            <th className="px-4 py-2">Circulating Supply</th>
            <th className="px-4 py-2">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <tr key={asset.symbol} className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-2 flex items-center gap-2">
                <img src={asset.logo} alt={asset.name} className="w-5 h-5 rounded-full" />
                <div>
                  <div className="font-medium">{asset.name}</div>
                  <div className="text-xs text-gray-500">{asset.symbol}</div>
                </div>
              </td>
              <td className="px-4 py-2">{idx + 1}</td>
              <td className="px-4 py-2">${asset.price.toFixed(2)}</td>
              <td className={`px-4 py-2 ${asset.change1h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {asset.change1h.toFixed(2)}%
              </td>
              <td className={`px-4 py-2 ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {asset.change24h.toFixed(2)}%
              </td>
              <td className={`px-4 py-2 ${asset.change7d >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {asset.change7d.toFixed(2)}%
              </td>
              <td className="px-4 py-2">${asset.marketCap.toLocaleString()}</td>
              <td className="px-4 py-2">${asset.volume24h.toLocaleString()}</td>
              <td className="px-4 py-2">{asset.circulatingSupply} {asset.symbol}</td>
              <td className="px-4 py-2">
                <img src={asset.chartUrl} alt="7d chart" className="h-8" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
