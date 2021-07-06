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
import logoIVB from './logo/IVB.png'
import logoZalopay from './logo/zalopay_icon.png'
import logoViettin from './logo/VIETTINBANK.png'
import logoVCB from './logo/VCB.png'
import logoTouch from './logo/TOUCH.png'
import logoStarlight from './logo/STARLIGHT.png'
import logoPayoo from './logo/payoo.jpg'
import logoLaban from './logo/laban.png'
import logoAgribank from './logo/AGRIBANK.png'
import logo123go from './logo/123go.png'
import logoDcine from './logo/dcine.png'
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
                        <a target="_blank" href="https://www.cgv.vn/" className="logoS"><img src={logoCgv} alt="" /></a>
                        <a target="_blank" href="https://www.galaxycine.vn/" className="logoS"><img src={logoGalaxy} alt="" /></a>
                        <a target="_blank" href="http://lottecinemavn.com/LCHS/index.aspx" className="logoS"><img src={logoLotte} alt="" /></a>
                        <a target="_blank" href="https://www.bhdstar.vn/" className="logoS"><img src={logoBhd} alt="" /></a>
                        <a target="_blank" href="https://www.megagscinemas.vn/" className="logoS"><img src={logoMegags} alt="" /></a>
                    </li>
                    <li className="logoL">
                        <a target="_blank" href="http://ddcinema.vn/" className="logoS"><img src={logoDongda} alt="" /></a>
                        <a target="_blank" href="http://cinestar.com.vn/" className="logoS"><img src={logoCinestar} alt="" /></a>
                        <a target="_blank" href="https://cinemaxvn.com/" className="logoS"><img src={logoCnx} alt="" /></a>
                        <a target="_blank" href="https://www.betacinemas.vn/home.htm" className="logoS"><img src={logoBt} alt="" /></a>
                        <a target="_blank" href="https://www.indovinabank.com.vn/" className="logoS"><img src={logoIVB} alt="" /></a>
                    </li>
                    <li className="logoL">
                        <a target="_blank" href="https://touchcinema.com/" className="logoS"><img src={logoTouch} alt="" /></a>
                        <a target="_blank" href="http://starlight.vn/" className="logoS"><img src={logoStarlight} alt="" /></a>
                        <a target="_blank" href="https://www.dcine.vn/" className="logoS"><img src={logoDcine} alt="" /></a>
                        <a target="_blank" href="https://zalopay.vn/" className="logoS"><img src={logoZalopay} alt="" /></a>
                        <a target="_blank" href="https://www.payoo.vn/" className="logoS"><img src={logoPayoo} alt="" /></a>
                    </li>
                    <li className="logoL">
                        <a target="_blank" href="https://www.vietcombank.com.vn/" className="logoS"><img src={logoVCB} alt="" /></a>
                        <a target="_blank" href="http://www.agribank.com.vn/" className="logoS"><img src={logoAgribank} alt="" /></a>
                        <a target="_blank" href="https://www.vietinbank.vn/" className="logoS"><img src={logoViettin} alt="" /></a>
                        <a target="_blank" href="http://123go.vn" className="logoS"><img src={logo123go} alt="" /></a>
                        <a target="_blank" href="http://laban.vn" className="logoS"><img src={logoLaban} alt="" /></a>
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
                <section className="footer-bottom-section flex-rw mt-5">
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
