import mongoose from "mongoose";
import {type} from "os";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name."],
      maxLength: [200, "Products name cannot exceed 200 characters."],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price."],
      maxLength: [6, "Products name cannot exceed 6 digits."],
    },
    description: {
      type: String,
      required: [true, "Please enter product description."],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please select category for this product."],
      enum: {
        values: ["Electronics", "Accessories", "Cameras", "Laptops", "Headphones", "Food", "Books", "Sports", "Home"],
        message: "Please select correct category for product.",
      },
    },
    seller: {
      type: String,
      required: [true, "Please enter product seller."],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock."],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model("Product", productSchema);
