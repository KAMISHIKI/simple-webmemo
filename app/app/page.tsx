import { useEffect } from "react";
import { useRouter } from "next/router";
import MemoAppClient from "./client"; // Ensure MemoAppClient is a valid component

export default async function MemoAppPage() {
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/") {
            router.push("/app");
        }
    }, [router]);

    return (
        <MemoAppClient />
    )
}
