import { DropboxAuth } from "dropbox";

const CLIENT_ID = "dvj8xsz6d44yqfh";
const APP_URL = "http://localhost:3000";

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
