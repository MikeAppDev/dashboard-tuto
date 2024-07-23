export const authConfig = {
    providers:[],
    pages: {
      signIn: "/login",
    },
    callbacks: {
      authorized({ auth, request }) {
        //check la session
        const isLoggedIn = auth?.user;
        //check si on est sur le dashboard
        const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
        return true;
      },
    },
  };