export const checkData = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name)
    return res
      .status(400)
      .json({ message: "Name, email and password required." });
  if (typeof email !== "string")
    return res.status(400).json({ message: "Email should be a string." });
  if (typeof password !== "string")
    return res.status(400).json({ message: "Password should be a string." });
  if (typeof name !== "string")
    return res.status(400).json({ message: "Name should be a string." });
  next();
};
