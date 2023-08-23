import { YDHMS, DHMS, HMS, MS, S } from '/src/components/Counters.jsx'
import  dateDifference  from './dateDifference.js'

export default function(currDate, endDate, selected) {
    
    const counters = [
        YDHMS,
        DHMS,
        HMS,
        MS,
        S
    ]

    return counters
}