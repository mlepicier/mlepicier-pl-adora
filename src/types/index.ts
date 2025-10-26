export interface Playbook {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  color: string;
  icon: string;
  benefits: string[];
  gpts: GPT[];
  category: string;
}

export interface GPT {
  name: string;
  description: string;
}

export interface Bundle {
  id: string;
  title: string;
  playbooks: string[]; // array of playbook IDs
  price: number;
  discount: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
