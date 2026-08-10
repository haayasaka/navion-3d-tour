/* Navion v2 — basis data komponen. Angka mengikuti Technical Doc v2.0. */
window.NAVION_GROUPS = [
  {
    id: "grip", label: "Grip Anatomis", tone: "#94a3b8", file: "body",
    nodes: ["grip_shell", "button_mode", "button_volume"],
    part: "Cangkang PETG cetak 3D + dua tombol taktil",
    price: "bagian dari Rp 110.000", qty: 1,
    tagline: "Penampang oval dengan cekungan telapak dan empat alur jari, mengikuti sudut pegang alami tongkat putih.",
    specs: [
      ["Panjang grip", "110 mm"], ["Penampang terlebar", "38 x 29 mm"],
      ["Alur jari", "4 buah, kedalaman 2,8 mm"], ["Material", "PETG cetak 3D"],
      ["Tombol mode", "GPIO14, INPUT_PULLUP"], ["Tombol volume", "GPIO27, INPUT_PULLUP"]
    ],
    note: "PETG dipilih karena PLA melunak pada suhu transisi kaca sekitar 60 derajat Celsius, sedangkan tongkat yang ditinggal di kendaraan terparkir di iklim tropis dapat melampauinya."
  },
  {
    id: "head_shell", label: "Rumah Modul", tone: "#cbd5e1", file: "enclosure",
    nodes: ["head_shell_back", "head_shell_front"],
    part: "Cangkang elektronik, terbelah depan dan belakang",
    price: "bagian dari Rp 110.000", qty: 1,
    tagline: "Menampung seluruh elektronik dalam satu rumah, tepat di bawah grip.",
    specs: [
      ["Dimensi luar", "58 x 30 x 105 mm"], ["Tebal dinding", "2 mm"],
      ["Pembelahan", "depan / belakang pada bidang Z"], ["Material", "PETG cetak 3D"]
    ],
    note: "Menyatukan elektronik di satu titik menghapus delapan konduktor yang sebelumnya harus menyusuri batang dan melewati sendi lipat. Sendi lipat kini kembali murni mekanis."
  },
  {
    id: "bracket", label: "Braket Sensor Adjustable", tone: "#475569",
    nodes: ["head_frame", "detent_arc", "sensor_bracket", "lock_screw", "bracket_shroud"],
    part: "Braket berporos dengan busur detent 5 derajat",
    price: "bagian dari Rp 110.000", qty: 1,
    tagline: "Sudut sensor disetel per pengguna, karena sudut pegang tongkat berbeda antar orang.",
    specs: [
      ["Sumbu engsel", "6 mm di depan batang"], ["Rentang setelan", "-35 sampai -60 derajat"],
      ["Langkah detent", "5 derajat"], ["Nilai desain", "-47 derajat"],
      ["Pengunci", "sekrup M4 di sisi kanan"], ["Radius pod", "40 mm"]
    ],
    warn: "Sudut 43 derajat yang dipakai sebagai acuan berasal dari pengukuran satu foto pengguna nyata, bukan dari standar. Dudukan yang dikunci mati akan meleset pada pengguna dengan postur berbeda: selisih 10 derajat setara simpangan 53 sentimeter pada jarak 3 meter, cukup untuk melewatkan rintangan setinggi dada."
  },
  {
    id: "sonar", label: "3x HC-SR04", tone: "#0f6b4f",
    nodes: ["sensor_L_pcb","sensor_L_can","sensor_L_face","sensor_L_can2","sensor_L_face2","sensor_L_xtal",
            "sensor_C_pcb","sensor_C_can","sensor_C_face","sensor_C_can2","sensor_C_face2","sensor_C_xtal",
            "sensor_R_pcb","sensor_R_can","sensor_R_face","sensor_R_can2","sensor_R_face2","sensor_R_xtal"],
    part: "HC-SR04 (opsi lebih baik: HC-SR04P / RCWL-1601 3,3 V)",
    price: "Rp 45.000", qty: 3,
    tagline: "Satu-satunya modalitas jarak. Kebal cahaya, dan berkas lebarnya justru syarat pemetaan okupansi.",
    specs: [
      ["Tegangan kerja", "5 V DC"], ["Arus kerja / diam", "< 15 mA / < 2 mA"],
      ["Frekuensi", "40 kHz, burst 8 siklus"], ["Trigger", "pulsa TTL 10 us"],
      ["Jangkauan dipakai", "20 - 300 cm"], ["Sudut efektif", "< 15 derajat"],
      ["Azimut L / C / R", "-30 / 0 / +30 derajat"], ["Elevasi dunia L / C / R", "0 / -20 / 0 derajat"],
      ["Siklus per sensor", "105 ms (datasheet minta > 60 ms)"],
      ["Tinggi sensor saat dipakai", "830 mm di atas tanah"]
    ],
    note: "Dipasang portrait karena papan selebar 20 mm yang dipasang 30 derajat terpisah baru berhenti bertabrakan pada radius minimal 38,6 mm. Nilai yang dipakai 40 mm."
  },
  {
    id: "imu", label: "MPU6500 pada Braket", tone: "#14563a",
    nodes: ["imu_mpu6500"],
    part: "IMU 6 DoF, dipasang menyatu dengan braket sensor",
    price: "Rp 35.000", qty: 1,
    tagline: "Karena menempel di braket, IMU membaca orientasi pod secara langsung, bukan orientasi batang.",
    specs: [
      ["Rentang giroskop", "+/-1000 dps, wajib"], ["Resolusi gyro", "0,0305 derajat/detik per LSB"],
      ["Kerapatan derau", "0,01 dps/akar Hz"], ["Rentang akselerometer", "+/-8 g"],
      ["Laju sampel", "200 Hz via FIFO burst"], ["FIFO", "512 byte"],
      ["Antarmuka", "I2C 400 kHz, alamat 0x68"], ["Akurasi pitch statis", "0,5 - 1 derajat"]
    ],
    note: "Memindahkan IMU ke braket mengubah elevasi berkas dari parameter yang diasumsikan menjadi parameter yang diukur. Yaw untuk sapuan tidak terpengaruh, karena kecepatan sudut benda tegar sama di titik mana pun. Bonusnya, sistem kini dapat mendeteksi tongkat yang dipegang dalam keadaan terputar."
  },
  {
    id: "mcu", label: "ESP32-WROOM-32", tone: "#1e293b",
    nodes: ["mcu_esp32", "mcu_shield", "bt_antenna"],
    part: "MCU utama, seluruh pemrosesan on-device",
    price: "Rp 65.000", qty: 1,
    tagline: "Dipilih menggantikan ESP32-S3 karena beban model terlalu kecil untuk membutuhkan SIMD, dan hanya generasi ini yang punya Bluetooth Classic.",
    specs: [
      ["Inti", "Xtensa LX6 dual-core, 240 MHz"], ["SRAM", "520 KB"],
      ["Bluetooth", "v4.2 BR/EDR + BLE (A2DP source)"], ["WiFi", "802.11 b/g/n"],
      ["DAC internal", "2 x 8-bit (tidak dipakai)"], ["RMT", "8 kanal, ukur echo di perangkat keras"],
      ["Beban SceneNet", "32.736 MAC, sekitar 3-5 ms"], ["Beban PingNet", "312 MAC, di bawah 1 ms"],
      ["Total beban model", "0,32 MMAC/detik"], ["Tensor arena", "~80 KB di SRAM internal"]
    ],
    note: "Person detection yang dipakai Espressif untuk benchmark berukuran sekitar 7 MMAC per inferensi, 210 kali lebih berat daripada SceneNet. Pada beban sekecil ini, keunggulan SIMD milik ESP32-S3 tidak terpakai."
  },
  {
    id: "audio", label: "Keluaran Bluetooth A2DP", tone: "#2f4bb0",
    nodes: ["bt_antenna"],
    part: "Earphone bone conduction Bluetooth (dibeli terpisah)",
    price: "Rp 250.000", qty: 1,
    tagline: "Bone conduction berkabel hampir tidak ada di pasaran, sehingga keluaran dipindahkan ke A2DP bawaan ESP32.",
    specs: [
      ["Profil", "A2DP source, codec SBC"], ["DAC eksternal", "tidak diperlukan"],
      ["Amplifier", "tidak diperlukan"], ["Latensi tambahan", "150 - 200 ms"],
      ["Latensi total sistem", "270 - 320 ms"], ["Penghematan komponen", "Rp 55.000"]
    ],
    warn: "Latensi A2DP tidak dapat dihilangkan dan mendekati batas persepsi 300 ms. Konsekuensinya panduan arah yang terkait erat dengan sapuan disederhanakan menjadi beep jarak, dan firmware menerapkan kompensasi prediktif dengan mengurangi jarak terlapor sebesar kecepatan jalan dikali latensi terukur."
  },
  {
    id: "power", label: "Rantai Daya", tone: "#8c2230",
    nodes: ["battery", "battery_cap", "buckboost", "charger_tp4056", "boost_mt3608"],
    part: "18650 3500 mAh + TP4056/DW01A + buck-boost 3,3 V + MT3608 5 V",
    price: "Rp 142.000", qty: 1,
    tagline: "Dua rel paralel langsung dari baterai, bukan satu rel bertingkat.",
    specs: [
      ["Sel", "Li-ion 18650, 3500 mAh"], ["Rel 3,3 V", "buck-boost, efisiensi ~92 %"],
      ["Rel 5 V", "MT3608, ~93 %, khusus HC-SR04"], ["Beban rel 3,3 V", "172,5 mA"],
      ["Beban rel 5 V", "19 mA"], ["Total dari baterai", "0,721 W, 195 mA"],
      ["Ketahanan realistis", "13,5 jam"]
    ],
    note: "A2DP yang menyala terus menambah sekitar 50 mA dibanding BLE saja, sehingga ketahanan turun dari 16,4 menjadi 13,5 jam. TP4056 tanpa load sharing, jadi alat harus dimatikan saat mengisi daya."
  },
  {
    id: "feedback", label: "Buzzer & Haptik", tone: "#a16207",
    nodes: ["buzzer", "haptic_motor", "haptic_motor2", "led_status", "drv_haptic"],
    part: "Buzzer pasif + driver DRV dengan dua motor coin + LED",
    price: "Rp 63.000", qty: 1,
    tagline: "Satu-satunya umpan balik lokal setelah rantai audio dihapus, dan penuntun mode setup braket.",
    specs: [
      ["Buzzer", "pasif, digerakkan LEDC PWM"], ["Harga buzzer", "Rp 3.000"],
      ["Motor getar", "coin ERM, kiri dan kanan"], ["Driver", "DRV via I2C 0x5A"],
      ["Toleransi setup", "+/-2 derajat"]
    ],
    note: "Pengguna tunanetra tidak dapat melihat apakah braket sudah lurus. Mode setup memakai motor kiri atau kanan untuk menunjukkan arah putar, dengan laju denyut mengecil saat mendekati benar. Buzzer menangani nada boot, status pairing, baterai lemah, dan nada error, yaitu semua hal yang harus terdengar sebelum earphone tersambung."
  },
  {
    id: "storage", label: "Modul microSD", tone: "#2a2d33",
    nodes: ["microsd"],
    part: "Perekaman dataset mentah",
    price: "Rp 25.000", qty: 1,
    tagline: "Prasyarat kedua model. Jalur kritis proyek adalah pengumpulan data, bukan pemodelan.",
    specs: [
      ["Antarmuka", "SPI"], ["Laju tulis", "28,6 baris CSV per detik"],
      ["Target PingNet", "60.000 ping, sekitar 35 menit"], ["Target SceneNet", "2.500 frame, sekitar 4,5 jam"]
    ],
    note: "Data PingNet dilabeli otomatis dari geometri skenario yang diukur meteran. Tidak ada pelabelan bingkai demi bingkai secara manual."
  },
  {
    id: "cane", label: "Rangka Tongkat", tone: "#64748b",
    nodes: ["cane_shaft", "cane_band", "cane_tip", "cane_fold", "cane_fold2"],
    part: "Tongkat putih lipat aluminium",
    price: "Rp 150.000", qty: 1,
    tagline: "Tetap berfungsi penuh sebagai tongkat putih biasa saat elektronik mati.",
    specs: [
      ["Panjang total", "1.380 mm"], ["Diameter batang", "13 mm"],
      ["Sudut pakai acuan", "43 derajat terhadap tanah"], ["Tinggi tangan", "940 mm"],
      ["Jangkauan ujung ke depan", "1.009 mm"], ["Sendi lipat", "2, murni mekanis"]
    ],
    note: "Sudut 43 derajat diukur dari foto pengguna nyata: tangan setinggi pinggul sekitar 95 cm dan ujung tongkat sekitar 100 cm di depan kaki. Nilai 57 derajat pada revisi sebelumnya terlalu curam."
  }
];

/* Urutan teardown untuk tab jelajah */
window.NAVION_TEARDOWN = [
  { g: "grip",       dir: [0, 1, 0],     dist: 0.15, label: "Grip diangkat" },
  { g: "head_shell", dir: [0, 0, -1],    dist: 0.14, label: "Rumah modul dibuka" },
  { g: "bracket",    dir: [0, 0.3, 1],   dist: 0.13, label: "Braket sensor dilepas" },
  { g: "sonar",      dir: [0, 0.6, 0.8], dist: 0.19, label: "Tiga HC-SR04" },
  { g: "imu",        dir: [1, 0.4, 0.5], dist: 0.17, label: "IMU pada braket" },
  { g: "mcu",        dir: [-1, 0, -0.4], dist: 0.15, label: "ESP32-WROOM-32" },
  { g: "power",      dir: [1, -0.3, 0],  dist: 0.16, label: "Baterai & rantai daya" },
  { g: "feedback",   dir: [-1, 0.5, 0.4],dist: 0.15, label: "Buzzer & haptik" },
  { g: "storage",    dir: [0, -0.8, 0.5],dist: 0.14, label: "Modul microSD" }
];

/* Urutan telusur untuk tab scroll: dari pandangan jauh, lalu turun dari ujung atas */
window.NAVION_SCROLL = [
  { id: "overview", title: "Navion",
    sub: "Tongkat pintar dengan pemetaan sonar sapuan-sintetik",
    body: "Tongkat putih hanya melaporkan apa yang tersentuh ujungnya. Navion menambahkan lapisan yang membaca ruang, dan melakukannya tanpa menambah jumlah sensor, melainkan dengan mengubah cara sensor dipakai. Gulir untuk menyusuri alat ini dari ujung atas ke bawah.",
    cam: { az: 0.55, el: 0.10, dist: 2.6, tgt: "all" }, focus: null, explode: 0 },

  { id: "pose", title: "Sudut pakai 43 derajat",
    sub: "Diukur dari pengguna nyata, bukan diasumsikan",
    body: "Tangan berada setinggi pinggul sekitar 95 sentimeter dan ujung tongkat menyentuh tanah sekitar satu meter di depan kaki. Batang karenanya membentuk sudut sekitar 43 derajat terhadap tanah. Angka itu menentukan segalanya: bidang tegak lurus batang menghadap 47 derajat ke atas, sehingga sensor yang dipasang tegak lurus batang akan memindai langit.",
    cam: { az: 0.35, el: 0.05, dist: 2.2, tgt: "all" }, focus: "cane", explode: 0 },

  { id: "grip", title: "Grip anatomis",
    sub: "Bagian paling atas, tempat tangan bertumpu",
    body: "Penampang oval yang membesar di telapak lalu mengecil ke arah ujung, dengan empat alur jari sedalam 2,8 milimeter di sisi bawah. Dua tombol taktil berada dalam jangkauan ibu jari tanpa melepas genggaman.",
    cam: { az: 0.62, el: 0.22, dist: 0.30, tgt: "grip" }, focus: "grip", explode: 0 },

  { id: "shell", title: "Rumah modul",
    sub: "Seluruh elektronik dalam satu tempat",
    body: "Semua papan berada di rumah tunggal tepat di bawah grip. Susunan ini menghapus delapan konduktor yang sebelumnya harus menyusuri batang dan melewati sendi lipat, sehingga sendi lipat kembali menjadi sambungan mekanis biasa.",
    cam: { az: 0.75, el: 0.14, dist: 0.34, tgt: "head_shell" }, focus: "head_shell", explode: 0.18 },

  { id: "bracket", title: "Braket sensor yang dapat disetel",
    sub: "Busur detent 5 derajat, rentang -35 sampai -60",
    body: "Sudut pegang berbeda antar pengguna. Braket berporos dengan detent 5 derajat membuat sudut sensor dapat disetel di lapangan, lalu dikunci dengan sekrup. Tanpa ini, pengguna dengan postur berbeda akan memakai berkas yang menyimpang puluhan sentimeter pada jarak tiga meter.",
    cam: { az: 0.30, el: 0.05, dist: 0.26, tgt: "bracket" }, focus: "bracket", explode: 0.30 },

  { id: "sonar", title: "Tiga HC-SR04",
    sub: "Azimut -30, 0, dan +30 derajat",
    body: "Dipasang portrait supaya tiga papan selebar 45 milimeter muat pada radius 40 milimeter. Sensor tengah menunduk 20 derajat agar tepi bawah berkasnya memotong tanah pada 1,45 meter dan menghasilkan baseline stabil untuk mendeteksi turunan.",
    cam: { az: 0.10, el: 0.02, dist: 0.24, tgt: "sonar" }, focus: "sonar", explode: 0.42 },

  { id: "imu", title: "IMU menempel pada braket",
    sub: "Membaca orientasi pod, bukan orientasi batang",
    body: "Karena ikut berputar bersama braket, MPU6500 melaporkan elevasi berkas yang sebenarnya. Sudut dudukan berubah dari parameter yang diasumsikan menjadi parameter yang diukur, dan sisa simpangan dapat dikompensasi di perangkat lunak alih-alih dituntut sempurna secara mekanis.",
    cam: { az: -0.25, el: 0.16, dist: 0.24, tgt: "imu" }, focus: "imu", explode: 0.52 },

  { id: "mcu", title: "ESP32-WROOM-32",
    sub: "0,32 juta MAC per detik",
    body: "SceneNet hanya 32.736 MAC per inferensi dan PingNet 312 MAC. Beban sekecil itu berjalan 3 sampai 5 milidetik pada LX6 tanpa SIMD, di dalam anggaran siklus 105 milidetik. Yang menentukan pemilihan ini bukan kecepatan, melainkan Bluetooth Classic yang hanya dimiliki generasi pertama.",
    cam: { az: -0.85, el: 0.10, dist: 0.30, tgt: "mcu" }, focus: "mcu", explode: 0.62 },

  { id: "audio", title: "Keluaran lewat A2DP",
    sub: "Tanpa DAC, tanpa amplifier, tanpa kabel ke kepala",
    body: "Bone conduction berkabel hampir tidak dijual, sehingga keluaran dipindahkan ke Bluetooth bawaan. PCM5102A dan PAM8403 hilang seluruhnya. Harganya adalah latensi 150 sampai 200 milidetik, dan itu ditulis terbuka sebagai keterbatasan.",
    cam: { az: -1.2, el: 0.20, dist: 0.28, tgt: "mcu" }, focus: "audio", explode: 0.66 },

  { id: "power", title: "Rantai daya",
    sub: "13,5 jam realistis",
    body: "Sel 18650 3500 mAh memberi dua rel paralel: buck-boost 3,3 volt langsung ke papan, dan MT3608 5 volt khusus untuk ketiga sensor. Menaikkan lalu menurunkan tegangan lewat regulator linier akan membuang 45 persen daya sistem sebagai panas di dalam pegangan.",
    cam: { az: 0.95, el: 0.05, dist: 0.30, tgt: "power" }, focus: "power", explode: 0.72 },

  { id: "feedback", title: "Buzzer dan haptik",
    sub: "Penuntun setup untuk pengguna yang tidak bisa melihat braketnya",
    body: "Motor kiri atau kanan berdenyut menunjukkan arah putar braket, dan laju denyutnya mengecil saat mendekati benar. Buzzer seharga tiga ribu rupiah menangani nada boot, status pairing, dan baterai lemah, yaitu semua hal yang harus terdengar sebelum earphone tersambung.",
    cam: { az: -0.55, el: 0.28, dist: 0.28, tgt: "feedback" }, focus: "feedback", explode: 0.80 },

  { id: "storage", title: "Modul microSD",
    sub: "Jalur kritis proyek",
    body: "Pelatihan kedua model hanya butuh hitungan jam, sedangkan perekaman dan pelabelan data butuh berhari-hari. Satu sensor, IMU, dan modul ini yang sudah merekam lebih berharga daripada rangkaian lengkap yang belum menghasilkan satu baris data pun.",
    cam: { az: 0.45, el: -0.10, dist: 0.28, tgt: "storage" }, focus: "storage", explode: 0.88 },

  { id: "cane", title: "Kembali ke batang",
    sub: "Tetap tongkat putih ketika baterainya habis",
    body: "Dua sendi lipat kini murni mekanis karena tidak ada kabel yang melewatinya. Pita merah dan ujung bergulir mengikuti tongkat putih baku, sehingga saat elektronik mati alat ini tidak berubah menjadi beban, melainkan kembali menjadi tongkat biasa yang tetap berfungsi.",
    cam: { az: 0.55, el: 0.06, dist: 2.4, tgt: "all" }, focus: "cane", explode: 0 },

  { id: "end", title: "Rangkuman",
    sub: "Rp 945.000 biaya bahan",
    body: "Tiga sensor ultrasonik, satu IMU, satu ESP32, dan dua jaringan saraf berukuran di bawah 35 KB. Seluruh pemrosesan berjalan di perangkat tanpa kamera dan tanpa jaringan. Pengujian belum dilaksanakan, sehingga setiap angka kinerja pada halaman ini berstatus target rancangan.",
    cam: { az: 0.9, el: 0.16, dist: 2.6, tgt: "all" }, focus: null, explode: 0 }
];

window.NAVION_FACTS = [
  ["3", "sensor ultrasonik"],
  ["43°", "sudut pakai terukur"],
  ["9,5 Hz", "laju perbaruan peta"],
  ["504 B", "ukuran peta okupansi"],
  ["0,32", "MMAC per detik"],
  ["13,5 jam", "ketahanan realistis"],
  ["270-320 ms", "latensi dengan A2DP"],
  ["Rp 945.000", "biaya bahan"]
];
