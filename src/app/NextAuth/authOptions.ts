import { jwtDecode } from "jwt-decode";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export let AuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "NextAuth",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credentials) {
        let req = await fetch(
          `https://ecommerce.routemisr.com/api/v1/auth/signin`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: {
              "content-type": "application/json",
            },
          },
        );

        if (!req.ok) {
          throw new Error(req.statusText);
        }

        let res = await req.json();
        let decoded = jwtDecode<{ id: string }>(res.token);

        return {
          id: decoded.id,
          email: res.user.email,
          name: res.user.name,
          token: res.token,
          role : res.user.role,
        };
      },
    }),
  ],

  pages: {
    signIn: "/LogIn",
  },

  callbacks: {
    jwt({ user, token }) {
      if (user) {
        token.id = user.id;
        token.token = user.token;
        token.role = user.role
      }

      return token;
    },
    session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session;
    },
  },
};
