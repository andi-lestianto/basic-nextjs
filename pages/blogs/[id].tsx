import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


export default function BlogDetail() {
    // const { postDetail } = props;
    // console.log(postDetail);

    const [postData, setPostData] = useState([]);

    const router = useRouter();
    const query = router.query;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
        .then(function (response) {
            console.log(response.data.body)
            setPostData(response.data)
        })
        .catch(function (error) {
            console.log(error)
            console.log(error.status)
        });

    // useEffect(() => {
    //     axios.get(`${base_url}/produk/${query.id}`)
    //         .then(response => {
    //             let data = response.data.data;
    //             console.log(data);
    //             setProduct(data);
    //             setProductGallery(response.data.gallery);
    //             //set first image
    //             showImage(99, data.gambar)
    //             return data;
    //         }).catch((error) => {
    //             console.log('error ' + error);
    //         });
    // }, [])



    return (
        <div></div>
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




