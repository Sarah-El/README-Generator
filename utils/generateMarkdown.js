// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [Licence] (#licence)
  * [Contributing] (#contributing)
  * [Tests] (#testing)
  * [Questions] (#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions
  For questions about this application please reach out to me using one of the following methods:

  GitHub: ${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
