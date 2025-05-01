import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';

//when ever test caes increase that time maintain difficult so make it describe in one that are similar 
//it and test are both same we can use it instead of test it(test)

describe('', () => {
    test("Should load contact us component", () => {

        render(<Contact />);
    
      const heading =  screen.getByRole("heading");
    
      expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside contact component", () => {
    
        render(<Contact />);
    
    //   const button =  screen.getByRole("button");
    const button = screen.getByText("Submit");
    
      expect(button).toBeInTheDocument();
    })
    
    
    test('should load 2 button input boxes on the contact component', () => {
    render(<Contact />)
        //querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(3);
    });
    
    
});

