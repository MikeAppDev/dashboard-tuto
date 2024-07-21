import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";


const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search products"} />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>Stock</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.product}>
                            <Image 
                                className={styles.productImage}
                                src="/noproduct.jpg"
                                alt="Produit"
                                width={40}
                                height={40}
                            />
                            Iphone
                        </div>
                    </td>
                    <td>Je suis une description de produit</td>
                    <td>499€</td>
                    <td>2023-01-01</td>
                    <td>12</td>
                    <td>
                        <Link href="/dashboard/products/test">
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

export default ProductsPage;