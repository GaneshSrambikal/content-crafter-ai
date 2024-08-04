'use client'
import React, { useState } from 'react'
import DashboardSearch from './_components/dashboard-search'
import DashboardList from './_components/dashboard-list'

const DashboardPage = () => {
  const [searchInput,setSearchInput] = useState<string>()
  return (
    <div className='flex flex-col gap-2 bg-emerald-600'>
      <DashboardSearch onSearchInput={setSearchInput}/>
      <DashboardList searchInput={searchInput as string}/>
    </div>
  )
}

export default DashboardPage