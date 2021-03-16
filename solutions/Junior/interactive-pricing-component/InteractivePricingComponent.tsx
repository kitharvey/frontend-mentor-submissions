import Head from "next/head"
import { ChangeEvent, useState } from "react"
import styles from './InteractivePricingStyle.module.scss'

const items = [
    {
        views: '10K',
        amount: 8
    },
    {
        views: '50K',
        amount: 12
    },
    {
        views: '100K',
        amount: 16
    },
    {
        views: '500k',
        amount: 24
    },
    {
        views: '1M',
        amount: 36
    },
]


const InteractivePricingComponent = () => {
    const [data, setData] = useState(items.slice())
    const [rangeIndex, setRangeIndex] = useState<number>(2)

    const handleOnCheck = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked) {
            const tempdata = items.slice().map( ({views, amount}) => {
                const discounted = amount * .75
                return {views, amount: discounted}
            })
            setData(tempdata)
        } 
        else {
            setData(items.slice())
        } 
    }

    const handleRangeChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setRangeIndex(+event.target.value)
    }

        return (
            <>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Frontend Mentor Challenge | Interactive pricing component | Junior | HTML, JS, CSS"/>
                    <meta name="keywords" content="HTML, CSS, JavaScript"/>
                    <meta name="author" content="kitharvey"/>

                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    
                    <title>Frontend Mentor | Interactive pricing component</title>
                </Head>

                <div className={styles.interactivePricingWrapper} >
                    <div className={styles.title} >
                        <h2>Simple, traffic-based pricing</h2>
                        <p>Sign-up for our 30-day trial. No credit card required. </p>
                    </div>
                    <div className={styles.mainWrapper}>
                        <div className={styles.mainSection}>
                        <div className={styles.top} >
                            <div className={styles.head} >
                            <p className={styles.pageviews} ><span>{data[rangeIndex].views}</span> Pageviews</p>
                            <p className={styles.amount} ><span>${(data[rangeIndex].amount).toFixed(2)}</span>/month</p>
                            <div className={styles.slidecontainer}>
                                <input type="range" min="0" max="4" value={rangeIndex} step="1" className={styles.slider} id="myRange" aria-labelledby="views-number amount-number" 
                                onChange={handleRangeChanges}
                                style={{
                                    background: `linear-gradient(to right, #a3f3ea ${rangeIndex*25}%, #ecf3fd ${rangeIndex*25}%)`
                                }}
                                />
                            </div>
                            </div>
                            <div className={styles.billings} >
                            <p className={styles.billing} id="billingMonthly" >Monthly Billing</p>
                            <input type="checkbox" className={styles.checkboxBtn} id="checkbox" aria-labelledby="billingYearly billingMonthly" onChange={handleOnCheck}/>
                            <p className={styles.billing} id="billingYearly" >Yearly Billing <span className={styles.discount} >25% discount</span><span className={styles.discountMobile} >-25%</span></p>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <ul className={styles.checklist} >
                            <li className={styles.checkitem}>
                                <p>Unlimited websites</p>
                            </li>
                            <li  className={styles.checkitem}>
                                <p>100% data ownership</p>
                            </li>
                            <li  className={styles.checkitem}>
                                <p>Email reports</p>
                            </li>
                            </ul>

                            <a href="#" className={styles.startButton} >
                            Start my trial
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className={styles.attribution}>
                        Challenge by <a href="https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8" target="_blank">Frontend Mentor</a>. 
                        Coded by <a href="#">kitharvey</a>.
                    </div>
                    </div>
            </>
        );
}


export default InteractivePricingComponent