import  Head  from "next/head";
import styles from './profileCardStyle.module.scss'
const ProfileCard: React.FC = () => {
        return (
            <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
                <meta name="description" content="Frontend Mentor Challenge | Profile card component | Newbie | HTML, CSS"/>
                <meta name="keywords" content="HTML, CSS"/>
                <meta name="author" content="kitharvey"/>
                <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
                <title>Frontend Mentor | Profile card component</title>
            </Head>
             <div className={styles.profileCardWrapper} >
                <div className={styles.card} >
                    <div className={styles.top} >
                        <img src="./profile-card-component/image-victor.jpg" alt="Victor Crest" />
                    </div>

                    <div className={styles.middle} >
                        <p className={styles.name} >Victor Crest <span className="age" >26</span></p>
                        <p className={styles.location} >London</p>
                    </div>


                    <div className={styles.bottom} >
                        <p >80K<br/><span className={styles.statTitle} >Followers</span> </p>
                        <p >803K<br/><span className={styles.statTitle}>Likes</span> </p>
                        <p >1.4K<br/><span className={styles.statTitle}>Photos</span> </p>
                    </div>
                </div>

                <footer className={styles.attribution}>
                    Challenge by <a  rel="noopener" href="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="#">kitharvey</a>.
                </footer>
            </div>

            {/* <style jsx>{`
                .attribution { font-size: 11px; text-align: center; position: absolute; bottom: 0; }
                .attribution a { color: #000000; font-weight: 700; text-decoration: none }
                
                .profile-card-wrapper{
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Cabin', sans-serif;
                    background-color: #19a1ad;
                }
                
                .profile-card-wrapper:before, .profile-card-wrapper:after {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 100vh;
                    background-size: auto;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                  }
                  
                .profile-card-wrapper:before {
                    top: 0;
                    left: 0;
                    background: url("./newbie/profile-card-component/bg-pattern-top.svg") no-repeat bottom right;
                }
                
                .profile-card-wrapper:after {
                    top: 100%;
                    left: 100%;
                    background: url("./newbie/profile-card-component/bg-pattern-bottom.svg") no-repeat top left;
                }
                
                .card{
                    position: relative;
                    z-index: 2;
                    height: 350px;
                    width: 350px;
                    border-radius: 20px;
                    background-color: #ffffff;
                    box-shadow: 0 20px 50px 0 #00000030;
                    overflow: hidden;
                    display: grid;
                    grid-template-rows: 40% 35% 25%;
                }
                
                .top{
                    position: relative;
                    background-image: url('./newbie/profile-card-component/bg-pattern-card.svg');
                }
                
                .top img{
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%) translateY(50%);
                    border-radius: 50%;
                    border: 4px solid #ffffff;
                }
                
                .middle{
                    align-self: end;
                    justify-self: center;
                    text-align: center;
                    padding-bottom: 20px;
                }
                
                .middle .name{
                    font-weight: 700;
                    font-size: 1.25rem;
                }
                .middle .age, .middle .location{
                    font-weight: 400;
                    color: #727272;
                }
                
                .bottom{
                    border-top: 1px solid #e7e7e7;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }
                
                .bottom div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                
                .bottom p{
                    font-weight: 700;
                    font-size: 1.25rem;
                    line-height: 1;
                    text-align: center;
                    white-space: pre-line;
                }
                .bottom .stat-title{
                    color: #727272;
                    font-size: .8rem;
                    font-weight: lighter;
                }
                
                @media only screen and (max-width: 600px) {
                    .profile-card-wrapper{
                        padding: 0 20px;
                    }
                    .card{
                        width: 100%;
                    }
                }
            `}</style> */}
            </>
        );
}


export default ProfileCard