const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("constructor", () => {
        it("should place the pass parameters in their appropriate properties in the constructor", () => {
            //Arrange
            newManName = "Brad";
            newManId = "004"
            newManEmail = "Brad@aol.com"
            newManOfficeNumber = "3333333333"
            //Act
            const newManager = new Manager(newManName, newManId, newManEmail, newManOfficeNumber);
            //Assert
            expect(newManager.name).toBe(newManName);
            expect(newManager.id).toBe(newManId);
            expect(newManager.email).toBe(newManEmail);
            expect(newManager.officeNumber).toBe(newManOfficeNumber);

        });
    });
    describe("methods", () => {
        it("should return the officenumber when using getOfficeNumber", () => {
            //Arrange
            newManName = "Brad";
            newManId = "004"
            newManEmail = "Brad@aol.com"
            newManOfficeNumber = "3333333333"
            //Act
            const newManager = new Manager(newManName, newManId, newManEmail, newManOfficeNumber);
            //Assert
            expect(newManager.getOfficeNumber()).toBe(newManOfficeNumber);
        });
        it("should return the role as Manager when using getRole", () => {
            //Arrange & Act
            const newManager = new Manager('Brad', '4444444', 'Brad@aol.com', "3333333333");
            //Assert
            expect(newManager.getRole()).toBe("Manager");
        });
    });
});