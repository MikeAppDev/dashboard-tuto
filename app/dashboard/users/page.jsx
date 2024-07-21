import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";


const UsersPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search users"} />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image 
                                className={styles.userImage}
                                src="/noavatar.png"
                                alt="Avatar"
                                width={40}
                                height={40}
                            />
                            John Doe
                        </div>
                    </td>
                    <td>johndoe@gmail.com</td>
                    <td>2023-01-01</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td>
                        <Link href="/">
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </Link>
                    </td>
                </tr>
            </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default UsersPage;