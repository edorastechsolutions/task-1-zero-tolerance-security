module.exports = (req, res) => {
  res.status(200).json({ message: "access granted", user: req.user?.username || null })
}