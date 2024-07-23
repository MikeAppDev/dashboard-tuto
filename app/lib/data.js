import { User, Product } from "./models";
import { connectToDB } from "./utils";

//********** Fetch Users **********//
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
// ********** Fetch Single User **********//
export const fetchUser = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        // console.log(err); 
        throw new Error('Error fetching single user');
    }
}

//********** Fetch Products **********//
export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 5;
    try {
        connectToDB();
        // const count = await Product.find({ username: { $regex: regex } }).count();
        const products = await Product.find({title: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page - 1));
        return  products ;
    } catch (err) {
        throw new Error('Error fetching products');
    }
}

// ********** Fetch Single Product **********//
export const fetchProduct = async (id) => {
    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        // console.log(err); 
        throw new Error('Error fetching Single Product');
    }
}