export default function getStudentsByLocation(getListStudents, city) {
  const studentsByLocation = getListStudents.filter(
    (student) => student.location === city,
  );
  return studentsByLocation;
}
