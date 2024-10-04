import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise(() => {
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
      })
      .catch(() => {
        console.log('Signup system offline');
      });
  });
}
