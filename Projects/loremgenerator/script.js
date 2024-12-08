let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Nulla, labore reprehenderit iure nihil vitae nam! 
Numquam, explicabo totam! Quis veniam assumenda aut accusamus voluptatem sint quia doloremque sit! 
Magni aspernatur ullam veniam excepturi deleniti provident ex iusto mollitia aut, incidunt earum inventore consequatur odio obcaecati doloribus possimus corporis eum laudantium! Reiciendis omnis voluptas sit quidem
repellat voluptate, sunt vitae molestiae impedit, esse delectus asperiores dolorum beatae accusamus placeat perferendis.
Sequi ratione tempora laboriosam enim modi repellendus qui fugit eum sapiente, soluta, ipsa error eaque? Quod, sint.
Amet possimus accusamus voluptatum sunt? Eaque nemo harum illum perferendis debitis a voluptatibus soluta maiores molestiae, voluptatum nostrum reiciendis veniam ab impedit. 
Nemoblanditiis, aliquam error explicabo laborum cumque laboriosam hic, dolores excepturi eius neque repudiandae.
Consequuntur debitis esse voluptates recusandae ipsa dolores ab eius sequi, omnis ipsam provident modi earum quas repellendus adipisci quaerat fuga sed, laborum saepe commodi qui.
Optio, quasi non officia, libero vel, maxime molestiae quas neque ad corporis debitis atque molestias.
In repellat nostrum dolores reiciendis,sed consequatur tempora? Explicabo itaque vel tempora natus amet nemo quos
quisquam quo accusantium eligendi quas, laboriosam nam ut! Dolorum,numquam hic accusantium modi ut delectus explicabo nihil placeat officiis,saepe amet et?`;
let modifiedlorem = lorem.split("\n");
let size = document.querySelector(".sizeinp");
let loremtext = document.querySelector(".loremtext");
size.addEventListener("input", () => {
  generate(size.value);
});
function generate(a) {
  if (a == 0) {
    loremtext.innerHTML = "* Click to copy";
  } else {
    a = a >= 12 ? 11 : a;
    let text = ``;
    for (let i = 0; i < a; i++) {
      text += modifiedlorem[i];
    }
    loremtext.innerHTML = text;
  }
}

loremtext.addEventListener("click", () => {
  if (loremtext.innerHTML != "* Click to copy") {
    navigator.clipboard.writeText(loremtext.innerHTML);
  }
});
