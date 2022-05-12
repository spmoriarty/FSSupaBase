// to pull into the next directory in order to select one item on JS page after identifying 
// ?=(id) in render location.

import { getXxx } from "./fetch.js";

const elementName = document.getElementById('element-name');


async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = paramas.get('id');
    const xxx = await getXxx(id);
    elementName.textContent = xxx.name;

}