/*
 * Complete the TODO items below
 */
const users = [
    {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
    },
    {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
    },
    {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
    },
    {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
    },
    {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
    },
    {
    name: 'nathaniel',
    email:'nathaniel.siddall@gmail.com',
    languages: ['html', 'css', 'js', 'php']
    }
];

// DONE: fill in your name and email and add some programming languages you know
// to the languages array
// DONE: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'your_name_here';
const email = '';
const languages = [];

 email = "this isnt going to go very well";

// Done: rewrite the object literal using object property shorthand
users.push({
  name,
    email,
    languages
});

// Done: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// DONE: rewrite the following using arrow functions
users.forEach(const user = emails => {
  return emails.push(user.email);
});
users.forEach( user =>  {
  return names.push(user.name);
});

// DONE: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // DONE: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;

  const peopleData = ({name, email, language}) =>
        console.log(name);
        console.log(email);
        console.log(language);


  // DONE: rewrite the assignment below to use template strings
  developers.push(`${name}, \'s email is'${ email, name}, knows ${languages.join}, ,`);

});

// DONE: Use `let` for the following variable
let list = '<ul>';

// DONE: rewrite the following loop to use a for..of loop
    for (name of developers){

    }

  // DONE: rewrite the assignment below to use template strings
list += `<li> ${developer}</li>`;
list += '</ul>';
});




