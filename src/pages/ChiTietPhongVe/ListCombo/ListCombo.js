/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { List } from 'antd';
import img from './img/cinema-fast-food-combo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { InputNumber } from 'antd';


export default function ListCombo() {
    const { data, comboDaChon } = useSelector(state => state.PhongVeReducer)
    const dispatch = useDispatch()
    const [state, setstate] = useState(data);

    useEffect(() => {
        setstate(data)
    }, [])

    const updateCombo = (item, comboDaChon) => {
        let check = comboDaChon.findIndex(i => i.name === item.name)
        if (check === -1) {
            comboDaChon.push(item)
        } else {
            comboDaChon[check] = item
            if (comboDaChon[check].quanlity === 0) {
                comboDaChon.splice(check, 1)
            }
        }
        return comboDaChon
    }

    return (
        <div>
            {state.map((items, index) => {
                return <List className="mb-3" key={index}
                    header={<div className="text-white">{items.title}</div>}
                    style={{ backgroundColor: '#006d75' }}
                    bordered
                    dataSource={items.listItems}
                    renderItem={(item, index1) => (
                        <List.Item>
                            <div key={index1} className="row w-100" style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                                <div className="col-4 d-none d-md-block col-md-3">
                                    <img src={img} width={50} height={50} alt="abc" />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 text-left">
                                    <span className="text-white">{item.name}</span><br />
                                    <span style={{ color: '#fadb14' }}>{item.price.toLocaleString()} vnđ</span>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 text-center">
                                    <InputNumber min={0} defaultValue={item.quanlity} onChange={(value) => {
                                        item.quanlity = value;
                                        let indexList = state.findIndex(item1 => {
                                            return item1.listItems.includes(item)
                                        })
                                        let indexItem = state[indexList].listItems.findIndex(i1 => i1.name === item.name)
                                        state[indexList].listItems[indexItem] = item
                                        setstate(state);
                                        let update = updateCombo(item, comboDaChon)
                                        dispatch({
                                            type: 'UPDATE_DATA',
                                            dataUpdate: state,
                                            comboDaChon: update
                                        })
                                    }} />
                                </div>
                            </div>
                        </List.Item>
                    )
                    }
                />
            })}
        </div >
    )
}
