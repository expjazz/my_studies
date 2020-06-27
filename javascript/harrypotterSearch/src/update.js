const update = (list, element) => {
  const html = list.map((x) => {
    return `          <a
    href="#"
    class="list-group-item list-group-item-action flex-column align-items-start active"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1"> ${x.name} </h5>
    </div>
    <p class="mb-1">
      ${x.house}
    </p>
    <small> ${x.bloodStatus} </small>
  </a>`;
  });
  element.innerHTML = html;
};

export { update };
