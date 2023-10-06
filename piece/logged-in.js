storedAccess = sessionStorage.getItem("access");
if (storedAccess === false || storedAccess === null) {
  document.getElementById("error-message").style.display = "block";
  document.getElementById("error-message").style.color = "red";
}
