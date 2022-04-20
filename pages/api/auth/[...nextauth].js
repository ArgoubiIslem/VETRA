// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers

    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
})
