import Link from 'next/link'
import Head from "next/head"
import Layout from '../components/Layout'
import Banner from '../components/Banner'


export default () => (
    <Layout>
        <Head>
            <title>What we do</title>
            <meta name="description" content="Generic Page" />
        </Head>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                     
                    <Banner />
                <div><h2  >3D RENDERING | VIRTUAL REALITY | REAL ESTATE VIDEO</h2></div>
              
                    <div className="row">
                        
                            <div className="4u 12u$(medium) tiles ">
                                <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                                    <header className="major">
                                        <h3>Aliquam</h3>
                                        <p>Ipsum dolor sit amet</p>
                                    </header>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>
                                
                            </div>
                        
                            <div className="4u 12u$(medium) tiles">
                                <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                                    <header className="major">
                                        <h3>Aliquam</h3>
                                        <p>Virtual Reality</p>
                                    </header>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>
                            </div>
                            
                            <div className="4u 12u$(medium) tiles">
                                <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Aliquam</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/#"><a className="link primary"></a></Link>
                    </article>
                            </div>
                      
                            <div className="6u 12u$(small)">
                                <span className="image main "><img src="/static/images/pic04.jpg" alt="" /></span>  
                            </div>
                            <div className="6u 12u$(small)">
                                <span className="image main"><img src="/static/images/pic05.jpg" alt="" /></span>
                            </div>

                            <div className="6u 12u$(small)">
                                    <span className="image main"><img src="/static/images/pic06.jpg" alt="" /></span>  
                                </div>
                                <div className="6u 12u$(small)">
                                    <span className="image main"><img src="/static/images/pic07.jpg" alt="" /></span>
                            </div>

                            <span className="image main"><img src="/static/images/pic08.jpg" alt="" /></span>
                
                                <div className="4u 12u$(medium)">
                                    <span className="image main"><img src="/static/images/pic09.jpg" alt="" /></span>
                                </div>
            
                                <div className="4u 12u$(medium)">
                                    <span className="image main"><img src="/static/images/pic10.jpg" alt="" /></span>
                                </div>
                                
                                <div className="4u 12u$(medium)">
                                    <span className="image main"><img src="/static/images/pic11.jpg" alt="" /></span>
                                </div>
                        </div>
                </div>
            </section>
        </div>
    </Layout>
)
