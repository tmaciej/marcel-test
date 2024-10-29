export const defaultFetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((response) => response.json());
