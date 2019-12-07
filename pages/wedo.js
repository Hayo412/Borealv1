import Link from 'next/link'
import Head from "next/head"
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Sidenav from '../components/Sidenav'

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
                            <Sidenav/>
                        </header>
                        <span className="image main"><img src="/static/images/banner.jpg" alt="" /></span>
                        <h1>3D RENDERING | VIRTUAL REALITY | REAL ESTATE VIDEO</h1>
                       
                    </div>
                </section>
            </div>
        <div>
            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header>
                            <h3>Aliquam</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Tempus</h3>
                            <p>feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Magna</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            
                        </header>
                        <span className="image main"><img src="/static/images/pic12.jpg" alt="" /></span>
                       
                    </div>
                </section>
            </div>

            </div>

        </div>
    </Layout>
)
