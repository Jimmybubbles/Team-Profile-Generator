const Employee = require("../lib/Employee")

test("can create Employee init", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object')
});

test("Can set name through constructor arguments", () => {
    const name = "james";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("set id via constructor argument", () => {
    const testvalue = 10
    const e = new Employee("foo", testvalue)
    expect(e.id).toBe(testvalue)
});

test("set email through constructor argument", () => {
    const testValue = "test@test.com"
    const e = new Employee('foo', 1, testValue)
    expect(e.email).toBe(testValue)
});

test("get name via getName()", () => {
    const testValue = "james";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("get id via getId()", () => {
    const testValue = 10;
    const e = new Employee("foo", testValue);
    expect(e.getId()).toBe(testValue);

});

test("get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);

});

