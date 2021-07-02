const fs = require(fs);

const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "project",
    },
    {
      type: "input",
      message: "Description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "choice",
      message: "Usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "________________?",
      name: "hobby",
    },
  ])

  .then((data) => {
    fs.writeFile(`${username}.html`, data, (err) =>
      err ? console.error(err) : console.log("Done!")
    );
  });
