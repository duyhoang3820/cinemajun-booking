import React from 'react'
import { Result, Button } from 'antd';
import { history } from '../../App';
export default function PageNotAuthorization() {
    return (
        <div>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary" onClick={()=>{
                    history.push('/')
                }}>Back Home</Button>}
            />
        </div>
    )
}
