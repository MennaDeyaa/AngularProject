const productlist = [
  {
    id: 1,
    name: 'bag',
    price: 200,
    date: new Date(),

    imgURL: 'https://picsum.photos/200/300',
    categoryID: 1,
    description: 'Another example text for shoe',
    material: 'anything',
    quantity: 2,
  },
  {
    id: 2,
    name: 'shoes',
    price: 150,
    date: new Date(2023 / 10 / 10),

    imgURL: 'https://picsum.photos/200/300',
    categoryID: 1,
    description: 'Another example text for shoes',
    material: 'leather',
    quantity: 1,
  },

  {
    id: 3,
    name: 'hat',
    price: 30,
    date: new Date(2023 / 5 / 5),
    imgURL: 'https://picsum.photos/200/300',
    categoryID: 2,
    description: 'Description for the hat',
    material: 'cotton',
    quantity: 3,
  },

  {
    id: 4,
    name: 'laptop',
    price: 1200,
    date: new Date(2001 / 1 / 1),
    imgURL: 'https://picsum.photos/200/300',
    categoryID: 3,
    description: 'Laptop description',
    material: 'metal',
    quantity: 5,
  },
];

export default productlist;
