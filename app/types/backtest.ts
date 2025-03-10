import { DailyQuote } from '@/app/lib/jquants/api';

export type TabType = 'buy' | 'sell' | 'tp' | 'sl';

export const TAB_LABELS: Record<TabType, string> = {
  buy: '買い条件',
  sell: '売り条件',
  tp: '利確条件',
  sl: '損切り条件'
} as const;

export interface Condition {
  indicator: string;
  period: number;
  params: Record<string, number>;
}

export interface IndicatorType {
  id: string;
  name: string;
  description: string;
  defaultPeriod: number;
  parameters?: {
    name: string;
    type: 'number' | 'string';
    default: number | string;
  }[];
}

export interface Trade {
  entryDate: string;
  exitDate: string;
  entryPrice: number;
  exitPrice: number;
  quantity: number;
  profitLoss: number;
  returnPercent: number;
}

export interface BacktestResult {
  id: string;
  code: string;
  startDate: string;
  endDate: string;
  initialCash: number;
  trades: Trade[];
  finalEquity: number;
  totalReturn: number;
  winRate: number;
  maxDrawdown: number;
  sharpeRatio: number;
  // チャート表示用データ
  priceData: DailyQuote[];
  dates: string[];
  equity: number[];
  // RSI設定
  rsiPeriod: number;
}
