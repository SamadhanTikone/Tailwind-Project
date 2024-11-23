import { useParams } from "react-router-dom"
export default function User() {

    const {userid} = useParams()
  return (
    <div>
      <h1 className="bg-gray-600 text-3xl p-4 bottom-0">User : {userid}</h1>
    </div>
  )
}
