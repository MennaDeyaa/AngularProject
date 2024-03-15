export interface Iproduct {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  categoryID: number;
  description: string;
  material?: string;
  quantity: number;
  date?: Date;
}
