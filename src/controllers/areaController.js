let areas = [
  {
  area : "분당전산정보센터",
  scourt : "분당전산정보센터",
  network : "172.20.129.0",
  subnet : "255.255.255.0",
  id : 1
  },
  {
  area : "서울",
  scourt : "서울중앙지방법원",
  network : "172.17.4.0",
  subnet : "255.255.255.0",
  id : 2
  },
  {
  area : "수원",
  scourt : "수원지방법원",
  network : "172.18.19.0",
  subnet : "255.255.255.0",
  id : 3
  },
]



export const home = (req, res) => {
  return res.render("home", {pageTitle: "Home", areas})
}
export const getAreaUpload = (req, res) => res.render("areaupload", {pageTitle: "UpLoad Area"});
export const postAreaUpload = (req, res) => {
  const { area, scourt, network, subnet, community } = req.body;
  console.log(req.body);
  const newArea = {
    area,
    scourt,
    network,
    subnet,
    community,
  }
  areas.push(newArea);
  // const toDoForm = document.querySelector(".list_box_area")
  // const li = document.createElement("li");
  // const span = document.createElement("span");
  // span.innerText = area;
  // li.appendChild(span);
  // toDoForm.appendChild(li);
  console.log(newArea);
  res.redirect(`/`);
}

export const areaDelete = (req, res) => res.render("areadelet");
