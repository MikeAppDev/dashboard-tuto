import { fetchUsers } from "@/app/lib/data";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";


const UsersPage = async ({searchParams}) => {

    const q = searchParams?.q || "";
    const users = await fetchUsers(q);

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
                {users.map((user) => (
                    <tr key={user.id}>
                    <td>
                        <div className={styles.user}>
                            <Image 
                                className={styles.userImage}
                                src={user.img || "/noavatar.png"}
                                alt="Avatar"
                                width={40}
                                height={40}
                                />
                            {user.username}
                        </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.createdAt?.toString().slice(4,16)}</td>
                    <td>{user.isAdmin ? "Admin" : "Client"}</td>
                    <td>{user.isActive ? "Active" : "Inactive"}</td>
                    <td>
                        <Link href={`/dashboard/users/${user.id}`}>
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default UsersPage;