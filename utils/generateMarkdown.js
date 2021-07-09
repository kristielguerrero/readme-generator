// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  this.badge = badge;
  if (this.badge === true) {
    console.log(renderLicenseBadge);
  }
  if (this.badge === false) {
    console.log("");
  }
}
// if statements for each option
//
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# DESCRIPTION 
${data.description}

# TABLE OF CONTENTS

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)



# INSTALLATION
${data.installation}

# USAGE 
${data.usage}

# LICENSE
${renderLicenseBadge(data.license)}

# CONTRIBUTING
${data.contribution}

# TESTS
${data.test}

# QUESTIONS
${data.username}
${data.email}


`;
}

module.exports = generateMarkdown;
