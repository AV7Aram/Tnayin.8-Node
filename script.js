const http = require('http');
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, 'templates');

const server = http.createServer((req, res) => {
    let fileName = '';

    if (req.url === '/') {
        fileName = 'home.html';
    } else if (req.url === '/about') {
        fileName = 'about.html';
    } else if (req.url === '/contact') {
        fileName = 'contact.html';
    } else if (req.url === '/services') {
        fileName = 'services.html';
    } else if (req.url === '/blog') {
        fileName = 'blog.html';
    } else {
        res.write('<h1>404 - Page not found</h1>');
        return res.end();
    }

    const filePath = path.join(TEMPLATE_PATH, fileName);

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.write('<h1>Error loading the page</h1>');
            return res.end();
        }
        res.write(data);
        res.end();
    });
});

server.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is running');
    }
});

