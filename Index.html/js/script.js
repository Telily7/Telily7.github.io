let yesButton = document.getElementById("yes");
let noButton =document.getElementById("no");
let questionText=document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickcount= 0 ;//记录点击 no 的次数

// no 按钮的文字变化
const noTexts = [
    "真的不可以吗……",
    "＞︿＜ 不再想想吗?",
    "我才不会难过呢……(┬┬﹏┬┬) ",
    "No:("
];

// No 按钮点击事件
noButton.addEventListener("click", function(){
    clickcount++;

    // 让 Yes 变大，每次放大2倍
    let yesSize = 1+(clickcount* 1.2);
    yesButton.style.transform =`scale(${yesSize})`;

    //挤压 No 按钮，每次右移 100px
    let no0ffset = clickcount *50;
    noButton.style.transform=`translateX(${no0ffset}px)`;

    //**新增:让图片和文字往上移动**
    let moveUp=clickcount *25; //每次上移 20px
    mainImage.style.transform=`translateY(-${moveUp}px)`;
    questionText.style.transform=`translateY(-${moveUp}px)`;

    // No 文案变化(前 4 次变化)
    if(clickcount<=4){
        noButton.innerText =noTexts[clickcount-1];
    }

    // 图片变化(前 4 次变化)
    if (clickcount === 1) mainImage.src = "images/shocked.png"; //震惊
    if (clickcount === 2) mainImage.src = "images/think.png"; //思考
    if (clickcount === 3) mainImage.src = "images/angry.png"; //难过
    if (clickcount >= 4) mainImage.src = "images/crying.png"; //哭
});

// Yes 按钮点击后，进入成功页面
yesButton.addEventListener("click",function(){
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!</h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image"></img>
        </div>
    `;

    document.body.style.overflow = "hidden";
});
