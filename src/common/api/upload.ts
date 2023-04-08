import { AppTypes } from '@/types';
import { getThumbnailURL } from '@/common/utils/media';
import Axios from 'axios';
import api from '.';

type IResource = 'users' | 'signature';

export async function uploadFiles(files: AppTypes.IFile[], resource: IResource) {
  const validFiles = files?.filter((file) => !file?.path?.startsWith('http'));
  const attachments: AppTypes.IAttachment[] = files?.filter((file) => file?.path?.startsWith('http'));

  let calls: Promise<AppTypes.IAttachment>[] = [];

  if (validFiles?.length) {
    const results = await api.getS3Signatures<AppTypes.IRecords<any>>({
      records: validFiles.map((file) => ({
        content_type: file.type,
        resource,
      })),
    });

    calls = results.data?.records?.map(async (item, index) => {
      const file = validFiles[index];
      const formData = new FormData();
      const { url, key, ...other } = item;
      Object.keys(other).forEach((k) => formData.append(k, other[k]));
      formData.append('key', key);
      formData.append('file', file as File);
      const data = await uploadS3File(url, formData);

      const attachment: AppTypes.IAttachment = {
        // @ts-ignore
        file_url: data.data.imageURL,
        file_key: key,
        content_type: file?.type,
        thumbnail_url: getThumbnailURL(key),
      };
      return attachment;
    });
  }

  const data = await Promise.all(calls);

  data.push(...attachments);

  return data as AppTypes.IAttachment[];
}

export async function uploadS3File(url: string, formData: FormData) {
  return new Promise((resolve, reject) => {
    Axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        const key = formData.get('key');
        resolve({
          success: true,
          message: 'Upload success',
          statusCode: status,
          data: {
            imageURL: `${process.env.STORAGE_CDN_URL}/${key}`,
          },
        });
      })
      .catch((error) => {
        reject({
          success: false,
          statusCode: 400,
          message: error?.message,
        });
      });
  });
}
