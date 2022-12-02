import Async from './Async'
// import {useState} from 'react'
import {render , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'




describe('Async component',()=>{
 
 test('renders post if request succeeds',async()=>{
 	//arrange
    render(<Async/>)


 	//act/..nothin

 	//assert
    const listItems = await screen.findAllByRole('listitem')
    expect(listItems).not.toHaveLength(0);




 })



})