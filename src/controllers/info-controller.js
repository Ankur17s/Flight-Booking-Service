const info = (req, res) => {
    return res.json({
        success: true,
        message: 'API is Live in booking service',
        data: {},
        error: {},
    })
}

module.exports = {
    info
}