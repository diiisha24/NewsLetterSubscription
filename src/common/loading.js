import React from 'react'
import { Spin } from 'antd'
// import LoadingOutlined from 'antd'
const loading = ({message}) => {
  return (
    <div>
      <Spin tip="Working On it...."></Spin>
    </div>
  )
}

export default loading
