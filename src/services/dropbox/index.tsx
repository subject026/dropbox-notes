import { DropboxAuth } from "dropbox";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const APP_URL = import.meta.env.VITE_APP_URL;

export const fetchDocs = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["doc 1", "doc 2", "doc 3"]);
    }, 500);
  });
};

export const getAuthenticationUrl = async (): Promise<string> => {
  const dbx = new DropboxAuth({ clientId: CLIENT_ID });
  const url = await dbx.getAuthenticationUrl(APP_URL);
  return url as string;
};
