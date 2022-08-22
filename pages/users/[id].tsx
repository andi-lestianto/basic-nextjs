import { useRouter } from "next/router";


export default function detail() {
  const router = useRouter();
  const id = router.query;
  console.log(id)


  return (
    <p>Anda di halaman {id.id}</p>
  )
}
