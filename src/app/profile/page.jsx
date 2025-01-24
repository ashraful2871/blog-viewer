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
    <div className="text-center my-12 space-y-5">
      <h1 className="text-2xl font-bold text-blue-500">
        Welcome to your profile!
      </h1>
      <p className="text-xl font-semibold">
        Hello,{" "}
        <span className="text-blue-400">{getUser()?.given_name || "User"}</span>
      </p>
    </div>
  );
};

export default ProfilePage;
