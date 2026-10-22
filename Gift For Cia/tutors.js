const drugs = {
  paracetamol: {
    route: "Oral",
    badge: "Analgesik",
    dosage: "500-1000 mg per dosis, maksimal 4000 mg/hari",
    indications: "Demam, nyeri ringan-sedang",
    sideEffects: "Hepatotoksisitas (overdosis), mual, ruam kulit",
    contraindications: "Penyakit hati berat, alergi parasetamol",
    summary:
      "Obat masuk melalui mulut, diserap di usus, lalu dimetabolisme di hati sebelum bekerja di otak mengurangi nyeri dan demam.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Obat masuk melalui mulut lalu larut di saluran pencernaan. Tablet/kapsul paracetamol mulai terdisintegrasi dan bercampur dengan air liur." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Di lambung dengan pH asam (1.5-3.5), obat mulai dilarutkan. Lambung menggerakkan makanan dan obat ke usus halus melalui peristalsis. Waktu transit: 30-60 menit." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Di usus halus (duodenum, jejunum, ileum), paracetamol diserap melalui epitel usus. Penyerapan cepat dan efisien dengan bioavailabilitas 80-90%. Waktu penyerapan: 30-60 menit." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Paracetamol masuk ke portal darah dan beredar ke seluruh tubuh. Waktu puncak konsentrasi: 30-60 menit. Terikat 20-30% pada protein plasma. Obat didistribusikan ke jaringan lemak, otak, dan organ." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Metabolisme first-pass terjadi di hati. Paracetamol dikonjugasi dengan sulfat (60%) atau glukuronida (30%) menjadi metabolit tidak aktif. Enzim sitokrom P450 (terutama CYP2E1) terlibat. Proses: 1-2 jam." 
      },
      { 
        organ: "otak", 
        label: "Otak", 
        info: "Paracetamol yang belum dimetabolisme menembus sawar darah-otak. Bekerja menghambat produksi prostaglandin di hipotalamus (pusat suhu tubuh) dan mengurangi aktivitas pusat nyeri. Onset: 30-60 menit. Puncak efek: 1-2 jam." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Metabolit paracetamol (70% konjugat sulfat, 20% konjugat glukuronida, 5% sisa tidak berubah) difiltrasi di glomerulus dan dibuang melalui urin. Waktu paruh: 1.5-3 jam. Durasi kerja: 4-6 jam." 
      }
    ]
  },

  antibiotik: {
    route: "Oral",
    badge: "Antibiotik",
    dosage: "Tergantung jenis (Amoxicillin: 250-500 mg x3/hari, Eritromisin: 250-500 mg x4/hari)",
    indications: "Infeksi bakteri (pneumonia, infeksi saluran napas, otitis media, infeksi kulit)",
    sideEffects: "Diare, mual, alergi (ruam, anafilaksis pada yang sensitif), candidiasis",
    contraindications: "Alergi terhadap antibiotik sejenis, infeksi viral (tidak efektif)",
    summary:
      "Obat antibiotik diserap di saluran cerna, didistribusikan di darah untuk menjangkau infeksi bakteri, kemudian dikeluarkan melalui ginjal atau metabolisme hati.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Kapsul atau tablet antibiotik ditelan dan masuk ke esofagus. Tidak ada penyerapan di mulut karena lingkungan basa dan aktivitas enzim protease." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Antibiotik tiba di lambung dengan pH asam. Beberapa antibiotik (amoxicillin) stabil di asam lambung, beberapa lain (eritromisin) tidak stabil. Waktu transit: 1-3 jam tergantung jenis makanan." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Penyerapan optimal terjadi di usus halus. Amoxicillin diserap 80-90% melalui transportasi aktif. Beberapa antibiotik (fluorokuinolon) dapat diserap di usus besar. Bioavailabilitas oral: 60-95%." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Antibiotik tersebar melalui sirkulasi darah. Distribusi ke berbagai jaringan tergantung lipofilisitas dan ikatan protein. Waktu puncak: 1-2 jam. Beberapa terikat pada protein plasma 20-95% tergantung jenis." 
      },
      { 
        organ: "paru", 
        label: "Paru-paru", 
        info: "Antibiotik berdifusi ke jaringan paru untuk melawan infeksi bakteri (pneumonia, bronkitis). Penetrasi ke alveoli dan cairan paru berbeda sesuai struktur antibiotik. Konsentrasi efektif: 50-70% konsentrasi plasma." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Beberapa antibiotik (eritromisin, azitromicin) dimetabolisme ekstensif oleh hati melalui enzim CYP3A4. Metabolisme: 30-50% untuk beberapa jenis. Menghasilkan metabolit aktif atau tidak aktif." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Ekskresi utama melalui ginjal (70-95%). Mekanisme: filtrasi glomerulus dan sekresi tubulus. Amoxicillin dibuang 60% tidak berubah, sisanya metabolit. Waktu paruh: 1-2 jam. Durasi: 8-12 jam per dosis." 
      }
    ]
  },

  insulin: {
    route: "Suntik",
    badge: "Hormon",
    dosage: "Tergantung tipe insulin dan kebutuhan pasien (0.5-1 unit/kg/hari), disesuaikan dengan kadar gula darah",
    indications: "Diabetes tipe 1, diabetes tipe 2 (bila obat oral tidak cukup), ketoasidosis diabetik",
    sideEffects: "Hipoglikemia (gula darah turun drastis), lipodistrofi di tempat suntik, alergi lokal",
    contraindications: "Hipoglikemia akut (tidak boleh diberikan saat gula darah sudah rendah)",
    summary:
      "Insulin disuntikkan ke jaringan subkutan, masuk ke aliran darah, lalu membantu sel menggunakan glukosa dan menyimpan energi.",
    steps: [
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Insulin langsung masuk ke aliran darah dari jaringan subkutan. Onset: 10-20 menit (rapid-acting) atau 30-60 menit (long-acting). Konsentrasi insulin meningkat dalam plasma." 
      },
      { 
        organ: "jantung", 
        label: "Jantung", 
        info: "Jantung memompa darah yang mengandung insulin ke seluruh tubuh. Insulin beredar dalam sirkulasi untuk menjangkau sel target di berbagai organ. Waktu sirkulasi: beberapa menit." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Insulin bekerja pada hepatosit (sel hati) untuk: 1) Mengurangi produksi glukosa (glukoneogenesis), 2) Meningkatkan penyimpanan glikogen, 3) Menurunkan lipolisis. Efek: glukosa darah turun 40-60 mg/dL." 
      },
      { 
        organ: "otak", 
        label: "Otak", 
        info: "Sel otak menggunakan glukosa sebagai sumber energi utama. Insulin memfasilitasi transportasi glukosa ke dalam sel melalui GLUT1. Menjaga homeostasis energi dan fungsi neurotransmiter. Konsentrasi glukosa ideal: 70-100 mg/dL." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Insulin meningkatkan penyerapan glukosa di sel usus. Memfasilitasi transportasi aktif glukosa melalui SGLT1 dan GLUT2. Waktu puncak efek insulin: 1-3 jam setelah injeksi." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Insulin disaring oleh glomerulus tetapi 99% direabsorpsi di tubulus proksimal melalui pinocytosis. Hanya 1% terekskresi dalam urin. Waktu paruh insulin: 4-6 menit dalam darah, 6 jam dalam jaringan." 
      }
    ]
  },

  ibuprofen: {
    route: "Oral",
    badge: "NSAID",
    dosage: "200-400 mg per dosis, maksimal 1200 mg/hari (tanpa resep), 3200 mg/hari (dengan resep)",
    indications: "Nyeri ringan-sedang, demam, peradangan, dismenore (nyeri haid)",
    sideEffects: "Iritasi lambung, tukak lambung, mual, sakit kepala, retensi cairan, kerusakan ginjal (jangka panjang)",
    contraindications: "Ulkus lambung aktif, alergi NSAID, insufisiensi ginjal berat, kehamilan trimester 3",
    summary:
      "Obat antiinflamasi yang diserap cepat, bekerja mengurangi peradangan, nyeri, dan demam dengan menghambat COX-1 dan COX-2.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Tablet atau kaplet ibuprofen ditelan. Obat tidak diserap di mulut karena pH tinggi dan ukuran molekul besar. Langsung menuju lambung dan usus." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Ibuprofen tiba di lambung. Cukup stabil di pH asam. Pada dosis tinggi dapat mengiritasi mukosa lambung karena menghambat produksi prostaglandin pelindung lambung. Waktu transit: 1-2 jam." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Penyerapan cepat dan lengkap di usus halus (bioavailabilitas 80%). Ibuprofen diserap melalui difusi pasif. Onset: 20-30 menit. Puncak konsentrasi: 45 menit-2 jam." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Ibuprofen tersebar melalui plasma. Terikat 99% pada albumin plasma. Mendistribusi ke jaringan inflamed dengan permeabilitas kapiler meningkat. Konsentrasi tinggi pada jaringan yang meradang." 
      },
      { 
        organ: "paru", 
        label: "Paru-paru", 
        info: "Ibuprofen berdifusi ke paru untuk melawan peradangan. Menghambat COX-1 dan COX-2 yang memproduksi prostaglandin dan leukotrien (mediator inflamasi). Mengurangi edema dan bronkokonstriksi pada asma." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Metabolisme first-pass ekstensif di hati (30-50%). Ibuprofen diubah melalui oksidasi, konjugasi, dan β-oxidation menjadi metabolit inaktif. Enzim CYP2C9, CYP2C8 terlibat. Metabolisme: 90-99%." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Metabolit (70-80%) dan sedikit ibuprofen tidak berubah (10-20%) dibuang melalui urin. Ibuprofen menghambat enzim COX-2 di ginjal sehingga mengurangi produksi prostaglandin, dapat menyebabkan retensi cairan. Waktu paruh: 1.8-2.5 jam." 
      }
    ]
  },

  amoxicillin: {
    route: "Oral",
    badge: "Penicillin",
    dosage: "250-500 mg x3/hari (dewasa), 3 hari - 2 minggu tergantung infeksi",
    indications: "Infeksi bakteri gram-positif dan beberapa gram-negatif (faringitis, otitis media, pneumonia, UTI)",
    sideEffects: "Diare, mual, alergi (ruam, angioedema, anafilaksis pada penderita alergi penisilin)",
    contraindications: "Alergi penisilin/beta-laktam, mononucleosis (risiko ruam parah), kehamilan (kategori B)",
    summary:
      "Antibiotik beta-laktam yang membunuh bakteri gram-positif dan beberapa gram-negatif dengan menghambat sintesis dinding sel bakteri.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Kapsul amoxicillin ditelan. Amoxicillin stabil di pH asam lambung berbeda dengan penisilin G. Tidak diserap di mulut, langsung ke lambung." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Amoxicillin stabil di lingkungan asam lambung. Tidak terdisintegrasi atau inaktif meskipun dalam pH 1.5-3.5. Waktu transit: 1-3 jam. Dapat diminum dengan atau tanpa makanan." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Penyerapan cepat dan hampir lengkap (95%) dari usus halus. Transportasi aktif melalui pembawa peptida. Bioavailabilitas: 80-85% setelah pemberian oral. Puncak konsentrasi: 1-2 jam." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Amoxicillin beredar dalam plasma dan mendistribusi ke seluruh tubuh. Terikat 20% pada protein plasma. Menembus berbagai jaringan termasuk jaringan infeksi. Konsentrasi efektif untuk membunuh bakteri tercapai dalam 1-2 jam." 
      },
      { 
        organ: "paru", 
        label: "Paru-paru", 
        info: "Amoxicillin berdifusi baik ke jaringan paru dan cairan bronkus. Bekerja membunuh bakteri penyebab pneumonia, bronkitis, dan otitis media (infection telinga tengah). Konsentrasi paru: 60-70% konsentrasi plasma." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Amoxicillin tidak dimetabolisme ekstensif oleh hati (hanya 10-20% dimetabolisme). Tidak terikat pada enzim CYP. Dibuang dalam bentuk asli atau sedikit berubah. Aman untuk fungsi hati normal." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "80-90% amoxicillin dibuang tanpa perubahan melalui urin (ekskresi renal). Mekanisme: filtrasi glomerulus 60% dan sekresi tubulus 40%. Waktu paruh: 1-1.5 jam. Durasi: 8 jam (diminum 3x sehari untuk efek optimal)." 
      }
    ]
  },

  metformin: {
    route: "Oral",
    badge: "Antidiabetes",
    dosage: "500-850 mg x1-3/hari (dinaikkan bertahap), maksimal 2000-2550 mg/hari",
    indications: "Diabetes tipe 2, prediabetes, PCOS (sindrom ovarium polikistik)",
    sideEffects: "Diare, mual, perut kembung, asidosis laktat (jarang), vitamin B12 defisiensi (jangka panjang)",
    contraindications: "Insufisiensi ginjal (eGFR <30), ketoasidosis diabetik, kontras radiologis (hentikan sebelum kontras)",
    summary:
      "Obat diabetes tipe 2 yang menurunkan glukosa darah dengan mengurangi produksi glukosa hati dan meningkatkan sensitivitas insulin.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Tablet metformin ditelan. Obat tidak diserap di mulut. Langsung menuju lambung. Metformin memiliki rasa pahit dan metalik jika langsung kontak lidah." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Metformin mencapai lambung dengan pH asam. Stabil di lambung. Dapat menyebabkan mual dan gangguan pencernaan pada beberapa pasien. Sebaiknya diminum bersama makanan. Waktu transit: 1-2 jam." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Penyerapan parsial di usus halus melalui transportasi aktif via organic cation transporter 1 (OCT1). Bioavailabilitas: 50-60%. Sisa metformin yang tidak terserap dibuang feses (30-40%). Puncak konsentrasi: 1-3 jam." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Metformin beredar dalam plasma tanpa terikat pada protein (<5%). Mendistribusi ke jaringan adiposa dan otot. Tidak menembus sawar darah-otak dalam jumlah signifikan. Konsentrasi terapi: 0.5-2 µg/mL." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Efek utama metformin terjadi di hati. Menghambat glukoneogenesis (pembentukan glukosa baru) dengan menginhibisi enzim kompleks I mitokondria. Mengurangi produksi glukosa hati hingga 30-50%. Mengaktifkan AMPK yang meningkatkan sensitivitas insulin." 
      },
      { 
        organ: "otak", 
        label: "Otak", 
        info: "Metformin meningkatkan sensitivitas insulin di hipotalamus. Membantu regulasi nafsu makan melalui sinyal leptin. Menjaga keseimbangan metabolisme energi. Efek pada otak: minor dibanding hati dan otot." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "90% metformin dibuang tanpa perubahan melalui urin melalui filtrasi glomerulus dan sekresi aktif. Waktu paruh: 4-8 jam. Pada insufisiensi ginjal, metformin terakumulasi (risiko asidosis laktat). Durasi: 8-12 jam per dosis." 
      }
    ]
  },

  atorvastatin: {
    route: "Oral",
    badge: "Statin",
    dosage: "10-80 mg sekali sehari (malam hari), disesuaikan dengan kadar kolesterol",
    indications: "Hiperkolesterolemia, pencegahan penyakit jantung dan stroke, dislipidemia",
    sideEffects: "Miopati (nyeri otot), kelemahan otot, rhabdomiolisis (jarang), hepatotoksisitas (jarang), peningkatan gula darah",
    contraindications: "Kehamilan, penyakit hati aktif, kombinasi dengan inhibitor CYP3A4 kuat",
    summary:
      "Obat penurun kolesterol yang bekerja menghambat sintesis kolesterol hati, menurunkan LDL dan trigliserida, meningkatkan HDL.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Tablet atorvastatin ditelan, biasanya malam hari untuk maksimal efek. Tidak diserap di mulut. Langsung menuju sistem pencernaan." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Atorvastatin mencapai lambung. Stabil dalam pH asam. Waktu transit lambung: 1-2 jam. Dapat diminum dengan atau tanpa makanan, meskipun makanan berlemak dapat meningkatkan penyerapan." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Penyerapan di usus halus melalui difusi pasif. Bioavailabilitas: 14% setelah pemberian oral (karena metabolisme first-pass ekstensif). Penyerapan ditingkatkan dengan makanan berlemak. Puncak konsentrasi: 1-2 jam." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Atorvastatin beredar dalam plasma dan mendistribusi ke seluruh tubuh. Terikat 98% pada lipoprotein. Sebagian besar berada dalam LDL particles. Mendistribusi ke jaringan dengan metabolisme kolesterol tinggi, terutama hati. Waktu transit: 3-4 jam." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Target utama atorvastatin adalah hepatosit. Menghambat enzim HMG-CoA reduktase (rate-limiting step sintesis kolesterol). Mengurangi produksi kolesterol 30-40%. Meningkatkan ekspresi reseptor LDL di sel hati (uptake LDL dari darah meningkat 50-60%)." 
      },
      { 
        organ: "jantung", 
        label: "Jantung", 
        info: "Penurunan LDL kolesterol mengurangi oksidasi LDL dan pembentukan plak atherosclerosis. Mengurangi risiko MI (infark miokard) hingga 30%. Atorvastatin juga memiliki efek antiinflamasi pada endotel vaskular." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Atorvastatin dan metabolitnya dibuang sebagian melalui urin (2%) tetapi mayoritas melalui empedu (70-80%) sebagai konjugat sulfat. Waktu paruh: 14-20 jam (panjang sehingga diberikan sekali sehari). Durasi efek: 24 jam." 
      }
    ]
  },

  omeprazole: {
    route: "Oral",
    badge: "PPI",
    dosage: "20-40 mg sekali sehari (pagi hari sebelum makan)",
    indications: "Tukak lambung, GERD, gastritis, prophylaxis perdarahan GI",
    sideEffects: "Sakit kepala, diare, konstipasi, hipomagnesemia (jangka panjang), defisiensi vitamin B12 dan Ca",
    contraindications: "Alergi omeprazole, kombinasi dengan clopidogrel (mengurangi efektivitas)",
    summary:
      "Obat penekan asam lambung yang bekerja menghambat pompa proton di sel parietal lambung, mengurangi produksi asam lambung hingga 90%.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Kapsul omeprazole dengan granul enterik ditelan utuh (jangan dikunyah). Granul enterik tahan terhadap pH asam mulut dan lambung. Langsung menuju lambung." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Kapsul tiba di lambung. Granul omeprazole terlindungi oleh coating enterik dan tidak larut di pH asam lambung. Granul bergerak menuju usus halus. Waktu transit: 1-2 jam." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Granul omeprazole larut di pH netral/basa usus halus (pH >6). Omeprazole diserap melalui difusi pasif. Bioavailabilitas: 30-40% setelah pemberian oral (efek first-pass). Puncak konsentrasi: 0.5-3.5 jam." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Omeprazole beredar dalam darah. Terikat 95% pada protein plasma (albumin). Waktu paruh dalam plasma: 1 jam. Meskipun waktu paruh pendek, efek tahan lama karena pengikatan kuat pada pompa proton. Mendistribusi ke sel parietal lambung." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Omeprazole dari darah masuk ke sel parietal lambung. Di dalam sel, omeprazole diaktifkan menjadi sulfenamida yang menghambat H+/K+ ATPase (pompa proton). Mengurangi sekresi asam lambung hingga 90%. Onset: 1 jam. Puncak efek: 2-4 jam." 
      },
      { 
        organ: "otak", 
        label: "Otak", 
        info: "Omeprazole meningkatkan pH lambung (dari 1-2 menjadi 3-4). Di hipotalamus, signalisasi regulator napsu makan terpengaruh (beberapa pasien mengalami perubahan nafsu makan). Efek minimal pada fungsi SSP karena penetrasi sawar darah-otak terbatas." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Omeprazole dimetabolisme ekstensif di hati (>90%) oleh CYP2C19 dan CYP3A4 menjadi metabolit inaktif. Metabolit dibuang melalui urin (77%) dan feses (23%). Waktu paruh: 40 menit (tapi efek berlangsung 24-48 jam karena aktivasi pompa proton bersifat irreversibel)." 
      }
    ]
  },

  loratadine: {
    route: "Oral",
    badge: "Antihistamin",
    dosage: "10 mg sekali sehari (dewasa), 5 mg sekali sehari (anak 2-12 tahun)",
    indications: "Alergi musiman dan sepanjang tahun, urtikaria (gatal-gatal), reaksi alergi",
    sideEffects: "Sakit kepala, kelelahan (minimal), mulut kering, palpitasi (jarang)",
    contraindications: "Alergi loratadine, penyakit hati berat, ibu hamil (kategori B)",
    summary:
      "Obat antihistamin generasi ke-2 yang memblokir reseptor H1 untuk mengatasi alergi tanpa menyebabkan kantuk.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Tablet loratadine ditelan. Obat tidak diserap di mulut karena lipofilisitas tinggi membutuhkan lingkungan pencernaan. Langsung menuju lambung." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Loratadine tiba di lambung. Sangat lipofilik sehingga dapat menembus membran sel dengan mudah. Waktu transit: 1-2 jam. Pemberian bersama makanan dapat memperlambat penyerapan tetapi meningkatkan bioavailabilitas." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Penyerapan lambat tetapi lengkap di usus halus melalui difusi pasif. Bioavailabilitas: 40-50%. Metabolisme first-pass terjadi di hati (70% loratadine). Puncak konsentrasi: 1-3 jam (lebih lambat dari antihistamin generasi 1)." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Loratadine beredar dalam plasma. Terikat 97-99% pada protein plasma (albumin). Metabolit aktif (descarboethoxyloratadine) juga beredar dan berkontribusi pada efek terapeutik. Konsentrasi maksimal: 1-3 jam." 
      },
      { 
        organ: "paru", 
        label: "Paru-paru", 
        info: "Loratadine berdifusi ke paru dan jaringan alveolar. Memblokir reseptor H1 pada sel mast dan basofil. Mencegah degranulasi dan pelepasan histamin, leukotrien, prostaglandin. Mengurangi bronkokonstriksi dan bronkorea pada asma alergi." 
      },
      { 
        organ: "hati", 
        label: "Hati", 
        info: "Metabolisme first-pass ekstensif terjadi di hati (70%). Loratadine diubah menjadi metabolit aktif (descarboethoxyloratadine) oleh CYP3A4 dan CYP2D6. Metabolit aktif tersebar ke jaringan dan memberikan efek terapeutik tambahan." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Loratadine dan metabolitnya dibuang sebagian melalui urin (40%) dan feses (60%). Waktu paruh loratadine: 8 jam. Waktu paruh metabolit aktif: 28 jam (lebih panjang, memberikan efek berkepanjangan). Durasi: 24 jam (diminum sekali sehari)." 
      }
    ]
  },

  aspirin: {
    route: "Oral",
    badge: "Antiplatelet",
    dosage: "Pencegahan: 75-100 mg/hari, Nyeri akut: 300-600 mg/dosis (maksimal 4000 mg/hari)",
    indications: "Pencegahan infark miokard dan stroke, nyeri ringan-sedang, demam, antiinflamasi",
    sideEffects: "Perdarahan GI, tukak lambung, asma bronkial (pada yang sensitif), tinnitus (dosis tinggi), Reye's syndrome (anak dengan virus)",
    contraindications: "Perdarahan aktif, hemofilia, alergi aspirin, tukak lambung aktif, kehamilan trimester 3, anak dengan demam virus",
    summary:
      "Obat antikoagulan yang menghambat agregasi platelet dengan menginhibisi COX-1, mencegah pembentukan trombus dan stroke.",
    steps: [
      { 
        organ: "mulut", 
        label: "Mulut", 
        info: "Tablet aspirin ditelan, biasanya dengan air untuk mempercepat penyerapan. Aspirin dapat diserap minimal di mulut tetapi tidak signifikan. Langsung menuju lambung." 
      },
      { 
        organ: "lambung", 
        label: "Lambung", 
        info: "Aspirin tiba di lambung dengan pH asam. Pada dosis tinggi dapat mengiritasi mukosa lambung karena menghambat produksi prostaglandin pelindung. Sebaiknya diminum setelah makan. Waktu transit: 1-2 jam." 
      },
      { 
        organ: "usus", 
        label: "Usus", 
        info: "Penyerapan cepat dan lengkap di usus halus (bioavailabilitas: >90%). Aspirin diserap melalui difusi pasif. Onset cepat: 15-30 menit untuk efek antiplatelet. Puncak konsentrasi: 40-60 menit." 
      },
      { 
        organ: "darah", 
        label: "Darah", 
        info: "Aspirin beredar dalam plasma dan cepat dimetabolisme menjadi salisilat (dalam 20-30 menit). Salisilat terikat 50-90% pada albumin plasma tergantung konsentrasi. Efek antiplatelet irreversibel terjadi pada platelet." 
      },
      { 
        organ: "darah", 
        label: "Platelet", 
        info: "Aspirin (atau metabolitnya) menginhibisi COX-1 di megakarioblas (sel platelet). Mencegah produksi tromboxan A2 (mediator agregasi platelet). Efek berlangsung seumur hidup platelet (8-12 hari) karena platelet tidak punya nukleus (tidak bisa resintesis enzyme). Efek irreversibel." 
      },
      { 
        organ: "jantung", 
        label: "Jantung", 
        info: "Penurunan agregasi platelet mengurangi pembentukan trombus di arteri koroner. Mencegah MI (infark miokard) dengan mengurangi plak ruptur dan trombosis. Aspirin juga memiliki efek antiinflamasi pada endotel. Risiko berkurang 25-30%." 
      },
      { 
        organ: "ginjal", 
        label: "Ginjal", 
        info: "Salisilat (hasil metabolisme aspirin) dibuang melalui urin (70-80%) dan beberapa melalui empedu. Waktu paruh salisilat: dose-dependent (2-3 jam pada dosis rendah, 15-30 jam pada dosis tinggi). Durasi efek antiplatelet: 8-12 hari (seumur hidup platelet)." 
      }
    ]
  }
};

const organIcons = {
  mulut: "👄",
  lambung: "🫧",
  usus: "🧬",
  darah: "🩸",
  hati: "🫀",
  otak: "🧠",
  ginjal: "🧫",
  paru: "🫁",
  jantung: "💓"
};

const organNames = {
  mulut: "Mulut",
  lambung: "Lambung",
  usus: "Usus",
  darah: "Darah",
  hati: "Hati",
  otak: "Otak",
  ginjal: "Ginjal",
  paru: "Paru-paru",
  jantung: "Jantung"
};

const drugList = document.getElementById("drugList");
const routeLabel = document.getElementById("routeLabel");
const routeEl = document.getElementById("route");
const organsGrid = document.getElementById("organsGrid");
const detailDrugName = document.getElementById("detailDrugName");
const detailSummary = document.getElementById("detailSummary");
const activeNodeText = document.getElementById("activeNodeText");
const activeNodeDesc = document.getElementById("activeNodeDesc");
const drugBadge = document.getElementById("drugBadge");
const simulateBtn = document.getElementById("simulateBtn");

let selectedDrug = "paracetamol";
let isAnimating = false;
let intervalId = null;

function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderDrugButtons() {
  drugList.innerHTML = "";
  Object.entries(drugs).forEach(([key, drug]) => {
    const btn = document.createElement("button");
    btn.className = "drug-btn" + (key === selectedDrug ? " active" : "");
    btn.innerHTML = `
      <div class="drug-name">${toTitleCase(key)}</div>
      <div class="drug-meta">${drug.badge} • ${drug.route}</div>
    `;
    btn.addEventListener("click", () => {
      selectedDrug = key;
      renderDrugButtons();
      renderData();
      stopAnimation();
    });
    drugList.appendChild(btn);
  });
}

function renderRoute() {
  const steps = drugs[selectedDrug].steps;
  routeEl.innerHTML = "";

  steps.forEach((step, index) => {
    const node = document.createElement("div");
    node.className = "route-node" + (index === 0 ? " active" : "");
    node.dataset.organ = step.organ;
    node.innerHTML = `
      <span class="mini-dot"></span>
      ${step.label}
    `;

    node.addEventListener("click", () => {
      setActiveStep(step.organ);
      activeNodeText.textContent = organNames[step.organ];
      activeNodeDesc.textContent = step.info;
    });

    routeEl.appendChild(node);
  });
}

function renderOrgansGrid() {
  organsGrid.innerHTML = "";
  const allOrgans = [
    "mulut", "lambung", "usus", "darah", "hati", "otak", "ginjal", "paru", "jantung"
  ];

  allOrgans.forEach((organ) => {
    const card = document.createElement("div");
    card.className = "organ-card";
    card.dataset.organ = organ;
    card.innerHTML = `
      <div class="organ-icon">${organIcons[organ] || "🩺"}</div>
      <div class="organ-name">${organNames[organ] || toTitleCase(organ)}</div>
    `;

    card.addEventListener("click", () => {
      const step = drugs[selectedDrug].steps.find((s) => s.organ === organ);
      if (step) {
        setActiveStep(organ);
        activeNodeText.textContent = organNames[organ];
        activeNodeDesc.textContent = step.info;
      }
    });

    organsGrid.appendChild(card);
  });
}

function renderData() {
  const drug = drugs[selectedDrug];
  detailDrugName.textContent = toTitleCase(selectedDrug);
  detailSummary.textContent = drug.summary;
  routeLabel.textContent = drug.route;
  drugBadge.textContent = drug.badge;

  // Update info dosis
  document.getElementById("dosageInfo").textContent = drug.dosage;
  document.getElementById("indications").textContent = drug.indications;
  document.getElementById("sideEffects").textContent = drug.sideEffects;
  document.getElementById("contraindications").textContent = drug.contraindications;


  renderRoute();
  const first = drug.steps[0];
  setActiveStep(first.organ);
  activeNodeText.textContent = organNames[first.organ];
  activeNodeDesc.textContent = first.info;
}

function setActiveStep(organKey) {
  document.querySelectorAll(".route-node").forEach((node) => {
    node.classList.toggle("active", node.dataset.organ === organKey);
  });

  document.querySelectorAll(".organ-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.organ === organKey);
  });
}

function stopAnimation() {
  if (intervalId) clearInterval(intervalId);
  intervalId = null;
  isAnimating = false;
  simulateBtn.textContent = "Mulai simulasi";
}

function animateSimulation() {
  const steps = drugs[selectedDrug].steps;
  let index = 0;

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    const step = steps[index];
    if (!step) {
      stopAnimation();
      return;
    }

    setActiveStep(step.organ);
    activeNodeText.textContent = organNames[step.organ];
    activeNodeDesc.textContent = step.info;

    index++;
    if (index >= steps.length) {
      stopAnimation();
    }
  }, 1200);

  simulateBtn.textContent = "Berhenti";
  isAnimating = true;
}

simulateBtn.addEventListener("click", () => {
  if (isAnimating) {
    stopAnimation();
    return;
  }

  animateSimulation();
});

renderDrugButtons();
renderData();
renderOrgansGrid();