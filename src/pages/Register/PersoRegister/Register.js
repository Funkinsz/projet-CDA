import styles from "../Register.module.scss";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { createUserPerso, verifyUser } from "../../../apis/user";
import { AuthContext } from "../../../context";

export default function RegisterPro() {
  const { user } = useContext(AuthContext);
  // Toggle pour charger les etape du formulaire
  const [isHidden, setIsHidden] = useState(false);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  // toggle pour afficher ou cacher le MDP lors de l'inscription
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  // Vérification du formulaire d'incription par la methode YUP
  const navigate = useNavigate();

  const maxFileSize = 102400;

  const validFileExtensions = {
    image: ["jpg", "gif", "png", "jpeg", "svg", "webp", "jfif"],
  };

  function isValidFileType(fileName, fileType) {
    return (
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split(".")) > -1
    );
  }

  const validationSchema = yup.object({
    surname: yup
      .string()
      .required("Ce champs doit être saisi")
      .min(2, "Au moins 2 caractères"),
    status: yup.string(),
    email: yup
      .string()
      .required("Ce champs doit être saisi")
      .email("Email non valide"),
    password: yup
      .string()
      .required("Ce champs doit être saisi")
      .min(8, "Le mot de passe doit contenir 8 caractères au minimum"),
    confirmPSWD: yup
      .string()
      .required("Ce champs doit être saisi")
      .oneOf([yup.ref("password"), ""], "Le mot de passe ne correspond pas"),
    date: yup.string().required("Ce champs doit être saisi"),
    name: yup
      .string()
      .required("Ce Champs doit être saisi")
      .min(2, "Au moins 2 caractères"),
    firstname: yup
      .string()
      .required("Ce Champs doit être saisi")
      .min(2, "Au moins 2 caractères"),
    city: yup
      .string()
      .required("Ce Champs doit être saisi")
      .min(2, "Au moins 2 caractères"),
    travel: yup
      .string()
      .required("Ce Champs doit être saisi")
      .min(2, "Au moins 2 caractères"),
  });

  const validationImage = yup.object().shape({
    image: yup
      .mixed()
      .test("is-valid-type", "Not a valid image type", (value) =>
        isValidFileType(value && value.name.toLowerCase(), "image")
      )
      .test(
        "is-calid-size",
        "Max allowed size is 100Ko",
        (value) => value && value.size >= maxFileSize
      ),
  });

  const initialValues = {
    surname: "",
    email: "",
    password: "",
    status: "",
    name: "",
    firstname: "",
    city: "",
    travel: "",
    image: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema, validationImage),
  });

  const submit = handleSubmit(async (values) => {
    try {
      clearErrors();
      await verifyUser(values);
      setError("generic", {
        type: "generic",
        message: "Adresse email déjà utilisé",
      });
    } catch (error) {
      clearErrors();
      try {
        clearErrors();
        await createUserPerso(values);
        console.log(values.image[0].name);
        navigate("/login");
      } catch (message) {
        console.error(message);
      }
    }
  });

  return (
    <>
      {user ? (
        <Navigate to="/profile" />
      ) : (
        <div className={`${styles.log} log d-flex flex-fill flex-column aic`}>
          <div
            className={`${styles.contentform} contentform d-flex flex-column aic jcc`}>
            <div className={`${styles.title} title d-flex flex-column aic m10`}>
              <h1 className={`${styles.titre} m5`}>INSCRIPTION</h1>
              <NavLink to="/register-pro">
                Je ne suis pas un artiste ou DJ mais organisateur d'évènement →
              </NavLink>
            </div>

            <form
              onSubmit={submit}
              className={`${styles.form} d-flex flex-column aic m5 p5`}>
              <div
                className={`${styles.block} d-flex flex-column flex-fill aic jcc`}
                style={{
                  display: isHidden === false ? "flex" : "none",
                }}>
                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="surname" htmlFor="">
                    Nom de scène
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="text"
                    name="surname"
                    {...register("surname")}
                  />
                  {errors?.surname && (
                    <p className="error">{errors.surname.message}</p>
                  )}
                </div>

                <input
                  type="hidden"
                  name="status"
                  value="perso"
                  {...register("status", {
                    required: {
                      value: true,
                    },
                  })}
                />

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="email" htmlFor="">
                    Adresse e-mail
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="email"
                    name="email"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="password" htmlFor="">
                    Mot de passe
                  </label>
                  <div className={`${styles.pswd} d-flex`}>
                    <input
                      type={passwordShow ? "text" : "password"}
                      name="password"
                      {...register("password")}
                    />
                    <button type="button" onClick={togglePassword}>
                      {passwordShow === false ? (
                        <i className="fa-regular fa-eye-slash"></i>
                      ) : (
                        <i className="fa-solid fa-eye"></i>
                      )}
                    </button>
                  </div>
                  {errors?.password && (
                    <p className="error">{errors.password.message}</p>
                  )}
                </div>

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="confirmPSWD" htmlFor="">
                    Confirmation du mot de passe
                  </label>
                  <div className={`${styles.pswd} d-flex jcsb`}>
                    <input
                      type={passwordShow ? "text" : "password"}
                      name="confirmPSWD"
                      {...register("confirmPSWD")}
                    />
                    <button type="button" onClick={togglePassword}>
                      {passwordShow === false ? (
                        <i className="fa-regular fa-eye-slash"></i>
                      ) : (
                        <i className="fa-solid fa-eye"></i>
                      )}
                    </button>
                  </div>
                  {errors?.confirmPSWD && (
                    <p className="error">{errors.confirmPSWD.message}</p>
                  )}
                </div>

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="date" htmlFor="">
                    Date de naissance
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="date"
                    name="date"
                    {...register("date")}
                  />
                  {errors?.date && (
                    <p className="error">{errors.date.message}</p>
                  )}
                </div>

                <div className={`${styles.btnform} btnform d-flex jcc`}>
                  <button
                    onClick={toggleHidden}
                    type="button"
                    className="btn btn-primary">
                    SUIVANT
                  </button>
                </div>
              </div>

              <div
                className={`${styles.block} d-flex flex-column flex-fill aic jcc`}
                style={{
                  display: isHidden === true ? "flex" : "none",
                }}>
                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="name" htmlFor="">
                    Nom
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="text"
                    name="name"
                    {...register("name")}
                  />
                  {errors?.name && (
                    <p className="error">{errors.name.message}</p>
                  )}
                </div>

                <input
                  type="hidden"
                  name="status"
                  value="pro"
                  {...register("status")}
                />

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="firstname" htmlFor="">
                    Prenom
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="text"
                    name="firstname"
                    {...register("firstname")}
                  />
                  {errors?.firstname && (
                    <p className="error">{errors.firstname.message}</p>
                  )}
                </div>

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="city" htmlFor="">
                    Ville
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="text"
                    name="city"
                    {...register("city")}
                  />
                  {errors?.city && (
                    <p className="error">{errors.city.message}</p>
                  )}
                </div>

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="travel" htmlFor="">
                    Disponibilité en Km
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="text"
                    name="travel"
                    {...register("travel")}
                  />
                  {errors?.travel && (
                    <p className="error">{errors.travel.message}</p>
                  )}
                </div>

                <div
                  className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                  <label className="m5" name="image" htmlFor="">
                    Imagine
                  </label>
                  <input
                    className={`${styles.input}`}
                    type="file"
                    name="image"
                    {...register("image")}
                  />
                  {errors?.image && (
                    <p className="error">{errors.image.message}</p>
                  )}
                </div>

                {errors.generic && (
                  <p className="error">{errors.generic.message}</p>
                )}

                <div className={`${styles.groupBTN}`}>
                  <button
                    onClick={toggleHidden}
                    type="button"
                    className="btn btn-primary">
                    PRECEDENT
                  </button>
                  <button disabled={isSubmitting} className="btn btn-primary">
                    VALIDER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
