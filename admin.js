/*===============================================================
            !!!! Do not interfere or use the below code to
            your advantage. Any breach in security will
                    provoke legal action. !!!!
===============================================================*/

usernames = [
  "JamieWells",
  "AmyHawkes",
  "DariaTelega",
  "SamBunce",
  "RachaelClarke",
  "PhoebeMullet",
  "EllieHarris",
  "JakeAmato",
  "StanleySmith",
  "ZoeRyan",
  "RhodaFrimpong",
  "LincolnOdhiambo",
  "LilaSzucs",
  "SamTurner",
  "GardnerMiss",
];

passwords = [
  "JamieEditor1!",
  "AmyDesign1!",
  "DariaDesign1!",
  "SamSport1!",
  "RachaelSport1!",
  "PhoebeCreative1!",
  "ElliePuzzles1!",
  "JakePuzzles1!",
  "StanleyAffairs1!",
  "ZoeAffairs1!",
  "RhodaLifestyle1!",
  "LincolnAdvice1!",
  "LilaEvents",
  "SamNews1!",
  "GardnerEditor1!",
];

let access = false;

function verifyLogin(event) {
  event.preventDefault();
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  for (let i = 0; i < usernames.length; i++) {
    if (username === usernames[i] && password === passwords[i]) {
      access = true;
      window.location.href = "logged-in.html";
      sessionStorage.setItem("access", access);
    } else {
      console.log(access);
    }
  }
  if (access === false || access === null) {
    document.getElementById("error-message").style.display = "block";
  }
}
