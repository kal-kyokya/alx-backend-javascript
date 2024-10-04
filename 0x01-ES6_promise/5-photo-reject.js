export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const photo = false;
    if (photo) {
      resolve();
    } else {
      reject(Error(`${filename} cannot be processed`));
    }
  });
}
