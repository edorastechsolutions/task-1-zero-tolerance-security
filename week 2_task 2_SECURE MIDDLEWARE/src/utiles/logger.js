function logRequest(req) {
  const safeBody = "<masked>"
  console.log({
    method: req.method,
    path: req.path,
    body: safeBody
  })
}

module.exports = { logRequest }