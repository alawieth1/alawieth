
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AlawiETH() {
  const [amount, setAmount] = useState(10);
  const [wallet, setWallet] = useState("0xA1b40FEFAEad8D2f74c1eF2f3d036b8d6CB0443d");
  const [status, setStatus] = useState("");

  const handlePayment = () => {
    setStatus("✅ Betaling ontvangen. ETH wordt verzonden naar " + wallet);
    setTimeout(() => {
      setStatus("🔗 Transactie bevestigd! tx_hash: 0xalawiethlive123");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <Card className="w-full max-w-md bg-gray-900 border border-gray-700">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold text-center">AlawiETH - Koop Ethereum</h2>
          <div>
            <label className="block mb-1">Bedrag (€)</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-800 border-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1">ETH Walletadres</label>
            <Input
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="bg-gray-800 border-gray-600"
            />
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handlePayment}>
            Betaal nu
          </Button>
          {status && <div className="text-sm text-center mt-4">{status}</div>}
        </CardContent>
      </Card>
    </div>
  );
}
