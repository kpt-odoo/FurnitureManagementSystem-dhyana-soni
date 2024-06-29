'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  GiOpenChest,
  GiOfficeChair,
  GiKidSlide,
  GiSofa,
  GiBedLamp,
  GiBathtub
} from 'react-icons/gi';
import { MdOutdoorGrill, MdTableRestaurant } from 'react-icons/md';
import {
  BiChair,
} from 'react-icons/bi'
import { TbToolsKitchen2 } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Seating',
    icon: BiChair,
    description: 'Barbecue, Chairs & Sofas, Decoration, Food Booths, Lighting equipment, Tables, Tents, etc.',
  },
  {
    label: 'Tables',
    icon: MdTableRestaurant,
    description: 'Consoles, Games, Outdoor toys, Toys, Virtual Reality, etc.',
  },
  {
    label: 'Storage',
    icon: GiOpenChest,
    description: ' Photography Accesories, Cameras, Lens, Batteries, Case, etc.'
  },
  {
    label: 'Office',
    icon: GiOfficeChair,
    description: 'Music Accessories, Music Players, Musical Instruments, Sound Equipments, etc.'
  },
  {
    label: 'Outdoor',
    icon: MdOutdoorGrill,
    description: "Children's Clothing, Clothing Accessories(Sunglasses, Handbags, etc.), Men's Clothing, Women's Clothing, Costumes, Footware, etc."
  },
  {
    label: 'Kidsroom',
    icon: GiKidSlide,
    description: 'Cookware, Cutlery, Kitchen Appliances, Tableware, Refrigerators, Microwave and Ovens, etc.'
  },
  {
    label: 'Kitchen',
    icon: TbToolsKitchen2,
    description: 'Fictional / Non-fictionl Novels, Comics, Manga, etc.'
  },
  {
    label: 'Living room',
    icon: GiSofa,
    description: 'Bicycles, Scooters, Cars, Bikes, Skates, Skateboards, etc.'
  },
  {
    label: 'Accent',
    icon: GiBedLamp,
    description: 'Computers, Grooming appliances, Laptops, Storage Devices, Mouse, Keyboard, Phones, Cables and accessories, etc.'
  },
  {
    label: 'Bathroom',
    icon: GiBathtub,
    description: 'Gym Equipments, Massage chairs, Steamer, etc.'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;