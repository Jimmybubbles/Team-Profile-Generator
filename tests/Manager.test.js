const Manager = require("../lib/Manager");


test("set office number via constructor argument", () => {
    const e = new Manager();
    expect(typeof(e)).toBe('object')
});

test("getRole() should return \"Manager\"", () => {
    const name = "james"
    const e = new Manager("james", 1, "test@test.com", 42)
});

test("can get office number via getOfficeNumber()", () => {
    const testValue = 2
    const e = new Manager("foo",1 ,"test@test.com", testValue)
    expect(e.getOfficeNumber()).toBe(testValue)
});