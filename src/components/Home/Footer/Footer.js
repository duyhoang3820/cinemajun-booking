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
import style from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import cx from 'classnames';


export default function Footer() {
    return (
        <div style={{ marginTop: '100px' }}>
            <footer className={cx(style.flex_rw, "pt-3")}>
                <ul className={style.footer_list_top}>
                    <li>
                        <h4 className={style.footer_list_header}>CineJun Cinema</h4>
                    </li>
                    <li><NavLink to="*" className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">Giới thiệu</NavLink></li>
                    <li><a href="#" className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">FAQ</a></li>
                    <li><a href="#" className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">Thỏa thuận sử dụng</a></li>
                    <li><a href="#" itemProp="significantLink" className={cx(style.generic_anchor, style.footer_list_anchor)}>Chính sách bảo mật</a></li>
                    <li><a href="#" className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">Sự kiện</a></li>
                    <li><a href="#" className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">Tiện ích online</a></li>
                </ul>
                <ul className={style.footer_list_top}>
                    <li>
                        <h4 className={style.footer_list_header}>Đối tác</h4>
                    </li>
                    <li className={style.logoL}>
                        <a target="_blank" href="https://www.cgv.vn/" className={style.logoS}><img src={logoCgv} alt="" /></a>
                        <a target="_blank" href="https://www.galaxycine.vn/" className={style.logoS}><img src={logoGalaxy} alt="" /></a>
                        <a target="_blank" href="http://lottecinemavn.com/LCHS/index.aspx" className={style.logoS}><img src={logoLotte} alt="" /></a>
                        <a target="_blank" href="https://www.bhdstar.vn/" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logoBhd} alt="" /></a>
                        <a target="_blank" href="https://www.megagscinemas.vn/" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logoMegags} alt="" /></a>
                    </li>
                    <li className={style.logoL}>
                        <a target="_blank" href="http://ddcinema.vn/" className={style.logoS}><img src={logoDongda} alt="" /></a>
                        <a target="_blank" href="http://cinestar.com.vn/" className={style.logoS}><img src={logoCinestar} alt="" /></a>
                        <a target="_blank" href="https://cinemaxvn.com/" className={style.logoS}><img src={logoCnx} alt="" /></a>
                        <a target="_blank" href="https://www.betacinemas.vn/home.htm" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logoBt} alt="" /></a>
                        <a target="_blank" href="https://www.indovinabank.com.vn/" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logoIVB} alt="" /></a>
                    </li>
                    <li className={style.logoL}>
                        <a target="_blank" href="https://touchcinema.com/" className={style.logoS}><img src={logoTouch} alt="" /></a>
                        <a target="_blank" href="http://starlight.vn/" className={style.logoS}><img src={logoStarlight} alt="" /></a>
                        <a target="_blank" href="https://www.dcine.vn/" className={style.logoS}><img src={logoDcine} alt="" /></a>
                        <a target="_blank" href="https://zalopay.vn/" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logoZalopay} alt="" /></a>
                        <a target="_blank" href="https://www.payoo.vn/" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logoPayoo} alt="" /></a>
                    </li>
                    <li className={style.logoL}>
                        <a target="_blank" href="https://www.vietcombank.com.vn/" className={style.logoS}><img src={logoVCB} alt="" /></a>
                        <a target="_blank" href="http://www.agribank.com.vn/" className={style.logoS}><img src={logoAgribank} alt="" /></a>
                        <a target="_blank" href="https://www.vietinbank.vn/" className={style.logoS}><img src={logoViettin} alt="" /></a>
                        <a target="_blank" href="http://123go.vn" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logo123go} alt="" /></a>
                        <a target="_blank" href="http://laban.vn" className={cx(style.logoS, "d-sm-none d-lg-inline")}><img src={logoLaban} alt="" /></a>
                    </li>
                </ul>
                <ul className={style.footer_list_top}>
                    <li id="help">
                        <h4 className={style.footer_list_header}>Chăm sóc khách hàng</h4>
                    </li>
                    <li><p className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">Hotline: 1900 0000</p></li>
                    <li><p className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">Giờ làm việc: 8:00 - 22:00</p></li>
                    <li id="user-registration"><p className={cx(style.generic_anchor, style.footer_list_anchor)} itemProp="significantLink">Tuyển dụng</p></li>
                    <li id="order-tracking"><p itemProp="significantLink" className={cx(style.generic_anchor, style.footer_list_anchor)}>Liên hệ quảng cáo</p></li>
                </ul>
                <section className={cx(style.footer_social_section, style.flex_rw)}>
                    <span className={cx(style.footer_social_overlap, style.footer_social_connect)}>
                        CONNECT <span className={style.footer_social_small}>with</span> US
                    </span>
                    <span className={cx(style.footer_social_overlap, style.footer_social_icons_wrapper)}>
                        <NavLink to="*" className={style.generic_anchor} title="Pinterest" itemProp="significantLink"><i className="fa fa-pinterest" /></NavLink>
                        <a href="https://www.facebook.com/duyhoang3820" className={style.generic_anchor} target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook" /></a>
                        <NavLink to="*" className={style.generic_anchor} title="Twitter" itemProp="significantLink"><i className="fa fa-twitter" /></NavLink>
                        <NavLink to="*" className={style.generic_anchor} title="Instagram" itemProp="significantLink"><i className="fa fa-instagram" /></NavLink>
                        <NavLink to="*" className={style.generic_anchor} title="Youtube" itemProp="significantLink"><i className="fa fa-youtube" /></NavLink>
                        <NavLink to="*" className={style.generic_anchor} title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus" /></NavLink>
                    </span>
                </section>
                <section className={cx(style.footer_bottom_section, style.flex_rw, "mt-5")}>
                    <div className={style.footer_bottom_wrapper}>
                        <i className="fa fa-copyright" role="copyright">
                        </i> COPYRIGHT 2021 CJ CineJun <address className={style.footer_address} role="company address">. </address><span className={style.footer_bottom_rights}> All RIGHTS RESERVED . </span>
                    </div>
                    <div className={style.footer_bottom_wrapper}>
                        <span className={style.generic_anchor} rel="nofollow">Terms</span> | <span className={style.generic_anchor} rel="nofollow">Privacy</span>
                    </div>
                </section>
            </footer>
        </div>
    )
}
