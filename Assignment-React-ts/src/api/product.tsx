import instance from "./instance";

interface IProduct {
    id: number | string,
    name: string,
    price: string,
    description: string
}

export const getAllProduct = () => {
    return instance.get("/products");
}

export const getOneProduct = (id: number | string) => {
    return instance.get("/products/" + id);
}

export const deleteProduct = (_id: number | string) => {
    return instance.delete("/products/" + _id);
}

export const addProduct = (product: IProduct) => {
    return instance.post("/products", product)
}

export const updateProduct = (product: IProduct) => {
    return instance.put("/products/" + product._id, product)
}