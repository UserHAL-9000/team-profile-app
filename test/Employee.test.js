const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("constructor", () => {
        it("should match properties correctly in constructor when parameters are passed through", () => {
            //Arrange
            const newGuyName = "Jonathan"
            const newGuyId = "0001";
            const newGuyEmail = "Jonathan@aol.com"
            //Act
            const employee = new Employee(newGuyName, newGuyId, newGuyEmail);
            //Assert
            expect(employee.name).toBe(newGuyName);
            expect(employee.id).toBe(newGuyId);
            expect(employee.email).toBe(newGuyEmail);
        });
    });
    describe("methods", () => {
        it("should return the role as 'Employee' when using getRole", () => {
            //Arrange & Act
            const employee = new Employee('Jrob', '7777777', 'jon@aol.com');
            //Assert
            expect(employee.getRole()).toBe("Employee");
        });
        it("should return employee name when using getName", () => {
            //Arrange
            const newGuyName = "Jonathan"
            //Act
            const employee = new Employee(newGuyName);
            //Assert
            expect(employee.getName()).toBe(newGuyName);
        });
        it("should return employee ID when using getId", () => {
            //Arrange
            const newGuyName = "Jonathan"
            const newGuyId = "0001";
            //Act
            const employee = new Employee(newGuyName, newGuyId);
            //Assert
            expect(employee.getId()).toBe(newGuyId);
        });
        it("should return employee email when using getEmail", () => {
            //Arrange
            const newGuyName = "Jonathan"
            const newGuyId = "0001";
            const newGuyEmail = "Jonathan@aol.com"
            //Act
            const employee = new Employee(newGuyName, newGuyId, newGuyEmail);
            //Assert
            expect(employee.getEmail()).toBe(newGuyEmail);
        });

    })

})