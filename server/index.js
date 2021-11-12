/**
 * @author Rakesh
 * @author Ankith
 */
<<<<<<< HEAD
const express = require("express"); // express module
const mongoose = require("mongoose"); // mongoose module
const cors = require("cors"); // cors module
const app = express();
const url =
  "mongodb+srv://Jerry:jerryreact@react-form-cluster.g2crr.mongodb.net/react-form?retryWrites=true&w=majority";
=======
const express = require('express'); // express module
const mongoose = require('mongoose'); // mongoose module
const cors = require('cors'); // cors module
const app = express();
const url = "mongodb+srv://Jerry:jerryreact@react-form-cluster.g2crr.mongodb.net/react-form?retryWrites=true&w=majority"
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9

// if connected to the database successfully
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("connection success");
});

const con = mongoose.connection;

<<<<<<< HEAD
con.on("open", function () {
  console.log("connected...");
});
=======
con.on('open', function () {
  console.log('connected...')
})
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

<<<<<<< HEAD
const userRouter = require("./routes/user"); //path
app.use("/", userRouter);
app.listen(1109, () => {
  // port humber 1109
=======
const userRouter = require('./routes/user');  //path
app.use('/', userRouter);
app.listen(1109, () => { // port number 1109
>>>>>>> bf0b78889729225d1ac8275ccf217561dd13fdc9

  console.log("server running on port 1109...");
});
