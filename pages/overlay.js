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
                                    <header>
                                        <h3> <span className="icon fa-cube"></span> <br/>3D<br/>Rendering</h3>
                                        
                                    </header>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>
                                
                            </div>
                        
                            <div className="4u 12u$(medium) tiles">
                                <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                                    <header className="">
                                        <h3> <span className="icon fa-vr-card-board"></span> <br/>Virtual<br/>Reality</h3>
                                    </header>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>
                            </div>
                            
                            <div className="4u 12u$(medium) tiles">
                                <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header>
                            <h3> <span className="icon fa-home"></span> <br/>Real Estate<br/>Video</h3>
                        </header>
                        <Link href="/#"><a className="link primary"></a></Link>
                    </article>
                            </div>
                      
                            <div className="6u 12u$(small) tileslow">
                                <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>  
                            </div>

                            <div className="6u 12u$(small) tileslow">
                                <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>  
                            </div>

                            <div className="6u 12u$(small) tileslow">
                                <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>  
                            </div>
                            <div className="6u 12u$(small) tileslow">
                                <article style={{backgroundImage: `url('/static/images/pic07.jpg')`}}>
                                    <Link href="/#"><a className="link primary"></a></Link>
                                </article>  
                            </div>

                            <span className="image main tileslow"><article style={{backgroundImage: `url('/static/images/pic08.jpg')`}}>
                                <Link href="/#"><a className="link primary"></a></Link></article></span>
                            
                
                                <div className="4u 12u$(medium) tileslow">
                                    <article style={{backgroundImage: `url('/static/images/pic09.jpg')`}}>
                                        <Link href="/#"><a className="link primary"></a></Link>
                                    </article>
                                </div>
            
                                <div className="4u 12u$(medium) tileslow">
                                    <article style={{backgroundImage: `url('/static/images/pic10.jpg')`}}>
                                        <Link href="/#"><a className="link primary"></a></Link>
                                    </article>
                                </div>
                                
                                <div className="4u 12u$(medium) tileslow">
                                    <article style={{backgroundImage: `url('/static/images/pic11.jpg')`}}>
                                        <Link href="/#"><a className="link primary"></a></Link>
                                    </article>
                                </div>
                        </div>
                </div>
            </section>
        </div>
    </Layout>
)
