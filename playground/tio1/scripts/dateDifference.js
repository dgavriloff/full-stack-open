
export default function (currDate, endDate){
	const diffRMil = endDate.getTime() - currDate.getTime()
	const diffRS = diffRMil / 1000
	const diffRMin = diffRS / 60
	const diffRH = diffRMin / 60
	const diffRD = diffRH / 24
	const diffRW = diffRD / 7
	const diffRMon = diffRD / 30
	const diffRY = diffRD / 365

	const finMils = diffRMil % 1000
	const finSecs = diffRS % 60
	const finMin = diffRMin % 60
	const finH = diffRH % 24
	const finD = diffRD % 365
	const finW = diffRD / 7
	const finMon = diffRY % 12
	const finY = diffRY

	const diffTypes = {
		dhms : function() {return [[Math.floor(finD),Math.floor(finH),Math.floor(finMin),Math.floor(finSecs)],["days", "hours", "minutes", "seconds"]]},
		ydhms : function() {return [[Math.floor(finY),Math.floor(finD),Math.floor(finH),Math.floor(finMin),Math.floor(finSecs)],["years","days", "hours", "minutes", "seconds"]]},
		seconds : function(){return finSecs}
	}


	return diffTypes
}

