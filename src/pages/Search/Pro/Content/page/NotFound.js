import s from "../ContentPro.module.scss";

export default function NotFound() {
  return (
    <div className={`${s.notFound} d-flex flex-column aic jcc`}>
      <h2>Pas d'annonce associée à votre recherche</h2>
    </div>
  );
}
