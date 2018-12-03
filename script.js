var d3 = require("d3"),
csv = require('fast-csv'),
 fs = require('fs')
 jsdom = require('jsdom');

 const {JSDOM} = jsdom;
const {document} = new JSDOM(  `<!DOCTYPE html><meta charset='utf-8'><html><head>
        <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
        <link rel='stylesheet' href='style.css'></head><body>
        <script type='text/javascript' src='script.js'></script></body></html>`).window;
global.document = document;

    var stream = fs.createReadStream('UserData.csv');
    csv.fromStream(stream, {headers : true}).on('data',function(data)
    {
        console.log(data.username)
  });