import { addUser } from "@/app/lib/actions";
import { User } from "@/app/lib/models";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addUser}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={true} selected={user.isAdmin}>Yes</option>
          <option value={false} selected={!user.isAdmin}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected={user.isActive}>Yes</option>
          <option value={false} selected={!user.isActive}>No</option>
        </select>
       
        <textarea
          required
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;