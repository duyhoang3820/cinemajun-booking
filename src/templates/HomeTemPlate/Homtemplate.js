import { Fragment } from "react"
import { Route } from "react-router"
import Footer from "../../components/Home/Footer/Footer"
import Header from "../../components/Home/Header/Header"
import BackToTop from "react-back-to-top-button";
import '../../assets/css/backToTop/backToTop.css'


// HOC higher order components
// component nhận vào tham số là component và trả ra component mowisF
export const HomeTemplate = (props) => {


    return <Route path={props.path} exact render={(propsRoute) => { //props.path, props.component

        // Thẻ route sẽ được hiển thị giao diện tương ứng khi người dùng gõ đúng path
        return <Fragment>
            <Header />
            <props.component {...propsRoute} />
            <Footer />
            <BackToTop
                showOnScrollUp
                showAt={100}
                speed={500}
                easing="easeInOutQuint"
            >
                <i className="fa fa-angle-double-up backToTop" style={{ color: '#fb4226', fontSize: '40px' }}></i>
            </BackToTop>
        </Fragment >
    }} />
}