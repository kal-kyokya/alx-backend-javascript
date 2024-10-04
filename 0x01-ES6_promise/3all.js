import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve) => {
    let str = '';
    uploadPhoto()
      .then((photo) => {
        str += `${photo.body} `;
        return createUse();
      })
      .then((profile) => {
        str += `${profile.firstName} `;
        str += profile.lastName;

        console.log(str);
        resolve(str);
      })
      .catch(() => {
        console.log('Signup system offline');
      });
  });
}
