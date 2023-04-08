import { SorterResult } from 'antd/lib/table/interface';

export const getSortValue = (defaultValue: string): { [x: string]: string } => {
  const obj = {};

  defaultValue?.split?.(',')?.map((el) => {
    const sl = el?.split?.(':');
    obj[sl?.[0]] = sl?.[1];
  });

  return obj;
};

export const parseSort = (sorter: SorterResult<any>, defaultValue: string): string => {
  const obj = getSortValue(defaultValue);

  if (obj[sorter.field as string]) {
    obj[sorter.field as string] = sorter.order === 'ascend' ? 'asc' : 'desc';
  }

  return Object.keys(obj)
    .map((key) => key + ':' + obj[key])
    .join(',');
};
