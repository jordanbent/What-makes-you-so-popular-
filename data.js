const octokit = require('@octokit/rest')()

var logins = [];
var ids = [];
var locations = [];
var followers_list = [];
var following_list = [];
var starred_list = [];
var orgs_list = [];
var repos_list = [];
var created = [];
var updated = [];

per_page = 100;
var body = ''; 
var count = 0 ;

function get(s)
{   
    for(var no_of_pages = 0; no_of_pages < 2; no_of_pages++)
    {
        octokit.users.list({since: no_of_pages, per_page}).then(body => 
        {   
            for(var i = 0; i < per_page; i++)
            {
                    logins[i] = body.data[i].login;
                    ids[i] = body.data[i].id;
                    locations[i] = body.data[i].location;
                    followers_list[i] = body.data[i].followers_url; //needs more refining
                    following_list[i] = body.data[i].following_url; //needs more refining
                    starred_list[i] = body.data[i].starred_url;     //needs more refining
                    orgs_list[i] = body.data[i].organizations_url;  //needs more refining
                    repos_list[i] = body.data[i].repos_url;         //needs more refining
                    if(body.data[i].created_at != null)
                    created[i] = body.data[i].created_at;
                    else
                    created[i] = null;
                    if(body.data[i].updated_at != null)
                    updated[i] = body.data[i].updated_at;
                    else
                    updated[i] = null;
                    count++;
            }
                
            }).catch(function(e){console.log(e)});
        }
}

get(0);
