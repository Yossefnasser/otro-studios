export interface Product {
  id: string;
  name: string;
  subtitle: string;
  division: 'T-SHIRTS' | 'SHIRTS & POLOS' | 'BOTTOMS' | 'OUTERWEAR';
  categoryLabel: string;
  price: number;
  badge?: string;
  tag?: string;
  statusLabel?: string;
  colors: string[];
  colorNames: string[];
  image: string;
  secondaryImage?: string;
  weightGsm: number;
  fabrication: string;
  hardware: string;
  origin: string;
  dyeing: string;
  description: string;
  measurements: {
    size: 'S' | 'M' | 'L' | 'XL';
    chestCm: number;
    lengthCm: number;
    shoulderCm: number;
    inStock: boolean;
  }[];
}

export interface ChronicleLook {
  id: string;
  code: string;
  title: string;
  fitTag: string;
  image: string;
  description: string;
  quote?: string;
  details: {
    model: string;
    wearing: string;
    fabric: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'barden-state-polo',
    name: 'Barden State Polo',
    subtitle: 'Knit Polo in Rich Mineral Umber',
    division: 'SHIRTS & POLOS',
    categoryLabel: 'KNIT POLO',
    price: 125.0,
    badge: 'NEW',
    colors: ['#5d4d46', '#702e3b'],
    colorNames: ['Earthy Umber', 'Washed Maroon'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aZ0GGB81m-abTMgwN0Vw3R0kFy7zbUI4D928iEq3owvmVIm2Mw3WqZXWUbTkKyOOjELq8PWJqxfPZpn_dYiIKta4qvPZTrICrPdKHVswG36JAGwUd1_po9V17NCzRL1OEJBSolq7kYMlH_0bA4VUzdeo4il21ZrLTF_8f6xVhm24eNjMHAHhA79V2SVmEJ07afsHeNfIL5CDTI6RrlQsJhrYyp9rKeJQD8OdG7KdlTZA991ixpjRMyngOtixcV0z',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTSBfhNXTtrwdyC48sYpLKzpyupX9g9ovvhgNavLjXb1Mav37TPWy5BUss9LHZhkqT_ihLnnrkFZ6yCIZEvfMpk5mNQKI5UCTP5zhr2U45mPvhVKQN5BWIAchjifVtcVXLH6OGcOZN-uhuZpBtVxSzAoecMKkQAzYJeF5kdYFQ3-LtUrAmFYWOwNg_sS-E8htqFhI-Vewf9expgtatLMgihe9Ji0KHjhpfeF7-m3oK2FO1MYiQCq6Qzb5Rk8vi3RlW',
    weightGsm: 480,
    fabrication: '480 GSM Combed Loopback Cotton',
    hardware: 'Custom Branded Brushed Hardware',
    origin: 'Mansoura Design Lab',
    dyeing: 'Acid Mineral Pigment Wash',
    description: 'Substantial knit polo silhouette engineered with dropped shoulder geometry and rib-knit finish. Pigment washed for softened drape while preserving structural density.',
    measurements: [
      { size: 'S', chestCm: 114, lengthCm: 71, shoulderCm: 56, inStock: true },
      { size: 'M', chestCm: 120, lengthCm: 73, shoulderCm: 58, inStock: true },
      { size: 'L', chestCm: 126, lengthCm: 75, shoulderCm: 60, inStock: true },
      { size: 'XL', chestCm: 132, lengthCm: 77, shoulderCm: 62, inStock: false },
    ],
  },
  {
    id: 'burgundy-polo',
    name: 'Burgundy Polo',
    subtitle: 'Cold-Pigment Soaked Relaxed Polo',
    division: 'SHIRTS & POLOS',
    categoryLabel: 'GARMENT DYE',
    price: 125.0,
    badge: 'DROP 04',
    colors: ['#702e3b', '#1e2023'],
    colorNames: ['Washed Burgundy', 'Shadow Black'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTSBfhNXTtrwdyC48sYpLKzpyupX9g9ovvhgNavLjXb1Mav37TPWy5BUss9LHZhkqT_ihLnnrkFZ6yCIZEvfMpk5mNQKI5UCTP5zhr2U45mPvhVKQN5BWIAchjifVtcVXLH6OGcOZN-uhuZpBtVxSzAoecMKkQAzYJeF5kdYFQ3-LtUrAmFYWOwNg_sS-E8htqFhI-Vewf9expgtatLMgihe9Ji0KHjhpfeF7-m3oK2FO1MYiQCq6Qzb5Rk8vi3RlW',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6aZ0GGB81m-abTMgwN0Vw3R0kFy7zbUI4D928iEq3owvmVIm2Mw3WqZXWUbTkKyOOjELq8PWJqxfPZpn_dYiIKta4qvPZTrICrPdKHVswG36JAGwUd1_po9V17NCzRL1OEJBSolq7kYMlH_0bA4VUzdeo4il21ZrLTF_8f6xVhm24eNjMHAHhA79V2SVmEJ07afsHeNfIL5CDTI6RrlQsJhrYyp9rKeJQD8OdG7KdlTZA991ixpjRMyngOtixcV0z',
    weightGsm: 480,
    fabrication: 'Garment-Dyed Combed Loopback Cotton',
    hardware: 'Subdued Tonal Horn Buttons',
    origin: 'Cairo Atelier',
    dyeing: 'Reactive Cold Dye Bath',
    description: 'Saturated rich mineral hue treated with cold-pigment soak. Boxy cut with relaxed collar stand designed to be worn open or cleanly buttoned.',
    measurements: [
      { size: 'S', chestCm: 114, lengthCm: 71, shoulderCm: 56, inStock: true },
      { size: 'M', chestCm: 120, lengthCm: 73, shoulderCm: 58, inStock: true },
      { size: 'L', chestCm: 126, lengthCm: 75, shoulderCm: 60, inStock: true },
      { size: 'XL', chestCm: 132, lengthCm: 77, shoulderCm: 62, inStock: true },
    ],
  },
  {
    id: 'saint-essence-plaid',
    name: 'Saint Essence Plaid',
    subtitle: 'Heavyweight Flannel with Chenille Typography',
    division: 'OUTERWEAR',
    categoryLabel: 'WOVEN TWILL',
    price: 160.0,
    badge: 'FEW LEFT',
    tag: 'PATCH EMB.',
    colors: ['#882233', '#223344'],
    colorNames: ['Madder Plaid', 'Midnight Shadow'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi1lwKV02RHW0C2LjDaHTXL99U1hiqcvti3ccP_9EfNH81huSiihin-Osem7y4VNri2nYaaxH_otq3uV2fLAsfzYI5qCU10beEK4jSeUNBwcd7gESUN-r4kSkz6JZQVAsIlOmA4K6TAmnpoZxO6T2xEpriX5JRfXQ_KzwqG4iX_iADLht0KBZ1trsCiAuwvWLmHP9mz6-9M1RZZ3hIHBpj5qlSzynIJoL7f5XOp2ABWQRprhlxWiWnr1hcS5IT1XS0',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWoR8CDhecVokYIlDK-aWPtSouj00YWyjRSmhioWMjB-kaNNSBImT8Agxs_IH7YtC0gB7HkW8oOicx0bwNXgz3Za7KQQce2BadxEbJ06o_2q_99vtKynsJi1RVYR-egWWlwTojeMm7RvYIh8sKEShsUJ7jnISywPG0STW6XdvjJw4ez8euYXT7RnQM42eM5sIXrwMZ-xtExrqD_wRfxDwKHqtd7SNRbUf1n9PRDoybiyTR-z_L0HotNv5SGQNLQOYT',
    weightGsm: 380,
    fabrication: 'Heavy Woven Twill Flannel',
    hardware: 'Cast Gunmetal Snap Buttons',
    origin: 'Mansoura Design Lab',
    dyeing: 'Yarn-Dyed Heritage Plaid',
    description: 'Oversized overshirt flannel showcasing the signature Saint Essence chenille arch embroidery across the back shoulder line. Heavy structural drape with front breast pockets.',
    measurements: [
      { size: 'S', chestCm: 118, lengthCm: 74, shoulderCm: 58, inStock: true },
      { size: 'M', chestCm: 124, lengthCm: 76, shoulderCm: 60, inStock: true },
      { size: 'L', chestCm: 130, lengthCm: 78, shoulderCm: 62, inStock: true },
      { size: 'XL', chestCm: 136, lengthCm: 80, shoulderCm: 64, inStock: false },
    ],
  },
  {
    id: 'madrid-ringer-tee',
    name: 'Madrid Ringer Tee',
    subtitle: '310 GSM Bound Ringer Jersey',
    division: 'T-SHIRTS',
    categoryLabel: 'RINGER TEE',
    price: 85.0,
    badge: 'CORE',
    colors: ['#f1eeea', '#202938'],
    colorNames: ['Chalk Ecru', 'Dark Slate'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeN5Y5LdX1fh6Qn5AEZvtk_T7hsofP4C9RRWEueHdzfNyU4NsLdHRFaMYWgdlnWPL8Do5gyRp8mDA8X-m_SZqMHXJpJlYW469itJtjZWUqnIiVYR4CifGovvClBhKlACWGHZPI9Fz-NMVyqYFTRr_G69g12-2yfS-d6lmRU2QfkYZKo77zXfhuK2nreMvEvv-ZOEkM36RJweI6mworkj5q-hEXX2oLEeqjiRCM6J_gJDhXkI1CGrtOZpWjY7XxTknB',
    weightGsm: 310,
    fabrication: '310 GSM Heavy Combed Single Jersey',
    hardware: 'None / Bound Contrast Rib',
    origin: 'Mansoura Design Lab',
    dyeing: 'Natural Ecru Unbleached Weave',
    description: 'Architectural ringer tee cut with extended short sleeve length and high neck rib. Features Madrid typography screen-printed using high-density archival ink.',
    measurements: [
      { size: 'S', chestCm: 110, lengthCm: 70, shoulderCm: 54, inStock: true },
      { size: 'M', chestCm: 116, lengthCm: 72, shoulderCm: 56, inStock: true },
      { size: 'L', chestCm: 122, lengthCm: 74, shoulderCm: 58, inStock: true },
      { size: 'XL', chestCm: 128, lengthCm: 76, shoulderCm: 60, inStock: true },
    ],
  },
  {
    id: 'amalfi-heritage-tee',
    name: 'Amalfi Heritage Tee',
    subtitle: 'Vintage Arch Collar Football Silhouette',
    division: 'T-SHIRTS',
    categoryLabel: 'COLLAR GRAPHIC',
    price: 85.0,
    statusLabel: 'READY TO SHIP',
    colors: ['#f1eeea', '#1c382b'],
    colorNames: ['Ecru Chalk', 'Racing Bottle Green'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1_5ZTR-lkrgv8sxVSJigEAlV_15-LT-m5uzvYAXWyP5NXqHjP9Gt41p09QZOy5NeTtA7vyJREbTjyqRF_hzvMUz6POXJkpUgaXCPwCHCY3uH_-VfoZkvrfgGl9dOqPjN5PK0rBwGiTC10nW3rym-nQ_oXTBAen_vyKrCgCJSghirQI6Y-7I27gOw8d-U7yKENiH69OLoQTJCPMxXpNJD5PJiUnKgc6SXRAFmCCTGa2ySowz3tE07Qz5lmuKjJu68a',
    weightGsm: 310,
    fabrication: '310 GSM Combed Jersey with Bound Rib',
    hardware: 'Double Needled Structural Hem',
    origin: 'Cairo Atelier',
    dyeing: 'Acid Milled Finish',
    description: 'Vintage football-inspired leisure tee with arch Amalfi typography. Tailored relaxed torso and reinforced collar bind that never loses tension.',
    measurements: [
      { size: 'S', chestCm: 110, lengthCm: 70, shoulderCm: 54, inStock: true },
      { size: 'M', chestCm: 116, lengthCm: 72, shoulderCm: 56, inStock: true },
      { size: 'L', chestCm: 122, lengthCm: 74, shoulderCm: 58, inStock: true },
      { size: 'XL', chestCm: 128, lengthCm: 76, shoulderCm: 60, inStock: true },
    ],
  },
  {
    id: 'norm-smoke-wash-tee',
    name: 'Norm Smoke Wash Tee',
    subtitle: 'Individually Misted Acid Smoke Cotton',
    division: 'T-SHIRTS',
    categoryLabel: 'SMOKE PROCESS',
    price: 90.0,
    statusLabel: 'READY TO SHIP',
    colors: ['#b5b2a9', '#2a2927'],
    colorNames: ['Mineral Smoke', 'Charcoal Ash'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXtn0VB3XjOsM-up7Cy1L1RlMIoi_tEnEBqesZ4jksr0EueEB4FSftGoKcyDieKdhUCEOwKusKrbA_nYHT8nr22KaWlf5-l_f4-tqijYAMqYsKciCSQ3BUudcdLQIwE-mt38_KlRLbG-KPliE_vwQ4A4tU09uyCzHlF3Pfa4I3aA_I-vdJ1-f7UuF-htJk7QYFnGUxxad7VugA1zte42N2KAU5i4Gt37gqLE7pSDBlDoMb2j41Y3_RT1YaM7XS6sPB',
    weightGsm: 330,
    fabrication: 'Hand-Misted Smoke Dye Jersey',
    hardware: 'Discreet Back Neck Rubber Inset',
    origin: 'Mansoura Design Lab',
    dyeing: 'Cold Smoke Cloud Precipitation',
    description: 'Each garment individually treated through cold smoke precipitation, creating one-of-a-kind marble gradations across the chest and shoulders.',
    measurements: [
      { size: 'S', chestCm: 112, lengthCm: 71, shoulderCm: 55, inStock: true },
      { size: 'M', chestCm: 118, lengthCm: 73, shoulderCm: 57, inStock: true },
      { size: 'L', chestCm: 124, lengthCm: 75, shoulderCm: 59, inStock: true },
      { size: 'XL', chestCm: 130, lengthCm: 77, shoulderCm: 61, inStock: false },
    ],
  },
  {
    id: 'gingham-camp-shirt',
    name: 'Gingham Camp Shirt',
    subtitle: 'Relaxed Woven Slub Open-Collar',
    division: 'SHIRTS & POLOS',
    categoryLabel: 'CAMP COLLAR',
    price: 140.0,
    statusLabel: 'RESTOCKED',
    colors: ['#9ab5c1', '#e8e5dc'],
    colorNames: ['Chambray Sky', 'Bone Cream'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL8z9V3VBryPntlmcyrmPfZF3ksB5Qqf2q5dvukW0aeekwkQ5LM2ywQV_e1O3asMjkWOYL0YC5B3-So495tsstRn9fGmZquTPuBjVcDxbsDrufsPmR2NTrh7UEFIInf3rhfgkwLxepM0-lb1_NDoiZvoeYClJYC33Q61lW_nVJXnGPvC1OsudXxG-NIijRkGqei3ePrjd_36H4ozuZG-ba0TR3J-x-r07kU2buHz-LISLuV8Ki9kQdGsSWOEUEaoMh',
    weightGsm: 220,
    fabrication: 'Woven Slub Gingham Cotton',
    hardware: 'Natural Mother-of-Pearl Fastenings',
    origin: 'Cairo Atelier',
    dyeing: 'Yarn-Woven Indigo Tint',
    description: 'Open camp collar design cut wide through the arms and chest for warm-weather breeze. Natural mother-of-pearl buttons with clean square hem line.',
    measurements: [
      { size: 'S', chestCm: 116, lengthCm: 72, shoulderCm: 56, inStock: true },
      { size: 'M', chestCm: 122, lengthCm: 74, shoulderCm: 58, inStock: true },
      { size: 'L', chestCm: 128, lengthCm: 76, shoulderCm: 60, inStock: true },
      { size: 'XL', chestCm: 134, lengthCm: 78, shoulderCm: 62, inStock: true },
    ],
  },
  {
    id: 'ecru-johnny-polo',
    name: 'Ecru Johnny Polo',
    subtitle: 'Buttonless Textured Waffle Structure',
    division: 'SHIRTS & POLOS',
    categoryLabel: 'ECRU WEAVE',
    price: 120.0,
    statusLabel: 'CORE PIECE',
    colors: ['#e9e6dd', '#292723'],
    colorNames: ['Unbleached Ecru', 'Dark Obsidian'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoSc3dhMCoEkF97G5lRlUgKVC-QiiJ1Ifyt7R4wM3SBAZEtUF1W5rqX-lhgc8nrM3eyGPLVNSPuLkIJkT6zvvyu36IKXYbldr5cvFxkjEsRxGb8wioftkQRnC_8IM5ZS1Wo8-Q-pKf_SV5KChq-WpknOl3atoLrUYeFtEXyNELETS4lI63pp_KB7OXzDQUJSwXhrmvXEVgK2Yr8m6lK_E2cvKmySE5EkY5M-a9ERiok1lWtNLQsWM3PgHfxrmZgtT9',
    weightGsm: 420,
    fabrication: '420 GSM Heavyweight Textured Waffle',
    hardware: 'Reinforced Self-Fabric Placket',
    origin: 'Cairo Atelier',
    dyeing: 'Zero Chemical Bleach Pure Cotton',
    description: 'Buttonless Johnny collar engineered with substantial waffle structure. Breathable yet substantial architectural posture.',
    measurements: [
      { size: 'S', chestCm: 114, lengthCm: 71, shoulderCm: 55, inStock: true },
      { size: 'M', chestCm: 120, lengthCm: 73, shoulderCm: 57, inStock: true },
      { size: 'L', chestCm: 126, lengthCm: 75, shoulderCm: 59, inStock: true },
      { size: 'XL', chestCm: 132, lengthCm: 77, shoulderCm: 61, inStock: true },
    ],
  },
  {
    id: 'england-10-ringer',
    name: 'England 10 Ringer',
    subtitle: 'Contrast Bound Heritage Jersey',
    division: 'T-SHIRTS',
    categoryLabel: 'ARCHIVAL SPORT',
    price: 88.0,
    badge: 'CHRONICLE // 01',
    colors: ['#f4f1eb', '#b22234'],
    colorNames: ['Vintage White', 'Union Red'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgAgdiWND4HtPFbwACkfVYGI2q0Gb4ChWn7pRA3ZkWIBV2ctfR0s73brqjPsBS74Ae0E95xQpUenkMoItGeIC2BYr0S9hrecke8fEzzRIMXcmiC0BsOZzQpMLRcNTmirYcgskMRMTzbJLJzRuwwnb9AIsqltcMYPCee-PGqy6BwQoPZrNPkGW1keixBAyni7_7hlUGmJisy63X_6gtJQnR1_nNSfZkQHm_eS-XCkqLS_FVjePXas63rtvUqQvIBAI-',
    weightGsm: 320,
    fabrication: '320 GSM Ring-Spun Cotton',
    hardware: 'Velvet Touch Flock Numbering',
    origin: 'Mansoura Design Lab',
    dyeing: 'Garment Distressed Enzyme Wash',
    description: 'Relaxed vintage silhouette inspired by 90s tournament sportswear. Ribbed contrast collar and authentic flock numbering.',
    measurements: [
      { size: 'S', chestCm: 112, lengthCm: 71, shoulderCm: 55, inStock: true },
      { size: 'M', chestCm: 118, lengthCm: 73, shoulderCm: 57, inStock: true },
      { size: 'L', chestCm: 124, lengthCm: 75, shoulderCm: 59, inStock: true },
      { size: 'XL', chestCm: 130, lengthCm: 77, shoulderCm: 61, inStock: true },
    ],
  },
  {
    id: 'brazil-pullman-core',
    name: 'Brazil Pullman Core',
    subtitle: 'Boxy Silhouette with Canary Accents',
    division: 'T-SHIRTS',
    categoryLabel: 'JERSEY CORE',
    price: 85.0,
    badge: 'CHRONICLE // 02',
    colors: ['#161618', '#f4c430'],
    colorNames: ['Black Graphite', 'Canary Amber'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFNlmRTi5GkRXFnXvz0o-63c6YXVWh_gr7V23AqjoMIc-ro5WUV_MELwiBbrRtYk0aWGzO1IzB3rEkBCB_kw2psXZ5xJwbRyq0nYYOoQ262JQpUcobm0grfkCbYKvhT6JNZyAaaVDQwAdfMjk0i2AZr9ve_oNYg_0YsFuh8L3i4r3xeZIu64Yyx__tKji59WIgdT-zgr8ITqsgYkKzTFEwHjnPB3OV6OhBhueq0BJA8igbbkVvYgtgSyxArpTBqT22',
    weightGsm: 300,
    fabrication: '300 GSM Dense Cotton Mesh',
    hardware: 'Silicone High-Build Typography',
    origin: 'Mansoura Design Lab',
    dyeing: 'Carbon Black Pigment Bath',
    description: 'Boxy dropped shoulder cut with contrast green and amber sleeve accents. Paired in editorial looks with wide pleated carpenter denim.',
    measurements: [
      { size: 'S', chestCm: 114, lengthCm: 71, shoulderCm: 56, inStock: true },
      { size: 'M', chestCm: 120, lengthCm: 73, shoulderCm: 58, inStock: true },
      { size: 'L', chestCm: 126, lengthCm: 75, shoulderCm: 60, inStock: true },
      { size: 'XL', chestCm: 132, lengthCm: 77, shoulderCm: 62, inStock: true },
    ],
  },
  {
    id: 'pleated-carpenter-bottoms',
    name: 'Disciplined Wide Trouser',
    subtitle: 'Heavy Cotton Drill Double Pleated Pant',
    division: 'BOTTOMS',
    categoryLabel: 'ARCHITECTURAL FIT',
    price: 175.0,
    badge: 'NEW',
    colors: ['#cfc9bc', '#28292c'],
    colorNames: ['Bone Khaki', 'Raw Obsidian'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC9Xah5SW9u5G7vhnsmGm0uSs5j77EbGcHGlrxbLsNDJAfB3KkSZsn_gJjWJRlvOPbf2MARMqFNXCU4YchJAUGcTUgAr2JMGFgVWeU4cq_Hg0Er7v3Qv6_B_OiNNx_rbjFAjjl2mBozeSL92KChWIqYqdI15EFtu6y6r2I8srde2Ak1bPOVBc3NKAJlvKdJ3taXeGLj8mBlnJ7vQujUKhuXYIzOQT24RQQt7415NAuYy41P-zD6caoz3LAYrbHkS_D',
    weightGsm: 440,
    fabrication: '440 GSM Heavy Cotton Drill',
    hardware: 'Cast Gunmetal Buckle & Rivets',
    origin: 'Mansoura Design Lab',
    dyeing: 'Stone Mineral Wash',
    description: 'Deep double-pleat volume falling into a relaxed straight leg. Internal waistband drawstring with brushed hardware buckle adjustment.',
    measurements: [
      { size: 'S', chestCm: 80, lengthCm: 104, shoulderCm: 32, inStock: true },
      { size: 'M', chestCm: 85, lengthCm: 106, shoulderCm: 34, inStock: true },
      { size: 'L', chestCm: 90, lengthCm: 108, shoulderCm: 36, inStock: true },
      { size: 'XL', chestCm: 96, lengthCm: 110, shoulderCm: 38, inStock: false },
    ],
  },
  {
    id: 'mineral-heavyweight-parka',
    name: 'Oversized Utility Outerwear',
    subtitle: 'Weatherproof Bonded Architectural Canvas',
    division: 'OUTERWEAR',
    categoryLabel: 'SPECIAL EDITION',
    price: 210.0,
    badge: 'LIMITED RUN',
    colors: ['#4a544b', '#1e2023'],
    colorNames: ['Faded Pine', 'Matte Black'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWAgf7Bj5hGvu2-75WLV68JSpfVMmyaMLKAgBFnAdv6ZEheDCKM0UznF2o-oZjk6zMR6_c-23zvLr2xWP4vkpTHrZxjKaersLDn2-5hOvVgqB6oD3dl4v-s9E6zOVlyljy1sbioYZ9mCUVwpR1_uBDvruOl5oTvz_C1Bh7KD9ii3G-pesUS_HJ46mp8Fh1yxmewaxgChBWIhrbGHkBQSjYtPGCZI7f_oMiNEZakCdtLo1KHuKvWs-3ip5Fckvv2a3o',
    weightGsm: 520,
    fabrication: '520 GSM Bonded Heavy Cotton Canvas',
    hardware: 'Gunmetal Marine Snaps & Heavy Double Zipper',
    origin: 'Cairo Atelier',
    dyeing: 'Resin Impregnated Mineral Bath',
    description: 'High-volume architectural jacket featuring oversized bellows pockets, gunmetal snap adjustments, and dropped shoulder seam geometry.',
    measurements: [
      { size: 'S', chestCm: 122, lengthCm: 76, shoulderCm: 60, inStock: true },
      { size: 'M', chestCm: 128, lengthCm: 78, shoulderCm: 62, inStock: true },
      { size: 'L', chestCm: 134, lengthCm: 80, shoulderCm: 64, inStock: true },
      { size: 'XL', chestCm: 140, lengthCm: 82, shoulderCm: 66, inStock: true },
    ],
  },
];

export const CHRONICLES: ChronicleLook[] = [
  {
    id: 'chronicle-01',
    code: 'CHRONICLE // 01',
    title: 'ENGLAND 10 RINGER',
    fitTag: 'DENIM FIT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgAgdiWND4HtPFbwACkfVYGI2q0Gb4ChWn7pRA3ZkWIBV2ctfR0s73brqjPsBS74Ae0E95xQpUenkMoItGeIC2BYr0S9hrecke8fEzzRIMXcmiC0BsOZzQpMLRcNTmirYcgskMRMTzbJLJzRuwwnb9AIsqltcMYPCee-PGqy6BwQoPZrNPkGW1keixBAyni7_7hlUGmJisy63X_6gtJQnR1_nNSfZkQHm_eS-XCkqLS_FVjePXas63rtvUqQvIBAI-',
    description: 'Heavyweight jersey with contrast bound collar & vintage wash.',
    quote: 'Structured athletic minimalism filtered through Cairo street proportions.',
    details: {
      model: '185 cm / Wearing size L',
      wearing: 'England 10 Ringer with Wide Washed Denim',
      fabric: '320 GSM ring-spun cotton',
    },
  },
  {
    id: 'chronicle-02',
    code: 'CHRONICLE // 02',
    title: 'BRAZIL PULLMAN CORE',
    fitTag: 'WIDE CARPENTER',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFNlmRTi5GkRXFnXvz0o-63c6YXVWh_gr7V23AqjoMIc-ro5WUV_MELwiBbrRtYk0aWGzO1IzB3rEkBCB_kw2psXZ5xJwbRyq0nYYOoQ262JQpUcobm0grfkCbYKvhT6JNZyAaaVDQwAdfMjk0i2AZr9ve_oNYg_0YsFuh8L3i4r3xeZIu64Yyx__tKji59WIgdT-zgr8ITqsgYkKzTFEwHjnPB3OV6OhBhueq0BJA8igbbkVvYgtgSyxArpTBqT22',
    description: 'Boxy dropped shoulder silhouette paired with pleated dark-wash denim.',
    quote: 'Form shaped by discipline, movement rendered in heavy textured cottons.',
    details: {
      model: '182 cm / Wearing size M',
      wearing: 'Brazil Pullman Core + Heavy Double Pleat Trouser',
      fabric: '300 GSM dense mesh blend',
    },
  },
  {
    id: 'chronicle-03',
    code: 'CHRONICLE // 03',
    title: 'SAINT ESSENCE // BACK',
    fitTag: 'CHENILLE PATCH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWoR8CDhecVokYIlDK-aWPtSouj00YWyjRSmhioWMjB-kaNNSBImT8Agxs_IH7YtC0gB7HkW8oOicx0bwNXgz3Za7KQQce2BadxEbJ06o_2q_99vtKynsJi1RVYR-egWWlwTojeMm7RvYIh8sKEShsUJ7jnISywPG0STW6XdvjJw4ez8euYXT7RnQM42eM5sIXrwMZ-xtExrqD_wRfxDwKHqtd7SNRbUf1n9PRDoybiyTR-z_L0HotNv5SGQNLQOYT',
    description: 'Textured plaid flannel featuring custom typography back crest.',
    quote: 'High-density tactile embroidery engineered for generational longevity.',
    details: {
      model: '188 cm / Wearing size XL',
      wearing: 'Saint Essence Plaid in Madder Hue',
      fabric: '380 GSM woven twill flannel',
    },
  },
  {
    id: 'chronicle-04',
    code: 'CHRONICLE // 04',
    title: 'NO REGRESSION MANIFESTO',
    fitTag: 'SERIGRAPH',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6d5EtnqdjMeTvlzR_oLDnp-3_yRuBLAn1_OqYZztqihTf6S-jqNyoSIMm3arF4XN59SOAMzNp1mCd2tT5Ut4XItwQND2_ViUGXhER0nTVwOXxvX4Di3aBTNaisD0b_QGn2AvsymdnZfeNjy66zVMwVjROTvEbnKhadeNnELp7VdEx3jeYICLkvY-Rr0q5BZowNoneQTFrkA1tn1VuSR6Cc7FTHSqKmQK335nAUVJBT_jWzmsj_7jHQbpAn4lxEBYy',
    description: 'High-density pigment ink on aged heavy jersey fleece.',
    quote: '“Only God, Goals & Growth” — Serigraphic manifesto on aged loopback.',
    details: {
      model: 'Atelier Spec Article #408',
      wearing: 'Manifesto Fleece Pullover Sample',
      fabric: '480 GSM combed loopback fleece',
    },
  },
  {
    id: 'chronicle-05',
    code: 'CHRONICLE // 05',
    title: 'DISCIPLINED VOLUME',
    fitTag: 'CAIRO LAB',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJdiCWXCy8KHnE0s0ghLJjmuBgPpq30KrBemNH6ZTUratq3OARu8UzfRy4PqS0buw37USZ8cKNMluHKBdy4p00OPk0McKi47KsfiUc2oPgKUVhsiOMFfX4KpfOSe73T55YiLT6kPb0UgbhRrj6cOQCoU3ueqPW7MPfJxrR9xQOxSO1KLj3w66alo2mifYQ7-Z0mUl3CtzpZL_Rpxr7qvDJNEXCmWMZf7ZhqDcdS6kxVu2a3YjPoLSAyk2BUjbHYZnM',
    description: 'Tailored pleats constructed for non-restrictive daily motion.',
    quote: 'The architecture of walking: draped weight that commands space.',
    details: {
      model: '180 cm / Wearing size M',
      wearing: 'Double Pleated Drill Trousers + Relaxed Slate Tee',
      fabric: '440 GSM heavy cotton drill',
    },
  },
];

export const CATEGORIES = [
  {
    id: 't-shirts',
    division: 'T-SHIRTS',
    code: 'DIVISION // 01',
    title: 'T-SHIRTS',
    count: '04 STYLES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvcYkkfrUEvlflp2fohb7UnnKJuwZXHDhcFgOnDlLX3j6OogFiFgnYW5x7DwKcmRX7GkWt-lfFMvDScZzAgv9YvSxe75jaer7L2fHys10vGRyZVevl4_C9h-vU7zLtV4mMDX9RCm6WmhkgYJZyeFHDPxbxuV_2SqFl881jFyfiyAH_V-A7Bn9cnWNM4oCO3UJmgT8OEvBVvE0Ff67tMGFHYtHwTYnstBWOcosDn0kmkrZxX-PPYexY9FUPUI_7Xqks',
  },
  {
    id: 'shirts-polos',
    division: 'SHIRTS & POLOS',
    code: 'DIVISION // 02',
    title: 'SHIRTS & POLOS',
    count: '04 STYLES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFfZcAUTaz9GaUVQUFMip1ahnUJI6oGVGWMjH1ogOVhXyS2kLUgwpfQ3mHob41ljArlS_fDXmXK7sj7LxIKFmODU3O-jvy2JOlABY_T5hhpi0JHBO5Mx3wXvQ5QbQ8cUCKyC1Roi-KWyXminYgg9D8ikUGTCA6YwNvX_QILxhj9fLWbDVS2p7o8P7aAG70uXQPSiTD7P7dct_nPNxusE0qpg2otJqOogrTl_B2uZrVwiQj-uRbRP_U7F9T5hZCqv68',
  },
  {
    id: 'bottoms',
    division: 'BOTTOMS',
    code: 'DIVISION // 03',
    title: 'BOTTOMS',
    count: '02 STYLES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0AEVYPGgGXjliqWQm7k826GsGvTfatZUPnoMm55Od-OiSRCl9s-iZWAbvWrFp_ezbzYlH2fH8S_8Wc-92dPS5OzXOqkmcSQ90qtce1p-QHshOVfdBLOW2Uu_jtZBQ2CoXdH9iL_aINFzVeVcTwaunEhGEBdwexsxqPAX7a1krRH9jg5YxyjwSKoEYGRdXKLoqdaLIWHNmalpnscJwQcH-1MC3djRFH8i4LqwcsrQfJW3oWlHsYT-swMTh90dOXUya',
  },
  {
    id: 'outerwear',
    division: 'OUTERWEAR',
    code: 'DIVISION // 04',
    title: 'OUTERWEAR',
    count: '02 STYLES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWAgf7Bj5hGvu2-75WLV68JSpfVMmyaMLKAgBFnAdv6ZEheDCKM0UznF2o-oZjk6zMR6_c-23zvLr2xWP4vkpTHrZxjKaersLDn2-5hOvVgqB6oD3dl4v-s9E6zOVlyljy1sbioYZ9mCUVwpR1_uBDvruOl5oTvz_C1Bh7KD9ii3G-pesUS_HJ46mp8Fh1yxmewaxgChBWIhrbGHkBQSjYtPGCZI7f_oMiNEZakCdtLo1KHuKvWs-3ip5Fckvv2a3o',
  },
];
