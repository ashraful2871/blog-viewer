"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { getUser, isAuthenticated, isLoading } = useKindeAuth();
  const [authResolved, setAuthResolved] = useState(false);

  useEffect(() => {
    console.log("isLoading:", isLoading);
    console.log("isAuthenticated:", isAuthenticated);

    if (!isLoading) {
      if (!isAuthenticated) {
        console.log("Redirecting to login...");
        router.push("api/auth/login");
      } else {
        console.log("User authenticated:", getUser());
        setAuthResolved(true);
      }
    }
  }, [isAuthenticated, isLoading, router, getUser]);

  if (isLoading || (!authResolved && !isAuthenticated)) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div>
      <h1>Welcome to your profile!</h1>
      <p>Hello, {getUser()?.given_name || "User"}!</p>
    </div>
  );
};

export default ProfilePage;
