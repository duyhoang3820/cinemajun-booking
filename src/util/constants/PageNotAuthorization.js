import React, { useEffect } from 'react'
import { Result, Button } from 'antd';
import { history } from '../../App';
export default function PageNotAuthorization() {
    useEffect(() => {
        document.title = 'CineJun | Page not authorization';
    }, [])
    return (
        <div >
            <Result
                status="403"
                title="403"
                subTitle="Xin lỗi, bạn không được phép truy cập trang này."
                extra={<Button type="primary" onClick={() => {
                    history.push('/')
                }}>Trở về trang chủ</Button>}
            />
        </div>
    )
}
