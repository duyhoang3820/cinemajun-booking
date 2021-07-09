import React, { useEffect } from 'react'
import { Result, Button } from 'antd';
import { history } from '../../App';

export default function PageNotFound() {
    useEffect(() => {
        document.title = 'CineJun | Page not found';
    }, [])
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang bạn đã truy cập không tồn tại."
                extra={<Button type="primary" onClick={() => {
                    history.push('/')
                }}>Trở về trang chủ</Button>}
            />
        </div>
    )
}
