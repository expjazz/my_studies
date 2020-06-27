let select = document.getElementById("filler-one");

const selectorMenu = (list) => {
  let tempList = [];
  const html = list
    .map((x) => {
      if (!tempList.includes(x.house)) {
        tempList.push(x.house);
        return `            <option value="${x.house}">${x.house}</option>
`;
      } else {
        console.log("s");
        return "";
      }
    })
    .join("");
  select.innerHTML = html;
};

export { selectorMenu, select };
