import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    title: "Bart Simpson Print",
    header: "bart-simpson-print",
    price: 50.00,
    reducedPrice: 30.00,
    image: "https://cdn.discordapp.com/attachments/872965880378716191/1356070088981090324/20250330_205615.jpg?ex=67eb3a2f&is=67e9e8af&hm=61f9b7bd8df1bad139edd0ce4aa8162f65143e97553bcb8d1785300629ef273b&format=webp",
    description: "Latest smartphone with amazing features and powerful performance.",
    stripe_product_id: "prod_RSx2fAevbsUv28",
    stripe_price_id: "price_1Qa18EK5FgbbJjREfnAU3yZT",
    metadata: {
      category: "Prints",
      weight: "0.25kg",
      dimensions: "146.7 x 71.5 x 7.4 mm"
    },
    currency: "USD",
    inventory: 9999,
    deliveryFee: "4.99"
  },
  // {
  //   id: 2,
  //   title: "Laptop Pro",
  //   header: "laptop-pro",
  //   price: 1299.99,
  //   reducedPrice: 1099.99,
  //   image: "https://picsum.photos/400/300?random=2",
  //   description: "Professional laptop for all your computing needs.",
  //   stripe_product_id: "prod_RSx8li4yXxwon6",
  //   stripe_price_id: "price_1Qa1EDK5FgbbJjRExB4r7Tbc",
  //   metadata: {
  //     category: "Electronics",
  //     weight: "1.4kg",
  //     dimensions: "304.1 x 212.4 x 15.6 mm"
  //   },
  //   currency: "USD",
  //   inventory: 25,
  //   deliveryFee: "0.00"
  // },
  // {
  //   id: 3,
  //   title: "Wireless Earbuds",
  //   header: "wireless-earbuds",
  //   price: 149.99,
  //   image: "https://picsum.photos/400/300?random=3",
  //   description: "Premium wireless earbuds with noise cancellation.",
  //   stripe_product_id: "prod_xyz125",
  //   stripe_price_id: "price_xyz125",
  //   metadata: {
  //     category: "Audio",
  //     weight: "5.4g per earbud",
  //     dimensions: "21.8 x 17.3 x 25.1 mm"
  //   },
  //   currency: "USD",
  //   inventory: 100,
  //   deliveryFee: "0.00"
  // },
  // {
  //   id: 4,
  //   title: "Smart Watch",
  //   header: "smart-watch",
  //   price: 249.99,
  //   reducedPrice: 199.99,
  //   image: "https://picsum.photos/400/300?random=4",
  //   description: "Track your fitness and stay connected with this smart watch.",
  //   stripe_product_id: "prod_xyz126",
  //   stripe_price_id: "price_xyz126",
  //   metadata: {
  //     category: "Wearables",
  //     weight: "36.5g",
  //     dimensions: "44 x 38 x 10.7 mm"
  //   },
  //   currency: "USD",
  //   inventory: 75,
  //   deliveryFee: "0.00"
  // },
  // {
  //   id: 5,
  //   title: "Gaming Console Pro",
  //   header: "gaming-console-pro",
  //   price: 499.99,
  //   reducedPrice: 449.99,
  //   image: "https://picsum.photos/400/300?random=5",
  //   description: "Next-gen gaming console with 4K graphics and ray tracing.",
  //   stripe_product_id: "prod_xyz127",
  //   stripe_price_id: "price_xyz127",
  //   metadata: {
  //     category: "Gaming",
  //     weight: "4.5kg",
  //     dimensions: "390 x 260 x 104 mm"
  //   },
  //   currency: "USD",
  //   inventory: 30,
  //   deliveryFee: "0.00"
  // },
  // {
  //   id: 6,
  //   title: "Professional Camera",
  //   header: "professional-camera",
  //   price: 899.99,
  //   reducedPrice: 799.99,
  //   image: "https://picsum.photos/400/300?random=6",
  //   description: "High-end mirrorless camera for professional photography.",
  //   stripe_product_id: "prod_xyz128",
  //   stripe_price_id: "price_xyz128",
  //   metadata: {
  //     category: "Photography",
  //     weight: "650g",
  //     dimensions: "134 x 101 x 67 mm"
  //   },
  //   currency: "USD",
  //   inventory: 15,
  //   deliveryFee: "0.00"
  // }
];