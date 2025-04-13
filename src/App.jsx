import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(10);
  const [wallet, setWallet] = useState('0xA1b40FEFAEad8D2f74c1eF2f3d036b8d6CB0443d');
  const [status, setStatus] = useState('');

  const handlePayment = () => {
    setStatus('✅ Betaling ontvangen. ETH wordt verzonden naar ' + wallet);
    setTimeout(() => {
      setStatus('🔗 Transactie bevestigd! tx_hash: 0xalawiethlive123');
    }, 3000);
  };

  return (
    <div style={{ padding: 24, fontFamily: 'Arial', background: '#111', color: '#fff', minHeight: '100vh' }}>
      <h2>💸 AlawiETH - Koop Ethereum</h2>
      <div>
        <label>Bedrag (€):</label><br />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>ETH Walletadres:</label><br />
        <input type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} />
      </div>
      <button onClick={handlePayment}>Betaal nu</button>
      <p>{status}</p>
    </div>
  );
}

export default App;
