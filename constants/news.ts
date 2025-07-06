interface NewsFields {
  id: number;
  title: string;
  image: string;
  summary?: string;
  details?: string[];
  category?: string;
  featured?: boolean;
}

export type { NewsFields };
