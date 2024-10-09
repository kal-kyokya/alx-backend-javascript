export default function getListStudentIds(objArray) {
  if (!(objArray instanceof Array)) return [];
  const idList = objArray.map((student) => student.id);

  return idList;
}
