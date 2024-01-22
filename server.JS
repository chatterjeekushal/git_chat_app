
const express=require("express"); //inport express

const fs=require('fs')// import fs

const app =express(); // coll express

const http=require("http").createServer(app); //import htttp

const PORT=process.env.PORT || 3000 // declear port

http.listen(PORT,()=>{

    console.log(`listen on port ${PORT}`);
})



app.use(express.static('_dirname'+'/style.css'))


app.get("/",(req,res)=>{

    const page=fs.readFileSync("index.html");

res.send(page.toString())

})



//soket

const io=require('socket.io')(http) // import soket and add http server

// soket .io connetion

io.on('connection',(socket)=>{

console.log('connetion...');

socket.on('massage',(msg)=>{ // connect to clind server

    socket.broadcast.emit('massage',msg);
})

})

