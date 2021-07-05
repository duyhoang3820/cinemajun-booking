/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import logoCgv from './logo/cgv.png'
import logoBhd from './logo/bhd.png'
import logoCinestar from './logo/cinestar.png'
import logoGalaxy from './logo/galaxycine.png'
import logoMegags from './logo/megags.png'
import logoCnx from './logo/cnx.jpg'
import logoLotte from './logo/lotte.png'
import logoDongda from './logo/dongdacinema.png'
import logoBt from './logo/bt.jpg'
import './Footer.css'

export default function Footer() {
    return (
        <div className="">
            <footer className="flex-rw pt-5">
                <ul className="footer-list-top">
                    <li>
                        <h4 className="footer-list-header">CineJun Cinema</h4>
                    </li>
                    <li><a href="#" className="generic-anchor footer-list-anchor" itemProp="significantLink">Giới thiệu</a></li>
                    <li><a href="#" className="generic-anchor footer-list-anchor" itemProp="significantLink">FAQ</a></li>
                    <li><a href="#" className="generic-anchor footer-list-anchor" itemProp="significantLink">Thỏa thuận sử dụng</a></li>
                    <li><a href="#" itemProp="significantLink" className="generic-anchor footer-list-anchor">Chính sách bảo mật</a></li>
                    <li><a href="#" className="generic-anchor footer-list-anchor" itemProp="significantLink">Sự kiện</a></li>
                    <li><a href="#" className="generic-anchor footer-list-anchor" itemProp="significantLink">Tiện ích online</a></li>
                </ul>
                <ul className="footer-list-top">
                    <li>
                        <h4 className="footer-list-header">Đối tác</h4>
                    </li>
                    <li className="logoL">
                        <a href="https://www.cgv.vn/" className="logo"><img src={logoCgv} alt="" /></a>
                        <a href="https://www.galaxycine.vn/" className="logo"><img src={logoGalaxy} alt="" /></a>
                        <a href="http://lottecinemavn.com/LCHS/index.aspx" className="logo"><img src={logoLotte} alt="" /></a>
                    </li>
                    <li className="logoL">
                        <a href="https://www.bhdstar.vn/" className="logo"><img src={logoBhd} alt="" /></a>
                        <a href="https://www.megagscinemas.vn/" className="logo"><img src={logoMegags} alt="" /></a>
                        <a href="http://ddcinema.vn/" className="logo"><img src={logoDongda} alt="" /></a>
                    </li>
                    <li className="logoL">
                        <a href="http://cinestar.com.vn/" className="logo"><img src={logoCinestar} alt="" /></a>
                        <a href="https://cinemaxvn.com/" className="logo"><img src={logoCnx} alt="" /></a>
                        <a href="https://www.betacinemas.vn/home.htm" className="logo"><img src={logoBt} alt="" /></a>
                    </li>
                </ul>
                <ul className="footer-list-top">
                    <li id="help">
                        <h4 className="footer-list-header">Chăm sóc khách hàng</h4>
                    </li>
                    <li><p className="generic-anchor footer-list-anchor" itemProp="significantLink">Hotline: 1900 0000</p></li>
                    <li><p className="generic-anchor footer-list-anchor" itemProp="significantLink">Giờ làm việc: 8:00 - 22:00</p></li>
                    <li id="find-a-store"><p className="generic-anchor footer-list-anchor" itemProp="significantLink">Email: duyhoang3820@gmail.com</p></li>
                    <li id="user-registration"><p className="generic-anchor footer-list-anchor" itemProp="significantLink">Tuyển dụng</p></li>
                    <li id="order-tracking"><p itemProp="significantLink" className="generic-anchor footer-list-anchor">Liên hệ quảng cáo</p></li>
                </ul>
                <section className="footer-social-section flex-rw">
                    <span className="footer-social-overlap footer-social-connect">
                        CONNECT <span className="footer-social-small">with</span> US
                    </span>
                    <span className="footer-social-overlap footer-social-icons-wrapper">
                        <a href="#" className="generic-anchor" title="Pinterest" itemProp="significantLink"><i className="fa fa-pinterest" /></a>
                        <a href="https://www.facebook.com/duyhoang3820" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook" /></a>
                        <a href="#" className="generic-anchor" title="Twitter" itemProp="significantLink"><i className="fa fa-twitter" /></a>
                        <a href="#" className="generic-anchor" title="Instagram" itemProp="significantLink"><i className="fa fa-instagram" /></a>
                        <a href="#" className="generic-anchor" title="Youtube" itemProp="significantLink"><i className="fa fa-youtube" /></a>
                        <a href="#" className="generic-anchor" title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus" /></a>
                    </span>
                </section>
                <section className="footer-bottom-section flex-rw">
                    <div className="footer-bottom-wrapper">
                        <i className="fa fa-copyright" role="copyright">
                        </i> COPYRIGHT 2021 CJ CineJun <address className="footer-address" role="company address">. </address><span className="footer-bottom-rights"> All RIGHTS RESERVED . </span>
                    </div>
                    <div className="footer-bottom-wrapper">
                        <span className="generic-anchor" rel="nofollow">Terms</span> | <span className="generic-anchor" rel="nofollow">Privacy</span>
                    </div>
                </section>
            </footer>

        </div>
    )
}
