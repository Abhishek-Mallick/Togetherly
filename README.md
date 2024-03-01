<img src="https://github.com/Abhishek-Mallick/Togetherly/assets/106394426/30a9c599-5bdb-463d-bee0-6df8ce9a6d03" align="right" height="200px">

## Togetherly

Togetherly is your ultimate real-time collaboration hub, effortlessly breaking geographical barriers. Communicate ideas with interactive whiteboards. Create organizations, invite members, and start and schedule screens seamlessly. Join with thousands of users in a session, performing 80% faster than competitors without lag. Fast, efficient, and powered by Next.js and Convex,  it's the ultimate choice for boosting productivity in institutions and corporate meetings.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abhishek-Mallick/Togetherly.git
   cd Togetherly
   ```

2. **Set up Enviornment Variables**
   - Create a  `.env.local` file on the base of the directory. On the `.env.local` file add the variables:
     ```
     CONVEX_DEPLOYMENT=
     NEXT_PUBLIC_CONVEX_URL=
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     CLERK_SECRET_KEY=
     LIVEBLOCKS_SECRET_KEY=
     CLERK_ISSUER_URL=
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
     ```
   - Get your Clerk credentials by creating a new Clerk app on their [dashboard](https://dashboard.clerk.com/apps/new) - this will handle all the authentications and     
     organizations
       - Allow Google Authentication and organizational support.
    - Get your Convex credentials by creating your convex application in the Convex [dashboard](https://dashboard.convex.dev/) our scripts will take care of making all the initial schemas

## Running the Application

1. **Starting convex server**
```npm
 npx convex dev
```
2. **Start Client**
```npm
 npm install
 npm run dev
```
