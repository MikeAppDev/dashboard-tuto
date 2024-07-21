import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image 
                        className={styles.userImage}
                        src="/noavatar.png"
                        fill
                    />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action="">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Dean Winchester" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Dean.Winchester@deamon.com" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="+666 666 666 " />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder="666 Main St, New York, NY 66 666" />
                    <label>isAdmin ?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>isActive ?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;