import React from 'react';
import { ClipboardList, BarChart2, LineChart, HandshakeIcon } from 'lucide-react';

export function Timeline() {
  const steps = [
    {
      period: '1ヶ月目',
      phase: 'ヒアリングとリスト作成',
      description: 'ビジネスゴールの設定と最適なターゲット市場の特定',
      icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-400 to-blue-600'
    },
    {
      period: '2-3ヶ月目',
      phase: 'アプローチとフィードバック',
      description: '圧倒的な営業プロセスの実行と市場からのレスポンス分析',
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-500 to-blue-700'
    },
    {
      period: '4ヶ月目',
      phase: '中間評価と戦略調整',
      description: 'データに基づく戦略の最適化と方向性の微調整',
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-600 to-blue-800'
    },
    {
      period: '5-6ヶ月目',
      phase: '商談と契約のクローズ',
      description: '専門家による商談支援と契約締結サポート',
      icon: <HandshakeIcon className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-700 to-blue-900'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            サービスの流れ（サンプル）
          </h2>
          <p className="text-gray-600 text-lg">
            段階的なアプローチで、確実な海外展開を実現します
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r w-full" style={{
                backgroundImage: `linear-gradient(to right, ${step.color})`
              }} />
              
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 rounded-full p-4 flex-shrink-0">
                    {step.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {step.period}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.phase}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}