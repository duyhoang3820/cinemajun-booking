/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachNguoiDung, xoaNguoiDung } from '../../../redux/actions/AdminQuanLyAction';
import { Table } from 'antd';
import { Button } from 'antd';
import './assets/css/search.css'
import SuaNguoiDung from './SuaNguoiDung/SuaNguoiDung';
import { EDIT_USER } from '../../../redux/constants/AdminQuanLyConst/AdminQuanLyConst';
import { Popconfirm } from 'antd';



export default function QuanLyNguoiDung(props) {

    const { danhSachNguoiDung } = useSelector(state => state.AdminQuanLyReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachNguoiDung())
        return () => {
        }
    }, [])
    // console.log(danhSachNguoiDung);
    const columns = [
        {
            title: 'STT',
            width: 10,
            dataIndex: 'stt',
            key: 'stt',
            // fixed: 'left',
        },
        {
            title: 'Tài khoản',
            width: 15,
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },
        {
            title: 'Mật khẩu',
            width: 20,
            dataIndex: 'matKhau',
            key: 'matKhau',
        },
        {
            title: 'Họ tên',
            width: 20,
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Email',
            width: 20,
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            width: 15,
            dataIndex: 'sdt',
            key: 'sdt',
            align: 'center'
        },
        {
            title: 'Thao tác',
            key: 'thaoTac',
            width: 15,
            align: 'center',
            render: (_, record) =>
                <Fragment>
                    <Button onClick={() => {
                        dispatch({
                            type: EDIT_USER,
                            dataUser: record
                        })
                    }} type="primary m-2" data-toggle="modal" data-target="#edit">Sửa</Button>

                    <Popconfirm
                        title={`Bạn có chắc muốn xóa tài khoản ${record.taiKhoan} ?`}
                        onConfirm={() => {
                            dispatch(xoaNguoiDung(record.taiKhoan))
                        }}
                        onCancel={() => {
                            return
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger m-2">Xóa</Button>
                    </Popconfirm>

                </Fragment>
        },
    ];
    const data = [];
    // console.log(data);
    const renderDanhSachNguoiDung = () => {
        return danhSachNguoiDung.map((ds, index) => {
            data.push({
                key: index,
                stt: index + 1,
                taiKhoan: ds.taiKhoan,
                matKhau: ds.matKhau,
                hoTen: ds.hoTen,
                email: ds.email,
                sdt: ds.soDt
            })
        });
    }

    return (

        <div>
            <div className="modal" id="edit">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h4 className="modal-title">Chỉnh sửa thông tin người dùng</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <SuaNguoiDung />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {renderDanhSachNguoiDung()}
            <Table columns={columns} dataSource={data} pagination={{ position: ["bottomCenter"] }} scroll={{ y: 500, x: 1100 }} sticky />
        </div >
    )
}