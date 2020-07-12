import React from 'react';
import {NavLink,Link} from 'react-router-dom'; 
import {connect} from 'react-redux';


const Footer = (props)=>{

    return (

        <footer class="mainfooter" role="contentinfo">
            
            <div class="footer-middle">

                <div class="container">

                    <div class="row">

                        <div class="col-md-6 mx-auto copy">

                                <div class="footer-pad">
                                    <p>Established in 1991</p> 
                                    <p>Registration number : 315</p> 
                                    <p>Address : Kelgeri road, Sampige nagar, Dharwad -08.</p>
                                    <p>Contact : +91-9481123105</p>
                                </div>
                        </div>

                        <div class="col-md-2 mx-auto"></div>

                        <div class="col-md-4 mx-auto social">
                            <div class="footer-pad">
                                <p class="info">Follow Us</p>
                                <ul class="social-network social-circle">
                                    <li><a href="https://www.facebook.com/basavaraddischool/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCj_hq8dEDEg2icaepB95FqA" class="icoYoutube" title="Youtube"><i class="fa fa-youtube"></i></a></li>
                                    <li><a href="https://goo.gl/maps/mXZSRZKoWXfTgVNE6" class="icoGooglemap" title="Googlemap"><i class="fa fa-map-marker"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>

                </div>

                <div class="footer-last">
                    <div>
                        <p class="text-center">&copy; Copyright 2020 - BEMS. All rights reserved.</p>
                        <p class="text-center"> Website built and managed by Web<b>V</b>erse</p>
                    </div>
                    
                </div>
        </div>


        
</footer>
  
)}

const mapStateToProps = (state)=>({
    announcement:state.annoucement
});

 
export default connect (mapStateToProps) (Footer);