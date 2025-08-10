'use client';

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({error, reset}:{error:Error, reset: ()=>void;}) => {
    const router = useRouter();
    const tryAgain = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    };
  return (
    <>
        <div>Error : {error.message}</div>
        <button onClick={() => tryAgain()}>Try Again</button>
    </>
  )
}

export default ErrorBoundary;
