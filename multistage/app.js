const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <body>
                <h1>Welcome to Node.js Docker!</h1>
                <h2>Container is running successfully 🚀</h2>
                <p>Hello Ashwini!</p>
            </body>
        </html>
    `);
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Node.js server is running on port 3000");
});