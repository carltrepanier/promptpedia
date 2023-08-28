import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handle = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {

  },
  async signIn({ profile }) {

  },
});

export { handle as GET, handle as POST };