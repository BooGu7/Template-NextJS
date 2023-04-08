type ThumbnailSize = '64w' | '480w';

export function getExtension(filename: string) {
  return filename.split('.').pop();
}

export const getThumbnailURL = (fileKey: string, size: ThumbnailSize = '480w') => {
  const parts = fileKey?.split('/');

  const fileName = parts.pop() ?? '';
  const ext = getExtension(fileName);
  if (ext === 'mov' || ext === 'mp4') {
    const url = process.env.MEDIA_CDN_URL + '/' + parts.join('/') + '/' + fileName;
    return url.replace(ext, 'png');
  }

  parts.push(size);
  parts.push(fileName);

  return process.env.MEDIA_CDN_URL + '/' + parts.join('/');
};
