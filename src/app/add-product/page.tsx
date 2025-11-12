import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function AddProduct(){
    // const [state, formAction, isPending] = useActionState(action, initialState)
    const onSubmit = async(formData: FormData) => {
        'use server';
        console.log("Submitted");
        console.log("Name: ", formData.get("title"))
        redirect("/")
    }
    return(
        <>
            <div className="mb-5">Add Product Page</div>
            <form action={onSubmit}>
                <div className="mb-5">Product Name : <input name="title" className="bg-gray-50 border border-gray-300"/></div>
                <div className="mb-5">Product Amount : <input name="amount" type='number' className="bg-gray-50 border border-gray-300"/></div>
                <button type="submit" className="text-white bg-blue-700 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Submit</button>
            </form>
        </>
    )
}


