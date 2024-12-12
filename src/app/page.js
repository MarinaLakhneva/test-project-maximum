"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {GetData} from "../app/request";
import {useModelStore} from "../app/store/store";
import {engines, brands, complectations} from "./mock"
import styles from "./page.module.scss";
import Car from "../../public/assets/mock.png";

const byDefault = "Chery";
const initialData = await GetData(byDefault);

export default function Home() {
    const router = useRouter();
    const [brand, setBrand] = useState(byDefault);
    const [engine, setEngine] = useState("");
    const [complectation, setComplectation] = useState("");
    const [data, setData] = useState(initialData);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await GetData(brand);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [brand]);
    
    const setModelData = useModelStore(state => state.setModelData);
    const handleClickAbout = (count) => {
        const modelData = JSON.stringify(data[count]);
        setModelData(modelData);
        router.push('/about');
    };
    
    const handleClickReset = () => {
        setBrand(byDefault);
        setEngine("");
        setComplectation("");
    };

    return (
        <main className={styles.main}>
            <p className={styles.brand}>Автомобили Chery в СПб</p>
            <div className={styles.content}>
                <div className={styles.filter}>
                    <p className={`${styles.heading} ${styles.mobile}`}>Бренд</p>
                    <div className={styles.container}>
                        {brands.map((volume, index) => (
                            <p
                                className={`${styles.variant} ${volume === brand ? styles.selected : ''}`}
                                key={index}
                                onClick={() => setBrand(brands[index])}
                            >
                                {volume}
                            </p>
                        ))}
                    </div>
                    <div className={styles.mobile}>
                        <hr className={styles.hr}/>
                        <p className={styles.heading}>Объем двигателя</p>
                        <div className={styles.container}>
                            {engines.map((volume, index) => (
                                <p className={styles.variant}
                                   key={index}
                                   onClick={() => setEngine(engines[index])}
                                >
                                    {volume}
                                </p>
                            ))}
                        </div>
                        <hr className={styles.hr}/>
                        <p className={styles.heading}>Комплектация</p>
                        <div className={styles.container}>
                            {complectations.map((volume, index) => (
                                <p className={styles.variant}
                                   key={index}
                                   onClick={() => setComplectation(complectations[index])}
                                >
                                    {volume}
                                </p>
                            ))}
                        </div>
                        <hr className={styles.hr}/>
                        <button className={styles.resetButton} onClick={() => handleClickReset()}>Сбросить фильтр
                        </button>
                    </div>
                </div>
                <div className={styles.cards}>
                    {data.length === 0 ? (
                            <p>Такой модели, к сожалению, нет в салоне. Попробуйте зайти позднее.</p>
                        ) : (
                        data.map((car, index) => (
                        <div className={styles.card} key={index}>
                            <div  className={styles.mock}>
                                <Image className={styles.car} src={Car} alt="car"/>
                            </div>
                            <p className={styles.title}>{car.brandName} {car.modelName}</p>
                            <p className={styles.description}>
                                {car.EngineSize} л. / {car.Power} л. с. / {car.Transmission}
                            </p>
                            <button className={styles.information}
                                    onClick={() => handleClickAbout(index)}
                            >
                                Подробнее
                            </button>
                        </div>
                    )))}
                </div>
            </div>
        </main>
    );
}
