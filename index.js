// const path = require('path');

// // 組合路徑
// const fullPath = path.join(__dirname, 'files', 'test.txt');
// console.log('完整路徑:', fullPath);




// const url = require('url');

// // 解析 URL
// const myUrl = new URL('https://example.com/path?name=test&age=25');

// console.log('主機名:', myUrl.hostname);     // example.com
// console.log('路徑名:', myUrl.pathname);     // /path
// console.log('搜尋參數:', myUrl.searchParams.get('name')); // test
// console.log('完整搜尋字串:', myUrl.search); // ?name=test&age=25

// // 修改 URL 參數
// myUrl.searchParams.append('sort', 'desc');
// console.log('新的 URL:', myUrl.href);


// const { error } = require("console")

// const http = require("http")

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json')

//     if (req.url === '/'){
//         res.writeHead(200)
//         res.end(JSON.stringify({ message: "Success"}))
//     } else if ( req.url === '/api') {
//         res.writeHead(200)
//         res.end(JSON.stringify({ message: 'api success'}))
//     } else {
//         res.writeHead(404)
//         res.end(JSON.stringify({ error: '找不到' }))
//     }
// })

// server.listen(3000, () => {
//     console.log('https://localhost:3000')
// })





const http = require("http")
const todos = [
    "學習 Node.js",
    "學習 HTTP 模組",
    "完成作業"
]


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if (req.url === '/'){
        res.writeHead(200)
        res.end(JSON.stringify({ message: "Success"}))
    } else if ( req.url === '/todos') {
        res.writeHead(200)
        res.end(JSON.stringify({
            "status": 'success',
            "data": todos
            }))
    } else if ( req.url === '/todos/count') {
        res.writeHead(200)
        res.end(JSON.stringify({
            todos
            }))
    } else if ( req.url === '/health') {
        res.writeHead(200)
        res.end(JSON.stringify({
            "health":"ok"    
        }))
    } else {
        res.writeHead(404)
        res.end(JSON.stringify({ error: '找不到' }))
    }
})

server.listen(3000, () => {
    console.log('https://localhost:3000')
})