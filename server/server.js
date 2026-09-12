import express from "express"
import cors from "cors"
import contactUser from "./routes/contactUser.routes.js";
import dotenv  from 'dotenv'

const app = express();

dotenv.config();

//middlewares
app.use(cors({
    origin: "https://portfolio-frontend-six-psi.vercel.app"
}));
app.use(express.json());

app.use("/api", contactUser);

app.get("/api/health", (req, res) => {
    res.send("api is running")
})

app.listen(3000, ()=> {
    console.log('server is up and running on port : 3000' )
})