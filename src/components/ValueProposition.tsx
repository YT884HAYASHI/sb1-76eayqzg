import { BarChart3, Users2, LineChart, ArrowRight, Sparkles } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Tradyの提供価値
          </span>
        </h2>
        
        <div className="flex flex-col items-center mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50" />
          
          <div className="bg-white rounded-2xl p-10 mb-8 max-w-2xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-lg text-sm font-semibold">
              STEP 1
            </div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <BarChart3 className="text-blue-600 w-8 h-8" />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                正確なターゲティングと営業代行
              </span>
            </h3>
            <p className="text-gray-600 pl-11">
              データ×AIによるスコアリングやキーパーソンへの個別最適コンタクトの実施
            </p>
          </div>
          
          <div className="relative">
            <ArrowRight className="text-blue-600 w-12 h-12 rotate-90 my-4" />
            <Sparkles className="absolute -right-6 top-1/2 text-blue-400 w-5 h-5 animate-pulse" />
          </div>
          
          <div className="bg-white rounded-2xl p-10 mb-8 max-w-2xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-lg text-sm font-semibold">
              STEP 2
            </div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Users2 className="text-blue-600 w-8 h-8" />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                プロフェッショナル支援
              </span>
            </h3>
            <p className="text-gray-600 pl-11">
              海外取引領域の専門家による全面的なサポート
            </p>
          </div>
          
          <div className="relative">
            <ArrowRight className="text-blue-600 w-12 h-12 rotate-90 my-4" />
            <Sparkles className="absolute -left-6 top-1/2 text-blue-400 w-5 h-5 animate-pulse" />
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-10 max-w-2xl w-full shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <LineChart className="w-8 h-8" />
                海外営業力の強化
              </h3>
              <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                RESULT
              </div>
            </div>
            <div className="pl-11 space-y-2">
              <p className="text-white/90">✓ 効率的な海外展開</p>
              <p className="text-white/90">✓ 高品質なリード獲得</p>
              <p className="text-white/90">✓ 成約率の向上</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}