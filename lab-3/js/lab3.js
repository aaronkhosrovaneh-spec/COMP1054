const tabs = document.querySelectorAll(".tabs li");
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs[0].classList.add("active");
panels[0].classList.add("active");

tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
        e.preventDefault();

        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        this.classList.add("active");

        const link = this.querySelector("a");
        const target = document.querySelector(link.getAttribute("href"));
        target.classList.add("active");
    });
});

// https://www.slingacademy.com/article/building-a-simple-tabs-interface-using-only-the-javascript-dom/
// https://webdesign.tutsplus.com/create-a-javascript-tab-component-with-an-adaptive-stepper-ui--cms-108933t
// https://webdesign.tutsplus.com/how-to-build-a-responsive-tab-component-with-css-and-a-touch-of-javascript--cms-30456t
// https://stackoverflow.com/questions/54723528/how-to-create-tabs-in-javascript
// https://codepen.io/chriscoyier/pen/XQpqZV
