(function () {
    const openingBtn = document.querySelector(".sidebar__hamburger");
    const sidebar = document.querySelector('.sidebar');


    openingBtn.addEventListener("click", function () {
       const isOpen = sidebar.classList.length > 1
        if (isOpen){
            sidebar.classList.remove("sidebar__opened");
            return
        }
        sidebar.classList.add("sidebar__opened");
    });

}());