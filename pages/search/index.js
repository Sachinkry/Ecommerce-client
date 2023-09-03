import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Search() {
    const router = useRouter();
    const { query } = router.query;
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
    //   if (query) {
    //     axios.get(`/api/search?query=${query}`)
    //       .then(res => setProducts(res.data))
    //       .catch(err => console.error(err));
    //   }
    }, [query]);

    return (
        <Layout>
            <div className="h-[200px]  text-xs text-rose-500 text-center">Something went wrong!!! with query '{query}'</div>
            <div className="text-xs text-center underline text-blue-500 hover:scale-[1.02] hover:cursor-pointer" onClick={() => router.push('/')}>Back to Home Page</div>
        </Layout>
    )
}