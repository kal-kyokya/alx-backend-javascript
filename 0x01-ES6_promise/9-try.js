export default function guardrail(mathFunction) {
  const result = [];
  try {
    result.push(mathFunction());
  } catch (error) {
    result.push(error.message);
  }
  result.push('Guardrail was processed');

  return result;
}
