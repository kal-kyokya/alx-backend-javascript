export default function getListStudentIds(objArray) {
  if (typeof objArray !== 'object') return [];
  const idList = objArray.map((student) => student.id);

  return idList;
}
