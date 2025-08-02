const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./templates/home.html', 'utf-8', (err, data) => {
            if (err) {
                res.write('<h1>Error loading page Home</h1>');
                return res.end();
            }
            res.write(data);
            res.end();
        });
    } else if (req.url === '/about') {
        fs.readFile('./templates/about.html', 'utf-8', (err, data) => {
            if (err) {
                res.write('<h1>Error loading page About</h1>');
                return res.end();
            }
            res.write(data);
            res.end();
        });
    } else if (req.url === '/contact') {
        fs.readFile('./templates/contact.html', 'utf-8', (err, data) => {
            if (err) {
                res.write('<h1>Error loading page Contact</h1>');
                return res.end();
            }
            res.write(data);
            res.end();
        });
    } else if (req.url === '/services') {
        fs.readFile('./templates/services.html', 'utf-8', (err, data) => {
            if (err) {
                res.write('<h1>Error loading page Services</h1>');
                return res.end();
            }
            res.write(data);
            res.end();
        });
    } else if (req.url === '/blog') {
        fs.readFile('./templates/blog.html', 'utf-8', (err, data) => {
            if (err) {
                res.write('<h1>Error loading page Blog</h1>');
                return res.end();
            }
            res.write(data);
            res.end();
        });
    } else {
        res.write('<h1>404 - Page not found</h1>');
        res.end();
    }
});

server.listen(3000, (err) => {
    if (err) {
        console.log('Error starting server:', err);
    } else {
        console.log('The server is running');
    }
});
