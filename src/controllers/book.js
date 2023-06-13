function getAllBooks(req,res) {
    res.send([
        {name:'Tieng chim hot',price:20000},
        {name: 'Chiec thuyen',price:15000}
    ]);

}

module.exports={getAllBooks}