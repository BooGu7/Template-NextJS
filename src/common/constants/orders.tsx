import Icon from '@/components/Icon';
import { AppTypes } from '@/types';

export enum COD_PAY_TYPE {
  BUYER_PAY = 1,
  SHOP_PAY = 2,
}

export const packageDataType: AppTypes.PackageDataType = {
  Handbag: {
    icon: <Icon.HandBag />,
    title: 'Handbag',
    description: '2 - 5kg',
    weight: 3,
    width: 15,
    length: 38,
    height: 20,
  },
  Satchel: {
    icon: <Icon.Satchel />,
    title: 'Satchel',
    description: '0 - 2kg',
    weight: 1,
    width: 5,
    length: 21,
    height: 30,
  },
  Shoebox: {
    icon: <Icon.ShoeBox />,
    title: 'Shoebox',
    description: '5 - 10kg',
    weight: 7.5,
    width: 26,
    length: 36,
    height: 13,
  },
  MediumBox: {
    icon: <Icon.Mediumbox />,
    title: 'Mediumbox',
    description: '10 - 20kg',
    weight: 15,
    width: 15,
    length: 38,
    height: 20,
  },
  LargeBox: {
    icon: <Icon.Largebox />,
    title: 'Largebox',
    description: '20 - 30kg',
    weight: 25,
    width: 20,
    length: 55,
    height: 35,
  },
  Bulky: {
    icon: <Icon.Bulky />,
    title: 'Bulky',
    description: '30+ kg',
    weight: 35,
    width: 20,
    length: 60,
    height: 40,
  },
};
