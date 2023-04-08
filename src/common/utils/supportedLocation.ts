import { supportedLocationVN } from '../constants/supportedLocation';

var supportedLocation = {};

export const getSupportedLocationTree = (country: string) => {
  if (!supportedLocation[country]) {
    supportedLocation[country] = supportedLocationVN?.map((level1) => ({
      title: level1?.name,
      value: `${level1?.alias} ${level1?.name}`,
      key: `${level1?.alias} ${level1?.name}`,
      children: level1.children.map((level2) => ({
        title: level2?.name,
        value: `${level1?.alias} ${level1?.name} ${level2?.alias} ${level2?.name}`,
        key: `${level1?.alias} ${level1?.name} ${level2?.alias} ${level2?.name}`,
        children: level2.children.map((level3) => ({
          title: level3?.name,
          value: `${level1?.alias} ${level1?.name} ${level2?.alias} ${level2?.name} ${level3.alias} ${level3.name}`,
          key: `${level1?.alias} ${level1?.name} ${level2?.alias} ${level2?.name} ${level3.alias} ${level3.name}`,
        })),
      })),
    }));
  }
  return supportedLocation[country];
};
