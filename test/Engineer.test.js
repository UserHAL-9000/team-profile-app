const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("constructor", () => {
        it("should place the pass parameters in their appropriate properties in the constructor", () => {
            //Arrange
            newEngName = "Matt";
            newEngId = "002"
            newEngEmail = "Matty@aol.com"
            newEngGithub = "M-1000"
            //Act
            const newEng = new Engineer(newEngName, newEngId, newEngEmail, newEngGithub);
            //Assert
            expect(newEng.name).toBe(newEngName);
            expect(newEng.id).toBe(newEngId);
            expect(newEng.email).toBe(newEngEmail);
            expect(newEng.github).toBe(newEngGithub);
        });
    });
    describe("methods", () => {
        it("should return the github username when using getGithub", () => {
            //Arrange
            newEngName = "Alex";
            newEngId = "001"
            newEngEmail = "Alex@aol.com"
            newEngGithub = "A-1000"
            //Act
            const newEng = new Engineer(newEngName, newEngId, newEngEmail, newEngGithub);
            //Assert
            expect(newEng.getGithub()).toBe(newEngGithub);
        });
        it("should return the role as Engineer when using getRole", () => {
            //Arrange & Act
            const newEng = new Engineer('Alex', '001', 'Alex@aol.com', "A-1000");
            //Assert
            expect(newEng.getRole()).toBe("Engineer");
        });
    });
})