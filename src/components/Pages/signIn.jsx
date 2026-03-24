import React from "react";
import AuthHeader from "../auth/AuthHeader";

export default function SignIn(){
    return (
      <div className="min-h-screen grid lg:grid-cols-2">
        <AuthHeader
          title="Sign in to your account"
          subtitle="Not a member? Sign up"
        />
      </div>
    );
}