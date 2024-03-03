# Togetherly 

<img src="https://marvelapp.com/wp-content/uploads/2021/12/Artboard-Copy-5.png" align="right" height="200px">

Togetherly is your ultimate real-time collaboration hub, effortlessly breaking geographical barriers. Communicate ideas with interactive whiteboards. Create organizations, invite members, and start and schedule screens seamlessly. Join with thousands of users in a session, performing 80% faster than competitors without lag. Fast, efficient, and powered by Next.js and Convex,  it's the ultimate choice for boosting productivity in institutions and corporate meetings.<br>
This innovative space fosters creativity and synergy as team members
collectively visualize and brainstorm on a shared digital canvas. Emphasizing
efficiency, we go beyond mere visualization by providing a repository of
assets tools, templates, and resources that enhance the collaborative
process.


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

## Architecture | Workflow

![Untitled-2024-02-22-2153](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/2639da41-b340-471c-b543-cb81d2c2d943)

## Webapp Preview

![Screenshot 2024-03-02 201440](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/487c9433-ef41-4fca-b767-1d4b0ec1890d)

![Screenshot 2024-03-02 201521](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/0536e728-ba8d-489f-bc3e-38e10414b3f0)

![Screenshot 2024-03-02 201600](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/589bb8d4-019a-4a10-957e-0dd09242f6c8)

![Screenshot 2024-03-02 201626](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/07debf8e-8c51-4feb-af33-edf143276d9d)

![Screenshot 2024-03-02 203359](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/b528a20d-bad8-4adf-a438-957b50f57d22)

![Screenshot 2024-03-02 203425](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/b9583077-cfdd-4a15-b9b7-299f7e699b45)

![Screenshot 2024-03-02 203309](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/90c10ac1-bad2-439d-843e-ec623dedba8a)

![Screenshot 2024-03-02 202732](https://github.com/Abhishek-Mallick/Togetherly/assets/83288891/02aed602-e3b6-4786-ae64-9a6a73d9deb9)


