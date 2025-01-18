"use client";

import React from "react";
import { signUpSchema } from "@/lib/validations";

import AuthForm from "@/components/AuthForm";

export default function Page() {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={() => {}}
    />
  );
}
