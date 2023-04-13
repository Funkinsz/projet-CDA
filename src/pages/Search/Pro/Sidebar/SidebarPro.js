import styles from './SidebarPro.module.scss';
import React from "react"
import Slider from "@mui/material/Slider"

export default function SidebarPro() {
    const [range, setRange] = React.useState([0, 100])

    function handleChanges(e, newValue) {
        setRange(newValue)
    }
    return (
        <div className={`${styles.sidebar} sidebar d-flex flex-column aie p10`}>
            <div className={`${styles.filter} sidebar filter search_bar d-flex p10`}>
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
            <div className={`${styles.filter} p10`}>
                <select className='p5'>
                    <option value="">
                        Style
                    </option>
                </select>
            </div>
            <div className={`${styles.filter} p10`}>
                <span>Sono : 
                    <input type="checkbox" />
                </span>
            </div>
            <div className={`${styles.filter} p10`}>
                <span>Prix de {range[0]} à {range[1]} €</span>
                <div className='range-slider'>
                    <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto" />
                </div>
            </div>
        </div>
    )
}