let kel;
let korzin_off = [];


function keldi(a) {
    $.ajax("http://myjson.dit.upm.es/api/bins/i7y8", {
        success: (qiymat) => {
            console.log("qiymat keldi", qiymat);
            kel = qiymat
            ekran(kel)
        },
        error: (er) => {
            console.log(eror);
        }
    })
}
keldi(kel)

function ekran(a) {
    $("#rowe").html("")
    a.map((v, i) => {
        let col = `
                 <div class="col-5">
                                <div class="card" id="kortochka">
                                    <img class="j_img" src="${v.photo}" alt="rasim">
                                    <h3 class="ms-3">${v.ism}</h3>
                                    <div class="imgla_div ms-3">
                                        <button class="but"><img src="./images/main/main_liniya.svg" width="25"
                                                height="20" alt="main_liniya"></button>
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 2.svg" width="23" height="22" alt="Star2">

                                        <span class="ms-4">(775)</span>
                                    </div>

                                    <div class="money ms-3 mt-2">
                                        <span>Narxi: </span> <b>${v.narxi}</b>
                                        <button class="inf_b" onclick="o_tomon(${i})">Info</button>
                                    </div>

                                    <div class="but_del ms-3 mt-3 mb-3">
                                        <button class="btn btn-outline-danger" onclick="del(${i})">Del</button>
                                        <button class="btn ms-4 btn-outline-warning" onclick="korzin(${i})">Korzina</button>
                                        <button class="btn ms-3" onclick="likee(${i})">
                                    <span class="${v.like ? "text-danger" : "d-none"}"><i class="fa-solid fa-heart"></i></span>
                                    <span class="${v.like ? "d-none" : "text-danger"}"><i class="fa-regular fa-heart"></i></span>
                                    </button>
                                    </div>

                                    


                                </div>
                            </div>
        `
        $("#rowe").append(col)
    })
}

function likee(i) {
    kel[i].like = !kel[i].like
    ekran(kel)
}



function del(i) {
    kel.splice(i, 1)
    ekran(kel)
}

function korzin(i) {
    korzin_off.push(kel[i]);
    korzinaa_ek(korzin_off);
    let e = korzin_off.length;

    $("#korzin1").html(e)
}

function korzinaa_ek(a) {
    $("#korzina2").html("")
    a.map((v, i) => {
        let col = `
                 <div class="col-5">
                                <div class="card">
                                    <img class="j_img" src="${v.photo}" alt="rasim">
                                    <h3>${v.ism}</h3>
                                    <div class="imgla_div">
                                        <button class="but"><img src="./images/main/main_liniya.svg" width="25"
                                                height="20" alt="main_liniya"></button>
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 1.svg" width="23" height="22" alt="Star1">
                                        <img src="./images/main/Star 2.svg" width="23" height="22" alt="Star2">

                                        <span>(775)</span>
                                    </div>

                                    <div class="money">
                                        <span>Price: </span> <b>$113</b>
                                        <button>Info</button>
                                    </div>

                                    


                                </div>
                            </div>
        `
        $("#korzina2").append(col)
    })
}




function qidir(a) {
    console.log(a);

    let yangisearch = kel.filter(v => {
        return v.ism.toLowerCase().includes(a.toLowerCase())
    })

    ekran(yangisearch)
}




// let on_tomon;
// function o_tomon(a) {
//     $("#cole").html("")
//     a.push(v =>{
//         let coool =`
                  
//         `
//         $("#cole").append(coool)

        
//     })
    
// }



