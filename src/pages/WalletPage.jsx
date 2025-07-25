import { useState } from 'react';
import { FaMoneyBillWave, FaLock, FaEye, FaEyeSlash, FaCreditCard } from 'react-icons/fa';

export default function WalletPage() {
  const [stripeAccount, setStripeAccount] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [balance] = useState(120); // رصيد المحفظة كمثال ثابت

  const handleTransfer = (e) => {
    e.preventDefault();
    console.log('Transferring money to:', stripeAccount, 'Amount:', amount);
    alert('Transfer initiated!');
  };

  return (
    <div className="min-h-screen bg-[#FBF6E3] p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-lg border border-[#FD7924]">
        <h2 className="text-3xl font-bold text-[#FD7924] mb-6 text-center">My Wallet</h2>

        {/* رصيد المستخدم */}
        <div className="mb-6 flex items-center justify-between bg-[#F7E9CC] rounded-xl px-5 py-4 text-[#262626] font-semibold shadow-md">
          <span>💰 Current Balance:</span>
          <span>${balance.toFixed(2)}</span>
        </div>

        <form onSubmit={handleTransfer} className="space-y-6">
          {/* Stripe Account */}
          <div className="relative">
            <FaCreditCard className="absolute top-3.5 left-4 text-[#FD7924]" />
            <input
              type="text"
              placeholder="Stripe Account Email or ID"
              value={stripeAccount}
              onChange={(e) => setStripeAccount(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border border-[#FD7924] rounded-full bg-[#FEF8E7] focus:outline-none focus:ring-2 focus:ring-[#FD7924]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-4 text-[#FD7924]" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Payment Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-3 border border-[#FD7924] rounded-full bg-[#FEF8E7] focus:outline-none focus:ring-2 focus:ring-[#FD7924]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3.5 right-4 text-[#FD7924] cursor-pointer select-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Amount */}
          <div className="relative">
            <FaMoneyBillWave className="absolute top-3.5 left-4 text-[#FD7924]" />
            <input
              type="number"
              placeholder="Amount to Transfer"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min={1}
              className="w-full pl-10 pr-4 py-3 border border-[#FD7924] rounded-full bg-[#FEF8E7] focus:outline-none focus:ring-2 focus:ring-[#FD7924]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FD7924] text-white font-semibold rounded-full hover:bg-[#e66e00] transition"
          >
            Transfer Funds
          </button>
        </form>
      </div>
    </div>
  );
}