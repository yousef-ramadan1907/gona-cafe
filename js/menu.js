let pages = document.getElementsByClassName("pages");
let drink_1 = document.getElementById("drink-1");
function remove() {
    for (let i = 0; i < pages.length; i++) {
        pages[i].className = 'd-none';
    }
}
function Switch_pages(PageId) {
    remove();
    let page = document.getElementById(PageId);
    page.className = "container mt-4 pages";
}


export { Switch_pages };
