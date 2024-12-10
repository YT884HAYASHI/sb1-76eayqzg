import { Download, PlayCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white py-6 px-4 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Trady</h1>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2">
            <Download size={20} />
            資料ダウンロード
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition flex items-center gap-2">
            <PlayCircle size={20} />
            無料デモに申し込む
          </button>
        </div>
      </div>
    </header>
  );
}