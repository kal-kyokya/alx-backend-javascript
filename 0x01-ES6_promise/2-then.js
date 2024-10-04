export default function handleResponseFromAPI(promise) {
  const obj = {
    status: 200,
    body: 'success',
  };
  promise.then(() => {
    console.log('Got a response from the API');
    return obj;
  }).catch(Error());
}
