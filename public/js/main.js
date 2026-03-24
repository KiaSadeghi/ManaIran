const gregorianDateEl = document.getElementById("gregorian-date");
const imperialDateEl = document.getElementById("imperial-date");

const now = new Date();

function faToEnDigits(str) {
  return str
    .replace(/۰/g, "0")
    .replace(/۱/g, "1")
    .replace(/۲/g, "2")
    .replace(/۳/g, "3")
    .replace(/۴/g, "4")
    .replace(/۵/g, "5")
    .replace(/۶/g, "6")
    .replace(/۷/g, "7")
    .replace(/۸/g, "8")
    .replace(/۹/g, "9");
}

if (gregorianDateEl) {
  const gregorianDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);

  gregorianDateEl.textContent = gregorianDate;
}

if (imperialDateEl) {
  const persianParts = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).formatToParts(now);

  let weekday = "";
  let day = "";
  let month = "";
  let yearFa = "";

  persianParts.forEach((part) => {
    if (part.type === "weekday") weekday = part.value;
    if (part.type === "day") day = part.value;
    if (part.type === "month") month = part.value;
    if (part.type === "year") yearFa = part.value;
  });

  const yearEn = faToEnDigits(yearFa);
  const imperialYear = parseInt(yearEn, 10) + 1180;
  const imperialYearFa = imperialYear
  .toString()
  .replace(/0/g, "۰")
  .replace(/1/g, "۱")
  .replace(/2/g, "۲")
  .replace(/3/g, "۳")
  .replace(/4/g, "۴")
  .replace(/5/g, "۵")
  .replace(/6/g, "۶")
  .replace(/7/g, "۷")
  .replace(/8/g, "۸")
  .replace(/9/g, "۹");

  imperialDateEl.textContent = `${weekday} ${day} ${month} ${imperialYearFa}`;
}