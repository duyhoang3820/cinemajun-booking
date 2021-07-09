/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useSelector } from 'react-redux';

export default function LichSuDatVe() {
    const { thongTinTaiKhoan } = useSelector(state => state.NguoiDungReducer)
    // console.log('thongTinTaiKhoan', thongTinTaiKhoan);

    useEffect(() => {
        document.title = 'CineJun | Lịch sử';
        renderData();
    }, [])
    const inThongTinGhe = (danhSachGhe) => {
        let trichXuatDanhSach = danhSachGhe.map((item, index) => {
            return [item.tenHeThongRap, item.tenCumRap, item.tenGhe];
        });
        let thongTinGhe = [trichXuatDanhSach[0][0], trichXuatDanhSach[0][1]];// push vaò tenHeThongRap, tenCumRap
        let danhSachTenGhe = trichXuatDanhSach.map((item) => { // Lấy tên ghế
            return item[2];
        });
        thongTinGhe.push(danhSachTenGhe);// push vào tên ghế
        return thongTinGhe;
    }

    const columns = [
        {
            title: 'Mã vé',
            dataIndex: 'maVe',
            width: 40,
            align: 'center'
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            width: 100,
            align: 'center'
        },
        {
            title: 'Thời lượng phim',
            dataIndex: 'thoiLuongPhim',
            width: 70,
            align: 'center'
        },
        {
            title: 'Ngày đặt',
            dataIndex: 'ngayDat',
            width: 100,
            align: 'center'
        },
        {
            title: 'Tên cụm rạp',
            dataIndex: 'tenCumRap',
            width: 100,
            align: 'center'
        },
        {
            title: 'Tên rạp',
            dataIndex: 'tenRap',
            width: 50,
            align: 'center'
        },
        {
            title: 'Danh sách ghế đặt',
            dataIndex: 'danhSachGhe',
            width: 100,
            align: 'center'
        },
        {
            title: 'Giá vé',
            dataIndex: 'giaVe',
            width: 100,
            align: 'center'
        },
    ];

    const renderData = () => {
        return thongTinTaiKhoan.thongTinDatVe?.map((item, index) => {
            let thongTinDatGhe = inThongTinGhe(item.danhSachGhe)
            data.push({
                key: index,
                maVe: item.maVe,
                giaVe: `${item.giaVe.toLocaleString()} vnđ`,
                tenPhim: item.tenPhim,
                thoiLuongPhim: `${item.thoiLuongPhim} phút`,
                ngayDat: new Date(item.ngayDat).toLocaleString(),
                tenCumRap: thongTinDatGhe[0],
                tenRap: thongTinDatGhe[1],
                danhSachGhe: thongTinDatGhe[2].join(', '),
            })

        })
    }

    const data = [];
    // console.log('data', data);

    return (
        <div className="py-2">
            {thongTinTaiKhoan.taiKhoan !== '' ? renderData() : ''}
            <Table className="history_table" columns={columns} dataSource={data} pagination={{ pageSize: 10, position: ["bottomCenter"] }} scroll={{ y: 240, x: 1300 }} />,
        </div >
    )
}
