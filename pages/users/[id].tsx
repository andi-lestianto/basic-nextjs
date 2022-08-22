import { useRouter } from "next/router";


export default function detail() {
  const router = useRouter();
  const id = router.query;
  const yourid = id.id
  console.log(id)
  console.log('Anda di halaman ' + yourid)


  return (
    <p>Detail Page {id.id}</p>
  )
}
