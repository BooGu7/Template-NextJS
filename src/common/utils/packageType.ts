import { store } from '@/stores';

var memoPackageType = {};

export const getPackageName = (value: string) => {
  const constants = store.getState().app.constants;

  if (!memoPackageType[value]) {
    memoPackageType[value] = constants.package_types.find((pkg) => pkg.value === value)?.name;
  }

  return memoPackageType[value];
};
