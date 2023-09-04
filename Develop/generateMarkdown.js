// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
     return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else  {return ''}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `${renderLicenseBadge(license)}`

  } else  {return ''}
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
 
  return `# ${data.title} 
  # ${renderLicenseSection(data.license)}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt-text](<${data.screenshot}>)
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Languages & Dependencies
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}`;
  
}


