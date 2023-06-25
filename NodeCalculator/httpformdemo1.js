const http=require("http");
const url=require("url");
const fs=require("fs");
const m1=require("./formModule1");
const { log } = require("console");

const server=http.createServer(function(req,resp)
{
    console.log("hi")
    var q=url.parse(req.url,true)

    resp.writeHeader(200,{"content-type":"text/html"});
    switch(q.pathname)
    {
        case "/form1":
            var rs=fs.createReadStream("./nodePublic/form1.html");
            rs.pipe(resp);
            console.log("ok")
            break;
            
        case "/submit-data":
            var a=parseInt(q.query.num1);
            var b=parseInt(q.query.num2);
            console.log("hello")
            if(q.query.btn==="add")
            {
            
            var ans=m1.addition(a,b);
            resp.write("<h3>addition="+ans+"<h3>");
            resp.end();
            }
            if(q.query.btn==="sub")
            {
               
                var ans=m1.addition(a,b);
                resp.write("<h3>subtraction="+ans+"<h3>");

            }
            if(q.query.btn==="mul")
            {
               
                var ans=m1.addition(a,b);
                resp.write("<h3> multiplication="+ans+"<h3>");

            }
            if(q.query.btn==="div")
            {
              
                var ans=m1.addition(a,b);
                resp.write("<h3> division="+ans+"<h3>");

            }

            break;
    }

})

server.listen(3001,function()
{
    console.log("server started on port 3001");
})