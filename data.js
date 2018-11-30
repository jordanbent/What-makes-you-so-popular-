const octokit = require('@octokit/rest')()
const fs = require('fs');

octokit.authenticate({
    type: 'token',
    token: '3b366435a0ac5e52059f35c71f3b18431ea8bbed'
})

per_page = 100;
no_of_pages = 5;

async function get(s)
{
    fs.appendFileSync('./FollowersData.csv',"username,total\n");
    fs.appendFileSync('./FollowingData.csv',"username,total\n");
    fs.appendFileSync('./StarredData.csv',"username,total\n");
    fs.appendFileSync('./OrgsData.csv',"username,total\n");
    fs.appendFileSync('./ReposData.csv',"username,total,reponame,size,stargazers,language\n");

    for(var k = 0; k < no_of_pages; k++)
    {
        const users = await octokit.users.list({since: (k*per_page), per_page}); 

        for(var i = 0; i < per_page; i++)
        {
            var username = users.data[i].login;
            const followers = await octokit.users.listFollowersForUser({username, per_page});
            fs.appendFileSync('./FollowersData.csv',username+","+followers.data.length+"\n");

            const following = await octokit.users.listFollowingForUser({username, per_page});
            fs.appendFileSync('./FollowingData.csv',username+","+following.data.length+"\n");

            const starred = await octokit.activity.listReposStarredByUser({username, per_page});
            fs.appendFileSync('./StarredData.csv',username+","+starred.data.length+"\n");

            const orgs = await octokit.orgs.listForUser({username, per_page});
            fs.appendFileSync('./OrgsData.csv',username+","+orgs.data.length+"\n");

            const repos = await octokit.repos.listForUser({username, per_page});
            for(var j = 0; j < repos.data.length; j++)
            {
                fs.appendFileSync('./ReposData.csv',username+","+repos.data.length+","+repos.data[j].name+","+repos.data[j].size+","+
                repos.data[j].stargazers_count+","+repos.data[j].languages+"\n");
            }
        }
    }
}

get(0);