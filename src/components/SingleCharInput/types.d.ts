import React, { InputHTMLAttributes, ReactNode } from "react";

export type SingleCharInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "maxLength">;