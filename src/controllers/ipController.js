import Area from "../models/area";

export const watch = async (req, res) => {
  const { id } = req.params;
  const name =  await Area.find({_id: id});
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
  return res.render("watch", {pageTitle: "Watch IP", name, sl, sw, ic, cc, tj, cj, dg, cw, kj, bs, jj, je, us});
};

export const getIpUpload = async(req, res) => {
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
  return res.render("ipUpload", {pageTitle: "Watch IP", sl, sw, ic, cc, tj, cj, dg, cw, kj, bs, jj, je, us});
};

export const postIpUpload = async(req, res) => {
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



export const search = (req, res) => res.send("search page");
export const dashboard = (req, res) => res.send("dashboard");
export const ipRemove = (req, res) => res.send("ipRemove");
export const ipEdit = (req, res) => res.send("ipEdit");
