const octokit = require('@octokit/rest')()
const fs = require('fs');

octokit.authenticate({
    type: 'token',
    token: '3b366435a0ac5e52059f35c71f3b18431ea8bbed'
})

per_page = 100;
no_of_pages = 3;

async function get(s)
{
    fs.appendFileSync('./Data/UserData.csv',"username,followers,following,starred,orgs,repo_total,repo_name,repo_size,repo_stars\n");
    counter = 0;
    
    for(var k = 0; k < no_of_pages; k++)
    {
        const users = await octokit.users.list({since: (k*per_page), per_page}); 

        for(var i = 0; i < per_page; i++)
        {
            console.log("ew ",counter++);

            var username = users.data[i].login;
            const followers = await octokit.users.listFollowersForUser({username, per_page});
            const following = await octokit.users.listFollowingForUser({username, per_page});
            const starred = await octokit.activity.listReposStarredByUser({username, per_page});
            const orgs = await octokit.orgs.listForUser({username, per_page});
            const repos = await octokit.repos.listForUser({username, per_page});

            if(repos.data.length > 0)
            {
                fs.appendFileSync('./Data/UserData.csv',username+","+followers.data.length+","+following.data.length+","+
                    starred.data.length+","+orgs.data.length+","+repos.data.length+","+repos.data[0].name+","+repos.data[0].size+","+
                    repos.data[0].stargazers_count+","+repos.data[0].languages+"\n");
            }

            for(var j = 1; j < repos.data.length; j++)
            {
                fs.appendFileSync('./Data/UserData.csv',","+","+","+","+","+","+repos.data[j].name+","+repos.data[j].size+","+
                repos.data[j].stargazers_count+","+"\n");
            }
        }
    }
}

get(0);