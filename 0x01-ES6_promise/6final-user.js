import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const profile = [];
  signUpUser(firstName, lastName)
    .then((value) => {
      profile.push({ status: 'fulfilled', value });
      return uploadPhoto(filename);
    })
    .catch((value) => profile.push({ status: 'rejected', value }));

  return profile;
}
