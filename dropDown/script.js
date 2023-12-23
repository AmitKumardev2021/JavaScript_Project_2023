//all country name is in array
const countryName = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "America",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic People's Republic of Korea",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia (Federated States of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Korea",
  "Republic of Moldova",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
];

let container = document.querySelector(".container");
let selectBtn = container.querySelector(".select-option");
let dropDownList = document.querySelector(".list-search-container");
let searchInput = container.querySelector("#search");
let lists = document.querySelector(".list");

selectBtn.addEventListener("click", () => {
  container.classList.toggle("active");
});

function addCountry(selectedCountry) {

  lists.innerHTML = "";
  countryName.forEach((country) => {
    let isSelected=selectedCountry==country?"selected":null;
    let listItems = `<li class=${isSelected}>${country}</li>`;
    lists.insertAdjacentHTML("beforeend", listItems);
});
addClickEventToLi();
}

addCountry();
function addClickEventToLi() {
  lists.querySelectorAll("li").forEach((listItems) => {
    listItems.addEventListener("click", () => {
      updateSelectedCountry(listItems);
    });
});
}

function updateSelectedCountry(listItems) {
    searchInput.value = "";
    selectBtn.firstElementChild.innerHTML = listItems.innerHTML;
    container.classList.remove("active");
    
    addCountry(listItems.innerHTML);
}

searchInput.addEventListener('keyup', () => {
  let searchInpVal = searchInput.value.toLowerCase();
  let filterCountries = countryName
    .filter((country) => {
      return country.toLocaleLowerCase().startsWith(searchInpVal);
    })
    .map((country) => {
      return `<li>${country}</li>`;
    })
    .join("");
  lists.innerHTML = filterCountries;
  addClickEventToLi();
});
