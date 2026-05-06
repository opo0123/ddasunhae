window.addEventListener("load", () => {
  console.log("1222");

  const btn = document.querySelector(".visual-contents .btn");
  const btnCat = document.querySelector(".cat-contents .btn");
  const btnSp = document.querySelector(".sponsor-wrap .btn");
  const btnP1 = document.querySelector(".products-btns .btn");
  const btnP2 = document.querySelector(".products-btns .btn2");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://smartstore.naver.com/ddasunhae", "_blank");
  });
  btnCat.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/ddasunhae_donate/", "_blank");
  });
  btnSp.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://smartstore.naver.com/ddasunhae", "_blank");
  });
  btnP1.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("https://smartstore.naver.com/ddasunhae", "_blank");
  });
  btnP2.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      "https://mobile.a-bly.com/markets/48066?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn2hNnQiKGxBZ5gesqhQWbSllPXTOTAlBnuQmSewgGWoKhoWxi-iigHORV-YA_aem_dymnb0mHJo4OzTwsHz8twQ",
      "_blank",
    );
  });
});
