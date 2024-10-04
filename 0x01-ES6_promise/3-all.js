import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
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
    })
    .catch(() => console.log('Signup system offline'));
}
