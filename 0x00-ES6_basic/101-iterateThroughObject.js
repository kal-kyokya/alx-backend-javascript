export default function iterateThroughObject(report) {
  let str = '';
  let count = 0;
  const len = report.length;

  for (const employee of report) {
    count += 1;
    str += `${employee}`;
    if (count < len) {
      str += ' | ';
    }
  }

  return str;
}
