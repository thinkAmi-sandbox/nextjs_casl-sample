import {useRouter} from 'next/router'
import {useContext} from 'react'
import {AbilityContext} from '../../components/AbilityProvider';
import {getSession, useSession} from 'next-auth/client';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      notFound: true
    };
  }

  return {
    props: {}
  }
}


const Page = () => {
  const router = useRouter();
  const {todoId} = router.query;
  const {ability} = useContext(AbilityContext);
  const [session] = useSession();

  return (
    <div>
      <h1>ToDo</h1>
      <p>User: {session.user.name}</p>
      <p>Todo ID: {todoId}</p>
      <ul>
        {ability.can('show', 'Admin') && <li>Admin</li>}
        {ability.can('show', 'Manager') && <li>Manager and above</li>}
        {ability.can('show', 'Staff') && <li>Staff and above</li>}
        <li>Everyone</li>
      </ul>
    </div>
  );
}

export default Page
