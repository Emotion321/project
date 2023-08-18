import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required"), // Updated error message
    email: yup
      .string()
      .email()
      .required(),
    age: yup
      .number()
      .positive("Age must be a positive number")
      .integer("Age must be a number")
      .min(18, "Age must be at least 18 or above")
      .required("Age is required"),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Write down the same password as in the field above")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        {errors.fullName && <span>{errors.fullName.message}</span>}
      </div>
      <div>
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input type="number" placeholder="Age" {...register("age")} />
        {errors.age && <span>{errors.age.message}</span>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <br />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
