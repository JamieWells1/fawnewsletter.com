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
      data: ["12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5"],
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
