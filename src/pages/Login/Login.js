import React, { useContext } from "react";
import styles from "./Login.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context";

export default function Login() {
  const { signin, user } = useContext(AuthContext);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Ce champs doit être saisi")
      .email("Email non valide"),
    password: yup
      .string()
      .required("Ce champs doit être saisi")
      .min(8, "Le mot de passe doit contenir 8 caractère minimum"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      clearErrors();
      await signin(values);
    } catch (error) {
      console.log(error);
      if (error === "ban") {
        setError("generic", {
          type: "generic",
          message: "Vous êtes banni, contactez l'assistance Michael VB",
        });
      } else {
        setError("generic", {
          type: "generic",
          message: "Email ou mot de passe incorrect",
        });
      }
    }
  });

  return (
    <>
      {user ? (
        <>{/* <Navigate to="/profile" /> */}</>
      ) : (
        <div
          className={`${styles.log} log d-flex flex-fill flex-column jcc aic`}>
          <div className={`${styles.contentform} contentform d-flex aic jcc`}>
            <form
              onSubmit={submit}
              className={`${styles.form} d-flex flex-column aic jcc m5 p30`}>
              <h1 className={`${styles.titre} p5 m5`}>CONNEXION</h1>

              <div
                className={`${styles.groupeform} groupeform d-flex flex-column m10 p10`}>
                <label className="m5" name="email">
                  Adresse e-mail
                </label>
                <input type="email" name="email" {...register("email")} />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>

              <div
                className={`${styles.groupeform} groupeform d-flex flex-column m10 p10`}>
                <label className="m5" name="password">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>

              <div className={`${styles.forget} forget`}>
                <NavLink to="/forget">
                  <small>Mot de passe oublié</small>
                </NavLink>
              </div>

              {errors.generic && (
                <p className="error">{errors.generic.message}</p>
              )}

              <div className={`${styles.btnform} btnform d-flex jcc p20`}>
                <button disabled={isSubmitting} className="btn btn-primary">
                  CONNEXION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
