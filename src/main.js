let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我是嘉
 * 接下来我要画一个太极八卦图
 * 首先我要准备一个div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先把 div 变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加上阴阳鱼的鱼眼*/
#div1::before{
    width:100px;
    height:100px;
    left:0;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    left:0;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
/*
string = string.replace(/\n/g, "<br>"); //将回车转换为html的回车,用了正则表达式
css gradient background generator
*/
let string2 = ""; //用于缓存
let n = 0;

let step = () => {
  setTimeout(() => {
    /*console.log(n);
 demo.innerHTML = string.substring(0, n);*/

    //如果是回车就变成<br>，用replace会把<打出来
    //如果是空格就变成&nbsp
    //如果不是回车就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999); //自动滚动
    html.scrollTo(0, 999999); //手机自动滚动
    if (n < string.length - 1) {
      //如果 n 不是最后一个，就继续
      n += 1;
      step();
    }
  }, 50);
};
step();
