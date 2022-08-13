export const fetchDocs = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["doc 1", "doc 2", "doc 3"]);
    }, 500);
  });
};
