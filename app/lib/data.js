import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {

    const regex = new RegExp(q, "i");
    try {
        connectToDB();
        const users = await User.find({username: {$regex: regex}});
        return users;
    } catch (err) {
        throw new Error('Error fetching user');
    }
}