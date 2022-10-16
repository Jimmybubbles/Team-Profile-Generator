const Employee = require("../lib/Employee")

test("can create Employee init", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object')
})
