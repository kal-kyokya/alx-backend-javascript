import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
const response = handleResponseFromAPI(promise);
setTimeout(() => {
  console.log(response);
}, 5000);
