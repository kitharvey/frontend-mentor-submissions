import Head from 'next/head'
import React from 'react'
import styles from './testimonialsGridStyle.module.scss'

const TestimonialsGridSection = () => {
        return (
            <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 

                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <meta name="description" content="Frontend Mentor | Testimonials Grid Section | HTML CSS | JUNIOR | Solution" />
                <title>Frontend Mentor | Testimonials Grid Section</title>
            </Head>
            <div className={styles.TestimonialsGridSectionWrapper}>
            <div className={styles.container} >
                <ul>
                <li className={styles.danielClifford} >
                    <div className={styles.top}>   
                    <img src="./testimonial-grid-section/image-daniel.jpg" alt="Daniel Clifford"/>
                    <div className={styles.nameWrapper} >
                        <p className={styles.name} >Daniel Clifford</p>
                        <p className={styles.subname}>Verified Graduate</p>
                    </div> 
                    </div>
                    <p className={styles.headline} >
                    I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                    in the company I joined. I honestly feel I got every penny’s worth.
                    </p>
                    <blockquote>
                    “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                    transition and have heard some people who had an amazing experience here. I signed up 
                    for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                    The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
                    </blockquote>

                </li>
                <li className={styles.jonathanWalters} >
                    <div className={styles.top}>   
                    <img src="./testimonial-grid-section/image-jonathan.jpg" alt="Jonathan Walters"/>
                    <div className={styles.nameWrapper} >
                        <p className={styles.name} >Jonathan Walters</p>
                        <p className={styles.subname} >Verified Graduate</p>
                    </div> 
                    </div>
                    <p className={styles.headline}>
                    The team was very supportive and kept me motivated
                    </p>
                    <blockquote>
                    “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                    for a big company. This was one of the best investments I’ve made in myself. ”
                    </blockquote>

                </li>
                <li className={styles.kiraWhittle} >
                    <div className={styles.top}>   
                    <img src="./testimonial-grid-section/image-kira.jpg" alt="Kira Whittle"/>
                    <div className={styles.nameWrapper} >
                        <p className={styles.name} >Kira Whittle</p>
                        <p className={styles.subname} >Verified Graduate</p>
                    </div> 
                    </div>
                    <p className={styles.headline} >
                    Such a life-changing experience. Highly recommended!
                    </p>
                    <blockquote>
                    “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                    professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                    student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                    did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                    project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                    could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                    experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                    100% recommend! ”
                    </blockquote>
                </li>
                <li className={styles.jeanetteHarmon} >
                    <div className={styles.top}>   
                    <img src="./testimonial-grid-section/image-jeanette.jpg" alt="Jeanette Harmon"/>
                    <div className={styles.nameWrapper} >
                        <p className={styles.name} >Jeanette Harmon</p>
                        <p className={styles.subname} >Verified Graduate</p>
                    </div> 
                    </div>
                    <p className="headline">
                    An overall wonderful and rewarding experience
                    </p>
                    <blockquote>
                    “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                    while doing something I love. ”
                    </blockquote>
                </li>
                <li className={styles.patrickAbrams} >
                    <div className={styles.top}>   
                    <img src="./testimonial-grid-section/image-patrick.jpg" alt="Patrick Abrams"/>
                    <div className={styles.nameWrapper} >
                        <p className={styles.name} >Patrick Abrams</p>
                        <p className={styles.subname} >Verified Graduate</p>
                    </div> 
                    </div>
                    <p className={styles.headline} >
                    Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                    learning from their experiences was easy.
                    </p>
                    <blockquote>
                    “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                    gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                    junior developer. The standard is above the rest. You will get the personal attention you need from 
                    an incredible community of smart and amazing people. ”
                    </blockquote>
                </li>
                
                </ul>
            </div>
            
            
            <div className={styles.attribution}>
                Challenge by <a rel="noopener" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a rel="noopener" href="https://github.com/kitharvey/frontend-mentor-testimonials-grid-section" target="_blank">kitharvey</a>.
            </div>
            </div>
            </>
        );
}


export default TestimonialsGridSection