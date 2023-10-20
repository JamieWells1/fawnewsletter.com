var data = {
  labels: [
    "World news",
    "Subject Specials",
    "Guest Pieces",
    "Puzzles",
    "Advice",
    "Hot Topics",
    "School Events",
    "Sport Pieces",
  ],
  datasets: [
    {
      data: ["9.9", "15.5", "9.4", "17.3", "10.4", "10.2", "8.7", "14.2"],
      backgroundColor: [
        "red",
        "orange",
        "yellow",
        "lime",
        "aqua",
        "darkblue",
        "purple",
        "magenta",
      ],
    },
  ],
};

var ctx = document.getElementById("graph-one").getContext("2d");
var myPieChart = new Chart(ctx, {
  type: "pie",
  data: data,
});

function linkCopied() {
  let copyText = document.getElementById("website-link").innerText;
  navigator.clipboard.writeText(copyText);
  $(".copy-icon").addClass("copied");
  setTimeout(function () {
    $(".copy-icon").text("done");
    $(".copy-icon").removeClass("copied");
    $(".copy-icon").addClass("tick-icon");
    $(".copy-icon").removeClass("copy-icon");
  }, 200);
}

icons = document.querySelectorAll(".section-two-icon");
function newsletterPage() {
  window.location.href = "./newsletters/newsletters.html";
}

icons.forEach((icon) => {
  icon.addEventListener("click", newsletterPage);
});

emailInput = document.getElementById("email-input");
emailForm = document.getElementById("email-form");
emailSubmit = document.getElementById("email-submit");

function addEmail(event) {
  event.preventDefault();
  emailInput.value = "";
  emailSubmit.style.backgroundColor = "green";
  emailSubmit.innerHTML = "<i class='bi bi-check' style='font-size: 20px'></i>";
}
