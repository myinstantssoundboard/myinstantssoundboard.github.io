(function () {
  "use strict";

  var languages = [
    ["en", "English"],
    ["de", "Deutsch"],
    ["es", "Español"],
    ["fr", "Français"],
    ["hi", "हिन्दी"],
    ["it", "Italiano"],
    ["ja", "日本語"],
    ["ko", "한국어"],
    ["pt", "Português"],
    ["ru", "Русский"],
    ["zh", "简体中文"]
  ];
  var footer = document.querySelector(".footer");

  if (!footer) {
    return;
  }

  var currentLanguage = document.documentElement.lang.split("-")[0];
  var currentEntry = languages.find(function (language) {
    return language[0] === currentLanguage;
  });
  var isLocalizedPage = languages.slice(1).some(function (language) {
    return window.location.pathname.indexOf("/" + language[0] + "/") === 0;
  });
  var parentPath = isLocalizedPage ? "../" : "";
  var picker = document.createElement("details");
  var summary = document.createElement("summary");
  var list = document.createElement("div");

  picker.className = "language-picker";
  summary.textContent = "Language: " + (currentEntry ? currentEntry[1] : "English");
  list.className = "language-list";

  languages.forEach(function (language) {
    var link = document.createElement("a");
    link.href = language[0] === "en" ? parentPath || "./" : parentPath + language[0] + "/";
    link.textContent = language[1];
    link.lang = language[0];
    if (language[0] === currentLanguage) {
      link.setAttribute("aria-current", "page");
    }
    list.appendChild(link);
  });

  picker.appendChild(summary);
  picker.appendChild(list);
  footer.insertBefore(picker, footer.firstChild);
}());
