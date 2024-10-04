import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    let str = '';
    uploadPhoto()
      .then((photo) => {
        str += `${photo.body} `;
        return createUser();
      })
      .then((profile) => {
        str += `${profile.firstName} `;
        str += profile.lastName;

        console.log(str);
        resolve(str);
      })
      .catch(() => {
        console.log('Signup system offline');
        reject(Error());
      });
  });
}
