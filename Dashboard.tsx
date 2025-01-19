import React from 'react'
import { Stock, PortfolioMetrics } from '../types';
import { TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';

interface DashboardProps {
  stocks: Stock[];
  metrics: PortfolioMetrics;
}

export default function Dashboard({ stocks, metrics }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Value</p>
            <p className="text-2xl font-bold">${metrics.totalValue.toFixed(2)}</p>
          </div>
          <DollarSign className="h-8 w-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Gain/Loss</p>
            <p className={`text-2xl font-bold ${metrics.totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              ${Math.abs(metrics.totalGainLoss).toFixed(2)}
              {metrics.totalGainLoss >= 0 ? ' ▲' : ' ▼'}
            </p>
          </div>
          {metrics.totalGainLoss >= 0 ? (
            <TrendingUp className="h-8 w-8 text-green-500" />
          ) : (
            <TrendingDown className="h-8 w-8 text-red-500" />
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Top Performer</p>
            {metrics.topPerformer ? (
              <>
                <p className="font-bold">{metrics.topPerformer.symbol}</p>
                <p className="text-sm text-green-500">
                  +${(metrics.topPerformer.currentPrice - metrics.topPerformer.buyPrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-gray-400">No data</p>
            )}
          </div>
          <TrendingUp className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Portfolio Distribution</p>
            <p className="font-bold">{stocks.length} Stocks</p>
          </div>
          <PieChart className="h-8 w-8 text-purple-500" />
        </div>
      </div>
    </div>
  );
}
