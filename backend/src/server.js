const app = require("./app");
const connect = require("./configs/db");
const PORT = process.env.PORT || 4000;

app.listen(PORT, async ()=>{
    await connect();
    console.log(`listening to port ${PORT}`);
})