const express=require("express");
const path=require("path");

const port=process.env.PORT || 3000

const app=express()

const clientBuildPath = path.join(__dirname, '..','/client/public');
console.log(clientBuildPath)

app.use(express.json());

app.use(express.urlencoded({
	extended:true
}));

app.use(express.static(clientBuildPath))

app.get("/",(request, response)=>{
	response.sendFile(path.join(clientBuildPath,'/index.html'))
})

app.get("/greet",(req,res)=>{
	res.send("Hello from server")
})

app.listen(port, ()=>{
	console.log("Server listening at port 3000");
});
