export default function getListStudent(arrayObject) {
  if (!(arrayObject instanceof Array)) return [];
  const ids = arrayObject.map((obj) => obj.id);
  return ids;
}
