import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import TwitterProvider from 'next-auth/providers/twitter';

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     TwitterProvider({
//       clientId: process.env.TWITTER_ID,
//       clientSecret: process.env.TWITTER_SECRET,
//     }),
//     // ...add more providers here
//   ],
// });

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: (await clientPromise).db('resistfix'),
    }),
    providers: [
      TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET,
      }),
      // ...add more providers here
    ],
  });
}
