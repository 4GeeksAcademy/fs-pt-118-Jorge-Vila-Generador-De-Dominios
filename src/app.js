import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  // Here I create the name, adjective, and noun for the domain we want to create
  let pronoun = ['the', 'our', "your"];
  let adj = ['great', 'big',"small"];
  let noun = ['jogger', 'racoon',"eggle"];
  //// Here I create an array to, you know, push all the domain names into it.
  let domain = [];

  // This is the unbelievable for loop where the magic happens and combines all the
  //  pronouns, adjectives, and nouns. Cool, right?
  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        //here introduce one by one to the domain array each domain created,
        //  example: https//www.thegreatjogger.com
        domain.push(`https//www.${i}${j}${k}.com`);
      }
    }
  }

  //when all the domain names are saved into the array , we can can do a foreach loop
  //to show all the domain names saved 
  domain.forEach((indice) => {
    console.log(indice);
  });

};
