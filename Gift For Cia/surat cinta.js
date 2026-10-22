const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", mass: "1.008", category: "nonmetal", config: "1s¹", valence: "1", state: "Gas", electro: "2.20", description: "Hidrogen adalah unsur paling ringan dan paling banyak di alam semesta. Merupakan komponen utama bintang dan air. Sangat reaktif dan sering digunakan dalam industri.", uses: "Bahan bakar roket, produksi amonia, proses petrokimia, sel bahan bakar hidrogen." },
  
  { number: 2, symbol: "He", name: "Helium", mass: "4.0026", category: "noble", config: "1s²", valence: "8", state: "Gas", electro: "N/A", description: "Helium adalah gas mulia kedua yang sangat stabil. Gas ini paling ringan setelah hidrogen dan tidak bereaksi dengan elemen lain.", uses: "Pengisi balon dan zeppelin, pendingin untuk superkomputer dan MRI, gas pelindung dalam pengelasan." },
  
  { number: 3, symbol: "Li", name: "Lithium", mass: "6.94", category: "alkali", config: "[He]2s¹", valence: "1", state: "Solid", electro: "0.98", description: "Lithium adalah logam alkali paling ringan. Sangat reaktif dan mudah terbakar, tetapi memiliki aplikasi penting dalam teknologi.", uses: "Baterai isi ulang (smartphone, laptop), obat untuk bipolar disorder, paduan logam ringan untuk pesawat." },
  
  { number: 4, symbol: "Be", name: "Beryllium", mass: "9.0122", category: "alkaline", config: "[He]2s²", valence: "2", state: "Solid", electro: "1.57", description: "Beryllium adalah logam yang keras, ringan, dan tahan suhu tinggi. Namun sangat beracun jika terhirup sebagai debu.", uses: "Paduan untuk komponen pesawat dan satelit, jendela untuk perangkat sinar-X, komponen mesin presisi tinggi." },
  
  { number: 5, symbol: "B", name: "Boron", mass: "10.81", category: "semimetal", config: "[He]2s²2p¹", valence: "3", state: "Solid", electro: "2.04", description: "Boron adalah semilogam yang keras dan memiliki warna coklat kehitaman. Membentuk banyak senyawa penting dalam industri.", uses: "Kaca borosilikat yang tahan panas, deterjen dan pemutih, obat antiseptik dan desinfektan, semiconductor." },
  
  { number: 6, symbol: "C", name: "Carbon", mass: "12.011", category: "nonmetal", config: "[He]2s²2p²", valence: "4", state: "Solid", electro: "2.55", description: "Karbon adalah fondasi kehidupan organik. Dapat membentuk empat ikatan, memungkinkan keragaman kimia luar biasa yang mendukung semua makhluk hidup.", uses: "Batu bara sebagai bahan bakar, berlian untuk perhiasan, grafit untuk pensil, serat karbon untuk material komposit, basis biokimia semua organisme." },
  
  { number: 7, symbol: "N", name: "Nitrogen", mass: "14.007", category: "nonmetal", config: "[He]2s²2p³", valence: "5", state: "Gas", electro: "3.04", description: "Nitrogen membentuk 78% dari atmosfer Bumi. Sangat stabil sebagai gas N₂ tetapi penting untuk semua mahluk hidup dalam bentuk senyawa organik.", uses: "Pupuk untuk pertanian (amonia, nitrat), gas inert untuk penyimpanan bahan kimia, pengawet makanan, laser nitrogen UV." },
  
  { number: 8, symbol: "O", name: "Oxygen", mass: "15.999", category: "nonmetal", config: "[He]2s²2p⁴", valence: "6", state: "Gas", electro: "3.44", description: "Oksigen sangat penting untuk pernapasan sebagian besar makhluk hidup. Gas ini sangat reaktif dan membentuk banyak senyawa dengan elemen lain.", uses: "Pernapasan manusia dan hewan, proses pembakaran, produksi air, oksigen medis untuk pasien, produksi baja dan logam." },
  
  { number: 9, symbol: "F", name: "Fluorine", mass: "18.998", category: "halogen", config: "[He]2s²2p⁵", valence: "7", state: "Gas", electro: "3.98", description: "Fluorine adalah halogen paling reaktif dan elemen paling elektronegatif dari semua unsur. Sangat berbahaya dan mudah membentuk senyawa.", uses: "Pasta gigi (fluoride untuk kesehatan gigi), freon untuk pendingin, uranium enrichment, bahan bakar roket." },
  
  { number: 10, symbol: "Ne", name: "Neon", mass: "20.180", category: "noble", config: "[He]2s²2p⁶", valence: "8", state: "Gas", electro: "N/A", description: "Neon adalah gas mulia yang sangat stabil dan tidak bereaksi dengan elemen apapun. Terkenal karena bersinar terang saat dialiri arus listrik.", uses: "Lampu neon untuk iklan dan dekorasi, penanda lalu lintas, laser neon, display televisi (di masa lalu)." },
  
  { number: 11, symbol: "Na", name: "Sodium", mass: "22.990", category: "alkali", config: "[Ne]3s¹", valence: "1", state: "Solid", electro: "0.93", description: "Natrium adalah logam alkali yang sangat reaktif. Mudah bereaksi dengan air dan terbakar spontan di udara jika tidak dirawat dengan hati-hati.", uses: "Garam meja (NaCl), bahan kimia industri, lampu sodium untuk penerangan jalan, produksi logam melalui elektrolisis." },
  
  { number: 12, symbol: "Mg", name: "Magnesium", mass: "24.305", category: "alkaline", config: "[Ne]3s²", valence: "2", state: "Solid", electro: "1.31", description: "Magnesium adalah logam ringan namun kuat. Penting untuk fotosintesis dalam tumbuhan (pusat klorofil) dan untuk fungsi otot manusia.", uses: "Paduan ringan untuk pesawat dan mobil, suplemen nutrisi magnesium, bahan peledak dan kembang api, obat-obatan pencahar." },
  
  { number: 13, symbol: "Al", name: "Aluminum", mass: "26.982", category: "metal", config: "[Ne]3s²3p¹", valence: "3", state: "Solid", electro: "1.61", description: "Aluminium adalah logam yang ringan, tahan korosi, dan sangat versatile. Menjadi logam paling banyak digunakan setelah besi.", uses: "Kemasan dan foil makanan, struktur pesawat dan mobil, kabel listrik, konstruksi bangunan, panci dan peralatan dapur." },
  
  { number: 14, symbol: "Si", name: "Silicon", mass: "28.085", category: "semimetal", config: "[Ne]3s²3p²", valence: "4", state: "Solid", electro: "1.90", description: "Silicon adalah semilogam yang sangat penting dalam elektronik modern. Komponen utama pasir dan mineral batu. Elemen kedua paling berlimpah di kerak bumi.", uses: "Chip komputer dan semikonduktor, kaca dan bahan gelas, silikon untuk sealant dan karet silikon, panel surya." },
  
  { number: 15, symbol: "P", name: "Phosphorus", mass: "30.974", category: "nonmetal", config: "[Ne]3s²3p³", valence: "5", state: "Solid", electro: "2.19", description: "Fosfor sangat penting untuk DNA, RNA, dan ATP (energi seluler). Juga kritis untuk pembentukan tulang. Penting untuk semua kehidupan.", uses: "Pupuk untuk pertanian, detergen dan pembersih, pestisida, bahan kimia untuk industri, obat-obatan farmasi." },
  
  { number: 16, symbol: "S", name: "Sulfur", mass: "32.06", category: "nonmetal", config: "[Ne]3s²3p⁴", valence: "6", state: "Solid", electro: "2.58", description: "Sulfur adalah nonlogam yang membentuk banyak senyawa organik dan anorganik. Penting untuk protein melalui asam amino sistein dan metionin.", uses: "Pupuk (amonium sulfat, sulfat kalium), vulkanisasi karet untuk ban, obat-obatan dan suplemen, bahan kimia industri." },
  
  { number: 17, symbol: "Cl", name: "Chlorine", mass: "35.45", category: "halogen", config: "[Ne]3s²3p⁵", valence: "7", state: "Gas", electro: "3.16", description: "Klorin adalah halogen berwarna hijau kekuningan dengan bau yang menyengat. Sangat reaktif dan merupakan disinfektan yang kuat.", uses: "Desinfeksi air minum dan kolam renang, produksi PVC untuk pipa dan plastik, bahan kimia industri, pemutih." },
  
  { number: 18, symbol: "Ar", name: "Argon", mass: "39.948", category: "noble", config: "[Ne]3s²3p⁶", valence: "8", state: "Gas", electro: "N/A", description: "Argon adalah gas mulia yang tidak reaktif dan membentuk sekitar 0.93% atmosfer Bumi. Lebih berat dari udara dan tidak beracun.", uses: "Gas pelindung dalam pengelasan, pengisian tabung cahaya, cairan pendingin untuk superkonduktor, gas penggerak aerosol." },
  
  { number: 19, symbol: "K", name: "Potassium", mass: "39.098", category: "alkali", config: "[Ar]4s¹", valence: "1", state: "Solid", electro: "0.82", description: "Kalium sangat penting untuk fungsi sel saraf dan keseimbangan cairan dalam tubuh. Logam alkali yang sangat reaktif dan mudah terbakar di udara.", uses: "Pupuk untuk pertanian, garam kalium untuk obat-obatan, produksi sabun, bahan kimia industri organik." },
  
  { number: 20, symbol: "Ca", name: "Calcium", mass: "40.078", category: "alkaline", config: "[Ar]4s²", valence: "2", state: "Solid", electro: "1.00", description: "Kalsium sangat penting untuk pembentukan tulang dan gigi. Juga kritis untuk fungsi otot, saraf, dan pembekuan darah pada manusia dan hewan.", uses: "Semen dan mortar untuk konstruksi, suplemen kalsium untuk kesehatan tulang, pupuk pertanian, paduan logam, air jeruk nipis." }
];

const periodicTable = document.getElementById("periodicTable");
const detailCard = document.getElementById("detailCard");
const closeBtn = document.getElementById("closeBtn");
const searchInput = document.getElementById("searchInput");

const categoryLabels = {
  nonmetal: "Nonmetal",
  metal: "Metal",
  semimetal: "Semimetal",
  halogen: "Halogen",
  noble: "Gas Mulia",
  alkali: "Logam Alkali",
  alkaline: "Logam Alkaline Earth"
};

function createElementCard(element) {
  const card = document.createElement("div");
  card.className = `element ${element.category}`;
  card.innerHTML = `
    <div class="number">${element.number}</div>
    <div class="symbol">${element.symbol}</div>
    <div class="name">${element.name}</div>
    <div class="mass">${element.mass}</div>
  `;

  card.addEventListener("click", () => showDetail(element));
  return card;
}

function renderTable(filter = "") {
  periodicTable.innerHTML = "";

  const normalized = filter.toLowerCase().trim();

  elements
    .filter(el => {
      const searchable = `${el.name} ${el.symbol} ${el.number}`.toLowerCase();
      return searchable.includes(normalized);
    })
    .forEach(el => {
      periodicTable.appendChild(createElementCard(el));
    });

  if (periodicTable.children.length === 0) {
    periodicTable.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 40px 20px;">Elemen tidak ditemukan</div>';
  }
}

function showDetail(element) {
  document.getElementById("detailSymbol").textContent = element.symbol;
  document.getElementById("detailName").textContent = element.name;
  document.getElementById("detailCategory").textContent = categoryLabels[element.category];
  document.getElementById("detailNumber").textContent = element.number;
  document.getElementById("detailMass").textContent = element.mass;
  document.getElementById("detailConfig").textContent = element.config;
  document.getElementById("detailValence").textContent = element.valence;
  document.getElementById("detailState").textContent = element.state;
  document.getElementById("detailElectro").textContent = element.electro;
  document.getElementById("detailDescription").textContent = element.description;
  document.getElementById("detailUses").textContent = element.uses;

  detailCard.classList.add("show");
}

closeBtn.addEventListener("click", () => {
  detailCard.classList.remove("show");
});

detailCard.addEventListener("click", (e) => {
  if (e.target === detailCard) {
    detailCard.classList.remove("show");
  }
});

searchInput.addEventListener("input", (e) => {
  renderTable(e.target.value);
});

// Init
renderTable();