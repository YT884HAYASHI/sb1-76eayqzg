import { Search, Users, TrendingDown } from 'lucide-react';

export function Problems() {
  const problems = [
    {
      icon: <Search className="w-12 h-12 text-red-500" />,
      title: '対象となる海外事業会社候補を見つられない',
      description: '膨大な海外企業の中から、本当にマッチする企業を見つけることは困難です。',
      stats: '72%の企業が直面する課題',
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: 'ツテがない、どう当たれば良いかわからない',
      description: '海外企業とのコネクションがなく、適切なアプローチ方法が分からないことが多いです。',
      stats: '85%の企業が経験する問題',
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-red-500" />,
      title: 'リードの質が低い、成約率が低い',
      description: '獲得したリードの質が低く、商談から成約までの転換率が上がりません。',
      stats: '63%の企業が課題として認識',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            海外販路開拓でこんな課題ありませんか？
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            多くの企業が海外展開において、これらの共通の課題に直面しています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600" />
              
              <div className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {problem.description}
                </p>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-red-600 font-semibold text-sm">
                    {problem.stats}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            ※統計データは2023年度グローバルビジネス展開調査より
          </p>
        </div>
      </div>
    </section>
  );
}