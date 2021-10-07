import { useSession, getSession, signIn } from "next-auth/react"
import Tabs from '../components/uploadtab/Tabs'

export default function submit  () {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
      }
    
      if (status === "unauthenticated") {
        return (
          <>
      <h1>Access Denied</h1>
      <p>
        <a href="/api/auth/signin"
           onClick={(e) => {
           e.preventDefault()
           signIn()
        }}>You must be signed in to view this page</a>
      </p>
    </>
        )
      }
      
    return (
        <div className="max-w-3xl mx-auto">
           <Tabs /> 
        </div>
    )
}
