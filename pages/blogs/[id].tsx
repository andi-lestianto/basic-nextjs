import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';


export default function BlogDetail() {
    // const { postDetail } = props;
    // console.log(postDetail);

    const [postData, setPostData] = useState([]);

    const router = useRouter();
    const query = router.query;
    const { idpost } = router.query;
    // axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    //     .then(function (response) {
    //         console.log(response.data.body)

    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //         console.log(error.status)
    //     }); 
    const [product, setProduct] = useState<any>([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
            .then(response => {
                let data = response.data;
                console.log(data);
                setProduct(data);
                //set first imag
                return data;
            }).catch((error) => {
                console.log('error ' + error);
            });
    }, [])



    return (
        <Layout pageTitle={product.title} >
            <h3>{product.title}</h3>
            <div>{product.body}</div>
        </Layout>
    )

}
// export async function getServerSideProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + 1);
//     const postDetail = await res.json();

//     return {
//         props: {
//             postDetail,
//         }
//     }
// }





