/**
 * @author Rakesh
 * @author Ankith
 */
const express = require("express"); // express module
const mongoose = require("mongoose"); // mongoose module
const cors = require("cors"); // cors module
const app = express();
const url =
  "mongodb+srv://Jerry:jerryreact@react-form-cluster.g2crr.mongodb.net/react-form?retryWrites=true&w=majority";

// if connected to the database successfully
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("connection success");
});

const con = mongoose.connection;

con.on("open", function () {
  console.log("connected...");
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const userRouter = require("./routes/user"); //path
app.use("/", userRouter);
app.listen(1109, () => {
  // port humber 1109
  console.log("server running on port 1109...");
});
