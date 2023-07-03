export default function getStudentIdsSum(getListStudents) {
  const studentList = getListStudents.reduce(
    (acc, students) => acc + students.id, 0
  );
  return studentList;
}
