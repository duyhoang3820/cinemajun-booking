import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom'
import AdminQuanLy from './pages/AdminQuanLy/AdminQuanLy';
import ChiTietPhim from './pages/ChiTietDatVe/ChiTietPhim/ChiTietPhim';
import ChiTietPhongVe from './pages/ChiTietPhongVe/ChiTietPhongVe';
import DangNhap from './pages/DangNhap/DangNhap';
import ThongTinNguoiDung from './pages/ThongTinCaNhan/ThongTinNguoiDung/ThongTinNguoiDung';
import TrangChu from './pages/TrangChu/TrangChu';
import PageNotAuthorization from './util/constants/PageNotAuthorization'
import { HomeTemplate } from './templates/HomeTemPlate/Homtemplate';
import Loading from './components/Loading/Loading';
import './App.css'
import PageNotFound from './util/constants/PageNotFound';
import DangKy from './pages/DangKy/DangKy';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/" exact component={TrangChu} />
        <HomeTemplate path="/thong-tin-nguoi-dung" exact component={ThongTinNguoiDung} />
        <HomeTemplate path="/chi-tiet-dat-ve/:maPhim" exact component={ChiTietPhim} />
        <HomeTemplate path="/chi-tiet-phong-ve/:maLichChieu" exact component={ChiTietPhongVe} />
        <Route path="/dangnhap" exact component={DangNhap} />
        <Route path="/dangky" exact component={DangKy} />
        <Route path="/admin/:path?" exact component={AdminQuanLy} />
        <Route path="/not-admin" exact component={PageNotAuthorization} />
        <Route path="*" component={PageNotFound} />
        <HomeTemplate path="/" exact component={TrangChu} />
      </Switch>
    </Router>
  );
}

export default App;
