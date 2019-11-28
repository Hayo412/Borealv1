
const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <h2>CONTACT US</h2>
             <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque 
             venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae 
             egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, 
             commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
            <section className="row">
                
                    <div className="4u 12u$(medium)">
                        <h4>PHONE</h4> 
                        <div><hr/></div>
                        <span>(33) 3647 87643<br/>
                        (33) 3647 87643
                        </span>
                        
                    </div>

                    <div className="4u 12u$(medium)">
                        <h4>EMAIL</h4>
                        <div><hr/></div>
                        <a href="#">info@boreal.com</a>
                    </div>
                    
                    <div className="4u 12u$(medium)">
                        <h4>ADDRESS</h4>
                        <div><hr/></div>
                        <span>Av. López Mateos<br />
                        WeWork Midtown<br />
                        Guadalajara,Jal. México</span>
                    </div>
               
            </section>
            <ul className="icons">
                <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-pinterest"><span className="label">Pinterest</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; By Guaostudio 2019  </li><li> <a href="#">Terms and Conditions</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
