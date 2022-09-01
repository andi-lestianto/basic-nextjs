import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Blogs.module.css"

interface Blog {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  listBlog: Blog[];
}

export default function blog(props: BlogProps) {
  const router = useRouter();

  const { listBlog } = props;
  return (
    <Layout pageTitle='Blog Page'>
      {listBlog.map((blog) => (
        <div key={blog.id} className={styles.card} onClick={() => router.push(`/blogs/${blog.id}`)}>
          <h3>{blog.title}</h3>
          <div>{blog.body}</div>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const listBlog = await res.json();

  return {
    props: {
      listBlog: listBlog
    }
  }

}