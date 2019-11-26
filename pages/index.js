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
                        <header className="major"> 
                        </header>
                        <span className="image main"><img src="/static/images/pic11.jpg" alt="" /></span>
                        
                    </div>
                    <div className="inner">
                            <div>
                                    <div className="row ">
                                    
                                        <span className="4u 12u$(medium)"><img src="/static/images/pic01.jpg" alt="" /></span>
                                        <span className="4u 12u$(medium)"><img src="/static/images/pic02.jpg" alt="" /></span>
                                        <span className="4u 12u$(medium)"><img src="/static/images/pic03.jpg" alt="" /></span>
                                    </div>
                            </div>

                            <h1>3D RENDERING | VIRTUAL REALITY | REAL ESTATE VIDEO</h1>
                            <span className="image main"><img src="/static/images/pic12.jpg" alt="" /></span>  
                    </div>
                </section>
            </div>

    </Layout>
)
