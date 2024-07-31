import React from 'react'

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>{children}</div>
    )
}

export default DashboardLayout