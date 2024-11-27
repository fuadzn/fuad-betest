const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

// konek ke db
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("Connect success"))
  .catch((err) => {
    console.error(`gagal konek ${err.message}`);
    process.exit();
  });

// memanggil routes user
require("./app/routes/userRoute")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
