export const trending = (req, res) => res.send('Home Page Videos');
export const see = (req, res) => {
  return res.send(`watch video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send(`edit video #${req.params.id}`);
};
export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => {
  return res.send(`edit video #${req.params.id}`);
};
