const cohort = {
  name: 'May 2023',
  id: 1234,
  students: ["Joe", "Yevhan", "Sean"]
};

const printCohort = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`)
};

printCohort(cohort)