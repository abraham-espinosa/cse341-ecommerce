const fs = require('fs');

const usernames = [];

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Username</title></head>');
        res.write('<body><h1>Hello world!</h1><hr><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end(); 
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            const newUsername = parsedBody.split('=')[1];
            usernames.push(newUsername);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end(); 
    }

    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        var dv = '<ul>';
        for (let i = 0; i < usernames.length; i++) {
            dv += '<li>';
            dv += usernames[i];
            dv += '</li>';
        }
        dv += '</ul>';
        res.write(dv);
        res.write('</html>');
        return res.end();
    }
};

exports.handler = requestHandler;
