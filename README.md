

TEAM PROFILE GENERATOR
======================


# Overview

AS A manager, I WANT to generate a webpage that displays my team's basic info SO THAT I have quick access to their emails and GitHub profiles.



# Table of Contents

- [TEAM PROFILE GENERATOR](#team-profile-generator)
- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [HTML Output](#html-output)
- [Deployed](#deployed)
- [Tools](#tools)
- [Research](#research)
- [Challenges](#challenges)

# Description

To Dynamically and quickly create a team HTML page, Inquirer NPM was utilised to:

- Generate Command-line questions to the user
- The user input was gathered and added as information to employee templates to create HTML pages.

# Installation

1. Create a gitignore file and include node_modules and .DS store. this insures that the node_modules directory isn't tracked or uploaded to Github.
2. Use the command-line, npm install, to install Inquirer NPM.
3. Install jest to test documents.
4. To start answering questions to create the HTML file, use the command, node index.js

# Usage

- Inquirer NPM is used to prompt the user to provide information regarding their employee teams to create HTML pages. 
- fswriteFile is used to render the HTML
- Once the user's information regarding:
    - name, id, email, member's role, then the subsequent user role questions are served:
    - Manager - office number, Engineer - Github Username, Tester - speciality and Intern - school name.
- A HTML file with the user's responses regarding their team is created.

# Test

![test](https://user-images.githubusercontent.com/110278837/196606250-d69f45bf-0cd0-4894-a8ac-741307d64bd6.png)

# HTML Output

![Deployed HTML](https://user-images.githubusercontent.com/110278837/196609096-96127942-2725-44c3-a26d-8427f6f89399.png)

# Deployed

- *[Walkthrough Video link](https://drive.google.com/file/d/1c20Sh0arXSVvSQtaCCvb8n6ItW6j5kQF/view)*


# Tools

- Javascript
- Inquirer NPM
- .gitignore
- Git Bash
  
# Research

- Inquirer.js - NPM

# Challenges

Learnt a lot about automation of the input thought pushing the user input into a array and then calling it with ${...}.
getting the hang of the operators and classes. Testing is still a challenge as I am not fully fluent in the language, but i can see why it is an important skill to have so will practice testing out following projects.