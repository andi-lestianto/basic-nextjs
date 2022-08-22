import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

interface UserData {
  dataUsers: Array<any>;
}

export default function Users(props: UserData) {
  const route = useRouter();
  const { dataUsers } = props;
  console.log(dataUsers)


  return (
    <Layout pageTitle="User Page" >

      <p>User Page</p>
      {dataUsers.map((user) => (
        <div key={user.id} className={styles['card-user']} onClick={() => route.push(`/users/${user.id}`)}>
          <div className={styles['card-item']}>{user.name} {user.email}</div>
        </div>
      ))}

    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers
    }
  }

}
