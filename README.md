# Software Engineering 2018: Final Project
## GitHub API Data Visualisation

### What Makes You Popular?
My visualisation tries to use the GitHub API information to try to see if there is any 
correlation between being a popular user (how many followers) and 
###
 1. How many Repositories you have
 2. The Average Size of your Repositories
 3. The Average Popularity of your Repositories
To see if any of these attributes of a user can make or break their popularity on GitHub.

This project uses [the octokit library](https://github.com/octokit/rest.js) through Node js to 
extract data from the GitHub API. Then with both Node js again, a server is 
created at [localHost:3004](http://localhost:3004/website.html). 
Then with Node js within a HTML file, the visualisation is created with the help of [D3.js library](https://d3js.org/).

### Process
I began my project with this [repository](https://bitbucket.org/jordanbent/cs3012-final-project/src). I first got data from the GitHib API here. But when I began the larger project I began a new repository. 

### Installation
```
$ npm install d3
```
D3 provide. the visualisation.
```
$ npm install @octokit/rest
```
Octokit gets the data from the API.
``` 
$ npm install node js
```
Need Node Js to run program. Once setup run - ```node front.js```

### Screenshots
#### Average Number of Stargazers
This is the tab and graph for the average number of stargazers versus total number of followers.
![alt text](/Screenshots/1.png )

#### Average Size
This is the tab and graph for the average size of a users repositories versus their total number of followers.
![alt text](/Screenshots/siz1.png )
![alt text](/Screenshots/siz2.png )

#### Number of Repositories
This is the tab and graph for the number of repositories a user has versus their total number of followers.
![alt text](/Screenshots/total1.png )
![alt text](/Screenshots/total2.png )


