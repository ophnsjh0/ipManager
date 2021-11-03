import Area from "../models/area";

export const home = async(req, res) => {
  const areas =  await Area.find({});
  const sl =  await Area.find({area: "서울"});
  const sw =  await Area.find({area: "수원"});
  const ic =  await Area.find({area: "인천"});
  const cc =  await Area.find({area: "춘천"});
  const tj =  await Area.find({area: "대전"});
  const cj =  await Area.find({area: "청주"});
  const dg =  await Area.find({area: "대구"});
  const cw =  await Area.find({area: "창원"});
  const kj =  await Area.find({area: "광주"});
  const bs =  await Area.find({area: "부산"});
  const jj =  await Area.find({area: "전주"});
  const je =  await Area.find({area: "제주"});
  const us =  await Area.find({area: "울산"});
  return res.render("home", {pageTitle: "Home", areas, sl, sw, ic, cc, tj, cj, dg, cw, kj, bs, jj, je, us});
};

export const getAreaUpload = async(req, res) => {
  const areas =  await Area.find({});
  const sl =  await Area.find({area: "서울"});
  const sw =  await Area.find({area: "수원"});
  const ic =  await Area.find({area: "인천"});
  const cc =  await Area.find({area: "춘천"});
  const tj =  await Area.find({area: "대전"});
  const cj =  await Area.find({area: "청주"});
  const dg =  await Area.find({area: "대구"});
  const cw =  await Area.find({area: "창원"});
  const kj =  await Area.find({area: "광주"});
  const bs =  await Area.find({area: "부산"});
  const jj =  await Area.find({area: "전주"});
  const je =  await Area.find({area: "제주"});
  const us =  await Area.find({area: "울산"});
  res.render("areaupload", {pageTitle: "UpLoad Area", areas, sl, sw, ic, cc, tj, cj, dg, cw, kj, bs, jj, je, us});
};

export const postAreaUpload = async(req, res) => {
  const { area, scourt, switchip, community, network, subnet } = req.body;
  try{
    await Area.create({
      area,
      scourt,
      switchip,
      community,
      network: network.split(', '),
      subnet
    });
    return res.redirect(`/`);
  } catch(error) {
      return res.render("areaupload", {pageTitle: "UpLoad Area", errorMessage: error.message,});
  };
};

export const areaDelete = (req, res) => res.render("areadelet");
