const Employee = require("../lib/Employee")

test("can create Employee init", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object')
})

test("Can set name through constructor arguments", () => {
    const name = "james"
    const e = new Employee(name);
    expect(typeof(e)).toBe("name");
});

test("can set id via constructor argument", () => {

});

test("set email through constructor argument", () => {
    
});

test("get name via getName()", () => {

});

test("get id via getID()", () => {

});

test("get email via getEmail()", () => {

});

test("getRole() should return \"Employee\"", () => {

});