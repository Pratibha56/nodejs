import React from 'react'
import BComponent from './BComponent'
import DataContext from './DataContext'

function AComponent() {
    const A = "hello";

  return (
    <DataContext.Provider value>
    <div>
         AComponent
        <BComponent/>
    </div>
    </DataContext.Provider>
  )
}

export default AComponent