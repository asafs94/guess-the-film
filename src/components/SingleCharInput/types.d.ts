import React, { InputHTMLAttributes, ReactNode } from "react";

export type SingleCharInputProps = { preferredCasing: "lowercase" | "uppercase" } & Omit<InputHTMLAttributes<HTMLInputElement>, "maxLength">;