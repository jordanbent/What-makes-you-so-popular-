# Software Engineering 2018: Final Project
## GitHub API Data Visualisation

### What Makes You Popular?
My visualtsation tries to use the GitHub API indormation to try to see if there is any 
correlation between being a popular user (how many followers) and 
    1. How many Repositries you have
    2. The Average Size of your Repositries
    3. The Average Popularity of your Repositries
To see if any of these attributes of a user can make or break their popularity on GitHub.

This project uses [the octokit library](https://github.com/octokit/rest.js) through Node js to 
extract data from the GitHub API. Then with both Node js again, a server is 
created at [localHost:3004](http://localhost:3004/website.html). 
Then with Node js within a HTML file, the visualisation is created with the help of [D3.js library](https://d3js.org/).