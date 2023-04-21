export type Raffle = {
  id: string;
  name: string;
  description: string;
  goal: number;
  price: number;
  tickets_sold: number;
  imagen?: string;
  url?: string;
};
