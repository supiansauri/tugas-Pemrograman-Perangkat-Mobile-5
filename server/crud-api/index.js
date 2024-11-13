const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Data Resep
const data = [
  {
    id: 1,
    image: '../../../assets/MieRebus.png',
    rating: 4.5,
    title: 'Mie Rebus',
    desc: 'Mie yang direbus dengan bumbu khas, disajikan dengan sayuran dan topping.',
    price: '4.53',
    ingredient: [
      { name: '200 gram mie telur', description: 'direbus hingga al dente' },
      { name: '2 siung bawang putih', description: 'dicincang halus' },
      { name: '2 batang daun bawang', description: 'diiris tipis' },
      { name: '1 butir telur', description: 'dikocok lepas' },
      { name: '100 gram sawi hijau', description: 'dipotong-potong' },
    ],
    instruction: 'Rebus mie telur hingga al dente. Tumis bawang putih hingga harum, masukkan daun bawang dan telur, aduk rata. Tambahkan mie dan sawi, aduk hingga tercampur rata. Sajikan dengan topping favorit.'
  },
  {
    id: 2,
    image: '../../../assets/MieGoreng.jpg',
    rating: 4.5,
    title: 'Mie Goreng',
    desc: 'Mie goreng dengan bumbu yang gurih, dilengkapi sayuran segar dan topping pilihan.',
    price: '4.53',
    ingredient: [
      { name: '200 gram mie telur', description: 'direbus dan ditiriskan' },
      { name: '3 siung bawang merah', description: 'diiris tipis' },
      { name: '2 siung bawang putih', description: 'dihaluskan' },
      { name: '1 butir telur', description: 'dikocok lepas' },
      { name: '100 gram kol', description: 'diiris kasar' },
    ],
    instruction: 'Tumis bawang merah dan bawang putih hingga harum. Masukkan telur dan orak-arik. Tambahkan mie yang telah direbus dan kol, aduk rata hingga mie tercampur dengan bumbu. Sajikan dengan topping pilihan.'
  },
  {
    id: 3,
    image: '../../../assets/BihunGoreng.jpg',
    rating: 4.5,
    title: 'Bihun Goreng',
    desc: 'Bihun goreng lezat dengan campuran sayuran dan bumbu yang kaya rasa.',
    price: '4.53',
    ingredient: [
      { name: '200 gram bihun', description: 'direbus dan ditiriskan' },
      { name: '2 siung bawang putih', description: 'dicincang halus' },
      { name: '1 batang daun bawang', description: 'diiris tipis' },
      { name: '100 gram wortel', description: 'diiris tipis memanjang' },
      { name: '50 gram tauge', description: 'dicuci bersih' },
    ],
    instruction: 'Tumis bawang putih hingga harum, masukkan wortel dan daun bawang, aduk rata. Tambahkan bihun yang telah direbus dan tauge, aduk hingga tercampur rata. Sajikan selagi hangat.'
  },
  {
    id: 4,
    image: '../../../assets/BihunRebus.jpg',
    rating: 4.5,
    title: 'Bihun Rebus',
    desc: 'Bihun rebus dengan kuah gurih, dilengkapi sayuran dan topping pilihan.',
    price: '4.53',
    ingredient: [
      { name: '200 gram bihun', description: 'direbus hingga matang' },
      { name: '2 siung bawang putih', description: 'dicincang halus' },
      { name: '1 batang daun bawang', description: 'diiris tipis' },
      { name: '50 gram jamur kuping', description: 'diiris tipis' },
      { name: '100 gram sawi hijau', description: 'dipotong-potong' },
    ],
    instruction: 'Rebus bihun hingga matang. Tumis bawang putih hingga harum, tambahkan jamur dan sawi, aduk hingga layu. Tuangkan kuah dan bihun, masak hingga kuah meresap. Sajikan dengan topping favorit.'
},
{
    id: 5,
    image: '../../../assets/KwetiauGoreng.jpg',
    rating: 4.5,
    title: 'Kwetiau Goreng',
    desc: 'Kwetiau goreng dengan bumbu spesial, ditambah sayuran segar dan topping.',
    price: '4.53',
    ingredient: [
      { name: '200 gram kwetiau', description: 'direbus dan ditiriskan' },
      { name: '3 siung bawang putih', description: 'dihaluskan' },
      { name: '100 gram udang', description: 'dikupas dan dibersihkan' },
      { name: '1 batang daun bawang', description: 'diiris tipis' },
      { name: '100 gram sawi hijau', description: 'dipotong-potong' },
    ],
    instruction: 'Tumis bawang putih hingga harum, tambahkan udang dan masak hingga matang. Masukkan kwetiau yang telah direbus dan sawi, aduk rata. Sajikan dengan topping favorit.'
},
{
    id: 6,
    image: '../../../assets/KwetiauRebus.jpg',
    rating: 4.5,
    title: 'Kwetiau Rebus',
    desc: 'Kwetiau rebus yang lembut dengan kuah kaldu gurih dan tambahan sayuran.',
    price: '4.53',
    ingredient: [
      { name: '200 gram kwetiau', description: 'direbus hingga matang' },
      { name: '2 siung bawang putih', description: 'dicincang halus' },
      { name: '1 batang daun bawang', description: 'diiris tipis' },
      { name: '100 gram sawi hijau', description: 'dipotong-potong' },
      { name: '50 gram wortel', description: 'diiris tipis' },
    ],
    instruction: 'Rebus kwetiau hingga matang. Tumis bawang putih hingga harum, masukkan wortel dan sawi, aduk rata. Tuangkan kuah kaldu dan masukkan kwetiau, masak hingga bumbu meresap. Sajikan hangat.'
},
{
    id: 7,
    image: '../../../assets/CapcayRebus.jpg',
    rating: 4.5,
    title: 'Capcay Goreng',
    desc: 'Capcay goreng dengan sayuran segar dan bumbu yang meresap sempurna.',
    price: '4.53',
    ingredient: [
      { name: '100 gram kol', description: 'diiris kasar' },
      { name: '50 gram wortel', description: 'diiris tipis' },
      { name: '50 gram buncis', description: 'dipotong serong' },
      { name: '100 gram brokoli', description: 'dipotong kecil' },
      { name: '2 siung bawang putih', description: 'dicincang halus' },
    ],
    instruction: 'Tumis bawang putih hingga harum, tambahkan wortel, buncis, kol, dan brokoli. Aduk rata dan masak hingga sayuran layu. Sajikan selagi hangat.'
},
{
    id: 8,
    image: '../../../assets/CapcayGoreng.jpg',
    rating: 4.5,
    title: 'Capcay Rebus',
    desc: 'Capcay rebus dengan kuah gurih, sayuran berlimpah, dan rasa yang nikmat.',
    price: '4.53',
    ingredient: [
      { name: '100 gram kol', description: 'diiris kasar' },
      { name: '50 gram wortel', description: 'diiris tipis' },
      { name: '50 gram buncis', description: 'dipotong serong' },
      { name: '100 gram brokoli', description: 'dipotong kecil' },
      { name: '2 siung bawang putih', description: 'dicincang halus' },
    ],
    instruction: 'Rebus kol, wortel, buncis, dan brokoli hingga empuk. Tumis bawang putih hingga harum, kemudian masukkan sayuran yang telah direbus dan kuah, masak hingga meresap. Sajikan dengan tambahan topping.'
}

  // Tambahkan sisa data Anda...
];

// CREATE
app.post('/items', (req, res) => {
  const newItem = { id: id++, ...req.body };
  items.push(newItem);
  res.json(newItem);
});

// READ (Ambil Semua Menu)
app.get('/menus', (req, res) => {
  res.json(data); // Mengembalikan semua data resep masakan
});

// UPDATE
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id == id);
  if (index >= 0) {
    items[index] = { id: Number(id), ...req.body };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  items = items.filter((item) => item.id != id);
  res.json({ message: "Item deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
