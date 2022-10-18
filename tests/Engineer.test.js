const Engineer = require("../lib/Engineer");

test("set Github account via constructor", () => {
    const name = "james"
    expect(typeof(e)).toBe('object')
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("james", 1, "test@test.com", "name" )
    expect(e.getRole()).toBe(testValue)
});

test("get GitHub username via getGithub()", () => {
    const testValue = "name";
    const e = new Engineer("Foo", 2, "test@test.com", testValue)
    expect(e.getRole()).toBe(testValue)
});