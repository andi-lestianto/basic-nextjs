import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'


export default function BlogDetail(props) {
    const { postDetail } = props;
    console.log(postDetail);

    const router = useRouter();
    const query = router.query;

    // axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`).then(response => {
    //     console.log(response.data.body)
    // })

    return (
        <div>id</div>
    )

}
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + 1);
    const postDetail = await res.json();

    return {
        props: {
            postDetail,
        }
    }
}




