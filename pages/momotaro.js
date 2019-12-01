import Link from 'next/link'
import Layout from '../components/Layout'


export default () => (
    <Layout>
        <div>
          
            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
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
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Massa libero</h2>
                        </header>

                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section>
                <section id="one">
                    <div className="inner">
                    
                    <div><h2  >3D RENDERING | VIRTUAL REALITY | REAL ESTATE VIDEO</h2></div>
                        <div className="row">
                            
                              
                                <div className="4u 12u$(medium) ">
                                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                                        <header className="major">
                                            <h3>Magna</h3>
                                            <p>Lorem etiam nullam</p>
                                        </header>
                                        <Link href="/landing"><a className="link primary"></a></Link>
                                    </article>
                                </div>
            
                                <div className="4u 12u$(medium) ">
                                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                                        <header className="major">
                                            <h3>Magna</h3>
                                            <p>Lorem etiam nullam</p>
                                        </header>
                                        <Link href="/landing"><a className="link primary"></a></Link>
                                    </article>
                                </div>
                                
                                <div className="4u 12u$(medium) ">
                                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                                        <header className="major">
                                            <h3>Magna</h3>
                                            <p>Lorem etiam nullam</p>
                                        </header>
                                        <Link href="/landing"><a className="link primary"></a></Link>
                                    </article>
                                </div>
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

        </div>
    </Layout>
)
