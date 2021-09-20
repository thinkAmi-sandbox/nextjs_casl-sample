import {signIn, signOut, useSession} from 'next-auth/client'
import Link from 'next/link'

export default function Home() {
  const [session, loading] = useSession();

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

      <Link href="/todo/1">
        <a>Go Todo</a>
      </Link>
    </div>
  )
}
