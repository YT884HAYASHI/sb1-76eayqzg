import { Search, Users, MessageCircle, Building } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Search className="w-16 h-16 text-blue-600" />,
      title: 'データドリブンなマッチング',
      description: '全世界の事業者リストに加えてセールスシグナルも加味してマッチ度を測定（御社の商品カテゴリーをウェブなどで検索している事業者をスコア化）',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: '最適な担当者へのアプローチ',
      description: '対象となった会社の組織図や御社商材を踏まえてコンタクトすべき担当者とコンタクト情報を提供します。',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <MessageCircle className="w-16 h-16 text-blue-600" />,
      title: 'パーソナライズされたコミュニケーション',
      description: '対象者の情報と関心毎、御社商材の訴求ポイントを考慮してそれぞれに反応率が高いと想定されるメッセージを送信、フォローアップも行う',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <Building className="w-16 h-16 text-blue-600" />,
      title: 'エキスパートチームのサポート',
      description: '総合商社やAmazon出身の海外流通エキスパートやデータ解析チームが取引成立に向けて支援。複雑な海外取引を簡単に',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-24" />
                <div className="absolute -bottom-8 left-8">
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}