/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { Fragment, useEffect } from 'react'
import { layDanhSachPhimHot } from '../../../redux/actions/QuanLyPhimAction';
import { Table } from 'antd';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinPhim, xoaPhim } from '../../../redux/actions/AdminQuanLyAction';
import CapNhatPhim from './CapNhatPhim/CapNhatPhim';
import TaoLichChieu from './TaoLichChieu/TaoLichChieu';
import { EDIT_MOVIE } from '../../../redux/constants/AdminQuanLyConst/AdminQuanLyConst';
import { Popconfirm } from 'antd';

export default function QuanLyPhim() {

    const { listPhimHot } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimHot())
        return () => {
        }
    }, [])
    // console.log(listPhimHot);

    const columns = [
        {
            title: 'Mã phim',
            width: 20,
            dataIndex: 'maPhim',
            key: 'maPhim',
            // fixed: 'left',
        },
        {
            title: 'Tên phim',
            width: 25,
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            // fixed: 'left',
        },
        {
            title: 'Hình ảnh',
            width: 30,
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            align: 'center'
        },
        {
            title: 'Mô tả',
            width: 60,
            dataIndex: 'moTa',
            key: 'moTa',
        },
        {
            title: 'Mã nhóm',
            width: 20,
            dataIndex: 'maNhom',
            key: 'maNhom',
            align: 'center'
        },
        {
            title: 'Ngày khởi chiếu',
            width: 30,
            dataIndex: 'ngayKhoiChieu',
            key: 'ngayKhoiChieu',
        },
        {
            title: 'Thao tác',
            key: 'thaoTac',
            width: 30,
            align: 'center',
            render: (_, record) =>
                <Fragment>
                    <Button onClick={() => {
                        dispatch({
                            type: `THONG_TIN_PHIM`,
                            phimInfo: record
                        })
                        // console.log(record.maPhim);
                    }} className="m-2" type="dashed" style={{ backgroundColor: '#ffa940', color: 'white' }} data-toggle="modal" data-target="#taoLichChieu">Tạo lịch chiếu</Button>
                    <Button onClick={() => {
                        dispatch({
                            type: EDIT_MOVIE,
                            dataMovie: record
                        })
                    }} type="primary m-2" data-toggle="modal" data-target="#editMovie">Sửa</Button>
                    <Popconfirm
                        title={`Bạn có chắc muốn xóa phim ${record.tenPhim} ?`}
                        onConfirm={() => {
                            dispatch(xoaPhim(record.maPhim))
                        }}
                        onCancel={() => {
                            return
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger m-1">Xóa</Button>
                    </Popconfirm>

                </Fragment>

        },
    ];

    const data = [];
    const renderDanhSachPhim = () => {
        return listPhimHot.map((phim, index) => {
            data.push({
                key: index,
                maPhim: phim.maPhim,
                tenPhim: phim.tenPhim,
                hinhAnh: <img src={phim.hinhAnh} style={{ width: '70px', height: '70px', borderRadius: 5 }} alt="" />,
                moTa: phim.moTa,
                maNhom: phim.maNhom,
                ngayKhoiChieu: phim.ngayKhoiChieu
            })
        });
    }
    return (
        <div>
            <div className="modal" id="editMovie">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h4 className="modal-title">Cập nhật phim</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <CapNhatPhim />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" id="taoLichChieu">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h4 className="modal-title">Thông tin lịch chiếu, tạo lịch chiếu</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body">
                            <TaoLichChieu />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {renderDanhSachPhim()}
            <Table columns={columns} dataSource={data} pagination={{ position: ["bottomCenter"] }} scroll={{ y: 500, x: 1300 }} sticky />

        </div >
    )
}
