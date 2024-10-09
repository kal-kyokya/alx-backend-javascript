export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer, 0, length);
  const int8view = new Int8Array(length);
  int8view[position] = value;

  return (dataView);
}
