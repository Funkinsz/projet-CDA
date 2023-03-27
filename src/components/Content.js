import styles from "./Content.module.scss"

export default function Content() {
    return (
        <div className='d-flex flex-fill exemple-content'>
            <h1 className={`d-flex flex-fill ${styles.content}`}>Content</h1>
        </div>
    )
}