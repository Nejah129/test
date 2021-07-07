const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const conectDB = require("./config/conectdb");
const TestData = require("./models/data");
app.use(express.json());

//add data
app.post("/data/add", async (req, res) => {
  const {
    id,
    title,
    points,
    user,
    time,
    time_ago,
    comments_count,
    type,
    url,
    domain,
  } = req.body;

  const newTestData = new TestData({
    id,
    title,
    points,
    user,
    time,
    time_ago,
    comments_count,
    type,
    url,
    domain,
  });

  try {
    let testData = await newTestData.save();
    res.send(testData);
  } catch (error) {
    res.send(error);
  }
});
//get all data
app.get("/data/get", async (req, res) => {
  try {
    let datas = await TestData.find();
    res.send(datas);
  } catch (error) {
    res.send(error);
  }
});

//get a single data

app.get("/data/get/:dataID", async (req, res) => {
  try {
    let data = await TestData.findById(req.params.dataID);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});



//delete a single data
app.delete("/data/delete/:dataID",async(req,res)=>{


  try {
    await TestData.findByIdAndDelete(req.params.dataID)
    res.send({msg:`object is removed `})
  } catch (error) {
    res.send(error.message)
  }
}

)

conectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is runing on Port${PORT}`)
);
