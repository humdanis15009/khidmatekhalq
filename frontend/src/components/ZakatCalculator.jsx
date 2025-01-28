import React, { useState } from "react";

const ZakatCalculator = () => {
  const [cash, setCash] = useState();
  const [gold, setGold] = useState();
  const [savings, setSavings] = useState();
  const [debts, setDebts] = useState();
  const [zakat, setZakat] = useState(null);

  const zakatRate = 0.025;

  const calculateZakat = () => {
    const totalWealth = cash + gold + savings;
    const netWealth = totalWealth - debts;
    const zakatAmount = netWealth * zakatRate;
    setZakat(zakatAmount);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Zakat Calculator
        </h2>

        {/* Cash Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Cash (in your possession)
          </label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(Number(e.target.value))}
            placeholder="Enter the total amount of cash you have in hand or bank accounts"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            Enter the total amount of liquid cash you own, including:
            <ul className="list-disc list-inside">
              <li>Cash in hand (bills and coins)</li>
              <li>Bank account balances (checking, savings)</li>
              <li>Investments in money market funds</li>
            </ul>
            Exclude money that is not liquid (e.g., retirement funds, stocks,
            etc.).
          </p>
        </div>

        {/* Gold Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Gold (in grams)
          </label>
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(Number(e.target.value))}
            placeholder="Enter the weight of gold you own (in grams)"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            Enter the total weight of gold you own, including:
            <ul className="list-disc list-inside">
              <li>Gold coins, bars, and bullion</li>
              <li>
                Gold jewelry (if it meets the Nisab and is considered wealth)
              </li>
            </ul>
            Exclude gold that you do not intend to sell or wear frequently,
            unless it qualifies for Zakat based on value.
          </p>
        </div>

        {/* Savings Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Savings
          </label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(Number(e.target.value))}
            placeholder="Enter savings amount"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            Enter the total amount of savings you have, including:
            <ul className="list-disc list-inside">
              <li>Bank savings accounts</li>
              <li>Fixed deposits</li>
              <li>Liquid investments or stocks</li>
              <li>Emergency funds available for use</li>
            </ul>
            Exclude savings that are part of retirement or pension plans.
          </p>
        </div>

        {/* Debts Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Debts
          </label>
          <input
            type="number"
            value={debts}
            onChange={(e) => setDebts(Number(e.target.value))}
            placeholder="Enter total debts"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            Enter the total amount of debts you owe, including:
            <ul className="list-disc list-inside">
              <li>Personal loans (family, friends, institutions)</li>
              <li>Credit card debt</li>
              <li>Mortgages or home loans</li>
              <li>Business-related debts</li>
            </ul>
            Include debts due within the year; exclude long-term debts.
          </p>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateZakat}
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Calculate Zakat
        </button>

        {/* Zakat Result */}
        {zakat !== null && (
          <div className="mt-6 text-center text-lg font-semibold text-gray-700">
            <h3>Your Zakat Amount: {zakat.toFixed(2)} Rupees</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZakatCalculator;
