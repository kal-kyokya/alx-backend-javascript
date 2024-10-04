export default function loadBalancer(promise1, promise2) {
  return Promise.race([promise1, promise2])
    .then((value) => value);
}
