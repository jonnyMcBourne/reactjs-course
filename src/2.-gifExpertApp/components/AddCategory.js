import React, { useState } from "react";

export const AddCategory = ({ setCategory }) => {

  const [inputState, setInputState] = useState("");

  const onChangeCategory = (e) => {
    const { target } = e;
    setInputState(target.value);
  };

  const addCategory = (e) => {
    e.preventDefault();
    setCategory(inputState)
    setInputState("");
  };
  
return (
    <div>
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
