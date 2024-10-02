export default function createIteratorObject(report) {
  const iterator = [];
  const employees = Object.values(report.allEmployees);

  for (const value of employees) {
    iterator.push(...value);
  }

  return iterator;
}
