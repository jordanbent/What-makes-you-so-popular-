const octokit = require('@octokit/rest')()
//var octonode = require('cs3012-final/node_modules/octonode/lib/octonode/Client.js');
//var client = octonode.client("3b366435a0ac5e52059f35c71f3b18431ea8bbed");
const fs = require('fs');

per_page = 100;
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