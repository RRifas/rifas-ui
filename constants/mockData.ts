import { Raffle } from "../types/raffle";

export const mockRaffles: Record<string, Raffle> = {
  "1": {
    id: "1",
    title: "Roller Skates",
    product: "Patines Nuevos",
    description: "Patines de la marca X",
    url: "https://i.blogs.es/e9caa0/91bmqf0jbnl._ac_sx569_/450_1000.webp",
    price: 100,
  },
  "2": {
    id: "2",
    title: "TV",
    product: "Samsung TV",
    description: "Samsung TV de tantas pulgadas",
    url: "https://images.philips.com/is/image/PhilipsConsumer/55PUT7906_75-IMS-en_NZ?$jpglarge$&wid=960",
    price: 800,
  },
  "3": {
    id: "3",
    title: "Pixel 6",
    product: "Pixel 6",
    description: "Pixel 6 como nuevo",
    url: "https://mobilecity-live.s3.ap-southeast-2.amazonaws.com/wp-content/uploads/2022/03/07185306/716n8eAiaL._AC_SL1500_.jpg",
    price: 400,
  },
  "4": {
    id: "4",
    title: "Guitarra",
    product: "Yahama FG800",
    description: "Solid Top Acoustic Guitar, Matt Natural",
    url: "https://www.musicworks.co.nz/greentree/images/FG800MNT_LGE.jpg",
    price: 595,
  },
};
