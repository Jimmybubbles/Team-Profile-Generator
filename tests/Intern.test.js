const Intern = require("../lib/Intern");

test("set school via constructor", () => {
    const testValue = "monash";
    const e = new Intern("foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("james", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});

test("get school via getSchool()", () => {
    const testValue = "Monash";
    const e = new Intern("foo", 1, "test@test.com", testValue)
    expect(e.getSchool()).toBe(testValue)
});