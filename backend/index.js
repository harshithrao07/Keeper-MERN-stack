import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1/KeeperDB", { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("DB connected"))

const keeperSchema = mongoose.Schema({
    title: String,
    content: String
})

const Keeper = new mongoose.model("Keeper", keeperSchema)

app.get("/api/getAll", (req, res) => {
    Keeper.find({}, (err, keeperList) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(keeperList)
        }
    })
})

app.post("/api/addNew", (req, res) => {
    const { title, content } = req.body
    const keeperObj = new Keeper({
        title,
        content
    })
    keeperObj.save(err => {
        if (err) {
            console.log(err)
        }
        Keeper.find({}, (err, keeperList) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).send(keeperList)
            }
        })
    })

})

app.post("/api/delete", (req, res) => {
    const { id } = req.body
    Keeper.deleteOne({ _id: id }, () => {
        Keeper.find({}, (err, keeperList) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).send(keeperList)
            }
        })
    })

})

app.listen(3000, () => {
    console.log("Backend created at port 3000")
})