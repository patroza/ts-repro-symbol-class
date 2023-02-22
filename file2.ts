import { makeClass, Test1 } from "./file1"

// fine
export class Test3 extends Test1 { }

// bad
// 'extends' clause of exported class 'Test2' has or is using private name 's'
export class Test2 extends makeClass() {
}
