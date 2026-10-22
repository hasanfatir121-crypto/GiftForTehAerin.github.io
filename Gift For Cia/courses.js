/* =====================================================
   100 KANJI DASAR
===================================================== */

const kanjiData = [

    {
        kanji: "一",
        meaning: "Satu",
        reading: "いち / ひと",
        Romaji: "ichi / uchi",
        level: "N5",
        examples: [
            ["一人です。", "Saya sendirian."],
            ["一つください。", "Tolong beri satu."],
            ["一月です。", "Ini bulan Januari."],
            ["一番好きです。", "Saya paling suka."],
            ["一緒に行きましょう。", "Mari pergi bersama."]
        ]
    },

    {
        kanji: "二",
        meaning: "Dua",
        reading: "に / ふた",
        level: "N5",
        examples: [
            ["二人です。", "Ada dua orang."],
            ["二つください。", "Tolong beri dua."],
            ["二月です。", "Ini bulan Februari."],
            ["二時です。", "Sekarang jam dua."],
            ["二階に行きます。", "Saya pergi ke lantai dua."]
        ]
    },

    {
        kanji: "三",
        meaning: "Tiga",
        reading: "さん / みっ",
        level: "N5",
        examples: [
            ["三人います。", "Ada tiga orang."],
            ["三つあります。", "Ada tiga buah."],
            ["三月です。", "Ini bulan Maret."],
            ["三時です。", "Sekarang jam tiga."],
            ["三日休みます。", "Saya libur selama tiga hari."]
        ]
    },

    {
        kanji: "四",
        meaning: "Empat",
        reading: "よん / し",
        level: "N5",
        examples: [
            ["四人います。", "Ada empat orang."],
            ["四つください。", "Tolong beri empat."],
            ["四月です。", "Ini bulan April."],
            ["四時です。", "Sekarang jam empat."],
            ["四日休みます。", "Saya libur selama empat hari."]
        ]
    },

    {
        kanji: "五",
        meaning: "Lima",
        reading: "ご / いつ",
        level: "N5",
        examples: [
            ["五人います。", "Ada lima orang."],
            ["五つください。", "Tolong beri lima."],
            ["五月です。", "Ini bulan Mei."],
            ["五時です。", "Sekarang jam lima."],
            ["五日休みます。", "Saya libur selama lima hari."]
        ]
    },

    {
        kanji: "六",
        meaning: "Enam",
        reading: "ろく / むっ",
        level: "N5",
        examples: [
            ["六人います。", "Ada enam orang."],
            ["六つあります。", "Ada enam buah."],
            ["六月です。", "Ini bulan Juni."],
            ["六時です。", "Sekarang jam enam."],
            ["六日休みます。", "Saya libur selama enam hari."]
        ]
    },

    {
        kanji: "七",
        meaning: "Tujuh",
        reading: "なな / しち",
        level: "N5",
        examples: [
            ["七人います。", "Ada tujuh orang."],
            ["七つあります。", "Ada tujuh buah."],
            ["七月です。", "Ini bulan Juli."],
            ["七時です。", "Sekarang jam tujuh."],
            ["七日休みます。", "Saya libur selama tujuh hari."]
        ]
    },

    {
        kanji: "八",
        meaning: "Delapan",
        reading: "はち / やっ",
        level: "N5",
        examples: [
            ["八人います。", "Ada delapan orang."],
            ["八つあります。", "Ada delapan buah."],
            ["八月です。", "Ini bulan Agustus."],
            ["八時です。", "Sekarang jam delapan."],
            ["八日休みます。", "Saya libur selama delapan hari."]
        ]
    },

    {
        kanji: "九",
        meaning: "Sembilan",
        reading: "きゅう / ここの",
        level: "N5",
        examples: [
            ["九人います。", "Ada sembilan orang."],
            ["九つあります。", "Ada sembilan buah."],
            ["九月です。", "Ini bulan September."],
            ["九時です。", "Sekarang jam sembilan."],
            ["九日休みます。", "Saya libur selama sembilan hari."]
        ]
    },

    {
        kanji: "十",
        meaning: "Sepuluh",
        reading: "じゅう / とお",
        level: "N5",
        examples: [
            ["十人います。", "Ada sepuluh orang."],
            ["十個あります。", "Ada sepuluh buah."],
            ["十時です。", "Sekarang jam sepuluh."],
            ["十月です。", "Ini bulan Oktober."],
            ["十円あります。", "Ada sepuluh yen."]
        ]
    },

    {
        kanji: "百",
        meaning: "Seratus",
        reading: "ひゃく",
        level: "N5",
        examples: [
            ["百円あります。", "Ada seratus yen."],
            ["百人います。", "Ada seratus orang."],
            ["百ページ読みました。", "Saya membaca seratus halaman."],
            ["百個あります。", "Ada seratus buah."],
            ["百円ください。", "Tolong beri seratus yen."]
        ]
    },

    {
        kanji: "千",
        meaning: "Seribu",
        reading: "せん",
        level: "N5",
        examples: [
            ["千円あります。", "Ada seribu yen."],
            ["千人います。", "Ada seribu orang."],
            ["千円ください。", "Tolong beri seribu yen."],
            ["千ページあります。", "Ada seribu halaman."],
            ["千個あります。", "Ada seribu buah."]
        ]
    },

    {
        kanji: "万",
        meaning: "Sepuluh ribu",
        reading: "まん",
        level: "N5",
        examples: [
            ["一万円あります。", "Saya punya sepuluh ribu yen."],
            ["一万人います。", "Ada sepuluh ribu orang."],
            ["二万円です。", "Harganya dua puluh ribu yen."],
            ["三万円使いました。", "Saya menghabiskan tiga puluh ribu yen."],
            ["一万ドルです。", "Harganya sepuluh ribu dolar."]
        ]
    },

    {
        kanji: "円",
        meaning: "Yen / Lingkaran",
        reading: "えん",
        level: "N5",
        examples: [
            ["百円です。", "Harganya seratus yen."],
            ["千円あります。", "Saya punya seribu yen."],
            ["五百円ください。", "Tolong beri lima ratus yen."],
            ["円を使います。", "Saya menggunakan yen."],
            ["これは三百円です。", "Ini harganya tiga ratus yen."]
        ]
    },

    {
        kanji: "日",
        meaning: "Hari / Matahari",
        reading: "ひ / にち / か",
        level: "N5",
        examples: [
            ["今日はいい日です。", "Hari ini adalah hari yang baik."],
            ["日曜日です。", "Hari ini hari Minggu."],
            ["毎日勉強します。", "Saya belajar setiap hari."],
            ["日本へ行きます。", "Saya pergi ke Jepang."],
            ["日が出ました。", "Matahari telah terbit."]
        ]
    },

    {
        kanji: "月",
        meaning: "Bulan",
        reading: "つき / げつ / がつ",
        level: "N5",
        examples: [
            ["月がきれいです。", "Bulannya indah."],
            ["月曜日です。", "Hari ini hari Senin."],
            ["来月行きます。", "Saya pergi bulan depan."],
            ["一月です。", "Ini bulan Januari."],
            ["月を見ました。", "Saya melihat bulan."]
        ]
    },

    {
        kanji: "火",
        meaning: "Api",
        reading: "ひ / か",
        level: "N5",
        examples: [
            ["火があります。", "Ada api."],
            ["火曜日です。", "Hari ini hari Selasa."],
            ["火を消してください。", "Tolong matikan apinya."],
            ["火が強いです。", "Apinya kuat."],
            ["火を使います。", "Saya menggunakan api."]
        ]
    },

    {
        kanji: "水",
        meaning: "Air",
        reading: "みず / すい",
        level: "N5",
        examples: [
            ["水を飲みます。", "Saya minum air."],
            ["水曜日です。", "Hari ini hari Rabu."],
            ["水をください。", "Tolong beri air."],
            ["水が冷たいです。", "Airnya dingin."],
            ["水を買いました。", "Saya membeli air."]
        ]
    },

    {
        kanji: "木",
        meaning: "Pohon / Kayu",
        reading: "き / もく",
        level: "N5",
        examples: [
            ["木があります。", "Ada pohon."],
            ["木曜日です。", "Hari ini hari Kamis."],
            ["大きな木です。", "Ini pohon yang besar."],
            ["木の下にいます。", "Saya berada di bawah pohon."],
            ["木を見ます。", "Saya melihat pohon."]
        ]
    },

    {
        kanji: "金",
        meaning: "Emas / Uang",
        reading: "かね / きん",
        level: "N5",
        examples: [
            ["お金があります。", "Saya punya uang."],
            ["金曜日です。", "Hari ini hari Jumat."],
            ["お金を使います。", "Saya menggunakan uang."],
            ["金が好きです。", "Saya suka emas."],
            ["お金をください。", "Tolong beri uang."]
        ]
    },

    {
        kanji: "土",
        meaning: "Tanah",
        reading: "つち / ど",
        level: "N5",
        examples: [
            ["土があります。", "Ada tanah."],
            ["土曜日です。", "Hari ini hari Sabtu."],
            ["土を使います。", "Saya menggunakan tanah."],
            ["土が乾いています。", "Tanahnya kering."],
            ["土を見ました。", "Saya melihat tanah."]
        ]
    },

    {
        kanji: "人",
        meaning: "Orang",
        reading: "ひと / じん / にん",
        level: "N5",
        examples: [
            ["あの人は先生です。", "Orang itu adalah guru."],
            ["人がいます。", "Ada orang."],
            ["日本人です。", "Saya orang Jepang."],
            ["三人います。", "Ada tiga orang."],
            ["人が多いです。", "Banyak orang."]
        ]
    },

    {
        kanji: "子",
        meaning: "Anak",
        reading: "こ / し",
        level: "N5",
        examples: [
            ["子どもがいます。", "Ada anak."],
            ["あの子は学生です。", "Anak itu adalah siswa."],
            ["子どもと遊びます。", "Saya bermain dengan anak."],
            ["男の子です。", "Dia anak laki-laki."],
            ["女の子です。", "Dia anak perempuan."]
        ]
    },

    {
        kanji: "女",
        meaning: "Perempuan",
        reading: "おんな / じょ",
        level: "N5",
        examples: [
            ["女の人です。", "Dia seorang perempuan."],
            ["女の子がいます。", "Ada anak perempuan."],
            ["あの女の人は先生です。", "Perempuan itu adalah guru."],
            ["女の人が来ました。", "Seorang perempuan datang."],
            ["彼女は学生です。", "Dia adalah seorang siswi."]
        ]
    },

    {
        kanji: "男",
        meaning: "Laki-laki",
        reading: "おとこ / だん",
        level: "N5",
        examples: [
            ["男の人です。", "Dia seorang laki-laki."],
            ["男の子がいます。", "Ada anak laki-laki."],
            ["あの男の人は先生です。", "Laki-laki itu adalah guru."],
            ["男の人が来ました。", "Seorang laki-laki datang."],
            ["彼は学生です。", "Dia adalah seorang siswa."]
        ]
    },

    {
        kanji: "山",
        meaning: "Gunung",
        reading: "やま / さん",
        level: "N5",
        examples: [
            ["山があります。", "Ada gunung."],
            ["山に登ります。", "Saya mendaki gunung."],
            ["大きな山です。", "Ini gunung yang besar."],
            ["山がきれいです。", "Gunungnya indah."],
            ["山を見ました。", "Saya melihat gunung."]
        ]
    },

    {
        kanji: "川",
        meaning: "Sungai",
        reading: "かわ / せん",
        level: "N5",
        examples: [
            ["川があります。", "Ada sungai."],
            ["川で遊びます。", "Saya bermain di sungai."],
            ["川の水はきれいです。", "Air sungainya bersih."],
            ["川を見ました。", "Saya melihat sungai."],
            ["大きな川です。", "Ini sungai yang besar."]
        ]
    },

    {
        kanji: "田",
        meaning: "Sawah",
        reading: "た / でん",
        level: "N5",
        examples: [
            ["田があります。", "Ada sawah."],
            ["田んぼで働きます。", "Saya bekerja di sawah."],
            ["田んぼが広いです。", "Sawahnya luas."],
            ["田を見ました。", "Saya melihat sawah."],
            ["田んぼに水があります。", "Ada air di sawah."]
        ]
    },

    {
        kanji: "空",
        meaning: "Langit / Kosong",
        reading: "そら / くう",
        level: "N5",
        examples: [
            ["空が青いです。", "Langit berwarna biru."],
            ["空を見ます。", "Saya melihat langit."],
            ["空がきれいです。", "Langitnya indah."],
            ["空に鳥がいます。", "Ada burung di langit."],
            ["空を飛びます。", "Terbang di langit."]
        ]
    },

    {
        kanji: "雨",
        meaning: "Hujan",
        reading: "あめ / う",
        level: "N5",
        examples: [
            ["雨が降っています。", "Sedang turun hujan."],
            ["雨の日です。", "Ini hari hujan."],
            ["雨が好きです。", "Saya suka hujan."],
            ["雨が強いです。", "Hujannya deras."],
            ["雨が止みました。", "Hujannya berhenti."]
        ]
    },

    {
        kanji: "天",
        meaning: "Langit / Surga",
        reading: "てん",
        level: "N5",
        examples: [
            ["天気がいいです。", "Cuacanya bagus."],
            ["天気を見ます。", "Saya melihat cuaca."],
            ["今日はいい天気です。", "Hari ini cuacanya bagus."],
            ["天気が悪いです。", "Cuacanya buruk."],
            ["明日の天気を調べます。", "Saya mengecek cuaca besok."]
        ]
    },

    {
        kanji: "気",
        meaning: "Perasaan / Energi",
        reading: "き",
        level: "N5",
        examples: [
            ["元気です。", "Saya sehat/baik."],
            ["天気がいいです。", "Cuacanya bagus."],
            ["気をつけてください。", "Harap berhati-hati."],
            ["気分がいいです。", "Perasaan saya baik."],
            ["気になります。", "Saya menjadi penasaran."]
        ]
    },

    {
        kanji: "上",
        meaning: "Atas",
        reading: "うえ / じょう",
        level: "N5",
        examples: [
            ["机の上です。", "Di atas meja."],
            ["上にあります。", "Ada di atas."],
            ["上を見てください。", "Tolong lihat ke atas."],
            ["階段を上ります。", "Saya naik tangga."],
            ["上の階です。", "Ini lantai atas."]
        ]
    },

    {
        kanji: "下",
        meaning: "Bawah",
        reading: "した / か",
        level: "N5",
        examples: [
            ["机の下です。", "Di bawah meja."],
            ["下にあります。", "Ada di bawah."],
            ["下を見てください。", "Tolong lihat ke bawah."],
            ["階段を下ります。", "Saya turun tangga."],
            ["下の階です。", "Ini lantai bawah."]
        ]
    },

    {
        kanji: "中",
        meaning: "Dalam / Tengah",
        reading: "なか / ちゅう",
        level: "N5",
        examples: [
            ["箱の中です。", "Di dalam kotak."],
            ["部屋の中にいます。", "Saya berada di dalam kamar."],
            ["学校の中です。", "Di dalam sekolah."],
            ["真ん中にあります。", "Ada di tengah."],
            ["中に入ってください。", "Silakan masuk."]
        ]
    },

    {
        kanji: "大",
        meaning: "Besar",
        reading: "おお / だい",
        level: "N5",
        examples: [
            ["大きいです。", "Besar."],
            ["大きな山です。", "Gunung yang besar."],
            ["大丈夫です。", "Tidak apa-apa."],
            ["大好きです。", "Sangat suka."],
            ["大学へ行きます。", "Saya pergi ke universitas."]
        ]
    },

    {
        kanji: "小",
        meaning: "Kecil",
        reading: "ちい / しょう",
        level: "N5",
        examples: [
            ["小さいです。", "Kecil."],
            ["小さな犬です。", "Anjing kecil."],
            ["小学校です。", "Sekolah dasar."],
            ["小さい部屋です。", "Kamarnya kecil."],
            ["小さな店です。", "Tokonya kecil."]
        ]
    },

    {
        kanji: "長",
        meaning: "Panjang",
        reading: "なが / ちょう",
        level: "N5",
        examples: [
            ["長いです。", "Panjang."],
            ["長い川です。", "Sungai yang panjang."],
            ["髪が長いです。", "Rambutnya panjang."],
            ["長い時間です。", "Waktu yang panjang."],
            ["長く待ちました。", "Saya menunggu lama."]
        ]
    },

    {
        kanji: "高",
        meaning: "Tinggi / Mahal",
        reading: "たか / こう",
        level: "N5",
        examples: [
            ["高い山です。", "Gunung yang tinggi."],
            ["この店は高いです。", "Toko ini mahal."],
            ["背が高いです。", "Tingginya tinggi."],
            ["高いビルです。", "Gedung yang tinggi."],
            ["値段が高いです。", "Harganya mahal."]
        ]
    },

    {
        kanji: "安",
        meaning: "Murah / Aman",
        reading: "やす / あん",
        level: "N5",
        examples: [
            ["安いです。", "Murah."],
            ["この店は安いです。", "Toko ini murah."],
            ["安い服を買います。", "Saya membeli pakaian murah."],
            ["安全です。", "Aman."],
            ["安くしてください。", "Tolong buat lebih murah."]
        ]
    },

    {
        kanji: "新",
        meaning: "Baru",
        reading: "あたら / しん",
        level: "N5",
        examples: [
            ["新しい本です。", "Ini buku baru."],
            ["新しい車です。", "Ini mobil baru."],
            ["新しい学校です。", "Ini sekolah baru."],
            ["新しい友達ができました。", "Saya mendapat teman baru."],
            ["新しい店ができました。", "Toko baru telah dibuka."]
        ]
    },

    {
        kanji: "古",
        meaning: "Lama / Tua",
        reading: "ふる / こ",
        level: "N5",
        examples: [
            ["古い本です。", "Ini buku lama."],
            ["古い家です。", "Ini rumah tua."],
            ["古い車です。", "Ini mobil lama."],
            ["古い町です。", "Ini kota tua."],
            ["古い写真を見ました。", "Saya melihat foto lama."]
        ]
    },

    {
        kanji: "多",
        meaning: "Banyak",
        reading: "おお / た",
        level: "N5",
        examples: [
            ["人が多いです。", "Banyak orang."],
            ["本が多いです。", "Banyak buku."],
            ["仕事が多いです。", "Banyak pekerjaan."],
            ["車が多いです。", "Banyak mobil."],
            ["店が多いです。", "Banyak toko."]
        ]
    },

    {
        kanji: "少",
        meaning: "Sedikit",
        reading: "すく / すこ / しょう",
        level: "N5",
        examples: [
            ["人が少ないです。", "Orangnya sedikit."],
            ["水が少ないです。", "Airnya sedikit."],
            ["少し待ってください。", "Tunggu sebentar."],
            ["少し食べます。", "Saya makan sedikit."],
            ["時間が少ないです。", "Waktunya sedikit."]
        ]
    },

    {
        kanji: "見",
        meaning: "Melihat",
        reading: "み / けん",
        level: "N5",
        examples: [
            ["テレビを見ます。", "Saya menonton TV."],
            ["映画を見ました。", "Saya menonton film."],
            ["空を見ます。", "Saya melihat langit."],
            ["写真を見てください。", "Tolong lihat foto."],
            ["友達を見ました。", "Saya melihat teman."]
        ]
    },

    {
        kanji: "行",
        meaning: "Pergi",
        reading: "い / こう",
        level: "N5",
        examples: [
            ["学校へ行きます。", "Saya pergi ke sekolah."],
            ["日本へ行きたいです。", "Saya ingin pergi ke Jepang."],
            ["買い物に行きます。", "Saya pergi berbelanja."],
            ["明日行きます。", "Saya pergi besok."],
            ["一緒に行きましょう。", "Mari pergi bersama."]
        ]
    },

    {
        kanji: "来",
        meaning: "Datang",
        reading: "く / らい",
        level: "N5",
        examples: [
            ["友達が来ます。", "Teman datang."],
            ["明日来ます。", "Saya datang besok."],
            ["日本に来ました。", "Saya datang ke Jepang."],
            ["先生が来ました。", "Guru datang."],
            ["来週来ます。", "Saya datang minggu depan."]
        ]
    },

    {
        kanji: "帰",
        meaning: "Pulang",
        reading: "かえ",
        level: "N5",
        examples: [
            ["家に帰ります。", "Saya pulang ke rumah."],
            ["学校から帰ります。", "Saya pulang dari sekolah."],
            ["夜に帰ります。", "Saya pulang malam."],
            ["一緒に帰りましょう。", "Mari pulang bersama."],
            ["早く帰ります。", "Saya pulang lebih awal."]
        ]
    },

    {
        kanji: "食",
        meaning: "Makan",
        reading: "た / しょく",
        level: "N5",
        examples: [
            ["ご飯を食べます。", "Saya makan nasi."],
            ["パンを食べます。", "Saya makan roti."],
            ["一緒に食べましょう。", "Mari makan bersama."],
            ["朝ご飯を食べました。", "Saya sudah sarapan."],
            ["日本料理を食べたいです。", "Saya ingin makan masakan Jepang."]
        ]
    },

    {
        kanji: "飲",
        meaning: "Minum",
        reading: "の / いん",
        level: "N5",
        examples: [
            ["水を飲みます。", "Saya minum air."],
            ["お茶を飲みます。", "Saya minum teh."],
            ["コーヒーを飲みました。", "Saya minum kopi."],
            ["薬を飲みます。", "Saya minum obat."],
            ["一緒に飲みましょう。", "Mari minum bersama."]
        ]
    },

    {
        kanji: "買",
        meaning: "Membeli",
        reading: "か",
        level: "N5",
        examples: [
            ["本を買います。", "Saya membeli buku."],
            ["水を買いました。", "Saya membeli air."],
            ["服を買いたいです。", "Saya ingin membeli pakaian."],
            ["コンビニで買います。", "Saya membeli di minimarket."],
            ["新しい靴を買いました。", "Saya membeli sepatu baru."]
        ]
    },

    {
        kanji: "読",
        meaning: "Membaca",
        reading: "よ / どく",
        level: "N5",
        examples: [
            ["本を読みます。", "Saya membaca buku."],
            ["新聞を読みます。", "Saya membaca koran."],
            ["毎日読みます。", "Saya membaca setiap hari."],
            ["日本語を読みます。", "Saya membaca bahasa Jepang."],
            ["この本を読みました。", "Saya sudah membaca buku ini."]
        ]
    },

    {
        kanji: "書",
        meaning: "Menulis",
        reading: "か / しょ",
        level: "N5",
        examples: [
            ["名前を書きます。", "Saya menulis nama."],
            ["手紙を書きます。", "Saya menulis surat."],
            ["漢字を書きます。", "Saya menulis kanji."],
            ["日記を書きました。", "Saya menulis buku harian."],
            ["ここに書いてください。", "Tolong tulis di sini."]
        ]
    },

    {
        kanji: "話",
        meaning: "Berbicara",
        reading: "はな / わ",
        level: "N5",
        examples: [
            ["日本語を話します。", "Saya berbicara bahasa Jepang."],
            ["友達と話します。", "Saya berbicara dengan teman."],
            ["先生と話しました。", "Saya berbicara dengan guru."],
            ["ゆっくり話してください。", "Tolong bicara pelan-pelan."],
            ["電話で話します。", "Saya berbicara melalui telepon."]
        ]
    },

    {
        kanji: "聞",
        meaning: "Mendengar / Bertanya",
        reading: "き / ぶん",
        level: "N5",
        examples: [
            ["音楽を聞きます。", "Saya mendengarkan musik."],
            ["先生に聞きます。", "Saya bertanya kepada guru."],
            ["話を聞きました。", "Saya mendengarkan cerita."],
            ["よく聞いてください。", "Tolong dengarkan baik-baik."],
            ["日本語を聞きます。", "Saya mendengarkan bahasa Jepang."]
        ]
    },

    {
        kanji: "学",
        meaning: "Belajar",
        reading: "まな / がく",
        level: "N5",
        examples: [
            ["日本語を学びます。", "Saya belajar bahasa Jepang."],
            ["学校へ行きます。", "Saya pergi ke sekolah."],
            ["大学で学びます。", "Saya belajar di universitas."],
            ["毎日学びます。", "Saya belajar setiap hari."],
            ["日本文化を学びます。", "Saya belajar budaya Jepang."]
        ]
    },

    {
        kanji: "校",
        meaning: "Sekolah",
        reading: "こう",
        level: "N5",
        examples: [
            ["学校へ行きます。", "Saya pergi ke sekolah."],
            ["学校があります。", "Ada sekolah."],
            ["学校は大きいです。", "Sekolahnya besar."],
            ["学校に先生がいます。", "Ada guru di sekolah."],
            ["学校で勉強します。", "Saya belajar di sekolah."]
        ]
    },

    {
        kanji: "先",
        meaning: "Sebelum / Guru",
        reading: "さき / せん",
        level: "N5",
        examples: [
            ["先生です。", "Dia adalah guru."],
            ["先生に聞きます。", "Saya bertanya kepada guru."],
            ["先生が来ました。", "Guru datang."],
            ["先に行きます。", "Saya pergi duluan."],
            ["先週行きました。", "Saya pergi minggu lalu."]
        ]
    },

    {
        kanji: "生",
        meaning: "Hidup / Lahir",
        reading: "い / せい",
        level: "N5",
        examples: [
            ["学生です。", "Saya seorang siswa."],
            ["先生です。", "Dia seorang guru."],
            ["誕生日です。", "Ini hari ulang tahun."],
            ["生まれました。", "Telah lahir."],
            ["大学生です。", "Saya mahasiswa."]
        ]
    },

    {
        kanji: "友",
        meaning: "Teman",
        reading: "とも / ゆう",
        level: "N5",
        examples: [
            ["友達がいます。", "Saya punya teman."],
            ["友達と遊びます。", "Saya bermain dengan teman."],
            ["友達に会います。", "Saya bertemu teman."],
            ["友達が来ました。", "Teman datang."],
            ["日本の友達です。", "Dia teman dari Jepang."]
        ]
    },

    {
        kanji: "家",
        meaning: "Rumah / Keluarga",
        reading: "いえ / うち / か",
        level: "N5",
        examples: [
            ["家に帰ります。", "Saya pulang ke rumah."],
            ["家があります。", "Ada rumah."],
            ["私の家です。", "Ini rumah saya."],
            ["家族と住みます。", "Saya tinggal bersama keluarga."],
            ["家で勉強します。", "Saya belajar di rumah."]
        ]
    },

    {
        kanji: "父",
        meaning: "Ayah",
        reading: "ちち / ふ",
        level: "N5",
        examples: [
            ["父は会社員です。", "Ayah saya adalah pegawai."],
            ["父と話します。", "Saya berbicara dengan ayah."],
            ["父が帰りました。", "Ayah sudah pulang."],
            ["父は元気です。", "Ayah sehat."],
            ["父と食べます。", "Saya makan bersama ayah."]
        ]
    },

    {
        kanji: "母",
        meaning: "Ibu",
        reading: "はは / ぼ",
        level: "N5",
        examples: [
            ["母は先生です。", "Ibu saya adalah guru."],
            ["母と話します。", "Saya berbicara dengan ibu."],
            ["母が帰りました。", "Ibu sudah pulang."],
            ["母は元気です。", "Ibu sehat."],
            ["母と買い物します。", "Saya berbelanja bersama ibu."]
        ]
    },

    {
        kanji: "兄",
        meaning: "Kakak laki-laki",
        reading: "あに / けい",
        level: "N5",
        examples: [
            ["兄がいます。", "Saya punya kakak laki-laki."],
            ["兄は学生です。", "Kakak laki-laki saya adalah siswa."],
            ["兄と話します。", "Saya berbicara dengan kakak."],
            ["兄が来ました。", "Kakak datang."],
            ["兄は元気です。", "Kakak sehat."]
        ]
    },

    {
        kanji: "姉",
        meaning: "Kakak perempuan",
        reading: "あね / し",
        level: "N5",
        examples: [
            ["姉がいます。", "Saya punya kakak perempuan."],
            ["姉は学生です。", "Kakak perempuan saya adalah siswa."],
            ["姉と話します。", "Saya berbicara dengan kakak."],
            ["姉が来ました。", "Kakak datang."],
            ["姉は元気です。", "Kakak sehat."]
        ]
    },

    {
        kanji: "電",
        meaning: "Listrik",
        reading: "でん",
        level: "N5",
        examples: [
            ["電車に乗ります。", "Saya naik kereta."],
            ["電話をします。", "Saya menelepon."],
            ["電気をつけます。", "Saya menyalakan lampu."],
            ["電気を消します。", "Saya mematikan lampu."],
            ["電車が来ました。", "Kereta datang."]
        ]
    },

    {
        kanji: "車",
        meaning: "Mobil / Kendaraan",
        reading: "くるま / しゃ",
        level: "N5",
        examples: [
            ["車があります。", "Ada mobil."],
            ["車に乗ります。", "Saya naik mobil."],
            ["車を買います。", "Saya membeli mobil."],
            ["車が多いです。", "Banyak mobil."],
            ["新しい車です。", "Ini mobil baru."]
        ]
    },

    {
        kanji: "駅",
        meaning: "Stasiun",
        reading: "えき",
        level: "N5",
        examples: [
            ["駅へ行きます。", "Saya pergi ke stasiun."],
            ["駅にいます。", "Saya berada di stasiun."],
            ["駅はどこですか。", "Di mana stasiunnya?"],
            ["駅で待ちます。", "Saya menunggu di stasiun."],
            ["駅から学校へ行きます。", "Saya pergi ke sekolah dari stasiun."]
        ]
    },

    {
        kanji: "道",
        meaning: "Jalan",
        reading: "みち / どう",
        level: "N5",
        examples: [
            ["道を歩きます。", "Saya berjalan di jalan."],
            ["道が広いです。", "Jalannya luas."],
            ["この道です。", "Jalan ini."],
            ["道を教えてください。", "Tolong beri tahu jalannya."],
            ["駅への道です。", "Ini jalan menuju stasiun."]
        ]
    },

    {
        kanji: "店",
        meaning: "Toko",
        reading: "みせ / てん",
        level: "N5",
        examples: [
            ["店へ行きます。", "Saya pergi ke toko."],
            ["この店は安いです。", "Toko ini murah."],
            ["店で買います。", "Saya membeli di toko."],
            ["新しい店です。", "Ini toko baru."],
            ["店が多いです。", "Ada banyak toko."]
        ]
    },

    {
        kanji: "食",
        meaning: "Makan",
        reading: "た / しょく",
        level: "N5",
        examples: [
            ["ご飯を食べます。", "Saya makan nasi."],
            ["パンを食べます。", "Saya makan roti."],
            ["朝ご飯を食べました。", "Saya sudah sarapan."],
            ["一緒に食べましょう。", "Mari makan bersama."],
            ["日本料理を食べます。", "Saya makan masakan Jepang."]
        ]
    },

    {
        kanji: "魚",
        meaning: "Ikan",
        reading: "さかな / ぎょ",
        level: "N5",
        examples: [
            ["魚を食べます。", "Saya makan ikan."],
            ["魚が好きです。", "Saya suka ikan."],
            ["魚を買いました。", "Saya membeli ikan."],
            ["魚がいます。", "Ada ikan."],
            ["大きな魚です。", "Ini ikan besar."]
        ]
    },

    {
        kanji: "肉",
        meaning: "Daging",
        reading: "にく",
        level: "N5",
        examples: [
            ["肉を食べます。", "Saya makan daging."],
            ["肉が好きです。", "Saya suka daging."],
            ["肉を買いました。", "Saya membeli daging."],
            ["牛肉を食べます。", "Saya makan daging sapi."],
            ["肉料理を作ります。", "Saya membuat masakan daging."]
        ]
    },

    {
        kanji: "本",
        meaning: "Buku / Asal",
        reading: "ほん / もと",
        level: "N5",
        examples: [
            ["本を読みます。", "Saya membaca buku."],
            ["本があります。", "Ada buku."],
            ["本を買います。", "Saya membeli buku."],
            ["この本は面白いです。", "Buku ini menarik."],
            ["日本の本です。", "Ini buku Jepang."]
        ]
    },

    {
        kanji: "名",
        meaning: "Nama",
        reading: "な / めい",
        level: "N5",
        examples: [
            ["名前を書きます。", "Saya menulis nama."],
            ["名前は何ですか。", "Siapa nama Anda?"],
            ["名前を教えてください。", "Tolong beri tahu nama Anda."],
            ["私の名前です。", "Ini nama saya."],
            ["名前を覚えました。", "Saya mengingat namanya."]
        ]
    },

    {
        kanji: "年",
        meaning: "Tahun",
        reading: "とし / ねん",
        level: "N5",
        examples: [
            ["今年です。", "Tahun ini."],
            ["来年行きます。", "Saya pergi tahun depan."],
            ["去年行きました。", "Saya pergi tahun lalu."],
            ["何年ですか。", "Tahun berapa?"],
            ["一年勉強しました。", "Saya belajar selama satu tahun."]
        ]
    },

    {
        kanji: "時",
        meaning: "Waktu / Jam",
        reading: "とき / じ",
        level: "N5",
        examples: [
            ["今何時ですか。", "Sekarang jam berapa?"],
            ["三時です。", "Sekarang jam tiga."],
            ["学校へ行く時です。", "Ini waktunya pergi ke sekolah."],
            ["時間があります。", "Saya punya waktu."],
            ["時々行きます。", "Saya kadang-kadang pergi."]
        ]
    },

    {
        kanji: "間",
        meaning: "Antara / Waktu",
        reading: "あいだ / かん",
        level: "N5",
        examples: [
            ["二時間勉強します。", "Saya belajar selama dua jam."],
            ["学校と家の間です。", "Di antara sekolah dan rumah."],
            ["少しの間待ちます。", "Saya menunggu sebentar."],
            ["時間がありません。", "Tidak punya waktu."],
            ["一週間の間です。", "Selama satu minggu."]
        ]
    },

    {
        kanji: "毎",
        meaning: "Setiap",
        reading: "まい",
        level: "N5",
        examples: [
            ["毎日勉強します。", "Saya belajar setiap hari."],
            ["毎朝走ります。", "Saya berlari setiap pagi."],
            ["毎晩本を読みます。", "Saya membaca buku setiap malam."],
            ["毎週行きます。", "Saya pergi setiap minggu."],
            ["毎月買います。", "Saya membeli setiap bulan."]
        ]
    },

    {
        kanji: "週",
        meaning: "Minggu",
        reading: "しゅう",
        level: "N5",
        examples: [
            ["毎週勉強します。", "Saya belajar setiap minggu."],
            ["来週行きます。", "Saya pergi minggu depan."],
            ["先週行きました。", "Saya pergi minggu lalu."],
            ["一週間休みます。", "Saya libur satu minggu."],
            ["週末に遊びます。", "Saya bermain di akhir pekan."]
        ]
    },

    {
        kanji: "午",
        meaning: "Siang",
        reading: "ご",
        level: "N5",
        examples: [
            ["午前です。", "Ini pagi."],
            ["午後です。", "Ini siang/sore."],
            ["午前八時です。", "Sekarang jam delapan pagi."],
            ["午後三時です。", "Sekarang jam tiga sore."],
            ["午後に行きます。", "Saya pergi pada sore hari."]
        ]
    },

    {
        kanji: "前",
        meaning: "Depan / Sebelum",
        reading: "まえ / ぜん",
        level: "N5",
        examples: [
            ["学校の前です。", "Di depan sekolah."],
            ["駅の前にいます。", "Saya berada di depan stasiun."],
            ["三日前です。", "Tiga hari yang lalu."],
            ["前に行きます。", "Saya pergi ke depan."],
            ["食べる前に手を洗います。", "Saya mencuci tangan sebelum makan."]
        ]
    },

    {
        kanji: "後",
        meaning: "Belakang / Setelah",
        reading: "あと / うしろ / ご",
        level: "N5",
        examples: [
            ["学校の後です。", "Setelah sekolah."],
            ["後ろにいます。", "Ada di belakang."],
            ["三日後です。", "Tiga hari kemudian."],
            ["食べた後で勉強します。", "Saya belajar setelah makan."],
            ["後で電話します。", "Saya menelepon nanti."]
        ]
    },

    {
        kanji: "東",
        meaning: "Timur",
        reading: "ひがし / とう",
        level: "N5",
        examples: [
            ["東へ行きます。", "Saya pergi ke timur."],
            ["東の町です。", "Ini kota di timur."],
            ["東にあります。", "Ada di sebelah timur."],
            ["東口です。", "Ini pintu timur."],
            ["東京は東にあります。", "Tokyo berada di timur."]
        ]
    },

    {
        kanji: "西",
        meaning: "Barat",
        reading: "にし / せい",
        level: "N5",
        examples: [
            ["西へ行きます。", "Saya pergi ke barat."],
            ["西の町です。", "Ini kota di barat."],
            ["西にあります。", "Ada di sebelah barat."],
            ["西口です。", "Ini pintu barat."],
            ["西へ歩きます。", "Saya berjalan ke barat."]
        ]
    },

    {
        kanji: "南",
        meaning: "Selatan",
        reading: "みなみ / なん",
        level: "N5",
        examples: [
            ["南へ行きます。", "Saya pergi ke selatan."],
            ["南の町です。", "Ini kota di selatan."],
            ["南にあります。", "Ada di sebelah selatan."],
            ["南口です。", "Ini pintu selatan."],
            ["南へ歩きます。", "Saya berjalan ke selatan."]
        ]
    },

    {
        kanji: "北",
        meaning: "Utara",
        reading: "きた / ほく",
        level: "N5",
        examples: [
            ["北へ行きます。", "Saya pergi ke utara."],
            ["北の町です。", "Ini kota di utara."],
            ["北にあります。", "Ada di sebelah utara."],
            ["北口です。", "Ini pintu utara."],
            ["北へ歩きます。", "Saya berjalan ke utara."]
        ]
    },

    {
        kanji: "外",
        meaning: "Luar",
        reading: "そと / がい",
        level: "N5",
        examples: [
            ["外へ行きます。", "Saya pergi ke luar."],
            ["外にいます。", "Saya berada di luar."],
            ["外は寒いです。", "Di luar dingin."],
            ["外で遊びます。", "Saya bermain di luar."],
            ["外を見ます。", "Saya melihat ke luar."]
        ]
    },

    {
        kanji: "内",
        meaning: "Dalam",
        reading: "うち / ない",
        level: "N5",
        examples: [
            ["家の内です。", "Di dalam rumah."],
            ["内に入ります。", "Saya masuk ke dalam."],
            ["部屋の内にいます。", "Saya berada di dalam kamar."],
            ["内側です。", "Ini bagian dalam."],
            ["内を見ます。", "Saya melihat bagian dalam."]
        ]
    },

    {
        kanji: "右",
        meaning: "Kanan",
        reading: "みぎ / う",
        level: "N5",
        examples: [
            ["右に曲がります。", "Belok kanan."],
            ["右手です。", "Tangan kanan."],
            ["右にあります。", "Ada di sebelah kanan."],
            ["右を見てください。", "Tolong lihat ke kanan."],
            ["右の店です。", "Toko yang di sebelah kanan."]
        ]
    },

    {
        kanji: "左",
        meaning: "Kiri",
        reading: "ひだり / さ",
        level: "N5",
        examples: [
            ["左に曲がります。", "Belok kiri."],
            ["左手です。", "Tangan kiri."],
            ["左にあります。", "Ada di sebelah kiri."],
            ["左を見てください。", "Tolong lihat ke kiri."],
            ["左の店です。", "Toko yang di sebelah kiri."]
        ]
    },

    {
        kanji: "口",
        meaning: "Mulut / Pintu masuk",
        reading: "くち / こう",
        level: "N5",
        examples: [
            ["口を開けます。", "Saya membuka mulut."],
            ["入口です。", "Ini pintu masuk."],
            ["出口です。", "Ini pintu keluar."],
            ["口が痛いです。", "Mulut saya sakit."],
            ["入口はどこですか。", "Di mana pintu masuknya?"]
        ]
    },

    {
        kanji: "目",
        meaning: "Mata",
        reading: "め / もく",
        level: "N5",
        examples: [
            ["目が大きいです。", "Matanya besar."],
            ["目を閉じます。", "Saya menutup mata."],
            ["目を開けます。", "Saya membuka mata."],
            ["目が痛いです。", "Mata saya sakit."],
            ["目を見てください。", "Tolong lihat mata saya."]
        ]
    },

    {
        kanji: "耳",
        meaning: "Telinga",
        reading: "みみ / じ",
        level: "N5",
        examples: [
            ["耳が痛いです。", "Telinga saya sakit."],
            ["耳で聞きます。", "Saya mendengar dengan telinga."],
            ["耳を見せてください。", "Tolong tunjukkan telinga."],
            ["耳が小さいです。", "Telinganya kecil."],
            ["右の耳です。", "Telinga sebelah kanan."]
        ]
    },

    {
        kanji: "手",
        meaning: "Tangan",
        reading: "て / しゅ",
        level: "N5",
        examples: [
            ["手を洗います。", "Saya mencuci tangan."],
            ["手が痛いです。", "Tangan saya sakit."],
            ["右手です。", "Tangan kanan."],
            ["左手です。", "Tangan kiri."],
            ["手紙を書きます。", "Saya menulis surat."]
        ]
    },

    {
        kanji: "足",
        meaning: "Kaki",
        reading: "あし / そく",
        level: "N5",
        examples: [
            ["足が痛いです。", "Kaki saya sakit."],
            ["足を洗います。", "Saya mencuci kaki."],
            ["右足です。", "Kaki kanan."],
            ["左足です。", "Kaki kiri."],
            ["足で歩きます。", "Saya berjalan menggunakan kaki."]
        ]
    },

    {
        kanji: "力",
        meaning: "Kekuatan",
        reading: "ちから / りょく",
        level: "N5",
        examples: [
            ["力があります。", "Saya punya kekuatan."],
            ["力を使います。", "Saya menggunakan tenaga."],
            ["力が強いです。", "Kekuatannya besar."],
            ["力をください。", "Berikan saya kekuatan."],
            ["力を入れます。", "Saya mengerahkan tenaga."]
        ]
    },

    {
        kanji: "早",
        meaning: "Cepat / Awal",
        reading: "はや / そう",
        level: "N5",
        examples: [
            ["早いです。", "Cepat."],
            ["早く起きます。", "Saya bangun lebih awal."],
            ["朝は早いです。", "Paginya lebih awal."],
            ["早く行きます。", "Saya pergi lebih cepat."],
            ["早く帰ります。", "Saya pulang lebih awal."]
        ]
    },

    {
        kanji: "明",
        meaning: "Terang",
        reading: "あか / めい",
        level: "N5",
        examples: [
            ["明るいです。", "Terang."],
            ["明日行きます。", "Saya pergi besok."],
            ["部屋が明るいです。", "Kamarnya terang."],
            ["明るい人です。", "Dia orang yang ceria."],
            ["明日の朝です。", "Besok pagi."]
        ]
    },

    {
        kanji: "暗",
        meaning: "Gelap",
        reading: "くら / あん",
        level: "N5",
        examples: [
            ["暗いです。", "Gelap."],
            ["部屋が暗いです。", "Kamarnya gelap."],
            ["夜は暗いです。", "Malam hari gelap."],
            ["暗い道です。", "Ini jalan yang gelap."],
            ["電気がないので暗いです。", "Gelap karena tidak ada listrik."]
        ]
    },

    {
        kanji: "白",
        meaning: "Putih",
        reading: "しろ / はく",
        level: "N5",
        examples: [
            ["白いです。", "Putih."],
            ["白い車です。", "Ini mobil putih."],
            ["白い服です。", "Ini pakaian putih."],
            ["白い猫がいます。", "Ada kucing putih."],
            ["白い花です。", "Ini bunga putih."]
        ]
    },

    {
        kanji: "黒",
        meaning: "Hitam",
        reading: "くろ / こく",
        level: "N5",
        examples: [
            ["黒いです。", "Hitam."],
            ["黒い車です。", "Ini mobil hitam."],
            ["黒い服です。", "Ini pakaian hitam."],
            ["黒い猫がいます。", "Ada kucing hitam."],
            ["黒いペンです。", "Ini pulpen hitam."]
        ]
    },

    {
        kanji: "赤",
        meaning: "Merah",
        reading: "あか / せき",
        level: "N5",
        examples: [
            ["赤いです。", "Merah."],
            ["赤い車です。", "Ini mobil merah."],
            ["赤い花です。", "Ini bunga merah."],
            ["赤い服です。", "Ini pakaian merah."],
            ["赤いりんごです。", "Ini apel merah."]
        ]
    },

    {
        kanji: "青",
        meaning: "Biru",
        reading: "あお / せい",
        level: "N5",
        examples: [
            ["青いです。", "Biru."],
            ["青い空です。", "Ini langit biru."],
            ["青い海です。", "Ini laut biru."],
            ["青い服です。", "Ini pakaian biru."],
            ["青い車です。", "Ini mobil biru."]
        ]
    },

    {
        kanji: "花",
        meaning: "Bunga",
        reading: "はな / か",
        level: "N5",
        examples: [
            ["花があります。", "Ada bunga."],
            ["花がきれいです。", "Bunganya indah."],
            ["花を買います。", "Saya membeli bunga."],
            ["赤い花です。", "Ini bunga merah."],
            ["花を見ます。", "Saya melihat bunga."]
        ]
    },

    {
        kanji: "犬",
        meaning: "Anjing",
        reading: "いぬ / けん",
        level: "N5",
        examples: [
            ["犬がいます。", "Ada anjing."],
            ["犬が好きです。", "Saya suka anjing."],
            ["犬と遊びます。", "Saya bermain dengan anjing."],
            ["大きな犬です。", "Ini anjing besar."],
            ["白い犬です。", "Ini anjing putih."]
        ]
    },

    {
        kanji: "猫",
        meaning: "Kucing",
        reading: "ねこ / びょう",
        level: "N5",
        examples: [
            ["猫がいます。", "Ada kucing."],
            ["猫が好きです。", "Saya suka kucing."],
            ["猫と遊びます。", "Saya bermain dengan kucing."],
            ["黒い猫です。", "Ini kucing hitam."],
            ["猫を見ました。", "Saya melihat kucing."]
        ]
    },

    {
        kanji: "鳥",
        meaning: "Burung",
        reading: "とり / ちょう",
        level: "N5",
        examples: [
            ["鳥がいます。", "Ada burung."],
            ["鳥が飛びます。", "Burung terbang."],
            ["鳥を見ます。", "Saya melihat burung."],
            ["白い鳥です。", "Ini burung putih."],
            ["空に鳥がいます。", "Ada burung di langit."]
        ]
    },

    {
        kanji: "海",
        meaning: "Laut",
        reading: "うみ / かい",
        level: "N5",
        examples: [
            ["海へ行きます。", "Saya pergi ke laut."],
            ["海がきれいです。", "Lautnya indah."],
            ["海で泳ぎます。", "Saya berenang di laut."],
            ["海を見ます。", "Saya melihat laut."],
            ["青い海です。", "Ini laut biru."]
        ]
    },

    {
        kanji: "川",
        meaning: "Sungai",
        reading: "かわ / せん",
        level: "N5",
        examples: [
            ["川があります。", "Ada sungai."],
            ["川の水はきれいです。", "Air sungainya bersih."],
            ["川で遊びます。", "Saya bermain di sungai."],
            ["川を見ます。", "Saya melihat sungai."],
            ["大きな川です。", "Ini sungai besar."]
        ]
    },

    {
        kanji: "国",
        meaning: "Negara",
        reading: "くに / こく",
        level: "N5",
        examples: [
            ["日本は国です。", "Jepang adalah sebuah negara."],
            ["私の国です。", "Ini negara saya."],
            ["国へ帰ります。", "Saya pulang ke negara saya."],
            ["外国へ行きます。", "Saya pergi ke luar negeri."],
            ["国が好きです。", "Saya menyukai negara saya."]
        ]
    },

    {
        kanji: "語",
        meaning: "Bahasa",
        reading: "ご / かた",
        level: "N5",
        examples: [
            ["日本語を話します。", "Saya berbicara bahasa Jepang."],
            ["英語を話します。", "Saya berbicara bahasa Inggris."],
            ["日本語を勉強します。", "Saya belajar bahasa Jepang."],
            ["この言葉を知りません。", "Saya tidak tahu kata ini."],
            ["日本語が好きです。", "Saya suka bahasa Jepang."]
        ]
    },

    {
        kanji: "文",
        meaning: "Kalimat / Tulisan",
        reading: "ぶん / もん",
        level: "N5",
        examples: [
            ["文を書きます。", "Saya menulis kalimat."],
            ["日本語の文です。", "Ini kalimat bahasa Jepang."],
            ["文を読みます。", "Saya membaca kalimat."],
            ["簡単な文です。", "Ini kalimat sederhana."],
            ["文を作ります。", "Saya membuat kalimat."]
        ]
    },

    {
        kanji: "字",
        meaning: "Huruf / Karakter",
        reading: "じ",
        level: "N5",
        examples: [
            ["字を書きます。", "Saya menulis karakter."],
            ["字がきれいです。", "Tulisannya bagus."],
            ["漢字を勉強します。", "Saya belajar kanji."],
            ["この字を読めますか。", "Bisakah kamu membaca karakter ini?"],
            ["字を覚えます。", "Saya menghafalkan karakter."]
        ]
    },

    {
        kanji: "車",
        meaning: "Mobil",
        reading: "くるま / しゃ",
        level: "N5",
        examples: [
            ["車があります。", "Ada mobil."],
            ["車を買います。", "Saya membeli mobil."],
            ["車に乗ります。", "Saya naik mobil."],
            ["車が新しいです。", "Mobilnya baru."],
            ["車を運転します。", "Saya mengemudikan mobil."]
        ]
    },

    {
        kanji: "店",
        meaning: "Toko",
        reading: "みせ / てん",
        level: "N5",
        examples: [
            ["店へ行きます。", "Saya pergi ke toko."],
            ["店で買います。", "Saya membeli di toko."],
            ["この店は安いです。", "Toko ini murah."],
            ["店が新しいです。", "Tokonya baru."],
            ["店員がいます。", "Ada pegawai toko."]
        ]
    },

    {
        kanji: "駅",
        meaning: "Stasiun",
        reading: "えき",
        level: "N5",
        examples: [
            ["駅へ行きます。", "Saya pergi ke stasiun."],
            ["駅で待ちます。", "Saya menunggu di stasiun."],
            ["駅はどこですか。", "Di mana stasiunnya?"],
            ["駅に着きました。", "Saya sudah sampai di stasiun."],
            ["駅から歩きます。", "Saya berjalan dari stasiun."]
        ]
    },

    {
        kanji: "間",
        meaning: "Jarak / Waktu",
        reading: "あいだ / かん",
        level: "N5",
        examples: [
            ["二時間です。", "Dua jam."],
            ["家と学校の間です。", "Di antara rumah dan sekolah."],
            ["少しの間待ちます。", "Saya menunggu sebentar."],
            ["長い間勉強しました。", "Saya belajar dalam waktu lama."],
            ["三日間休みます。", "Saya libur selama tiga hari."]
        ]
    },

    {
        kanji: "時",
        meaning: "Waktu",
        reading: "とき / じ",
        level: "N5",
        examples: [
            ["今何時ですか。", "Sekarang jam berapa?"],
            ["五時です。", "Sekarang jam lima."],
            ["時間があります。", "Saya punya waktu."],
            ["時々映画を見ます。", "Saya kadang menonton film."],
            ["忙しい時です。", "Ini saat yang sibuk."]
        ]
    },

    {
        kanji: "何",
        meaning: "Apa",
        reading: "なに / なん",
        level: "N5",
        examples: [
            ["これは何ですか。", "Ini apa?"],
            ["何を食べますか。", "Apa yang kamu makan?"],
            ["何時ですか。", "Jam berapa?"],
            ["何人いますか。", "Ada berapa orang?"],
            ["何をしますか。", "Apa yang akan dilakukan?"]
        ]
    },

    {
        kanji: "今",
        meaning: "Sekarang",
        reading: "いま / こん",
        level: "N5",
        examples: [
            ["今何時ですか。", "Sekarang jam berapa?"],
            ["今行きます。", "Saya pergi sekarang."],
            ["今勉強しています。", "Saya sedang belajar sekarang."],
            ["今家にいます。", "Saya berada di rumah sekarang."],
            ["今忙しいです。", "Saya sedang sibuk sekarang."]
        ]
    },

    {
        kanji: "毎",
        meaning: "Setiap",
        reading: "まい",
        level: "N5",
        examples: [
            ["毎日学校へ行きます。", "Saya pergi ke sekolah setiap hari."],
            ["毎朝起きます。", "Saya bangun setiap pagi."],
            ["毎晩勉強します。", "Saya belajar setiap malam."],
            ["毎週映画を見ます。", "Saya menonton film setiap minggu."],
            ["毎月本を買います。", "Saya membeli buku setiap bulan."]
        ]
    },

    {
        kanji: "元",
        meaning: "Asal / Energi",
        reading: "もと / げん",
        level: "N5",
        examples: [
            ["元気です。", "Saya sehat."],
            ["元気な人です。", "Dia orang yang energik."],
            ["お元気ですか。", "Apa kabar?"],
            ["元気になりました。", "Saya sudah sehat kembali."],
            ["元気に行きましょう。", "Mari pergi dengan semangat."]
        ]
    },

    {
        kanji: "休",
        meaning: "Istirahat",
        reading: "やす / きゅう",
        level: "N5",
        examples: [
            ["休みます。", "Saya beristirahat."],
            ["今日は休みです。", "Hari ini libur."],
            ["少し休みましょう。", "Mari istirahat sebentar."],
            ["学校を休みました。", "Saya tidak masuk sekolah."],
            ["日曜日は休みます。", "Saya beristirahat pada hari Minggu."]
        ]
    },

    {
        kanji: "住",
        meaning: "Tinggal",
        reading: "す",
        level: "N5",
        examples: [
            ["東京に住んでいます。", "Saya tinggal di Tokyo."],
            ["日本に住みたいです。", "Saya ingin tinggal di Jepang."],
            ["家族と住んでいます。", "Saya tinggal bersama keluarga."],
            ["大きな家に住んでいます。", "Saya tinggal di rumah besar."],
            ["ここに住んでいます。", "Saya tinggal di sini."]
        ]
    },

    {
        kanji: "立",
        meaning: "Berdiri",
        reading: "た / りつ",
        level: "N5",
        examples: [
            ["ここに立ちます。", "Saya berdiri di sini."],
            ["立ってください。", "Silakan berdiri."],
            ["駅に立っています。", "Saya sedang berdiri di stasiun."],
            ["早く立ちます。", "Saya segera berdiri."],
            ["友達が立っています。", "Teman saya sedang berdiri."]
        ]
    },

    {
        kanji: "入",
        meaning: "Masuk",
        reading: "はい / い",
        level: "N5",
        examples: [
            ["部屋に入ります。", "Saya masuk ke kamar."],
            ["学校に入ります。", "Saya masuk sekolah."],
            ["中に入ってください。", "Silakan masuk ke dalam."],
            ["店に入りました。", "Saya masuk ke toko."],
            ["お風呂に入ります。", "Saya mandi."]
        ]
    },

    {
        kanji: "出",
        meaning: "Keluar",
        reading: "で / だ",
        level: "N5",
        examples: [
            ["家を出ます。", "Saya keluar dari rumah."],
            ["学校を出ます。", "Saya keluar dari sekolah."],
            ["外に出ます。", "Saya keluar."],
            ["駅を出ました。", "Saya keluar dari stasiun."],
            ["部屋から出ます。", "Saya keluar dari kamar."]
        ]
    },

    {
        kanji: "使",
        meaning: "Menggunakan",
        reading: "つか",
        level: "N5",
        examples: [
            ["ペンを使います。", "Saya menggunakan pulpen."],
            ["お金を使います。", "Saya menggunakan uang."],
            ["スマホを使います。", "Saya menggunakan HP."],
            ["日本語を使います。", "Saya menggunakan bahasa Jepang."],
            ["これを使ってください。", "Silakan gunakan ini."]
        ]
    },

    {
        kanji: "作",
        meaning: "Membuat",
        reading: "つく / さく",
        level: "N5",
        examples: [
            ["料理を作ります。", "Saya membuat masakan."],
            ["ケーキを作ります。", "Saya membuat kue."],
            ["宿題を作ります。", "Saya membuat tugas."],
            ["新しいものを作ります。", "Saya membuat sesuatu yang baru."],
            ["一緒に作りましょう。", "Mari membuat bersama."]
        ]
    },

    {
        kanji: "持",
        meaning: "Membawa / Memegang",
        reading: "も",
        level: "N5",
        examples: [
            ["本を持っています。", "Saya membawa buku."],
            ["傘を持っています。", "Saya membawa payung."],
            ["お金を持っています。", "Saya membawa uang."],
            ["これを持ってください。", "Tolong pegang ini."],
            ["荷物を持ちます。", "Saya membawa barang."]
        ]
    },

    {
        kanji: "思",
        meaning: "Berpikir",
        reading: "おも",
        level: "N5",
        examples: [
            ["そう思います。", "Saya berpikir begitu."],
            ["日本へ行きたいと思います。", "Saya pikir saya ingin pergi ke Jepang."],
            ["面白いと思います。", "Saya pikir ini menarik."],
            ["いいと思います。", "Saya pikir ini bagus."],
            ["難しいと思います。", "Saya pikir ini sulit."]
        ]
    },

    {
        kanji: "知",
        meaning: "Tahu",
        reading: "し",
        level: "N5",
        examples: [
            ["知っています。", "Saya tahu."],
            ["知りません。", "Saya tidak tahu."],
            ["その人を知っています。", "Saya mengenal orang itu."],
            ["答えを知っています。", "Saya tahu jawabannya."],
            ["日本をよく知っています。", "Saya mengenal Jepang dengan baik."]
        ]
    },

    {
        kanji: "言",
        meaning: "Mengatakan",
        reading: "い / げん",
        level: "N5",
        examples: [
            ["何と言いますか。", "Bagaimana mengatakannya?"],
            ["日本語で言います。", "Saya mengatakannya dalam bahasa Jepang."],
            ["先生が言いました。", "Guru berkata."],
            ["ありがとうと言います。", "Saya mengatakan terima kasih."],
            ["名前を言ってください。", "Tolong sebutkan nama."]
        ]
    },

    {
        kanji: "読",
        meaning: "Membaca",
        reading: "よ / どく",
        level: "N5",
        examples: [
            ["本を読みます。", "Saya membaca buku."],
            ["新聞を読みます。", "Saya membaca koran."],
            ["毎日読みます。", "Saya membaca setiap hari."],
            ["漢字を読みます。", "Saya membaca kanji."],
            ["この文を読んでください。", "Tolong baca kalimat ini."]
        ]
    },

    {
        kanji: "書",
        meaning: "Menulis",
        reading: "か / しょ",
        level: "N5",
        examples: [
            ["名前を書きます。", "Saya menulis nama."],
            ["漢字を書きます。", "Saya menulis kanji."],
            ["手紙を書きます。", "Saya menulis surat."],
            ["日記を書きます。", "Saya menulis buku harian."],
            ["ここに書いてください。", "Tolong tulis di sini."]
        ]
    },

    {
        kanji: "聞",
        meaning: "Mendengar / Bertanya",
        reading: "き / ぶん",
        level: "N5",
        examples: [
            ["音楽を聞きます。", "Saya mendengarkan musik."],
            ["先生に聞きます。", "Saya bertanya kepada guru."],
            ["話を聞きます。", "Saya mendengarkan cerita."],
            ["よく聞いてください。", "Tolong dengarkan baik-baik."],
            ["質問を聞きます。", "Saya mendengarkan pertanyaan."]
        ]
    },

    {
        kanji: "会",
        meaning: "Bertemu",
        reading: "あ / かい",
        level: "N5",
        examples: [
            ["友達に会います。", "Saya bertemu teman."],
            ["先生に会いました。", "Saya bertemu guru."],
            ["明日会いましょう。", "Mari bertemu besok."],
            ["駅で会います。", "Saya bertemu di stasiun."],
            ["家族に会いたいです。", "Saya ingin bertemu keluarga."]
        ]
    },

    {
        kanji: "間",
        meaning: "Antara / Durasi",
        reading: "あいだ / かん",
        level: "N5",
        examples: [
            ["三日間休みます。", "Saya libur selama tiga hari."],
            ["二時間勉強します。", "Saya belajar selama dua jam."],
            ["家と学校の間です。", "Di antara rumah dan sekolah."],
            ["少しの間待ちます。", "Saya menunggu sebentar."],
            ["長い間待ちました。", "Saya menunggu dalam waktu lama."]
        ]
    }

];


/* =====================================================
   HERMES PUBLIC DOMAIN IMAGES
===================================================== */

/*
    Sumber gambar:
    Wikimedia Commons

    Karya-karya lama/Public Domain.
*/

const hermesImages = [

    "https://commons.wikimedia.org/wiki/Special:FilePath/Hermes.png",

    "https://commons.wikimedia.org/wiki/Special:FilePath/Hermes_-_the_Greek_god_of_transitions_and_boundaries.jpg",

    "https://commons.wikimedia.org/wiki/Special:FilePath/Hermes_RI2.png"

];


/* =====================================================
   ELEMENT
===================================================== */

const grid = document.getElementById("kanjiGrid");

const searchInput =
    document.getElementById("searchInput");

const levelFilter =
    document.getElementById("levelFilter");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");


/* =====================================================
   RENDER CARDS
===================================================== */

function renderCards(data = kanjiData) {

    grid.innerHTML = "";

    data.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "kanji-card";

        card.innerHTML = `

            <span class="kanji-number">
                #${index + 1}
            </span>

            <div class="kanji-symbol">
                ${item.kanji}
            </div>

            <div class="kanji-meaning">
                ${item.meaning}
            </div>

            <div class="kanji-reading">
                ${item.reading}
            </div>

            <span class="kanji-level">
                ${item.level}
            </span>

            <div class="card-detail">

                ${item.examples.map((example) => `

                    <div class="example">

                        <div class="example-jp">
                            ${example[0]}
                        </div>

                        <div class="example-id">
                            ${example[1]}
                        </div>

                    </div>

                `).join("")}

            </div>
        `;


        /* buka / tutup kartu */

        card.addEventListener("click", () => {

            card.classList.toggle("open");

            markAsLearned(item.kanji);

        });

        grid.appendChild(card);

    });

}


/* =====================================================
   SEARCH
===================================================== */

function filterCards() {

    const keyword =
        searchInput.value.toLowerCase();

    const level =
        levelFilter.value;

    const result = kanjiData.filter(item => {

        const matchKeyword =

            item.kanji.includes(keyword) ||

            item.meaning
                .toLowerCase()
                .includes(keyword) ||

            item.reading
                .toLowerCase()
                .includes(keyword);


        const matchLevel =

            level === "all" ||
            item.level === level;


        return matchKeyword && matchLevel;

    });


    renderCards(result);
}


searchInput.addEventListener(
    "input",
    filterCards
);

levelFilter.addEventListener(
    "change",
    filterCards
);


/* =====================================================
   PROGRESS BELAJAR
===================================================== */

let learnedKanji =
    JSON.parse(
        localStorage.getItem("learnedKanji")
    ) || [];


function markAsLearned(kanji) {

    if (!learnedKanji.includes(kanji)) {

        learnedKanji.push(kanji);

        localStorage.setItem(
            "learnedKanji",
            JSON.stringify(learnedKanji)
        );

    }

    updateProgress();
}


function updateProgress() {

    const total =
        kanjiData.length;

    const learned =
        learnedKanji.length;

    const percentage =
        Math.min(
            100,
            (learned / total) * 100
        );


    progressText.textContent =
        `${learned} / ${total} dipelajari`;

    progressFill.style.width =
        `${percentage}%`;

}


/* =====================================================
   QUIZ
===================================================== */

const quizModal =
    document.getElementById("quizModal");

const startQuizBtn =
    document.getElementById("startQuizBtn");

const closeQuiz =
    document.getElementById("closeQuiz");

const quizKanji =
    document.getElementById("quizKanji");

const answerContainer =
    document.getElementById("answerContainer");

const nextQuestion =
    document.getElementById("nextQuestion");

const scoreText =
    document.getElementById("scoreText");

const questionNumber =
    document.getElementById("questionNumber");

const hermesImage =
    document.getElementById("hermesImage");

const hermesMessage =
    document.getElementById("hermesMessage");


let quizQuestions = [];

let currentQuestion = 0;

let score = 0;

let answered = false;


/* =====================================================
   RANDOM
===================================================== */

function randomItem(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


function shuffle(array) {

    return [...array].sort(
        () => Math.random() - 0.5
    );

}


/* =====================================================
   RANDOM HERMES
===================================================== */

function changeHermes() {

    const randomImage =
        randomItem(hermesImages);

    hermesImage.src =
        randomImage;

}


/* =====================================================
   START QUIZ
===================================================== */

startQuizBtn.addEventListener(
    "click",
    startQuiz
);


function startQuiz() {

    quizModal.classList.add("active");

    currentQuestion = 0;

    score = 0;

    /*
       Ambil 10 soal random
    */

    quizQuestions =
        shuffle(kanjiData)
        .slice(0, 10);


    scoreText.textContent =
        "Skor: 0";


    changeHermes();

    hermesMessage.textContent =
        "Ayo! Kita lihat seberapa banyak kanji yang kamu ingat. 💪";


    showQuestion();

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    answered = false;

    nextQuestion.disabled = true;

    const question =
        quizQuestions[currentQuestion];


    quizKanji.textContent =
        question.kanji;


    questionNumber.textContent =
        `Soal ${currentQuestion + 1} / ${quizQuestions.length}`;


    /*
       Ambil jawaban salah dari kanji lain
    */

    const wrongAnswers =

        shuffle(
            kanjiData.filter(
                item =>
                    item.kanji !== question.kanji
            )
        )
        .slice(0, 3)
        .map(item => item.meaning);


    const answers =
        shuffle([
            question.meaning,
            ...wrongAnswers
        ]);


    answerContainer.innerHTML = "";


    answers.forEach(answer => {

        const button =
            document.createElement("button");

        button.className =
            "answer-btn";

        button.textContent =
            answer;


        button.addEventListener(
            "click",
            () => checkAnswer(
                button,
                answer,
                question.meaning
            )
        );


        answerContainer.appendChild(button);

    });

}


/* =====================================================
   CHECK ANSWER
===================================================== */

function checkAnswer(
    selectedButton,
    selectedAnswer,
    correctAnswer
) {

    if (answered) return;

    answered = true;


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

        if (
            button.textContent ===
            correctAnswer
        ) {

            button.classList.add(
                "correct"
            );

        }

    });


    if (
        selectedAnswer ===
        correctAnswer
    ) {

        selectedButton.classList.add(
            "correct"
        );

        score += 10;

        scoreText.textContent =
            `Skor: ${score}`;


        hermesMessage.textContent =
            "Benar! 🎉 Kamu hebat!";

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        hermesMessage.textContent =
            `Belum tepat 😅 Jawabannya adalah "${correctAnswer}".`;

    }


    nextQuestion.disabled = false;

}


/* =====================================================
   NEXT QUESTION
===================================================== */

nextQuestion.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            finishQuiz();

        }

        else {

            changeHermes();

            showQuestion();

        }

    }
);


/* =====================================================
   FINISH QUIZ
===================================================== */

function finishQuiz() {

    quizKanji.textContent =
        "🎉";

    answerContainer.innerHTML = `

        <div style="
            grid-column:1/-1;
            text-align:center;
            padding:20px;
        ">

            <h2>
                Quiz Selesai!
            </h2>

            <p style="
                margin-top:10px;
                color:#777;
            ">
                Skor kamu:
            </p>

            <strong style="
                display:block;
                font-size:45px;
                margin-top:10px;
            ">
                ${score}
            </strong>

        </div>

    `;


    nextQuestion.textContent =
        "Ulangi Quiz 🔄";


    nextQuestion.disabled = false;


    hermesMessage.textContent =
        getFinalMessage(score);

}


/* =====================================================
   FINAL HERMES MESSAGE
===================================================== */

function getFinalMessage(score) {

    if (score === 100) {

        return "Luar biasa! Semua benar! 🏆";

    }

    if (score >= 80) {

        return "Hebat! Kamu sudah menguasai banyak kanji! 🔥";

    }

    if (score >= 60) {

        return "Bagus! Tinggal sedikit lagi untuk menguasainya! 💪";

    }

    if (score >= 40) {

        return "Lumayan! Yuk belajar lagi beberapa kanji. 📚";

    }

    return "Tidak apa-apa! Kesalahan adalah bagian dari belajar. Semangat! 🌟";

}


/* =====================================================
   RESTART QUIZ
===================================================== */

nextQuestion.addEventListener(
    "click",
    () => {

        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            nextQuestion.textContent =
                "Soal Berikutnya →";

            startQuiz();

        }

    }
);


/* =====================================================
   CLOSE QUIZ
===================================================== */

closeQuiz.addEventListener(
    "click",
    () => {

        quizModal.classList.remove(
            "active"
        );

    }
);


/*
   Klik area luar modal
*/

quizModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            quizModal
        ) {

            quizModal.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   INITIAL
===================================================== */

renderCards();

updateProgress();