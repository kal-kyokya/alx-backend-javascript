import HolbertonCourse from './2-hbtn_course';

const course1 = new HolbertonCourse('Dem', 25, ['Dj Dem', 'Dem La Boom']);
console.log(course1);

try {
  const course2 = new HolbertonCourse('Dem', '25', ['Dj Dem', 'Dem La Boom']);
  console.log(course2);
} catch (error) {
  console.log(error);
}
