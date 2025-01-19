import React from 'react';
import { Stock } from '../types';
import { Pencil, Trash2 } from 'lucide-react';

interface StockListProps {
  stocks: Stock[];
  onEdit: (stock: Stock) => void;
  onDelete: (id: string) => void;
}

export default function StockList({ stocks, onEdit, onDelete }: StockListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buy Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gain/Loss</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stocks.map((stock) => {
              const gainLoss = (stock.currentPrice - stock.buyPrice) * stock.quantity;
              return (
                <tr key={stock.id}>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{stock.symbol}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stock.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stock.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${stock.buyPrice}</td>
                {/* //   <td className="px-6 py-4 whitespace-nowrap">${stock.currentPrice.toFixed(2)}</td> */}
                  <td className={`px-6 py-4 whitespace-nowrap ${gainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    ${Math.abs(gainLoss).toFixed(2)}
                    {gainLoss >= 0 ? ' ▲' : ' ▼'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => onEdit(stock)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => onDelete(stock.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
