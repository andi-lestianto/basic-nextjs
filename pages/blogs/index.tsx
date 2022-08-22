import Layout from "../../components/Layout";

interface Blog {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  listBlog: Blog[];
}

export default function blog(props: BlogProps) {

  const { listBlog } = props;
  return (
    <Layout pageTitle='Blog Page'>
      {listBlog.map((blog) => (
        <div key={blog.id}>
          <div>{blog.title}</div>
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