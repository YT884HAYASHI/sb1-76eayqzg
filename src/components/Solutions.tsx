import { Users, Target, MessageSquare } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: '網羅的なデータより取引可能性の高い会社をリスト化',
      description:
        '全世界の事業者のリストに加えセールスシグナルも加味してマッチ度を測定',
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: '対象会社の当たるべき担当者に適切にアプローチ',
      description:
        '組織図と御社商材を踏まえて最適な担当者とコンタクト情報を提供',
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: '質の高いリード獲得',
      description:
        '対象者の情報と関心事を考慮した最適なメッセージングとフォローアップ',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tradyで実現する姿</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}