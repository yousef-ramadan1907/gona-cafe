let pages = document.getElementsByClassName("pages");
let title_page = document.querySelector(".title-page");
let title = document.querySelector(".title");
 const menuItems = document.querySelectorAll('.dropdown-item');
const navbarCollapse = document.getElementById('navbarSupportedContent');

function remove() {
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.add('d-none');
    }
}

function Switch_pages(PageId) {
    remove();
    let page = document.getElementById(PageId);
    page.classList.remove("d-none");
    title.classList.remove("d-none");


    title_page.scrollIntoView({
        behavior: "smooth"
    });
}

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // اقفل الـ navbar لو مفتوح
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
                
            }
             title_page.scrollIntoView({
        behavior: "smooth"
    });
        });
    });
