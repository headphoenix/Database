const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");   
const userRoutes = require('./routes/user');
const bacentaRoutes = require('./routes/bacenta');
const constituencyRoutes = require('./routes/constituency');
const regionRoutes = require('./routes/region');
const adminRoutes = require('./routes/admin');



/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/user', userRoutes);
app.use('/bacenta', bacentaRoutes);
app.use('/constituency', constituencyRoutes);
app.use('/region', regionRoutes);
app.use('/admin', adminRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    //OverallStat.insertMany(dataOverallStat);
    // User.insertMany(dataUser);
    //Region.insertMany(dataRegion);
    
    // AffiliateStat.insertMany(dataAffiliateStat);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    }).catch((error) => console.log(`${error} did not connect`));