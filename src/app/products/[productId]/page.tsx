import { Metadata } from "next";

export type propsType = { params: Promise<{ productId: string }> }

export const generateMetadata = async ({params}: propsType) : Promise<Metadata> => {
    const name = await new Promise((resolve)=>{
        setTimeout(() => {
            resolve('iPhone');
        }, 10);
    });
    return{
        title: `${name} ${(await params).productId}`,
    }
}

const ProductDetails = async ({ params }: propsType) => {

    // const productId = (await params).productId;
    const {productId} = (await params);

    if (parseInt(productId) > 50) {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate delay
    }
    if(parseInt(productId)>100){
        throw new Error("Product not found");
    }

    return (
        <>
            <div>Product Details Page</div>
            <div>ProductDetails {(await productId)}</div>
        </>
    )
}
export default ProductDetails