import styles from '../Register.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
// import { createUser } from '../../apis/user'
import { NavLink, Navigate, useNavigate } from "react-router-dom"


export default function RegisterPro() {
    // Toggle pour charger les etape du formulaire
    const [isHidden, setIsHidden] = useState(false)

    const toggleHidden = () => {
        setIsHidden(!isHidden)
    }

    // toggle pour afficher ou cacher le MDP lors de l'inscription
    const [passwordShow, setPasswordShow] = useState(false)

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
    }

    // Vérification du formulaire d'incription par la methode YUP
    const navigate = useNavigate()

    const validationSchema = yup.object({
        surname: yup
            .string()
            .required('Ce champs doit être saisi')
            .min(2, "Au moins 2 caractères"),
        status: yup
            .string(),
        email: yup
            .string()
            .required("Ce champs doit être saisi")
            .email("Email non valide"),
        password: yup
            .string()
            .required("Ce champs doit être saisi")
            .min(8, "Le mot de passe doit contenir 8 caractères"),
        confirmPSWD: yup
            .string()
            .required("Ce champs doit être saisi")
            .oneOf(
                [yup.ref("password"), ""],
                "Le mot de passe ne correspond pas"
            ),
        date: yup
            .string()
            .required("Ce champs doit être saisi"),
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
            .min(2, "Au moins 2 caractères")
    })

    const initialValues = {
        surname: "",
        email: "",
        password: "",
        status: "",
        name: "",
        fisrtname: "",
        city: "",
        travel: ""
    }

    console.log(initialValues.status);

    const { 
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm({
        initialValues,
        resolver: yupResolver(validationSchema)
    })

    async function submit(values) {
        console.log(values);
        try {
            const response = await fetch("http://localhost:8000/addUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
            if (response.ok) {
                const newUser = await response.json()
                reset(initialValues)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className={`${styles.log} log d-flex flex-fill flex-column aic`}>
            <div className={`${styles.contentform} contentform d-flex flex-column aic jcc`}>
                <div className={`${styles.title} title d-flex flex-column aic m10`}>
                        <h1 className={`${styles.titre} m5`}>INSCRIPTION</h1>
                        <NavLink to="/register-perso">
                            Je ne suis pas un organisateur d'évènement mais artiste ou DJ →
                        </NavLink>
                    </div>

                <form onSubmit={handleSubmit(submit)} className={`${styles.form} d-flex flex-column aic m5 p5`}>

                    <div className={`${styles.block} d-flex flex-column flex-fill aic jcc`} 
                    style={{visibility: isHidden === false ? "visible" : "hidden"}}>       

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='surname' htmlFor="">Nom d'organisateur</label>
                            <input className={`${styles.input}`} type="text" name='surname' {...register("surname", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            {errors?.surname && <p className='error'>{errors.surname.message}</p>}
                        </div>

                        <input type="hidden" name="status" value="pro" {...register("status", {
                            required: {
                                value: true
                            }
                        })} />  

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='email' htmlFor="">Adresse e-mail</label>
                            <input className={`${styles.input}`} type="email" name='email' {...register("email", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            {errors?.email && <p className='error'>{errors.email.message}</p>}
                        </div>

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='password' htmlFor="">Mot de passe</label>
                            <div className={`${styles.pswd} d-flex`}>
                                <input type={passwordShow ? "text" : "password"} name='password' {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Ce champs doit être rempli"
                                    }
                                })} />
                                <button type='button' onClick={togglePassword}>
                                    {
                                        passwordShow === false
                                        ? (
                                            <i className="fa-regular fa-eye-slash"></i>
                                        ) : (
                                            <i className="fa-solid fa-eye"></i>
                                        )
                                    }
                                </button>
                            </div>
                            {errors?.password && <p className='error'>{errors.password.message}</p>}
                        </div>

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='confirmPSWD' htmlFor="">Confirmation du mot de passe</label>
                            <div className={`${styles.pswd} d-flex jcsb`}>
                                <input type={passwordShow ? "text" : "password"} name='confirmPSWD' {...register("confirmPSWD", {
                                    required: {
                                        value: true,
                                        message: "Ce champs doit être rempli"
                                    }
                                })} />
                                <button type='button' onClick={togglePassword}>
                                    {
                                        passwordShow === false
                                        ? (
                                            <i className="fa-regular fa-eye-slash"></i>
                                        ) : (
                                            <i className="fa-solid fa-eye"></i>
                                        )
                                    }
                                </button>
                            </div>
                            {errors?.confirmPSWD && <p className='error'>{errors.confirmPSWD.message}</p>}
                        </div>

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='date' htmlFor="">Date de naissance</label>
                            <input className={`${styles.input}`} type="date" name='date' {...register("date", {
                                required: {
                                    value: true,
                                    message: "Ce choix doit être rempli"
                                }
                            })} />
                            {errors?.date && <p className='error'>{errors.date.message}</p>}
                        </div>

                        <div className={`${styles.btnform} btnform d-flex jcc`}>
                            <button onClick={toggleHidden} type='button' className='btn btn-primary'>
                                SUIVANT
                            </button>
                        </div>

                    </div>

                    <div className={`${styles.block} d-flex flex-column flex-fill aic jcc`} 
                    style={{visibility: isHidden === true ? "visible" : "hidden"}}>

                    <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='name' htmlFor="">Nom</label>
                            <input className={`${styles.input}`} type="text" name='name' {...register("name", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            {errors?.name && <p className='error'>{errors.name.message}</p>}
                        </div>

                        <input type="hidden" name="status" value="pro" {...register("status", {
                            required: {
                                value: true
                            }
                        })} />  

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='firstname' htmlFor="">Prenom</label>
                            <input className={`${styles.input}`} type="text" name='firstname' {...register("firstname", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            {errors?.firstname && <p className='error'>{errors.firstname.message}</p>}
                        </div>

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='city' htmlFor="">Ville</label>
                            <input className={`${styles.input}`} type="text" name='city' {...register("city", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            {errors?.city && <p className='error'>{errors.city.message}</p>}
                        </div>

                        <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                            <label className='m5' name='travel' htmlFor="">Ville</label>
                            <input className={`${styles.input}`} type="text" name='travel' {...register("travel", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            {errors?.travel && <p className='error'>{errors.travel.message}</p>}
                        </div>

                        <div className={`${styles.groupBTN}`}>
                            <button onClick={toggleHidden} type='button' className='btn btn-primary'>
                                PRECEDENT
                            </button>
                            <button type='submit' className='btn btn-primary'>
                                VALIDER
                            </button>
                        </div>
                    </div>
                </form>                
            </div>
        </div>               
    )
}