import React from 'react';
import {NavLink,Link} from 'react-router-dom'; 


const Footer = ()=>{

    return (

        <footer class="mainfooter" role="contentinfo">
            
            <div class="footer-middle">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-6">
                            <div class="footer-pad">
                                <h4>More</h4>
                                <ul class="list-unstyled">
                                    <li><a><NavLink to="/registration" activeClassName="is-active">Register</NavLink></a></li>
                                    <li><a><NavLink to="/login" activeClassName="is-active">Login</NavLink></a></li>
                                    <li><a><NavLink to="/gallery" activeClassName="is-active">Gallery</NavLink></a></li>
                                    <li><a><NavLink to="/downloads" activeClassName="is-active">Downloads</NavLink></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6">
                            <div class="footer-pad">
                                <h4>Follow Us</h4>
                                <ul class="social-network social-circle">
                                    <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#" class="icoInstagram" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12 copy">
                            <p class="text-center">&copy; Copyright 2020 - BEMS. All rights reserved.</p>
                        </div>
                    </div>


                </div>
        </div>
</footer>
  
)}

export default Footer;