import Greetings from './Greetings'
import {useState} from 'react'
import {render , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import fireEvent from '@testing-library/fire-event'


describe('Greetings component',()=>{
   test('renders hello world as text', ()=>{
	//arrange
   render(<Greetings/>) ;

   //act
   //nothing...


   //assert
  const helloWorldElement =  screen.getByText('hello world',{exact:false})

  expect(helloWorldElement).toBeInTheDocument()
   
})

  test('renders Good to see you if the button was NOT clicked',()=>{

   //arrange
   render(<Greetings/>) ;

     //act
   //nothing...


   //assert
  const outputElement = screen.getByText('its good to see',{exact:false})

  expect(outputElement).toBeInTheDocument()

        
  })



  test('renders changed if cicked the button',()=>{
       //arrange
       render(<Greetings/>)

       //act
        const buttonElement =  screen.getByRole('button')
        userEvent.click(buttonElement)


        //assert
      const outputElement = screen.getByText('changed!',{exact:false})
      expect(outputElement).toBeInTheDocument()


  })


    test(' does not renders good to see you if the button was not clicked ',()=>{
       //arrange
       render(<Greetings/>)

       //act
        const buttonElement =  screen.getByRole('button')
        userEvent.click(buttonElement)


        //assert
      const outputElement = screen.queryByText('its good to see',{exact:false})
      expect(outputElement).toBeNull()
      // expect(outputElement).not.toBeInTheDocument()


  })




})


