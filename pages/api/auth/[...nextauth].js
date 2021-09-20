import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const authenticate = credentials =>
  // CASLの検証が目的なので、認証は適当...
  credentials.name === credentials.password ?
    { id: 1, name: credentials.name } :
    null;

const options = {
  providers: [
    Providers.Credentials({
      name: 'Name',
      credentials: {
        name: { label: 'Name', type: 'text', placeholder: 'admin' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async credentials => {
        const user = authenticate(credentials)
        return user ?
          Promise.resolve(user) :
          Promise.resolve(null)
      },
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)
