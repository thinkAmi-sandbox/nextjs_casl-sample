import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {session && (
        <>
          Signed in as {session.user.name} <br/>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      {!session && (
        <>
          Not signed in <br/>
          <button onClick={signIn}>Sign in</button>
        </>
      )}
    </div>
  )
}
