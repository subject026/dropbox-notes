import { Dropbox } from "dropbox";

let instance: undefined | Dropbox;

const DBX = {
  getInstance() {
    if (!instance) instance = new Dropbox({ accessToken: "" });
    return instance;
  },
};

export default DBX;
