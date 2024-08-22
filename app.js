
const express = require("express");
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const  methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "public")));

app.get("/techmeet/home", (req, res)=>{
    res.render("home.ejs");
})
app.get("/techmeet/:username", (req, res)=>{
    let {username} = req.params;
    let socialData = require("./data.json");
    let data = socialData[username];
    if(data){
        res.render("index.ejs", {username, data});
    }else{
        res.render("noaccount.ejs");
    }
})


let posts = [
    {
        id : uuidv4(),
        username : "Shyamkumar",
        time : "9:15:20 PM",
        content : "Hardwork is very important to achieve success."
    },
    {
        id : uuidv4(),
        username : "Dhananjay",
        time : "9:15:20 PM",
        content : "believe in yourself, one day you will defenately achieve your destination."
    },
    {
        id : uuidv4(),
        username : "Shivam",
        time : "9:15:20 PM",
        content : "Accept every situation and say radhe radhe."
    }
]

app.get("/techmeet/home/comments", (req, res)=>{
    posts = posts.reverse();
    res.render("comments.ejs", {posts});
})

app.post("/techmeet/home/comments", (req, res)=>{
    let {username, content} = req.body;
   if(username != "" && content != ""){
    let id = uuidv4();
    let date = new Date();
    let time = date.toLocaleTimeString();
    posts.push({id, time, username, content});
   }
    res.redirect("/techmeet/home/comments");
})
app.get("/techmeet/home/comments/:id/show", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("show.ejs", {post});
})
app.get("/techmeet/home/comments/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("editComments.ejs", {post})
})
app.patch("/techmeet/home/comments/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let date = new Date();
    let newTime = date.toLocaleTimeString();
    let post = posts.find((p)=> id == p.id);
    post.content = newContent;
    post.time = newTime;
    res.redirect("/techmeet/home/comments");
})
app.delete("/techmeet/home/comments/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id != p.id);
    res.redirect("/techmeet/home/comments");
})
app.listen(port, ()=>{
    console.log(`listening to the port : ${port}`);
})