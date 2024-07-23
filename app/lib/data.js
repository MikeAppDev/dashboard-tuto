import { User, Product } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 5;
    try {
        connectToDB();
        // const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({username: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        
        return users ;
    } catch (err) {
        // console.log(err); 
        throw new Error('Error fetching user');
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 2;
    try {
        connectToDB();
        // const count = await Product.find({ username: { $regex: regex } }).count();
        const products = await Product.find({title: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return  products ;
    } catch (err) {
        throw new Error('Error fetching products');
    }
}