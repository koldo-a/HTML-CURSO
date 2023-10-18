function toggleMenu(element) {
    var ulElement = element.querySelector("ul");
    if (ulElement.style.display === "none") {
        ulElement.style.display = "block";
    } else {
        ulElement.style.display = "none";
    }
}

function toggleLogin(element) {
var fieldsetElement = element.parentElement.querySelector("fieldset");
if (fieldsetElement.style.display === "none") {
    fieldsetElement.style.display = "flex";
} else {
    fieldsetElement.style.display = "none";
}
}