const octokit = require('@octokit/rest')()
const fs = require('fs');

octokit.authenticate({
    type: 'token',
    token: '3b366435a0ac5e52059f35c71f3b18431ea8bbed'
})


per_page = 10;
var count = 0 ;
var bio = 0;

function get(s)
{   
    fs.appendFileSync('./UserData.csv',"followers,following,starred,orgs,repos\n");
    fs.appendFileSync('./FollowersData.csv',"number of, ")
    for(var no_of_pages = 0; no_of_pages < 2; no_of_pages++)
    {
        octokit.users.list({since: (no_of_pages*100), per_page}).then(body => 
        {   
            for(var i = 0; i < per_page; i++)
            {
                username = body.data[i].login;
                result_followers = octokit.users.listFollowersForUser({username, per_page});        
                result_followering = octokit.users.listFollowingForUser({username, per_page});        
                result_starred = octokit.activity.listReposStarredByUser({username, per_page});        
                result_orgs = octokit.orgs.listForUser({username, per_page});  
                result_repos = octokit.repos.listForUser({username, per_page});     
                
                console.log(result_followers);
                console.log(result_followering.length);
                console.log(result_starred.length);
                console.log(result_orgs.length);
                console.log(result_repos.length);

                fs.appendFileSync('./UserData.csv',
                result_followers.length + "," +
                result_followering.length + "," +
                result_starred.length + "," +
                result_orgs.length + "," +
                result_repos.length + "\n");

            }
        }).catch(function(e){console.log(e)});
    }
}

get(0);