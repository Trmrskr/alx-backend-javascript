export default function getResponseFromAPI() {
  const promise = new Promise((resolve) => {
    resolve('This is a promise');
  });
  return promise;
}
