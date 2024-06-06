# Javascript

## Nội dung cơ bản

1. JavaScript (JS) là gì. Các phiên bản JS hiện nay (ES5, ES6…)

JavaScript (JS) là một ngôn ngữ lập trình động được sử dụng chủ yếu trong phát triển web để tạo ra các trang web tương tác và động. Ban đầu được phát triển bởi Netscape, JavaScript ngày nay là một phần quan trọng của ngăn xếp công nghệ web, cùng với HTML và CSS. JavaScript có thể được chạy trên cả phía máy khách (client-side) và phía máy chủ (server-side) với sự hỗ trợ của các môi trường thực thi như Node.js.

Các phiên bản JS hiện nay: ES5, ES6,ES7,ES8,ES9,ES10,ES11,ES12

2. Có những cách viết JS nào ? Ví dụ.

Inline JavaScript
JavaScript có thể được viết trực tiếp trong thẻ HTML thông qua thẻ `<script>`.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inline JavaScript</title>
    </head>
    <body>
        <h1>Inline JavaScript Example</h1>
        <button onclick="alert('Hello, world!')">Click me</button>
    </body>
</html>
```

Internal JavaScript
JavaScript có thể được viết trong thẻ `<script>` nhưng nằm trong phần `<head>` hoặc `<body>` của HTML.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Internal JavaScript</title>
        <script>
            function showMessage() {
                alert("Hello, world!");
            }
        </script>
    </head>
    <body>
        <h1>Internal JavaScript Example</h1>
        <button onclick="showMessage()">Click me</button>
    </body>
</html>
```

External JavaScript
JavaScript có thể được viết trong một file riêng biệt và sau đó được nhúng vào HTML thông qua thẻ `<script>` với thuộc tính `src`.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>External JavaScript</title>
        <script src="script.js" defer></script>
    </head>
    <body>
        <h1>External JavaScript Example</h1>
        <button onclick="showMessage()">Click me</button>
    </body>
</html>
```

4. Cú pháp cơ bản của JS là gì ? Ví dụ.

JavaScript phân biệt chữ hoa chữ thường. Điều này có nghĩa là các biến, từ khóa ngôn ngữ, tên hàm và các mã định danh khác phải luôn được nhập với chữ viết nhất quán.

Ví dụ:

```JS
var myVar = "Hello World!";
console.log(myVar);
console.log(MyVar);
console.log(myvar);
```

5. Các kiểu biến (variable) trong JS (string, number, boolean, array, object, date …) và cho ví dụ.

```JS
let singleQuoteString = 'Hello, world!';
let integer = 42;
let float = 3.14;
let isJavaScriptFun = true;
let numbers = [1, 2, 3, 4, 5];
let person = {
    name: 'Alice',
    age: 30,
    isEmployed: true,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};
let currentDate = new Date();
let specificDate = new Date('2023-06-05');
let emptyValue = null;
```

6. Cách khai báo biến (var, let, const) và scope tương ứng. Ví dụ.

#### var

Biến được khai báo bằng var có phạm vi là phạm vi hàm (function-scoped).

Có thể được truy cập ở bất kỳ đâu trong hàm mà nó được khai báo.

Nếu biến được khai báo bên trong một khối lệnh (ví dụ: vòng lặp for, câu lệnh if), biến vẫn có thể truy cập được ở bên ngoài khối lệnh đó.

```JS
function exampleFunction() {
    if (true) {
        var message = 'Hello, world!';
    }
    console.log(message); // Hello, world!
}

exampleFunction();
console.log(message); // Hello, world!
```

#### let

Biến được khai báo bằng let có phạm vi là phạm vi khối (block-scoped).

Có thể được truy cập chỉ trong khối lệnh mà nó được khai báo.

Không thể truy cập biến trước khi nó được khai báo (hoisting).

```JS
function exampleFunction() {
    if (true) {
        let message = 'Hello, world!';
    }
    console.log(message); // Error: message is not defined
}

exampleFunction();
console.log(message); // Error: message is not defined
```

#### const

Biến được khai báo bằng const cũng có phạm vi là phạm vi khối (block-scoped).

Giống như let, biến const cũng chỉ có thể truy cập được trong khối lệnh mà nó được khai báo.

Tuy nhiên, giá trị của biến const không thể thay đổi sau khi đã được gán một lần.

```JS
function exampleFunction() {
    if (true) {
        const message = 'Hello, world!';
        message = 'Hi'; // Error: Assignment to constant variable.
    }
}

exampleFunction();
```

7. Có những loại toán tử nào trong JS ? Ví dụ.

#### Toán tử số học

```JS
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3333333333333335
console.log(a % b);  // 1
```

#### Toán tử gán

```JS
let x = 5;
x += 3;  // Tương đương với x = x + 3;
console.log(x); // 8

let y = 10;
y -= 2;  // Tương đương với y = y - 2;
console.log(y); // 8
```

#### Toán tử so sánh

```JS
let p = 10;
let q = 5;

console.log(p == q);  // false
console.log(p != q);  // true
console.log(p > q);   // true
console.log(p < q);   // false
console.log(p >= q);  // true
console.log(p <= q);  // false
```

#### Toán tử logic

```JS
let isRainy = true;
let isCold = false;

console.log(isRainy && isCold); // false
console.log(isRainy || isCold); // true
console.log(!isRainy);          // false
```

#### Toán tử ba ngôi

```JS
let age = 20;
let message = (age >= 18) ? 'Adult' : 'Child';
console.log(message); // Adult
```

8. Hàm trong JS là gì ? Các khai báo, gọi hàm như thế nào ? So sánh: parameters vs arguments, giải thích các khái niệm: anonymous function, function expression, function declaration, immediately invoked function expression. Ví dụ.

#### Khai báo Hàm (Function Declaration)

Bạn có thể khai báo một hàm bằng từ khóa function. Một khai báo hàm bao gồm tên của hàm và một danh sách các tham số (parameters) nếu có.

```JS
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!
```

#### Biểu thức Hàm (Function Expression)

Biểu thức hàm tạo ra một hàm mà không cần tên (nó cũng được gọi là hàm ẩn danh). Biểu thức hàm có thể gán cho một biến hoặc được sử dụng như một tham số cho một hàm khác.

```JS
let greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Hello, Bob!
```

#### Anonymous Function (Hàm Ẩn Danh)

Một hàm ẩn danh là một hàm không có tên. Điều này có nghĩa là hàm không được gán cho một biến hoặc không được đặt tên khi nó được khai báo.

```JS
setTimeout(function() {
    console.log('This is an anonymous function');
}, 1000);
```

#### Parameters vs Arguments

Parameters: Đây là các biến được liệt kê trong định nghĩa hàm. Chúng đóng vai trò như các đối số mà hàm cần để thực hiện các công việc.

Arguments: Đây là các giá trị được truyền vào hàm khi gọi hàm. Chúng được gửi đến các tham số tương ứng trong hàm.

```JS
function add(a, b) { // a và b là parameters
    return a + b;
}

console.log(add(3, 5)); // 3 và 5 là arguments
```

#### Immediately Invoked Function Expression (IIFE)

Một IIFE là một biểu thức hàm mà được định nghĩa và gọi ngay lập tức.

```JS
(function() {
    console.log('This is an immediately invoked function expression');
})();
```

9. So sánh trong JS. Ví dụ.

#### So sánh bằng (==) và so sánh tuyệt đối (===)

Toán tử so sánh bằng (==) so sánh giá trị của hai biểu thức, và trả về true nếu chúng bằng nhau, ngay cả khi chúng có kiểu dữ liệu khác nhau.

Toán tử so sánh tuyệt đối (===) so sánh cả giá trị và kiểu dữ liệu của hai biểu thức, và chỉ trả về true nếu cả hai đều bằng nhau.

```JS
console.log(5 == '5');   // true (giá trị bằng nhau)
console.log(5 === '5');  // false (giá trị bằng nhau nhưng kiểu dữ liệu khác nhau)
console.log(5 === 5);    // true (giá trị và kiểu dữ liệu đều bằng nhau)
```

#### So sánh khác (!=) và so sánh khác tuyệt đối (!==)

Toán tử so sánh khác (!=) so sánh giá trị của hai biểu thức, và trả về true nếu chúng không bằng nhau, ngay cả khi chúng có kiểu dữ liệu khác nhau.

Toán tử so sánh khác tuyệt đối (!==) so sánh cả giá trị và kiểu dữ liệu của hai biểu thức, và chỉ trả về true nếu cả hai đều không bằng nhau.

```JS
console.log(5 != '5');   // false (giá trị bằng nhau)
console.log(5 !== '5');  // true (giá trị bằng nhau nhưng kiểu dữ liệu khác nhau)
console.log(5 !== 5);    // false (giá trị và kiểu dữ liệu đều bằng nhau)
```

#### So sánh lớn hơn (>) và nhỏ hơn (<)

Toán tử so sánh lớn hơn (>) so sánh xem một biểu thức có lớn hơn biểu thức khác không, và trả về true nếu điều này đúng.

Toán tử so sánh nhỏ hơn (<) so sánh xem một biểu thức có nhỏ hơn biểu thức khác không, và trả về true nếu điều này đúng.

```JS
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 > '5'); // true (chuyển đổi '5' thành số và so sánh)
```

#### So sánh lớn hơn hoặc bằng (>=) và nhỏ hơn hoặc bằng (<=)

Toán tử so sánh lớn hơn hoặc bằng (>=) so sánh xem một biểu thức có lớn hơn hoặc bằng biểu thức khác không, và trả về true nếu điều này đúng.

Toán tử so sánh nhỏ hơn hoặc bằng (<=) so sánh xem một biểu thức có nhỏ hơn hoặc bằng biểu thức khác không, và trả về true nếu điều này đúng.

```JS
console.log(10 >= 5);   // true
console.log(10 <= 5);   // false
console.log(10 <= '5'); // false (chuyển đổi '5' thành số và so sánh)
```

10. Các câu lệnh rẽ nhánh điều kiện: if-else, switch case... Ví dụ.

#### Câu lệnh if-else

```JS
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

#### Câu lệnh if-else if-else

```JS
let weather = "sunny";

if (weather === "rainy") {
    console.log("Bring an umbrella.");
} else if (weather === "sunny") {
    console.log("Wear sunscreen.");
} else {
    console.log("Enjoy the weather!");
}
```

#### Câu lệnh switch-case

```JS
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's Monday.");
        break;
    case "Tuesday":
        console.log("It's Tuesday.");
        break;
    case "Wednesday":
        console.log("It's Wednesday.");
        break;
    default:
        console.log("It's another day.");
}
```

11. Vòng lặp trong JS. Ví dụ.

#### Vòng lặp for

```JS
for (let i = 0; i < 5; i++) {
 console.log(i);
}
```

#### Vòng lặp while

```JS
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

#### Vòng lặp do-while

```JS
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

#### Sử dụng vòng lặp để duyệt qua một mảng

```JS
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let fruit of fruits) {
    console.log(fruit);
}

```

#### Sử dụng break và continue

```JS
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Bỏ qua i = 3
    }
    if (i === 7) {
        break; // Dừng vòng lặp khi i = 7
    }
    console.log(i);
}
```

12. Các method thao tác với string, number, array, object, Date. Ví dụ tương ứng.

#### Phương thức thao tác với String

length: Trả về độ dài của chuỗi.

toLowerCase(): Chuyển đổi chuỗi thành chữ thường.

toUpperCase(): Chuyển đổi chuỗi thành chữ in hoa.

indexOf(substring): Trả về chỉ số của chuỗi con trong chuỗi ban đầu.

slice(startIndex, endIndex): Trích xuất một phần của chuỗi và trả về phần được trích xuất.

split(separator): Chia chuỗi thành một mảng các chuỗi con dựa trên một ký tự phân cách.

```JS
let str = "Hello, World!";

console.log(str.length);          // 13
console.log(str.toLowerCase());   // hello, world!
console.log(str.toUpperCase());   // HELLO, WORLD!
console.log(str.indexOf("World"));// 7
console.log(str.slice(0, 5));     // Hello
console.log(str.split(", "));     // ["Hello", "World!"]
```

#### Phương thức thao tác với Number

toString(): Chuyển đổi số thành chuỗi.

toFixed(numDigits): Làm tròn số với số chữ số thập phân được xác định.

toPrecision(precision): Định dạng số với số chữ số quan trọng được xác định.

```JS
let num = 10.345;

console.log(num.toString());        // "10.345"
console.log(num.toFixed(2));       // "10.35"
console.log(num.toPrecision(3));   // "10.3"
```

#### Phương thức thao tác với Array

length: Trả về độ dài của mảng.

push(element): Thêm một phần tử vào cuối mảng.

pop(): Xóa phần tử cuối cùng của mảng và trả về phần tử đó.

join(separator): Kết hợp tất cả các phần tử của mảng thành một chuỗi, sử dụng ký tự phân cách được chỉ định.

```JS
let arr = ["apple", "banana", "cherry"];

console.log(arr.length);        // 3
arr.push("date");
console.log(arr);               // ["apple", "banana", "cherry", "date"]
console.log(arr.pop());         // "date"
console.log(arr.join(", "));    // "apple, banana, cherry"
```

#### Phương thức thao tác với Object

Object.keys(obj): Trả về một mảng chứa tất cả các key của object.

Object.values(obj): Trả về một mảng chứa tất cả các giá trị của object.

Object.entries(obj): Trả về một mảng chứa mảng con chứa cặp key-value của object.

```JS
let obj = { name: "John", age: 30, city: "New York" };

console.log(Object.keys(obj));      // ["name", "age", "city"]
console.log(Object.values(obj));    // ["John", 30, "New York"]
console.log(Object.entries(obj));   // [["name", "John"], ["age", 30], ["city", "New York"]]
```

#### Phương thức thao tác với Date

getFullYear(): Trả về năm.

getMonth(): Trả về tháng (từ 0 đến 11).

getDate(): Trả về ngày trong tháng (từ 1 đến 31).

getDay(): Trả về thứ trong tuần (từ 0 đến 6, 0 là Chủ Nhật).

getHours(), getMinutes(), getSeconds(), getMilliseconds(): Trả về giờ, phút, giây và mili giây tương ứng.

```JS
let now = new Date();

console.log(now.getFullYear());     // Năm hiện tại
console.log(now.getMonth());        // Tháng hiện tại (từ 0 đến 11)
console.log(now.getDate());         // Ngày hiện tại
console.log(now.getDay());          // Thứ hiện tại (từ 0 đến 6)
console.log(now.getHours());        // Giờ hiện tại
console.log(now.getMinutes());      // Phút hiện tại
console.log(now.getSeconds());      // Giây hiện tại
console.log(now.getMilliseconds()); // Mili giây hiện tại
```

13. Event trong JS là gì ? Event trigger code JS như thế nào ? Event flow là gì ? Ví dụ

#### Trong JavaScript, một sự kiện (event) là một hành động hoặc điều kiện xảy ra trong trình duyệt, chẳng hạn như nhấp chuột, nhấn phím, hoặc tải trang. Mỗi sự kiện có thể kích hoạt một phần của mã JavaScript để xử lý hoặc phản ứng với hành động đó.

#### Event Trigger Code

Để xử lý sự kiện trong JavaScript, bạn có thể sử dụng các phương thức như addEventListener để gắn một hàm xử lý sự kiện vào một phần tử HTML hoặc một đối tượng JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Event Example</title>
    </head>
    <body>
        <button id="myButton">Click me</button>

        <script>
            let button = document.getElementById("myButton");
            button.addEventListener("click", function () {
                alert("Button clicked!");
            });
        </script>
    </body>
</html>
```

#### Event Flow

Event flow (dòng sự kiện) là cách mà các sự kiện được truyền qua các phần tử trong cây DOM khi một hành động diễn ra. Có hai loại event flow: capturing và bubbling.

Capturing: Trình duyệt bắt đầu từ phần tử gốc và di chuyển xuống tới phần tử mà sự kiện được kích hoạt. Đây được gọi là capturing phase.

Bubbling: Sau khi sự kiện đã được xử lý tại phần tử mà nó được kích hoạt, nó sẽ lan tỏa lên trên từ phần tử mà sự kiện được kích hoạt tới phần tử gốc. Đây được gọi là bubbling phase.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Event Flow Example</title>
    </head>
    <body>
        <div id="outer" style="border: 2px solid black; padding: 10px;">
            Outer Div
            <div id="inner" style="border: 2px solid red; padding: 10px;">
                Inner Div
            </div>
        </div>

        <script>
            let outer = document.getElementById("outer");
            let inner = document.getElementById("inner");

            // Sự kiện capturing
            outer.addEventListener(
                "click",
                function () {
                    console.log("Capturing: Outer Div");
                },
                true
            );

            inner.addEventListener(
                "click",
                function () {
                    console.log("Capturing: Inner Div");
                },
                true
            );

            // Sự kiện bubbling
            outer.addEventListener("click", function () {
                console.log("Bubbling: Outer Div");
            });

            inner.addEventListener("click", function () {
                console.log("Bubbling: Inner Div");
            });
        </script>
    </body>
</html>
```

14. Cơ chế hoisting trong JS. Ví dụ.

Hoisting là một tính năng trong JavaScript mà cho phép bạn sử dụng một biến hoặc một hàm trước khi nó được khai báo. JavaScript di chuyển tất cả các khai báo biến và hàm lên đầu của phạm vi hiện tại trước khi thực thi mã.

#### Ví dụ về Hoisting với Biến:

```JS
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

#### Ví dụ về Hoisting với Hàm:

```JS
sayHello(); // Hello, world!

function sayHello() {
    console.log("Hello, world!");
}
```

#### Lưu ý về Hoisting với let và const:

Biến được khai báo bằng let và const cũng được hoisted, nhưng không được khởi tạo (initialization) ngay lập tức như var. Vì vậy, khi bạn sử dụng một biến được khai báo bằng let hoặc const trước khi nó được khai báo, JavaScript sẽ ném ra một lỗi.

```JS
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

15. DOM là gì ? DOM Tree là gì ? Gồm những thành phần nào ? Ví dụ các thao tác: truy vấn, thay đổi thuộc tính phần tử, tạo mới, cập nhật phần tử với DOM kèm ví dụ.

#### DOM (Document Object Model) là một giao diện lập trình ứng dụng (API) cho HTML và XML, biểu diễn cấu trúc của tài liệu dưới dạng một cây các đối tượng. Nó cho phép JavaScript tương tác với HTML thông qua việc thay đổi cấu trúc, nội dung và kiểu dáng của trang web.

#### DOM Tree là biểu diễn cấu trúc phân cấp của các phần tử HTML trong một tài liệu web. Nó bắt đầu từ phần tử gốc (`<html>`) và chứa tất cả các phần tử con của nó, tạo thành một cây phân cấp.

#### Các thành phần chính của DOM Tree bao gồm:

-   Element Nodes: Đại diện cho các phần tử HTML, như `<div>`, `<p>`, `<span>`,...
-   Text Nodes: Đại diện cho văn bản bên trong các phần tử HTML.
-   Attribute Nodes: Đại diện cho các thuộc tính của các phần tử HTML.
-   Document Node: Đại diện cho toàn bộ tài liệu HTML.

Ví dụ:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM Example</title>
    </head>
    <body>
        <div id="myDiv">
            <p>Hello, world!</p>
        </div>

        <script>
            // Truy vấn phần tử theo id
            let divElement = document.getElementById("myDiv");
            console.log(divElement); // <div id="myDiv">...</div>

            // Truy vấn phần tử con
            let paragraph = divElement.getElementsByTagName("p")[0];
            console.log(paragraph); // <p>Hello, world!</p>
        </script>
    </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM Example</title>
    </head>
    <body>
        <div id="myDiv">
            <p>Hello, world!</p>
        </div>

        <script>
            // Thay đổi nội dung của phần tử
            let paragraph = document.querySelector("#myDiv p");
            paragraph.textContent = "Goodbye, world!";

            // Thay đổi màu nền của phần tử
            let divElement = document.getElementById("myDiv");
            divElement.style.backgroundColor = "lightblue";
        </script>
    </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DOM Example</title>
    </head>
    <body>
        <div id="myDiv">
            <p>Hello, world!</p>
        </div>

        <script>
            // Tạo mới phần tử
            let newParagraph = document.createElement("p");
            newParagraph.textContent = "This is a new paragraph.";

            // Thêm phần tử vào trong phần tử cha
            let divElement = document.getElementById("myDiv");
            divElement.appendChild(newParagraph);

            // Cập nhật thuộc tính của phần tử mới
            newParagraph.style.color = "green";
        </script>
    </body>
</html>
```

16. So sánh phiên bản JS ES6 so với ES5, chỉ ra ưu và nhược điểm

#### ES6, hay còn gọi là ECMAScript 2015, là một phiên bản lớn của JavaScript được phát hành vào năm 2015, mang lại nhiều tính năng mới và cải tiến so với ES5.

#### Ưu điểm của ES6:

-   Cú pháp ngắn gọn và dễ đọc: ES6 cung cấp cú pháp ngắn gọn hơn, giúp code trở nên dễ đọc hơn và giảm thiểu lỗi.
-   Arrow Functions: Arrow functions cung cấp cú pháp ngắn gọn hơn cho việc định nghĩa hàm, đồng thời giữ nguyên ngữ cảnh của từ khóa this.
-   Template Literals: Template literals cho phép chèn biến vào trong chuỗi một cách dễ dàng, giúp tạo ra mã HTML hoặc chuỗi phức tạp một cách linh hoạt hơn.
-   Block-Scoped Variables (let và const): Sử dụng let và const giúp giải quyết vấn đề về phạm vi của biến (var trong ES5 có phạm vi là function-scoped).
-   Destructuring Assignment: Destructuring assignment cho phép bạn trích xuất các giá trị từ mảng hoặc đối tượng một cách dễ dàng và gọn gàng.
-   Classes: ES6 giới thiệu cú pháp class-based cho việc định nghĩa lớp, giúp viết mã trở nên dễ dàng hơn đối với những người mới học JavaScript.
-   Modules: ES6 modules giúp quản lý mã JavaScript một cách có tổ chức hơn, giúp tách biệt các phần của ứng dụng và giảm thiểu sự phụ thuộc.

#### Nhược điểm của ES6:

-   Hỗ trợ trình duyệt không đồng nhất: Mặc dù các trình duyệt mới hỗ trợ nhiều tính năng ES6, nhưng vẫn có một số trình duyệt cũ không hỗ trợ hoàn toàn các tính năng này.

-   Khả năng nhầm lẫn với các cú pháp mới: Các tính năng mới có thể làm phức tạp hóa quá trình học và làm việc với JavaScript đối với những người mới.

-   Khó khăn trong việc cập nhật từ ES5 sang ES6: Việc cập nhật mã từ ES5 sang ES6 có thể gặp phải một số thách thức, đặc biệt là khi mã có quy mô lớn hoặc đã được triển khai.

17. API là gì ? Tại sao cần API ? Cách gọi API với JS như thế nào ? Cho ví dụ.

#### API (Application Programming Interface) là một tập hợp các quy tắc và giao thức được sử dụng để tương tác giữa các phần mềm khác nhau. Nó cho phép hai ứng dụng khác nhau giao tiếp với nhau một cách hiệu quả, thường thông qua mạng Internet.

#### Tại sao cần API?

-   Tích hợp hệ thống: API cho phép các ứng dụng khác nhau kết nối với nhau một cách dễ dàng, giúp tích hợp các hệ thống khác nhau và chia sẻ dữ liệu giữa chúng.

-   Phát triển ứng dụng mở rộng: Cung cấp API cho phép các nhà phát triển bên thứ ba tạo ra các ứng dụng và dịch vụ mới dựa trên các dịch vụ hiện có, mở rộng phạm vi và khả năng sử dụng của ứng dụng.

-   Tiết kiệm thời gian và chi phí: Thay vì phải xây dựng mọi thứ từ đầu, các nhà phát triển có thể sử dụng API đã có sẵn để giảm thiểu thời gian và chi phí phát triển.

#### Cách gọi API với JavaScript:

Trong JavaScript, bạn có thể gọi API bằng cách sử dụng các phương thức như `fetch()` hoặc `XMLHttpRequest` để gửi các yêu cầu HTTP đến một địa chỉ URL cụ thể và nhận lại dữ liệu phản hồi từ máy chủ.

```JS
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

18. Cập nhật dữ liệu động từ server (sau khi gọi API) vào DOM. Ví dụ.

#### Để cập nhật dữ liệu động từ server vào DOM sau khi gọi API, chúng ta có thể sử dụng kết hợp của JavaScript và các phương thức DOM như createElement(), appendChild(), và innerHTML.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User List</title>
    </head>
    <body>
        <div id="userList"></div>

        <script src="script.js"></script>
    </body>
</html>
```

```JS
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => {
    const userListElement = document.getElementById('userList');

    userListElement.innerHTML = '';

    data.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <hr>
      `;
      userListElement.appendChild(userDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

19. Tìm hiểu công cụ bundle, build file phổ biến như Webpack: Webpack là gì ? Hoạt động như thế nào ? Ưu, nhược điểm của Webpack, cài đặt như thế nào

#### Webpack là một công cụ dùng để bundle và build các file trong ứng dụng web. Nó giúp quản lý các phụ thuộc (dependencies) của ứng dụng và tạo ra các file tĩnh (static) tối ưu cho production.

#### Hoạt động của Webpack:

Phân tích (Parsing): Webpack bắt đầu bằng việc phân tích (parse) tất cả các module trong ứng dụng của bạn và xác định các phụ thuộc giữa chúng.

Tạo dependency graph: Dựa trên thông tin từ phân tích, Webpack tạo ra một dependency graph, biểu diễn mối quan hệ giữa các module trong ứng dụng.

Bundling: Sau khi có dependency graph, Webpack sử dụng thuật toán bundle để nhóm các module lại với nhau thành các bundle. Điều này giúp tối ưu hóa tải trang bằng cách giảm số lượng yêu cầu mạng cần thiết.

Tạo file đầu ra (Output): Webpack sẽ tạo ra các file tĩnh (ví dụ: JavaScript, CSS) từ các bundle được tạo ra, sẵn sàng để sử dụng trong ứng dụng web.

#### Ưu điểm của Webpack:

Quản lý phụ thuộc (dependency management): Webpack cho phép bạn quản lý các phụ thuộc của ứng dụng một cách dễ dàng thông qua module system.

Tối ưu hóa tải trang (page load optimization): Bằng cách bundle các module lại với nhau, Webpack giúp giảm số lượng yêu cầu mạng và tăng tốc độ tải trang.

Module system linh hoạt (flexible module system): Webpack hỗ trợ nhiều loại module như JavaScript, CSS, và hình ảnh, cho phép bạn tạo ra ứng dụng web phức tạp với nhiều loại tài nguyên.

#### Nhược điểm của Webpack:

Học phức tạp (steep learning curve): Webpack có một học phức tạp, đặc biệt đối với người mới bắt đầu.

Cấu hình phức tạp (complex configuration): Cấu hình của Webpack có thể phức tạp và đôi khi khó hiểu.

#### Cách cài đặt Webpack:

Bạn có thể cài đặt Webpack thông qua npm (Node Package Manager) bằng cách chạy lệnh sau trong dự án của bạn:
`npm install webpack webpack-cli --save-dev`

20. Thực hành thêm JS vào template đã dựng ở phần HTML, CSS trước hoặc tự dựng 1 website hoàn chỉnh gồm HTML, CSS, JS tự chọn
