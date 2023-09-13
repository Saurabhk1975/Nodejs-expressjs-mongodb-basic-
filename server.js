const express = require("express");
const app = express();
const user_details = require("./connection");

app.use(express.json());

/* <----------------------------------API---------------------------------------->*/





/* 1. <-------------------------POST METHOD----------------------------------->*/
app.post("/post", async (req, res) => {
  try {
    const senddata = user_details(req.body);
    const savedata = await senddata.save();
    res.send(savedata);
  } catch (error) {
    res.status(404).send(error);
  }
}); 



/* 2. <-------------------------GET METHOD----------------------------------->*/
app.get("/get",async(req,res)=>{
    try {
        const getdata = await user_details.find({});
        res.send(getdata); 
    } catch (error) {
        res.status(404).send(error);
    }   
})




/* 3. <-------------------------GET BY ID METHOD----------------------------------->*/
app.get("/get/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const getiddata= await user_details.findById({_id:id});
        res.send(getiddata);
    } catch (error) {
        res.status(404).send(error);
    }
})


/* 4. <-------------------------PATCH(UPDATE) METHOD------------------------------->*/
app.patch("/patch/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedata = await user_details.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.send(updatedata) 
    } catch (error) {
        res.status(500).send(error);
    }
})


/* 4. <-------------------------DELETE METHOD------------------------------->*/

app.delete("/delete/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const deletedata = await user_details.findByIdAndDelete({_id:id});
        res.send(deletedata);
    } catch (error) {
        res.status(500).send(error);
    }
})












/* <-------------------------SERVER ESTABLISHMENT--------------------------------->*/
app.listen(3000, () => {
  console.log("Server creation done");
});
