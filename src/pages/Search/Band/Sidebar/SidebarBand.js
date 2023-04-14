import styles from './SidebarBand.module.scss'

export default function SidebarBand() {
    return (
        <div className={`${styles.absolute}`}>
            <div className={`${styles.sidebar} sidebar d-flex flex-column aie p10`}>
                <div className={`${styles.filter} filter search_bar d-flex p20 jce`}>
                    <div className='search d-flex'>
                        <span className='d-flex aic'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input 
                            type="text" 
                            name='filter'
                            id='filter'
                            placeholder='Filtre'
                        />
                    </div>
                </div>
                <div className={`${styles.filter} p20`}>
                    <span className='d-flex jce aic'>
                        Style : 
                        <select className='p5'>
                            <option value="">
                            </option>
                        </select>
                    </span>
                </div>
                <div className={`${styles.filter} p20`}>
                    <span className='d-flex jce aic'>
                        Besoin de : 
                        <select className='p5'>
                            <option value="">
                            </option>
                        </select>
                    </span>
                </div>
                <div className={`${styles.filter} p20`}>
                    <span className='d-flex jce aic'>
                        Département : 
                        <select className='p5'>
                            <option value="">
                            </option>
                        </select>
                    </span>
                </div>
            </div>
        </div>
    )
}