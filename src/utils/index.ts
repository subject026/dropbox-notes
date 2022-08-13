export const parseQueryString = (urlToken: string) => {
  const token = urlToken.split("access_token=")[1].split("&")[0];
  return token;
};
