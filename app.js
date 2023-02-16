const messageEl = document.querySelector(".message-search");
const inboxEl = document.querySelectorAll(".person");
const menuEl = document.getElementById("menu");
const sideEl = document.querySelector(".left");
const closeEl = document.getElementById("close");

const findFriends = () => {
  const val = messageEl.value.toLowerCase();
  inboxEl.forEach((chat) => {
    let name = chat.querySelector("h6").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageEl.addEventListener("keyup", findFriends);
menuEl.addEventListener("click", () => {
  if ((sideEl.style.display = "none")) {
    sideEl.style.display = "block";
  }
});

closeEl.addEventListener("click", () => {
  if ((sideEl.style.display = "block")) {
    sideEl.style.display = "none";
  }
});
