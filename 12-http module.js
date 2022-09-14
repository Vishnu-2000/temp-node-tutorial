const Http=require('http')
//req-client request  res-response server needs to provide
const server=Http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our web page')
    }
    else if(req.url==='/about'){
        res.end('Here is our brief history')
    }else{
        res.end(`<h1>Oops!!</h1>
        <p>Can't seem to find what you are looking for</p>`)
    }

})
server.listen(5000)
// server.close()