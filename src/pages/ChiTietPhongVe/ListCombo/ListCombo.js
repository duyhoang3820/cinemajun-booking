/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { List } from 'antd';
import img from './img/cinema-fast-food-combo.jpg'
import style from './css/ListCombo.module.css'


export default function ListCombo() {
    const data = [
        {
            title: 'NƯỚC LON/CHAI',
            listItems:
                [
                    {
                        name: 'Nước Suối Dasani 500ml',
                        price: 13000,
                        quanlity: 0
                    },
                    {
                        name: 'Nước Trái Cây Nutriboost',
                        price: 20000,
                        quanlity: 0
                    },
                    {
                        name: 'Nước Cam Teppy',
                        price: 26000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'SNACK - KẸO',
            listItems:
                [
                    {
                        name: 'Trái Cây Sấy 20gr',
                        price: 15000,
                        quanlity: 0
                    },
                    {
                        name: 'Kẹo MnM',
                        price: 25000,
                        quanlity: 0
                    },
                    {
                        name: 'Kẹo Snickers',
                        price: 25000,
                        quanlity: 0
                    },
                    {
                        name: 'Đậu Phộng OiShi 100gr',
                        price: 39000,
                        quanlity: 0
                    },
                    {
                        name: "Khoai Tây Lay's Stax",
                        price: 50000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'POCA',
            listItems:
                [
                    {
                        name: 'Poca Partyz',
                        price: 18000,
                        quanlity: 0
                    },
                    {
                        name: 'Poca Khoai Tây 54gr',
                        price: 20000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'MÓN MỚI',
            listItems:
                [
                    {
                        name: 'Trà Chanh Nestea (500ml)',
                        price: 210000,
                        quanlity: 0
                    },
                    {
                        name: 'Milo Tươi (500ml)',
                        price: 28000,
                        quanlity: 0
                    },
                    {
                        name: 'Combo Nestea',
                        price: 60000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'COMBO MỚI',
            listItems:
                [
                    {
                        name: 'Hotdog',
                        price: 25000,
                        quanlity: 0
                    },
                    {
                        name: 'Combo Hotdog(1 Coke 22oz + 1 Hotdog)',
                        price: 40000,
                        quanlity: 0
                    },

                ]
        },
        {
            title: 'NƯỚC NGỌT LY',
            listItems:
                [
                    {
                        name: 'Coke 22oz',
                        price: 25000,
                        quanlity: 0
                    },
                    {
                        name: 'Fanta 22oz',
                        price: 25000,
                        quanlity: 0
                    },

                    {
                        name: 'Sprite 22oz',
                        price: 25000,
                        quanlity: 0
                    },
                    {
                        name: 'Coke Zero 22oz',
                        price: 25000,
                        quanlity: 0
                    },
                    {
                        name: 'Coke 32oz',
                        price: 28000,
                        quanlity: 0
                    },
                    {
                        name: 'Fanta 32oz',
                        price: 28000,
                        quanlity: 0
                    },
                    {
                        name: 'Sprite 32oz',
                        price: 28000,
                        quanlity: 0
                    },
                    {
                        name: 'Coke Zero 32oz',
                        price: 28000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'BẮP RANG',
            listItems:
                [
                    {
                        name: 'Bắp Rang 60oz',
                        price: 40000,
                        quanlity: 0
                    },
                    {
                        name: ' Bắp Nấm 60oz - Caramel',
                        price: 45000,
                        quanlity: 0
                    },
                    {
                        name: 'Bắp Nấm 60oz - Phô Mai',
                        price: 45000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'BEER',
            listItems:
                [
                    {
                        name: 'Bia Heineken 330ml',
                        price: 40000,
                        quanlity: 0
                    },
                    {
                        name: ' Bia Strongbow 330ml',
                        price: 40000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'COMBO BEER',
            listItems:
                [
                    {
                        name: 'Combo Beer 1(1 Hotdog + 1 Bia Heineken 330ml)',
                        price: 60000,
                        quanlity: 0
                    },
                    {
                        name: 'Combo Beer 1(1 Bắp Rang 60oz + 1 Bia Heineken 330ml)',
                        price: 60000,
                        quanlity: 0
                    },
                ]
        },
        {
            title: 'COMBO BẮP',
            listItems:
                [
                    {
                        name: 'Combo 1 HCM (1 Coke 22oz + 1 Poca Partyz + 1 Bắp Rang 60oz)',
                        price: 65000,
                        quanlity: 0
                    },
                    {
                        name: ' Combo 2 HCM (1 Coke 22oz + 1 Kẹo MnM + 1 Bắp Rang 60oz + 1 Trà Sữa Trân Châu Size M)',
                        price: 85000,
                        quanlity: 0
                    },
                    {
                        name: "Combo 3 HCM (4 Coke 22oz + 1 Lay's Stax Tôm + 2 Bắp Rang 60oz)",
                        price: 170000,
                        quanlity: 0
                    },
                ]
        },
    ];

    return (
        <div>
            {data.map((items, index) => {
                return <List className="mb-3" key={index}
                    header={<div className={style.titleList}>{items.title}</div>}
                    bordered
                    dataSource={items.listItems}
                    renderItem={(item, index1) => (
                        <List.Item>
                            <div key={index1} className="row w-100" style={{ alignItems: 'center' }}>
                                <div className="col-2">
                                    <img src={img} width={50} height={50} alt="abc" />
                                </div>
                                <div className="col-6">
                                    <span>{item.name}</span><br />
                                    <span className="text-primary">{item.price.toLocaleString()} vnđ</span>
                                </div>
                                <div className="col-4 d-flex" style={{ alignItems: 'center' }}>
                                    <button onClick={() => {

                                    }} className={style.btnMinus}>-</button>
                                    <span className={style.num}>{item.quanlity}</span>
                                    <button onClick={() => {
                                    }} className={style.btnPlus}>+</button>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
            })}
        </div>
    )
}
