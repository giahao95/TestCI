// Bài 1
const $checkPrimeBtn = document.querySelector("#checkPrimeBtn");
const $resultB1 = document.querySelector("#resultB1");
const $a = document.querySelector("#a");
const $b = document.querySelector("#b");

const checkPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
};

console.log(checkPrime(49));

$checkPrimeBtn.addEventListener("click", () => {
  let a = $a.value;
  let b = $b.value;
  let html = ``;
  console.log(a, b);

  if (isNaN(a) || isNaN(b)) {
    $resultB1.innerHTML = "Bạn phải nhập a và b là số nguyên";
    return;
  }

  if (a < b) {
    for (let i = a; i <= b; i++) {
      if (checkPrime(i)) {
        html += ` ${i} `;
      }
    }
  } else {
    $resultB1.innerHTML = "Bạn phải nhập b lớn hơn a";
    return;
  }

  if (html) {
    $resultB1.innerHTML = "Kết quả:" + html;
  } else {
    $resultB1.innerHTML = "Không tìm thấy kết quả";
  }
});

//Bài 2
const $triangle = document.querySelector("#triangle");

const numberOneTriangle = (n) => {
  let html = "";

  for (let i = 0; i < n; i++) {
    for (let x = 0; x <= i; x++) {
      html += "*";
    }
    html += `<br/>`;
  }

  return html;
};

$triangle.innerHTML = numberOneTriangle(4);
