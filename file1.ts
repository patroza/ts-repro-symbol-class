export const s = Symbol()

export function makeClass() {
  return class {
    [s]() {
      return true
    }
  }
}

// fine
export class Test1 extends makeClass() { }
