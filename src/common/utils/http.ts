import { message } from 'antd';

export const responseSuccessHandle = (data: any, text: string, onSuccess?: () => void) => {
  if (
    (data?.payload?.message || data?.payload?.detail) &&
    data?.payload?.message !== 'OK' &&
    data?.payload?.statusCode !== 200
  ) {
    let text: string = '';

    if (data?.payload?.errorCode) {
      text += data?.payload?.errorCode + ' - ';
    }

    if (data?.payload?.detail) {
      text += data?.payload?.detail + ' ';
    }

    if (data?.payload?.message) {
      text += data?.payload?.message + ' ';
    }

    message.error(text);
  } else {
    message.success(text);
    onSuccess?.();
  }
};

export const responseErrorHandle = (text: any) => {
  if (typeof text === 'string') {
    return message.error(text);
  }
  return message.error(text?.message);
};
