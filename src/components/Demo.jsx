import React from 'react'

export default function Demo() {
  return (
    <>
    <h1>Demo</h1>
    <div className='demo-container'>
        <div className='demo'>
            <h3>Cluster Visualization</h3>
            <img src="https://cdn.discordapp.com/attachments/1116241666538483743/1126539027982581760/Structure.gif"></img>
        </div>
        <div className='demo'>
            <h3>Cluster Metric</h3>
            <img src="https://cdn.discordapp.com/attachments/1116241666538483743/1126539069275525222/Metrics.gif"></img>
        </div>
        <div className='demo'>
            <h3>CIS Benchmark</h3>
            <img src="https://cdn.discordapp.com/attachments/1116241666538483743/1126539087881449573/CIS_Test.gif"></img>
        </div>  
      </div>
    </>
  )
}