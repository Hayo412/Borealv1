import Link from 'next/link'
import Head from "next/head"
import Layout from '../components/Layout'


export default () => (
    <Layout>
        <Head>
            <title>What we do</title>
            <meta name="description" content="Generic Page" />
        </Head>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div className="row">
                        <span className="image main"><img src="/static/images/banner.jpg" alt="" /></span>
                            <h2>3D RENDERING | VIRTUAL REALITY | REAL ESTATE VIDEO</h2>
                            <div className="6u 12u$(small)">
                                <span className="image main"><img src="/static/images/pic04.jpg" alt="" /></span>  
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
