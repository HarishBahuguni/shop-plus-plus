import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harishbahuguni:harishbahuguni@shopplusplus.d0mue.mongodb.net/shop-plus-plus?retryWrites=true&w=majority&appName=shopplusplus"
    );

    await Product.deleteMany();
    console.log("Products are deleted.");

    await Product.insertMany(products);
    console.log("All products are added.");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
