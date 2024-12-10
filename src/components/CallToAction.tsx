import { Download, PlayCircle } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">
            海外営業の効率化をTradyと始めませんか？
          </h2>
          <div className="flex justify-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center gap-2 text-lg shadow-lg hover:shadow-xl">
              <Download size={24} />
              資料ダウンロード
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition flex items-center gap-2 text-lg shadow-sm hover:shadow-md">
              <PlayCircle size={24} />
              無料デモに申し込む
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}