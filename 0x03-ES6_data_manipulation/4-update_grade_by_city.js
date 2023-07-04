export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  const updatedList = studentList
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter(
          (grade) => grade.studentId === student.id,
        )
        .pop() || defaultGrade).grade,
    }
    ));

  return updatedList;
}
