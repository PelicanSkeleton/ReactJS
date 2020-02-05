import React from "react";

const name = "Scott";
const thoughts = "is too good to be true.";

const stripVowels = no =>{
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for(let i = 0; i < no.length; i++){
    if(!vowels.includes(no[i].toLowerCase())) {
      result += no[i];
    }
  }
  return result;
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>My name without any vowels is: {stripVowels(name)}</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
