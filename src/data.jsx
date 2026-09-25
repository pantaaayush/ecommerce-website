// ─── Existing images ───
import ml2 from './assets/ml2.jpg'
import topm1 from './assets/topm1.jpg'
import ld1 from './assets/ld1.jpg'
import ml1 from './assets/ml1.jpg'
import tr1 from './assets/tr1.jpg'
import ld3 from './assets/ld3.jpg'
import gown2 from './assets/gown2.jpg'
import topm2 from './assets/topm2.jpg'
import ml3 from './assets/ml3.jpg'
import topm3 from './assets/topm3.jpg'
import gown3 from './assets/gown3.jpg'
import tr3 from './assets/tr3.jpg'
import gown4 from './assets/gown4.jpg'
import tr2 from './assets/tr2.jpg'
import ld4 from './assets/ld4.jpg'
import ld5 from './assets/ld5.jpg'
import ld6 from './assets/ld6.jpg'

// ─── Men's clothing (9) ───
import m18 from './assets/clothesmen18.jpg'
import m19 from './assets/clothesmen19.jpg'
import m20 from './assets/clothesmen20.jpg'
import m21 from './assets/clothesmen21.jpg'
import m22 from './assets/clothesmen22.jpg'
import m23 from './assets/clothesmen23.jpg'
import m24 from './assets/clothesmen24.jpg'
import m25 from './assets/clothesmen25.jpg'
import m26 from './assets/clothesmen26.jpg'

// ─── Women's clothing (12) ───
import w1 from './assets/women1.jpg'
import w2 from './assets/women2.jpg'
import w3 from './assets/women3.jpg'
import w4 from './assets/women4.jpg'
import w5 from './assets/women5.jpg'
import w6 from './assets/women6.jpg'
import w7 from './assets/women7.jpg'
import w8 from './assets/women8.jpg'
import w9 from './assets/women9.jpg'
import w10 from './assets/women10.jpg'
import w11 from './assets/women11.jpg'
import w12 from './assets/women12.jpg'

// ─── Kids' clothing (8) ───
import k1 from './assets/kids1.jpg'
import k2 from './assets/kids2.jpg'
import k3 from './assets/kids3.jpg'
import k4 from './assets/kids4.jpg'
import k5 from './assets/kids5.jpg'
import k6 from './assets/kids6.jpg'
import k7 from './assets/kids7.jpg'
import k8 from './assets/kids8.jpg'

export const productsData = [
  // ═══════ MEN ═══════
  { id: 1,  image: ml2,   title: "Men's Classic Cotton Tee",     price: 45,  category: 'men',    description: 'Soft breathable cotton tee. Everyday comfort with a clean fit.' },
  { id: 2,  image: topm1, title: "Men's Charcoal Polo",          price: 65,  category: 'men',    description: 'Refined polo with a tailored cut. Smart-casual essential.' },
  { id: 3,  image: tr1,   title: "Men's Denim Trucker Jacket",   price: 120, category: 'men',    description: 'Rugged denim jacket with a modern fit. Built to last.' },
  { id: 4,  image: topm2, title: "Men's Striped Crewneck",       price: 55,  category: 'men',    description: 'Classic striped crewneck. Pairs with everything.' },
  { id: 5,  image: ml3,   title: "Men's Premium Knit Pullover",  price: 80,  category: 'men',    description: 'Soft-touch knit pullover with a clean modern cut.' },
  { id: 6,  image: topm3, title: "Men's Olive Bomber Jacket",    price: 130, category: 'men',    description: 'Sleek bomber jacket. Lightweight, stylish, durable.' },
  { id: 7,  image: tr3,   title: "Men's Khaki Chino Pants",      price: 75,  category: 'men',    description: 'Tailored chinos in soft cotton twill. Comfort meets style.' },
  { id: 8,  image: m18,   title: "Men's Casual Wear 18",         price: 85,  category: 'men',    description: 'A versatile everyday piece for the modern wardrobe.' },
  { id: 9,  image: m19,   title: "Men's Casual Wear 19",         price: 60,  category: 'men',    description: 'Relaxed fit, premium fabric, effortless style.' },
  { id: 10, image: m20,   title: "Men's Casual Wear 20",         price: 95,  category: 'men',    description: 'Refined design with an easy everyday feel.' },
  { id: 11, image: m21,   title: "Men's Casual Wear 21",         price: 110, category: 'men',    description: 'Tailored comfort, built for daily wear.' },
  { id: 12, image: m22,   title: "Men's Casual Wear 22",         price: 140, category: 'men',    description: 'Elevated casual piece with premium detailing.' },
  { id: 13, image: m23,   title: "Men's Casual Wear 23",         price: 78,  category: 'men',    description: 'Modern silhouette with timeless appeal.' },
  { id: 14, image: m24,   title: "Men's Casual Wear 24",         price: 165, category: 'men',    description: 'Sharp, versatile, and made to last.' },
  { id: 15, image: m25,   title: "Men's Casual Wear 25",         price: 88,  category: 'men',    description: 'Effortless style for everyday moments.' },
  { id: 16, image: m26,   title: "Men's Casual Wear 26",         price: 105, category: 'men',    description: 'A refined staple that pairs with everything.' },

  // ═══════ LADIES ═══════
  { id: 17, image: ld1,   title: "Women's Purple Bodycon Dress", price: 85,  category: 'ladies', description: 'Elegant bodycon dress with a flattering silhouette.' },
  { id: 18, image: ml1,   title: "Women's Cable Knit Sweater",   price: 95,  category: 'ladies', description: 'Warm cable-knit sweater in premium wool blend.' },
  { id: 19, image: ld3,   title: "Women's White Linen Blouse",   price: 70,  category: 'ladies', description: 'Lightweight linen blouse for warm days.' },
  { id: 20, image: gown2, title: "Women's Floral Summer Gown",   price: 140, category: 'ladies', description: 'Flowing floral gown. Effortless elegance.' },
  { id: 21, image: gown3, title: "Women's Silk Evening Dress",   price: 180, category: 'ladies', description: 'Luxurious silk dress with a flowing drape.' },
  { id: 22, image: gown4, title: "Women's Velvet Party Gown",    price: 200, category: 'ladies', description: 'Rich velvet gown for special evenings.' },
  { id: 23, image: tr2,   title: "Women's Plaid Flannel Shirt",  price: 60,  category: 'ladies', description: 'Warm flannel shirt in timeless plaid.' },
  { id: 24, image: ld4,   title: "Women's Pastel Midi Skirt",    price: 80,  category: 'ladies', description: 'Flowy midi skirt in soft pastel tones.' },
  { id: 25, image: ld5,   title: "Women's Beige Trench Coat",    price: 165, category: 'ladies', description: 'Iconic trench coat in warm beige.' },
  { id: 26, image: ld6,   title: "Women's Soft Wool Cardigan",   price: 110, category: 'ladies', description: 'Cozy wool cardigan, perfect for layering.' },
  { id: 27, image: w1,    title: "Women's Clothing 1",           price: 90,  category: 'ladies', description: 'Effortless style for any season.' },
  { id: 28, image: w2,    title: "Women's Clothing 2",           price: 130, category: 'ladies', description: 'Modern design with a refined finish.' },
  { id: 29, image: w3,    title: "Women's Clothing 3",           price: 105, category: 'ladies', description: 'Feminine and easy to wear.' },
  { id: 30, image: w4,    title: "Women's Clothing 4",           price: 85,  category: 'ladies', description: 'Sleek silhouette, all-day comfort.' },
  { id: 31, image: w5,    title: "Women's Clothing 5",           price: 150, category: 'ladies', description: 'Luxuriously soft with timeless appeal.' },
  { id: 32, image: w6,    title: "Women's Clothing 6",           price: 130, category: 'ladies', description: 'Minimal, modern, perfect for evenings.' },
  { id: 33, image: w7,    title: "Women's Clothing 7",           price: 95,  category: 'ladies', description: 'A fresh take on a classic staple.' },
  { id: 34, image: w8,    title: "Women's Clothing 8",           price: 78,  category: 'ladies', description: 'Fluid movement, refined everyday style.' },
  { id: 35, image: w9,    title: "Women's Clothing 9",           price: 68,  category: 'ladies', description: 'Essential warm-weather wear.' },
  { id: 36, image: w10,   title: "Women's Clothing 10",          price: 220, category: 'ladies', description: 'Warm, timeless, effortlessly sophisticated.' },
  { id: 37, image: w11,   title: "Women's Clothing 11",          price: 60,  category: 'ladies', description: 'Romantic detail with a modern cut.' },
  { id: 38, image: w12,   title: "Women's Clothing 12",          price: 145, category: 'ladies', description: 'One-and-done elegance for any occasion.' },

  // ═══════ KIDS ═══════
  { id: 39, image: k1,    title: "Kids' Clothing 1",             price: 30,  category: 'kids',   description: 'Soft cotton, machine washable, playful design.' },
  { id: 40, image: k2,    title: "Kids' Clothing 2",             price: 45,  category: 'kids',   description: 'Cozy and easy to layer for cooler days.' },
  { id: 41, image: k3,    title: "Kids' Clothing 3",             price: 55,  category: 'kids',   description: 'Durable and comfortable for playtime.' },
  { id: 42, image: k4,    title: "Kids' Clothing 4",             price: 35,  category: 'kids',   description: 'Comfortable for bedtime and lazy mornings.' },
  { id: 43, image: k5,    title: "Kids' Clothing 5",             price: 75,  category: 'kids',   description: 'Warm, cozy, and built for adventure.' },
  { id: 44, image: k6,    title: "Kids' Clothing 6",             price: 40,  category: 'kids',   description: 'Bright and fun for everyday wear.' },
  { id: 45, image: k7,    title: "Kids' Clothing 7",             price: 50,  category: 'kids',   description: 'Easy to wear, easy to love.' },
  { id: 46, image: k8,    title: "Kids' Clothing 8",             price: 65,  category: 'kids',   description: 'Warm and stylish for the season.' },
]

export const categories = [
  { id: 'all',    label: 'All',    image: ml2 },
  { id: 'ladies', label: 'Ladies', image: ld1 },
  { id: 'men',    label: 'Men',    image: m18 },
  { id: 'kids',   label: 'Kids',   image: k1  },
  { id: 'unisex', label: 'Unisex', image: ml1 },
]