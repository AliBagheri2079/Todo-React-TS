let loader: Function;

const loadContent = () => loader = setTimeout(showPage, 3500);

const showPage = () => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
}