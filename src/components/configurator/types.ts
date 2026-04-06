export interface Component {
  id: string;
  name: string;
  brand: string;
  price: number;
  specs: string;
  tier: 'budget' | 'mid' | 'high';
  image: string;
  buyUrl: string;
}

export interface Build {
  id: string;
  name: string;
  components: Record<string, Component | null>;
}

export const componentCategories = [
  { id: 'cpu', label: 'Процессор', icon: 'Cpu' },
  { id: 'gpu', label: 'Видеокарта', icon: 'Monitor' },
  { id: 'ram', label: 'Оперативная память', icon: 'MemoryStick' },
  { id: 'storage', label: 'Накопитель', icon: 'HardDrive' },
  { id: 'motherboard', label: 'Материнская плата', icon: 'CircuitBoard' },
  { id: 'psu', label: 'Блок питания', icon: 'Zap' },
  { id: 'case', label: 'Корпус', icon: 'Box' },
  { id: 'cooler', label: 'Охлаждение', icon: 'Wind' },
];

export const catalog: Record<string, Component[]> = {
  cpu: [
    {
      id: 'cpu1', name: 'Core i5-14600K', brand: 'Intel', price: 24900,
      specs: '14 ядер (6P+8E), 3.5 / 5.3 ГГц, TDP 125 Вт, LGA1700', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/7b8e1e7e0b8e1e7e0b8e1e7e0b8e1e7e/i5-14600k.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Core+i5-14600K',
    },
    {
      id: 'cpu2', name: 'Core i7-14700K', brand: 'Intel', price: 36900,
      specs: '20 ядер (8P+12E), 3.4 / 5.6 ГГц, TDP 125 Вт, LGA1700', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/i7-14700k.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Core+i7-14700K',
    },
    {
      id: 'cpu3', name: 'Core i9-14900K', brand: 'Intel', price: 54900,
      specs: '24 ядра (8P+16E), 3.2 / 6.0 ГГц, TDP 125 Вт, LGA1700', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/i9-14900k.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Core+i9-14900K',
    },
    {
      id: 'cpu4', name: 'Ryzen 5 5600G', brand: 'AMD', price: 10900,
      specs: '6 ядер, 3.9 / 4.4 ГГц, Radeon RX Vega 7, AM4', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/r5-5600g.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Ryzen+5+5600G',
    },
    {
      id: 'cpu5', name: 'Ryzen 5 7600X', brand: 'AMD', price: 19900,
      specs: '6 ядер, 4.7 / 5.3 ГГц, TDP 105 Вт, AM5', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/r5-7600x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Ryzen+5+7600X',
    },
    {
      id: 'cpu6', name: 'Ryzen 7 7700X', brand: 'AMD', price: 28900,
      specs: '8 ядер, 4.5 / 5.4 ГГц, TDP 105 Вт, AM5', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/r7-7700x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Ryzen+7+7700X',
    },
    {
      id: 'cpu7', name: 'Ryzen 9 7900X', brand: 'AMD', price: 38900,
      specs: '12 ядер, 4.7 / 5.6 ГГц, TDP 170 Вт, AM5', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/r9-7900x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Ryzen+9+7900X',
    },
    {
      id: 'cpu8', name: 'Ryzen 9 7950X', brand: 'AMD', price: 58900,
      specs: '16 ядер, 4.5 / 5.7 ГГц, TDP 170 Вт, AM5', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/r9-7950x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Ryzen+9+7950X',
    },
    {
      id: 'cpu9', name: 'Core i3-13100F', brand: 'Intel', price: 7900,
      specs: '4 ядра, 3.4 / 4.5 ГГц, TDP 58 Вт, LGA1700', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/i3-13100f.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Core+i3-13100F',
    },
    {
      id: 'cpu10', name: 'Ryzen 5 5600X', brand: 'AMD', price: 9900,
      specs: '6 ядер, 3.7 / 4.6 ГГц, TDP 65 Вт, AM4', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/r5-5600x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Ryzen+5+5600X',
    },
  ],
  gpu: [
    {
      id: 'gpu1', name: 'RTX 4060', brand: 'NVIDIA', price: 32900,
      specs: '8 ГБ GDDR6, 2460 МГц, 115 Вт TDP, PCIe 4.0', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rtx4060.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RTX+4060',
    },
    {
      id: 'gpu2', name: 'RTX 4060 Ti', brand: 'NVIDIA', price: 44900,
      specs: '16 ГБ GDDR6, 2535 МГц, 165 Вт TDP, PCIe 4.0', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rtx4060ti.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RTX+4060+Ti',
    },
    {
      id: 'gpu3', name: 'RTX 4070', brand: 'NVIDIA', price: 62900,
      specs: '12 ГБ GDDR6X, 2475 МГц, 200 Вт TDP, PCIe 4.0', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rtx4070.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RTX+4070',
    },
    {
      id: 'gpu4', name: 'RTX 4070 Super', brand: 'NVIDIA', price: 72900,
      specs: '12 ГБ GDDR6X, 2475 МГц, 220 Вт TDP, PCIe 4.0', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rtx4070s.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RTX+4070+Super',
    },
    {
      id: 'gpu5', name: 'RTX 4080 Super', brand: 'NVIDIA', price: 109900,
      specs: '16 ГБ GDDR6X, 2550 МГц, 320 Вт TDP, PCIe 4.0', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rtx4080s.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RTX+4080+Super',
    },
    {
      id: 'gpu6', name: 'RTX 4090', brand: 'NVIDIA', price: 149900,
      specs: '24 ГБ GDDR6X, 2520 МГц, 450 Вт TDP, PCIe 4.0', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rtx4090.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RTX+4090',
    },
    {
      id: 'gpu7', name: 'RX 7600', brand: 'AMD', price: 26900,
      specs: '8 ГБ GDDR6, 2655 МГц, 165 Вт TDP, PCIe 4.0', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rx7600.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RX+7600',
    },
    {
      id: 'gpu8', name: 'RX 7700 XT', brand: 'AMD', price: 39900,
      specs: '12 ГБ GDDR6, 2544 МГц, 245 Вт TDP, PCIe 4.0', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rx7700xt.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RX+7700+XT',
    },
    {
      id: 'gpu9', name: 'RX 7900 XTX', brand: 'AMD', price: 82900,
      specs: '24 ГБ GDDR6, 2500 МГц, 355 Вт TDP, PCIe 4.0', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/rx7900xtx.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=RX+7900+XTX',
    },
    {
      id: 'gpu10', name: 'GTX 1660 Super', brand: 'NVIDIA', price: 16900,
      specs: '6 ГБ GDDR6, 1785 МГц, 125 Вт TDP, PCIe 3.0', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/gtx1660s.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=GTX+1660+Super',
    },
    {
      id: 'gpu11', name: 'Arc A770', brand: 'Intel', price: 21900,
      specs: '16 ГБ GDDR6, 2100 МГц, 225 Вт TDP, PCIe 4.0', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/arca770.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Arc+A770',
    },
  ],
  ram: [
    {
      id: 'ram1', name: 'Fury Beast 16GB', brand: 'Kingston', price: 4200,
      specs: 'DDR5, 5600 МГц, 2x8 ГБ, CL40', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/kingston-fury.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Kingston+Fury+Beast+DDR5+16GB',
    },
    {
      id: 'ram2', name: 'Fury Beast 32GB', brand: 'Kingston', price: 7900,
      specs: 'DDR5, 5600 МГц, 2x16 ГБ, CL40', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/kingston-fury32.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Kingston+Fury+Beast+DDR5+32GB',
    },
    {
      id: 'ram3', name: 'Trident Z5 32GB', brand: 'G.Skill', price: 11900,
      specs: 'DDR5, 6000 МГц, 2x16 ГБ, CL30, RGB', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/gskill-z5.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=G.Skill+Trident+Z5+DDR5+32GB',
    },
    {
      id: 'ram4', name: 'Trident Z5 64GB', brand: 'G.Skill', price: 22900,
      specs: 'DDR5, 6000 МГц, 2x32 ГБ, CL30, RGB', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/gskill-z5-64.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=G.Skill+Trident+Z5+DDR5+64GB',
    },
    {
      id: 'ram5', name: 'Vengeance 16GB', brand: 'Corsair', price: 3500,
      specs: 'DDR4, 3200 МГц, 2x8 ГБ, CL16', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/corsair-vengeance.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Corsair+Vengeance+DDR4+16GB',
    },
    {
      id: 'ram6', name: 'Vengeance 32GB', brand: 'Corsair', price: 6900,
      specs: 'DDR4, 3600 МГц, 2x16 ГБ, CL18', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/corsair-vengeance32.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Corsair+Vengeance+DDR4+32GB',
    },
    {
      id: 'ram7', name: 'Ballistix 16GB', brand: 'Crucial', price: 2900,
      specs: 'DDR4, 3200 МГц, 2x8 ГБ, CL16', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/crucial-ballistix.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Crucial+Ballistix+16GB',
    },
  ],
  storage: [
    {
      id: 'st1', name: '980 Pro 1TB', brand: 'Samsung', price: 7900,
      specs: 'NVMe M.2 PCIe 4.0, 7000/5000 МБ/с', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/samsung-980pro.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Samsung+980+Pro+1TB',
    },
    {
      id: 'st2', name: '990 Pro 2TB', brand: 'Samsung', price: 14900,
      specs: 'NVMe M.2 PCIe 4.0, 7450/6900 МБ/с', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/samsung-990pro.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Samsung+990+Pro+2TB',
    },
    {
      id: 'st3', name: '990 Pro 4TB', brand: 'Samsung', price: 26900,
      specs: 'NVMe M.2 PCIe 4.0, 7450/6900 МБ/с', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/samsung-990pro-4.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Samsung+990+Pro+4TB',
    },
    {
      id: 'st4', name: 'SN570 1TB', brand: 'WD', price: 4900,
      specs: 'NVMe M.2 PCIe 3.0, 3500/3000 МБ/с', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/wd-sn570.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=WD+SN570+1TB',
    },
    {
      id: 'st5', name: 'SN850X 2TB', brand: 'WD', price: 13900,
      specs: 'NVMe M.2 PCIe 4.0, 7300/6600 МБ/с', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/wd-sn850x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=WD+SN850X+2TB',
    },
    {
      id: 'st6', name: 'P3 Plus 1TB', brand: 'Crucial', price: 3900,
      specs: 'NVMe M.2 PCIe 4.0, 5000/3600 МБ/с', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/crucial-p3plus.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Crucial+P3+Plus+1TB',
    },
    {
      id: 'st7', name: 'T700 2TB', brand: 'Crucial', price: 16900,
      specs: 'NVMe M.2 PCIe 5.0, 12400/11800 МБ/с', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/crucial-t700.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Crucial+T700+2TB',
    },
    {
      id: 'st8', name: 'Barracuda 2TB HDD', brand: 'Seagate', price: 4200,
      specs: 'HDD SATA, 7200 RPM, 256 МБ кэш', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/seagate-barracuda.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Seagate+Barracuda+2TB',
    },
  ],
  motherboard: [
    {
      id: 'mb1', name: 'ROG Strix B650-A', brand: 'ASUS', price: 21900,
      specs: 'AM5, DDR5, ATX, 4x M.2, PCIe 5.0', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/asus-b650.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=ASUS+ROG+Strix+B650-A',
    },
    {
      id: 'mb2', name: 'MEG X670E ACE', brand: 'MSI', price: 44900,
      specs: 'AM5, DDR5, ATX, 5x M.2, PCIe 5.0', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/msi-x670e.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=MSI+MEG+X670E+ACE',
    },
    {
      id: 'mb3', name: 'B550M DS3H', brand: 'Gigabyte', price: 6900,
      specs: 'AM4, DDR4, mATX, 2x M.2, PCIe 4.0', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/gigabyte-b550m.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Gigabyte+B550M+DS3H',
    },
    {
      id: 'mb4', name: 'Prime B660M-A', brand: 'ASUS', price: 11900,
      specs: 'LGA1700, DDR5, mATX, 2x M.2, PCIe 4.0', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/asus-b660m.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=ASUS+Prime+B660M-A',
    },
    {
      id: 'mb5', name: 'MAG B760M Mortar', brand: 'MSI', price: 15900,
      specs: 'LGA1700, DDR5, mATX, 3x M.2, PCIe 4.0', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/msi-b760m.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=MSI+MAG+B760M+Mortar',
    },
    {
      id: 'mb6', name: 'ROG Maximus Z790', brand: 'ASUS', price: 64900,
      specs: 'LGA1700, DDR5, ATX, 5x M.2, PCIe 5.0, WiFi 7', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/asus-z790.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=ASUS+ROG+Maximus+Z790',
    },
    {
      id: 'mb7', name: 'Aorus Elite B550', brand: 'Gigabyte', price: 13900,
      specs: 'AM4, DDR4, ATX, 3x M.2, PCIe 4.0', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/gigabyte-aorus.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Gigabyte+Aorus+Elite+B550',
    },
  ],
  psu: [
    {
      id: 'psu1', name: 'RM750x', brand: 'Corsair', price: 9900,
      specs: '750 Вт, 80+ Gold, Full Modular, ATX', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/corsair-rm750x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Corsair+RM750x',
    },
    {
      id: 'psu2', name: 'RM1000x', brand: 'Corsair', price: 14900,
      specs: '1000 Вт, 80+ Gold, Full Modular, ATX', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/corsair-rm1000x.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Corsair+RM1000x',
    },
    {
      id: 'psu3', name: 'HX1200', brand: 'Corsair', price: 21900,
      specs: '1200 Вт, 80+ Platinum, Full Modular, ATX', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/corsair-hx1200.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Corsair+HX1200',
    },
    {
      id: 'psu4', name: 'CV550', brand: 'Corsair', price: 3900,
      specs: '550 Вт, 80+ Bronze, Non-Modular, ATX', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/corsair-cv550.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Corsair+CV550',
    },
    {
      id: 'psu5', name: 'Focus GX-850', brand: 'Seasonic', price: 11900,
      specs: '850 Вт, 80+ Gold, Full Modular, ATX', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/seasonic-850.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Seasonic+Focus+GX-850',
    },
    {
      id: 'psu6', name: 'MPG A1000G', brand: 'MSI', price: 13900,
      specs: '1000 Вт, 80+ Gold, Full Modular, ATX 3.0', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/msi-mpg1000.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=MSI+MPG+A1000G',
    },
    {
      id: 'psu7', name: 'Earthwatts 650G', brand: 'Antec', price: 5900,
      specs: '650 Вт, 80+ Gold, Semi Modular, ATX', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/antec-650g.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Antec+Earthwatts+650G',
    },
  ],
  case: [
    {
      id: 'case1', name: 'H510', brand: 'NZXT', price: 7900,
      specs: 'Mid-Tower, ATX, Tempered Glass, 2x USB-A', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/nzxt-h510.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=NZXT+H510',
    },
    {
      id: 'case2', name: 'H7 Flow', brand: 'NZXT', price: 11900,
      specs: 'Mid-Tower, ATX, Mesh Front, USB-C, 3x 120 мм', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/nzxt-h7.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=NZXT+H7+Flow',
    },
    {
      id: 'case3', name: 'O11D XL', brand: 'Lian Li', price: 19900,
      specs: 'Full-Tower, E-ATX, 3x360 мм рад., Dual Chamber', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/lianli-o11xl.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Lian+Li+O11D+XL',
    },
    {
      id: 'case4', name: 'O11D Mini', brand: 'Lian Li', price: 9900,
      specs: 'mATX, Tempered Glass, 2x USB-A + USB-C', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/lianli-o11mini.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Lian+Li+O11D+Mini',
    },
    {
      id: 'case5', name: 'MasterBox Q300L', brand: 'Cooler Master', price: 3500,
      specs: 'mATX, Magnetic Dust Filter, Acrylic Panel', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/cm-q300l.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Cooler+Master+MasterBox+Q300L',
    },
    {
      id: 'case6', name: 'Meshify 2 Compact', brand: 'Fractal Design', price: 12900,
      specs: 'mATX/ATX, Mesh Front, 3x 120 мм, USB-C', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/fractal-meshify2.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Fractal+Design+Meshify+2+Compact',
    },
    {
      id: 'case7', name: 'Define 7 XL', brand: 'Fractal Design', price: 22900,
      specs: 'Full-Tower, E-ATX, Sound Dampening, 9x HDD', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/fractal-define7.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Fractal+Design+Define+7+XL',
    },
    {
      id: 'case8', name: 'Lancool 216', brand: 'Lian Li', price: 8900,
      specs: 'Mid-Tower, ATX, 2x 160 мм PWM Fan, Mesh Front', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/lianli-lancool216.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Lian+Li+Lancool+216',
    },
  ],
  cooler: [
    {
      id: 'cool1', name: 'Hyper 212 Black', brand: 'Cooler Master', price: 3200,
      specs: 'Air, 1x120 мм, до 150 Вт TDP, LGA1700/AM5', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/cm-hyper212.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Cooler+Master+Hyper+212+Black',
    },
    {
      id: 'cool2', name: 'Peerless Assassin 120', brand: 'Thermalright', price: 4200,
      specs: 'Air, 2x120 мм, до 260 Вт TDP, LGA1700/AM5', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/thermalright-pa120.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Thermalright+Peerless+Assassin+120',
    },
    {
      id: 'cool3', name: 'NH-D15', brand: 'Noctua', price: 11900,
      specs: 'Air, 2x150 мм, до 250 Вт TDP, 19 дБА', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/noctua-nhd15.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Noctua+NH-D15',
    },
    {
      id: 'cool4', name: 'Kraken X53', brand: 'NZXT', price: 9900,
      specs: 'AIO 240 мм, 2x120 мм, до 250 Вт TDP', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/nzxt-krakenx53.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=NZXT+Kraken+X53',
    },
    {
      id: 'cool5', name: 'Kraken X63', brand: 'NZXT', price: 12900,
      specs: 'AIO 280 мм, 2x140 мм, до 300 Вт TDP', tier: 'mid',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/nzxt-krakenx63.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=NZXT+Kraken+X63',
    },
    {
      id: 'cool6', name: 'Kraken Elite 360', brand: 'NZXT', price: 24900,
      specs: 'AIO 360 мм, 3x120 мм, LCD экран, до 350 Вт TDP', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/nzxt-krakenelite.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=NZXT+Kraken+Elite+360',
    },
    {
      id: 'cool7', name: 'LC240 RGB', brand: 'Deepcool', price: 6900,
      specs: 'AIO 240 мм, 2x120 мм ARGB, до 250 Вт TDP', tier: 'budget',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/deepcool-lc240.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Deepcool+LC240+RGB',
    },
    {
      id: 'cool8', name: 'Liquid Freezer III 360', brand: 'Arctic', price: 14900,
      specs: 'AIO 360 мм, 3x120 мм, VRM Fan, до 400 Вт TDP', tier: 'high',
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/placeholder/arctic-360.jpg.webp',
      buyUrl: 'https://www.dns-shop.ru/search/?q=Arctic+Liquid+Freezer+III+360',
    },
  ],
};

export const emptyBuild = (): Build => ({
  id: Math.random().toString(36).slice(2),
  name: 'Сборка',
  components: Object.fromEntries(componentCategories.map(c => [c.id, null])),
});

export const tierColors: Record<string, string> = {
  budget: 'bg-blue-50 text-blue-700 border-blue-200',
  mid: 'bg-amber-50 text-amber-700 border-amber-200',
  high: 'bg-red-50 text-red-700 border-red-200',
};

export const tierLabels: Record<string, string> = {
  budget: 'Бюджет',
  mid: 'Средний',
  high: 'Топ',
};

export const categoryIcons: Record<string, string> = {
  cpu: 'Cpu', gpu: 'Monitor', ram: 'MemoryStick', storage: 'HardDrive',
  motherboard: 'CircuitBoard', psu: 'Zap', case: 'Box', cooler: 'Wind',
};

export const getBuildTotal = (build: Build) =>
  Object.values(build.components).reduce((sum, c) => sum + (c?.price ?? 0), 0);

export const getFilledCount = (build: Build) =>
  Object.values(build.components).filter(Boolean).length;

export const formatPrice = (price: number) =>
  price.toLocaleString('ru-RU') + ' ₽';
