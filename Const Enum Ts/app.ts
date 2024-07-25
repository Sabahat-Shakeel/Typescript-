//=====================================================================
      
//           ================= enum =========================

//=========================================================================


enum colors {
    green ,
    blue,
    orange
}
colors.blue;
let color1 = colors[2]
console.log(color1)
console.log(colors.blue);
console.log(colors[1]);

let error :colors = colors[2] //type string is not assignable to type colors