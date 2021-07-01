/* eslint-disable array-callback-return */
import { Button, Popconfirm, Table } from 'antd';
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { timKiemNguoiDung, xoaNguoiDung } from '../../../../redux/actions/AdminQuanLyAction';
import SuaNguoiDung from '../SuaNguoiDung/SuaNguoiDung';

export default function TimKiemNguoiDung(props) {
    const tuKhoa = props.tuKhoa
    // console.log('tuKhoa',tuKhoa);    
    const { danhSachTimKiem } = useSelector(state => state.AdminQuanLyReducer)
    const dispatch = useDispatch();

    const columns = [
        {
            title: 'Tài khoản',
            width: 25,
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },
        {
            title: 'Mật khẩu',
            width: 30,
            dataIndex: 'matKhau',
            key: 'matKhau',
        },
        {
            title: 'Họ tên',
            width: 30,
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Email',
            width: 35,
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            width: 25,
            dataIndex: 'sdt',
            key: 'sdt',
        },
        {
            title: 'Thao tác',
            key: 'thaoTac',
            fixed: 'right',
            width: 30,
            render: (_, record) =>
                <Fragment>
                    <Button onClick={() => {
                        dispatch({
                            type: 'EDIT_USER',
                            dataUser: record
                        })
                    }} type="primary m-2" data-toggle="modal" data-target="#edit2">Sửa</Button>
                    <Popconfirm
                        title={`Bạn có chắc muốn xóa tài khoản ${record.taiKhoan} ?`}
                        onConfirm={() => {
                            dispatch(xoaNguoiDung(record.taiKhoan))
                            dispatch(timKiemNguoiDung(tuKhoa))
                        }}
                        onCancel={()=>{
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
    // console.log('danhSachTimKiem', danhSachTimKiem);
    const renderDanhSachTimKiem = () => {
        return danhSachTimKiem?.map((ds, index) => {
            data.push({
                key: index,
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
            <div className="modal" id="edit2">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h4 className="modal-title">Thông tin người dùng</h4>
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
            {renderDanhSachTimKiem()}
            <Table pagination={{
                pageSizeOptions: ["5", "10", "20"],
                showSizeChanger: true,
                locale: { items_per_page: "" },
                defaultPageSize: 5
            }} columns={columns} dataSource={data} scroll={{ x: 1100 }} sticky />
        </div>
    )
}
