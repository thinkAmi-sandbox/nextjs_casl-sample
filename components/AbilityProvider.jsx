import {createContext, useEffect, useState} from 'react';
import {useSession} from 'next-auth/client';
import {buildAbilityFor} from '../config/abilities';

// グローバルな state を管理する Context を用意
export const AbilityContext = createContext({});

const Component = props => {
  const [session] = useSession();
  const [ability, setAbility] = useState({});

  // session の値が変わったら、session の内容により、abilityの値を変える
  useEffect(() => {
    session ? setAbility(buildAbilityFor(session.user)) : setAbility({});
  }, [session]);

  const {children} = props;

  // Providerコンポーネントを用意し、 ability をグローバルで扱えるようにする
  return (
    <AbilityContext.Provider value={{ability}}>
      {children}
    </AbilityContext.Provider>
  )
}
export default Component
