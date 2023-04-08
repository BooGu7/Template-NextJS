import { store } from '@/stores';

export const getDeliveryServiceName = (value: string) => {
  const constants = store.getState().app.constants;

  return constants?.delivery_services?.find((pkg) => pkg.value === value)?.name;
};

export const getCourierName = (value: string) => {
  const constants = store.getState().app.constants;

  return constants?.couriers?.find((pkg) => pkg.value === value)?.name;
};
