const express = require('express')
const app = express()
const port=3000
const bodyParser = require('body-parser')

// app.use(bodyParser.text({type:"*/*"}))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('hello, express')
})

app.get('/45',(req,res)=>{
    res.send('this is test')
})

app.get('/getUser/:id/:name',(req,res)=>{
    res.send(req.params.id + req.params.name)
})

app.get('/user',(req,res)=>{
    var user = JSON.parse(req.body)
    res.send("user's info is" + JSON.stringify(user))
})

app.post('/calBmi',(req,res)=>{
    var height = Number(req.body.height)
    var weight = Number(req.body.weight)
    var result = weight / (height*height)
    res.send("Your BMI is " + result)
})


app.listen(port,()=>{
    console.log(`Server listing at http://localhost:${port}`);
})
