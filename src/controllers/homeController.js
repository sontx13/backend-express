const getHomepage = (req,res) =>{
    res.send('Hello World! aaaaaa');
}

const getSontx13 = (req,res) =>{
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,getSontx13
}