import { Metadata } from "next";
import { notFound } from "next/navigation";

export type propsType = { params: Promise<{ productId: string }> }

export const generateMetadata = async ({params}: propsType) : Promise<Metadata> => {
    const name = await new Promise((resolve)=>{
        setTimeout(() => {
            resolve('iPhone');
        }, 1000);
    });
    return{
        title: `${name} ${(await params).productId}`,
    }
}

const ProductDetails = async ({ params }: propsType) => {
    // const productId = (await params).productId;
    const {productId} = (await params);

    if(parseInt(productId)>100){
        notFound();
    }
    return (
        <div>ProductDetails {(await productId)}</div>
    )
}
export default ProductDetails