import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer>
      <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <p>User name is - {user.name}</p>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    props: { user },
  };
}
