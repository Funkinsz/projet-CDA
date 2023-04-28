import React, { useContext } from "react";
import styles from "./Forget.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context";
import { verifyUser } from "../../apis/user";

export default function Login() {
  const { user } = useContext(AuthContext);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Ce champs doit être saisi")
      .email("Email non valide")
      .test("Email valide", async (values) => {
        const object = { email: values };
        try {
            const response = await verifyUser(object);
            if (response === "user exist") {
              return true;
            } 
        } catch (error) {
            return false
        }
      }),
  });

  const initialValues = {
    email: "",
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
      await verifyUser(values);
    } catch (error) {
      setError("generic", {
        type: "generic",
        message: "Email ou mot de passe incorrect",
      });
    }
  });

  return (
    <>
      {user ? (
        <Navigate to="/profile" />
      ) : (
        <div
          className={`${styles.log} log d-flex flex-fill flex-column jcc aic`}>
          <div className={`${styles.contentform} contentform d-flex aic jcc`}>
            <form
              onSubmit={submit}
              className={`${styles.form} d-flex flex-column aic jcc m5 p30`}>
              <h1 className={`${styles.titre} p5 m5`}>
                Changer le mot de passe
              </h1>

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

              <div className={`${styles.forget} forget`}>
                <NavLink to="/login">
                  <small>Retour à la connexion</small>
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
