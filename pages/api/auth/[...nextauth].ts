import { connect } from '@/lib/middlewares/db/mongodb';
import { findUserByEmail, findUserWithEmailAndPassword, insertUser, updateUserById } from '@/lib/middlewares/mongo-service';
import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import { v4 as uuidv4 } from 'uuid';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials:Record<"password" | "username" | "email", string>) {
        await connect();
        var user:any= await findUserWithEmailAndPassword(credentials.email,credentials.password);
        delete user.password;
        var accessToken = await jwt.sign(user, process.env.SECRET_KEY);
        user.accessToken = accessToken;
        await updateUserById(user._id, { lastLogin:new Date() });
        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.SECRET_KEY,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token ,account,user}:any) {
      var uuid= await uuidv4();
      if (account && account.provider === "google") {
        await connect();
        var user:any= await findUserByEmail(user.email);
        if(!user)  await insertUser({ email:user.email,password:user.id,provider:'google',platform:'web',googleId:user.id,uuid })
        var accessToken = await jwt.sign(user, process.env.SECRET_KEY);
        user.accessToken = accessToken;
        await updateUserById(user._id, { lastLogin:new Date() });
      }
      if (account && account.provider === "facebook") {
        await connect();
        var user:any= await findUserByEmail(user.email);
        if(!user)  await insertUser({ email:user.email,password:user.id,provider:'google',platform:'web',googleId:user.id ,uuid})
        var accessToken = await jwt.sign(user, process.env.SECRET_KEY);
        user.accessToken = accessToken;
        await updateUserById(user._id, { lastLogin:new Date() });
      }
      if(user) token.accessToken=user.accessToken
      return token
    },
    async session({ session, token }:any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
