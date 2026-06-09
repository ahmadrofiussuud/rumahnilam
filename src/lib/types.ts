export interface Ingredient {
  name: string;
  function: string;
}

export interface Benefit {
  text: string;
  icon: "leaf" | "droplet" | "shield" | "sparkles";
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Aromaterapi" | "Kosmetik" | "Sabun Mandi";
  description: string;
  price: number;
  imageUrl: string;
  images: string[];
  benefits: Benefit[];
  badge: "100% Alami" | "Ekstrak Nilam";
  ingredients: Ingredient[];
  usage: string[];
  provenance: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  faculty: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}
