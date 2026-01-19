export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
}

export interface Testimonial {
  id: string;
  age: string;
  occupation: string;
  comment: string;
  result: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
