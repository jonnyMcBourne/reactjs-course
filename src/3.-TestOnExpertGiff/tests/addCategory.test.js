import React from 'react';
import { shallow } from 'enzyme';
import {AddCategory} from '../../2.-gifExpertApp/components/AddCategory';
import {GiffApp} from '../../2.-gifExpertApp/components/GiffApp';


describe('TEST ON COMPONENT ADDCATEGORY',()=>{
    //Global Variables
        const wrapperglobal = shallow(<GiffApp/>);
        
        const setCategory = jest.fn()
        let wrapperCategory = shallow(<AddCategory setCategory={setCategory}/>)
        
        const changeInput=()=>{
            //arrange
            const input=wrapperCategory.find('input').at(0)
            const value ='hello world';
                //act
            input.simulate('change',{target:{value:value}});
        }

        beforeEach(()=>{
            //jest.clearAllMocks();
            wrapperCategory = shallow(<AddCategory setCategory={setCategory}/>)
        })

    test('test on main component renders properly',()=>{
        expect(wrapperglobal).toMatchSnapshot();
    });
    
    test('text input shoould change',()=>{
            //arrange
        const input=wrapperCategory.find('input').at(0);
        const value ='hello world';
            //act
        input.simulate('change',{target:{value:value}});
            //assert
        expect(wrapperCategory.find('p').text().trim() ).toBe(value)
    });


    test('shouldnt submit',()=>{
        //arrange
        const form=wrapperCategory.find('form');
        //act
        form.simulate('submit', { preventDefault(){}  });
        //assert
        expect(setCategory).not.toHaveBeenCalled();
    });

    test('should submit',()=>{
        //arrange
        const input=wrapperCategory.find('input').at(0);
        const value ='hello world';
        const form=wrapperCategory.find('form');
        //act
        input.simulate('change',{target:{value:value}});
        form.simulate('submit', { preventDefault(){}  });
        //assert
        expect(setCategory).toHaveBeenCalled();
    });



    
    
});