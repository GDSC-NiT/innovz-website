import React from 'react'
import CountItems from './CountItems'

const Counts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   my-20 mx-6">
            <CountItems title={'SPONSORS'} limit={10}/>
            <CountItems title={'COMMUNITY PARTNERS'} limit={15}/>
            <CountItems title={'SPEAKERS'} limit={20}/>
        </div>
  )
}

export default Counts