var http=require('http');
//console.log(http);
var fs=require('fs');
//const { RSA_NO_PADDING } = require('constants');
const hostname='127.0.0.1';
const port='3000';


const server=http.createServer((request,response)=>{
    const reqUrl=request.url;
    // console.log(reqUrl);
    switch (reqUrl) {
        case '/profile':
            //console.log('hbl');
            response.statusCode=200;
            response.setHeader('Content-type','text/html');
            fs.readFile('profile.txt', {encoding: 'utf8'}, (err,data)=>{
                if((err == null || err== undefined) && data!=''){
                response.write(`<link rel="stylesheet" href="/style" />`)
                
                //console.log(data);
                let pr = JSON.parse(data);
                for(d of pr){
                response.write(`<p> username: ${d.username}</p>`);
                response.write(`<p> age: ${d.age}</p>`);}
                response.write(`<img src= '/myimage' />`);
                }

                response.end();

                /*
                if(err != undefined && err!= null){
                    console.log(data);
                    response.write(`<p>${data}</p>`);
                    response.end()
                }*/
            });
            /*response.statusCode=200;
            response.setHeader('Content-type','text/html');
            response.write('<p>hello</p>');
            response.end();*/
            break;
        case '/style':
            response.statusCode=200;
            response.setHeader('Content-type','text/css');
            fs.readFile('./style.css',{encoding: 'utf8'}, function(err,stylesheet){
            if((err == null || err== undefined) && stylesheet!=''){
                response.end(stylesheet);
            }
        })
        break;

        case '/home':
            response.statusCode=200;
            response.setHeader('Content-type','text/html');
            fs.readFile('./index.html',{encoding: 'utf8'},function(err,tags){
            if((err == null || err== undefined) && tags!=''){

                
                response.end(tags);
            }
        })
        break;
        case '/myimage':
            response.statusCode=200;
            response.setHeader('Content-type','image/jpeg');
            fs.readFile('./3.jpeg',function(err,image){
            if((err == null || err== undefined) && image!=''){

                response.end(image);
            }
            })
            break;
        default:
            response.statusCode=404;
            response.setHeader('Content-type','text/plain');
            response.end('not found');
            break;
    }
   
});
server.listen(port,hostname);
