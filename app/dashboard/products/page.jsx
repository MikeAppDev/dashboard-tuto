import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import searchParams from "next/navigation";
import { deleteProduct } from "@/app/lib/actions";



const ProductsPage = async ({ searchParams }) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const produtcs = await fetchProducts(q, page);

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
                {produtcs.map((product) => (
                    <tr key={product.id}>
                    <td>
                        <div className={styles.product}>
                            <Image 
                                className={styles.productImage}
                                src={ product.img || "/noproduct.jpg"}
                                alt="Produit"
                                width={40}
                                height={40}
                            />
                            {product.title}
                        </div>
                    </td>
                    <td>{product.desc}</td>
                    <td>{product.price} €</td>
                    <td>{product.createdAt?.toString().slice(4,16)}</td>
                    <td>{product.stock}</td>
                    <td>
                        <Link href={`/dashboard/products/${product.id}`}>
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                            {/* Delete Product */}
                        </Link>
                            <form action={deleteProduct}>
                                <input type="hidden" name="id" value={product.id} />
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </form>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            <Pagination />
        </div>
    );
};

export default ProductsPage;