export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            海外営業を加速するパートナー
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            あなたの商品が「刺さる」海外事業者を見つけるサービス
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition text-lg">
              資料ダウンロード
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition text-lg">
              無料デモに申し込む
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}