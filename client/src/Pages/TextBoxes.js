import React from 'react';




const TextBoxes = () => {
  return (
    <div>
    <form id="query for quote" >
  <label>
    Query:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

<div id="quotes" className="m1">
    <p>Lorem Ipsum my friends</p>
    <p>My Kingdom for an AI!</p>
    <p>Sam Altman's Ghost lives on!</p>
    </div>
 </div>
  );
}

export default TextBoxes;