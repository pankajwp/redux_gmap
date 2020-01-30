import React from 'react'
import { Sparklines, SparklinesBars, SparklinesReferenceLine  } from 'react-sparklines';

function Chart(props){
    //console.log(props)
    return(
        <Sparklines data={props.temp} limit={props.temp.length}  width={200} height={20}>
            <SparklinesBars color="blue" />
            <SparklinesReferenceLine type="mean" />
        </Sparklines>
    )
}

export default Chart;