/** Global normalized pointer (-1..1) for site-wide 3D parallax */
export const globalPointer = { x: 0, y: 0 };

export function setGlobalPointer(x: number, y: number) {
  globalPointer.x = x;
  globalPointer.y = y;
}
