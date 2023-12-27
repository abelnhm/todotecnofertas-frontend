export const makeImageURL = (publicID: string, height: number) => {
  const urlBase =
    'https://res.cloudinary.com/dm53t8asy/image/upload/v1702496437/image-offers';
  const url = `${urlBase}/h_${height}/${publicID}`;
  return url;
};
