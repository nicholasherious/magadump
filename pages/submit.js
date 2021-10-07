import { useSession, getSession } from "next-auth/react"
import Tabs from '../components/uploadtab/Tabs'

export const submit = () => {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <p>Loading...</p>
      }
    
      if (status === "unauthenticated") {
        return <p>Access Denied</p>
      }
      
    return (
        <div className="max-w-3xl mx-auto">
           <Tabs /> 
        </div>
    )
}
export default submit