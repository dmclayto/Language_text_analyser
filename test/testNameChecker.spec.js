import { textAlert } from "../src/client/js/nameChecker"


describe("Testing the name functionality", () => {
    // The test() function has two arguments - a name description, and an actual test as a callback function.  
    test("Testing the checkForName() function", () => {
      // tests if there is text in the writing input box
       const textInput = 'abc';
       const noInput = '';
       expect(textInput).toBeTruthy();
       expect(noInput).not.toBeTruthy();
       console.log (textAlert);

})});



