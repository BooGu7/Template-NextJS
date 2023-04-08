import Icon from '@/components/Icon';
import { AppTypes } from '@/types';
import { ROUTE } from './route';

const Center = ({ children }) => {
  return (
    <span className="ant-menu-item-icon" style={{ width: '24px', height: '24px' }}>
      {children}
    </span>
  );
};

export const menus: AppTypes.IMenu[] = [
  {
    label: 'Bảng điều khiển',
    icon: (
      <Center>
        <Icon.SpaceDashboard />
      </Center>
    ),
    iconActive: (
      <Center>
        <Icon.SpaceDashboardActive />
      </Center>
    ),
    children: [
      {
        id: '1',
        label: 'Tổng quan',
        href: ROUTE.OVERVIEW,
      },
      { id: '2', label: 'Thống kê', href: ROUTE.STATISTICS },
    ],
    href: ROUTE.DASHBOARD,
  },
  {
    label: 'Vận đơn',
    icon: (
      <Center>
        <Icon.LocalShipping />
      </Center>
    ),
    iconActive: (
      <Center>
        <Icon.LocalShippingActive />
      </Center>
    ),
    href: ROUTE.SHIPPING,
  },
  {
    label: 'Trả hàng',
    icon: (
      <Center>
        <Icon.ReturnGoods />
      </Center>
    ),
    iconActive: (
      <Center>
        <Icon.ReturnGoodsActive />
      </Center>
    ),
    href: ROUTE.LOCATION,
  },
  {
    label: 'Khách hàng',
    icon: (
      <Center>
        <Icon.Customer />
      </Center>
    ),
    iconActive: (
      <Center>
        <Icon.CustomerActive />
      </Center>
    ),
    href: ROUTE.SETTING,
  },
  {
    label: 'Tiền thu hộ',
    icon: (
      <Center>
        <Icon.RequestQuote />
      </Center>
    ),
    iconActive: (
      <Center>
        <Icon.RequestQuoteActive />
      </Center>
    ),
    href: ROUTE.FACILITY_PROFILE,
  },
  {
    label: 'Giao dịch',
    icon: (
      <Center>
        <Icon.ReceiptLong />
      </Center>
    ),
    iconActive: (
      <Center>
        <Icon.ReceiptLongActive />
      </Center>
    ),
    href: ROUTE.UN_AUTHENTICATED,
  },
  {
    label: 'Chat hỗ trợ',
    icon: (
      <Center>
        <Icon.Chat />
      </Center>
    ),
    iconActive: (
      <Center>
        <Icon.ChatActive />
      </Center>
    ),
    href: ROUTE.BRANCH_PROFILE,
  },
];
