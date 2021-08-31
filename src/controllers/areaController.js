import Area from "../models/area";

export const home = async(req, res) => {
  const areas = await Area.find({});
  const network = await Area.find({ network: [] });
  console.log(network);
  return res.render("home", {pageTitle: "Home", areas, network});
};

export const getAreaUpload = async(req, res) => {
  res.render("areaupload", {pageTitle: "UpLoad Area"});
};

export const postAreaUpload = async(req, res) => {
  const { area, scourt, switchip, community, network, subnet } = req.body;
  try{
    await Area.create({
      area,
      scourt,
      switchip,
      community,
      network: network.split(','),
      subnet
    });
    return res.redirect(`/`);
  } catch(error) {
      return res.render("areaupload", {pageTitle: "UpLoad Area", errorMessage: error.message,});
  };
};

export const areaDelete = (req, res) => res.render("areadelet");
