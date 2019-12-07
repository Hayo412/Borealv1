import Head from "next/head"
import Layout from '../components/Layout'
import Sidenav from '../components/Sidenav'


export default () => (
    <Layout>
        <Head>
            <title>Who we are</title>
            <meta name="description" content="Elements Page" />
        </Head>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Who we are</h2>
                    </header>
                    <Sidenav/>
                    <div className="row">
                        
         
                    </div>

                </div>
            </section>

        </div>
    </Layout>
)
