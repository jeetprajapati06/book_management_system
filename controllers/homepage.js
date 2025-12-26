const Book = require("../models/model.js");

const homePage = async (req, res) => {
    const books = await Book.find();
    res.render("index", { books });
};

const addPage = async(req, res) => {
    res.render("add");
 
};

const saveBook = async (req, res) => {
      console.log(req.file.path);
    const bookobj={
        name:req.body.name,
        author:req.body.author,
        price:req.body.price,
        image:req.file.path,
    }
    const bookinstance=await new  Book(bookobj);
     bookinstance.save();
    res.redirect("/");
};

const editPage = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.render("edit", { book });
};

const updateBook = async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
};

const deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect("/");
};

module.exports = { homePage,addPage,saveBook,editPage,updateBook,deleteBook };