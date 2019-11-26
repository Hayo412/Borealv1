import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Generic Page</title>
            <meta name="description" content="Generic Page" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        
                    </header>
                    <span className="image main"><img src="/static/images/pic11.jpg" alt="" /></span>
                    <h1>3D RENDERING | VIRTUAL REALITY | REAL ESTATE VIDEO</h1>
                   
                </div>
            </section>
        </div>
    </Layout>
)
