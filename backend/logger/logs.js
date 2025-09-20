function addZero(time) {
    return (time<10? "0":"")+time
}

function handleLogs(req, res, next) {
    const time = new Date()
    let hours = time.getHours()
    const meridian = hours >= 12?"PM":"AM"
    hours = time.getHours()%12 || 12
    const minutes = time.getMinutes()
    console.log(`[${req.hostname}] ${addZero(hours)}:${addZero(minutes)} ${meridian} ${req.method} ${req.path} response code: ${res.statusCode}`)
    next()
}

module.exports = handleLogs