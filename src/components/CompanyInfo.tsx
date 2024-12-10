export function CompanyInfo() {
  const companyDetails = [
    { label: '社名', value: 'ユアトレード株式会社（英語名：YourTrade, Inc. ）' },
    { label: '資本金', value: '1億円' },
    {
      label: '取引銀行',
      value: '三井住友銀行、みずほ銀行、商工中金、日本政策金融公庫',
    },
    {
      label: '本社所在地',
      value: '東京都渋谷区桜丘町２６番１号 セルリアンタワー１５階',
    },
    {
      label: '台湾子会社',
      value:
        '您的交易股份有限公司 (住所：臺北市信義區基隆路２段５１號１４樓）',
    },
    { label: '代表者', value: '柳澤裕人' },
    { label: '設立', value: '2021年12月28日' },
    { label: 'TEL', value: '03-6822-0941 （代表番号）' },
    { label: 'Mail', value: 'info@yourtrade.jp' },
    { label: 'ホームページ', value: 'https://www.yourtrade.jp/' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">会社概要</h2>
        <div className="max-w-3xl mx-auto">
          {companyDetails.map((detail, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200"
            >
              <dt className="font-semibold text-gray-700">{detail.label}</dt>
              <dd className="col-span-3 text-gray-600">{detail.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}