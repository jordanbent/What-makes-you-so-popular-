var fs = require('fs');
var csv = require('fast-csv');

fs.appendFileSync('./AveragesData.csv',"avrg_followers,avrg_following,avrg_starred,avrg_orgs,avrg_repos,avrg_R_size,avrg_R_stars\n");

async function userData(filename)
{
    var stream = fs.createReadStream(filename);
    var sum = 0;
    denom = 0;

    csv.fromStream(stream, {headers : true})
        .on('data',function(data)
        {
            num = (data.total);
            sum += parseInt(num);
            denom++;
           // console.log(filename,"  median  ", sum/denom);
        })
        .on('end', function(data)
        {
            fs.appendFileSync('./AveragesData.csv',(sum/denom)+","+","+","+","+","+","+"\n");
        });
}

async function repoData()
{
    var stream = fs.createReadStream('ReposData.csv');
    var sum1 = 0;
    var sum2 = 0;
    denom1 = 0;
    denom2 = 0;

    csv.fromStream(stream, {headers : true})
        .on('data',function(data)
        {
            num1 = (data.size);
            sum1 += parseInt(num1);
            denom1++;

            num2 = data.stargazers;
            sum2 += parseInt(num2);
            denom2++;
        })
        .on('end', function(data)
        {
            fs.appendFileSync('./AveragesData.csv',","+","+","+","+","+sum1/denom1+","+sum2/denom2+"\n");
        });

    
}

userData('FollowersData.csv');
setTimeout(function() 
{
    userData('FollowingData.csv');
}, 3000);
setTimeout(function() 
{
    userData('StarredData.csv')
}, 3000);
setTimeout(function() 
{
    userData('OrgsData.csv')
}, 3000);
setTimeout(function() 
{
    userData('ReposData.csv')
}, 3000);
setTimeout(function() 
{
    repoData()
}, 3000);



