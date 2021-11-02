import React, { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategory }) => {

  const [inputState, setInputState] = useState("");
  
  const onChangeCategory = (e) => {
    console.log("E",e.target.value);
    const { target } = e;
    setInputState(target.value);
  };
  console.log('innnnnp',inputState);
  const addCategory = (e) => { 
    e.preventDefault();
    console.log("inputSTATE",inputState);
    if(inputState !== '' ){
      setCategory(inputState)
    }else{
      setInputState("");
    }
  };
  
return (
    <div>
      <p>{inputState}</p>
      <form onSubmit={addCategory}>

          <input
            type="text"
            id="category"
            name="category"
            placeholder="placeholder"
            onChange={onChangeCategory}
            value={inputState}
          />

        <input type="submit" name="addbutton" value="Add" />

      </form>
    </div>
  );
};

AddCategory.propTypes={
  setCategory: PropTypes.func.isRequired,
}