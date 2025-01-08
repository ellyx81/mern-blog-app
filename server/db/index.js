const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose
    .connect('mongodb+srv://elly:icJtQkfBR9OOeT28@cluster0.gjw4k.mongodb.net/')
    .then(()=> console.log('Connected mongo db'))
    .catch((e) => console.log(e));