# CSS

## Nội dung cơ bản

1. CSS là gì

-   CSS (Cascading Style Sheets) là một ngôn ngữ được sử dụng để mô tả cách trình bày và định dạng của các tài liệu được viết bằng HTML (HyperText Markup Language) hoặc XML (eXtensible Markup Language). CSS cho phép bạn điều khiển giao diện của trang web một cách chi tiết và linh hoạt.

2. Các chuẩn CSS hiện nay

-   CSS1 (1996):Đây là phiên bản đầu tiên của CSS, bao gồm các thuộc tính cơ bản cho văn bản, màu sắc, và lề.
-   CSS2 (1998):Phiên bản này bổ sung nhiều tính năng như khả năng điều khiển bố cục (layout), các kiểu định dạng nâng cao cho bảng, hỗ trợ phương tiện media khác nhau (in ấn, trình bày trên màn hình, v.v.).
-   CSS2.1 (2011):Đây là một phiên bản sửa đổi của CSS2, khắc phục một số lỗi và loại bỏ các tính năng không được hỗ trợ rộng rãi.
-   CSS3 (Bắt đầu từ 1999):CSS3 là một bản cập nhật lớn và được chia thành nhiều mô-đun nhỏ để dễ quản lý và phát triển. Mỗi mô-đun đều có một số tính năng và được phát hành độc lập.
-   CSS4 (Đang phát triển):CSS4 không phải là một phiên bản đơn lẻ mà là một tập hợp các mô-đun CSS đang được phát triển và cải tiến từ CSS3.

3. Cú pháp cơ bản để CSS cho một thẻ của HTML. liệt kê các cách viết CSS kèm ví dụ.

-   Inline CSS:CSS được viết trực tiếp trong thẻ HTML bằng thuộc tính style.

```html
<p style="color: blue; font-size: 16px;">
    This is a paragraph with inline CSS.
</p>
```

-   Internal CSS:CSS được viết trong phần `<style>` bên trong phần `<head>` của tài liệu HTML.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                color: blue;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <p>This is a paragraph with internal CSS.</p>
    </body>
</html>
```

-   External CSS:CSS được viết trong một tệp riêng biệt và được liên kết với tài liệu HTML bằng thẻ `<link>`.

```css
p {
    color: blue;
    font-size: 16px;
}
```

4. Bộ chọn trong CSS (selector) là gì? Bao gồm những thành phần nào ? Liệt kê những bộ chọn phổ biến kèm ví dụ

-   Element Selector: Chọn tất cả các phần tử có tên thẻ cụ thể.

```css
p {
    color: blue;
}
```

-   Class Selector: Chọn các phần tử có class cụ thể. Class được đặt trước bằng dấu chấm .

```css
.classname {
    font-size: 16px;
}
```

-   ID Selector: Chọn phần tử có ID cụ thể. ID được đặt trước bằng dấu thăng #.

```css
#unique-id {
    background-color: yellow;
}
```

-   Universal Selector: Chọn tất cả các phần tử.

```css
* {
    margin: 0;
    padding: 0;
}
```

-   Attribute Selector: Chọn các phần tử dựa trên giá trị của thuộc tính.

```css
[type="text"] {
    border: 1px solid black;
}
```

-   Pseudo-class Selector: Chọn các phần tử dựa trên trạng thái hoặc vị trí đặc biệt.

```css
a:hover {
    color: red;
}
p:first-child {
    font-weight: bold;
}
```

-   Pseudo-element Selector: Chọn và style một phần cụ thể của phần tử.

```css
p::first-line {
    font-size: 18px;
}
p::before {
    content: "Note: ";
    font-weight: bold;
}
```

-   Descendant Selector: Chọn các phần tử là hậu duệ của một phần tử khác.

```css
div p {
    color: green;
}
```

-   Child Selector: Chọn các phần tử là con trực tiếp của một phần tử khác.

```css
ul > li {
    list-style-type: none;
}
```

5. Hệ màu (color) là gì ? cho ví dụ những hệ màu có thể được sử dụng.

-   Hệ màu (color) là cách bạn xác định và sử dụng màu sắc để thiết kế giao diện trang web.
-   CSS hỗ trợ một số tên màu định sẵn, ví dụ như red, blue, green, v.v.

```css
p {
    color: red;
}
```

-   Sử dụng giá trị của ba thành phần màu đỏ, xanh lá và xanh dương, mỗi thành phần có giá trị từ 0 đến 255.

```css
div {
    background-color: rgb(255, 0, 0);
}
```

-   Hệ màu RGBA (Red, Green, Blue, Alpha)
    Giống như RGB nhưng thêm kênh alpha để xác định độ trong suốt (opacity), giá trị alpha từ 0 (trong suốt hoàn toàn) đến 1 (đục hoàn toàn).

```css
div {
    background-color: rgba(255, 0, 0, 0.5);
}
```

-   Hệ màu HEX (Hexadecimal)
    Sử dụng mã hex (hệ thập lục phân) để biểu diễn màu sắc, bắt đầu bằng dấu # và theo sau là sáu ký tự.

```css
h1 {
    color: #ff0000;
}
```

-   Hệ màu HSL (Hue, Saturation, Lightness)
    Sử dụng ba thành phần: hue (màu sắc, giá trị từ 0 đến 360 độ), saturation (độ bão hòa, giá trị từ 0% đến 100%), và lightness (độ sáng, giá trị từ 0% đến 100%).

```css
p {
    color: hsl(0, 100%, 50%);
}
```

-   Hệ màu HSLA (Hue, Saturation, Lightness, Alpha)
    Giống như HSL nhưng thêm kênh alpha để xác định độ trong suốt (opacity).

```css
p {
    color: hsla(0, 100%, 50%, 0.5);
}
```

6. CSS cascade là gì? cho ví dụ các rules cascade

-   CSS cascade (xếp chồng CSS) là một quy trình mà trình duyệt web sử dụng để quyết định style nào sẽ được áp dụng cho một phần tử khi có nhiều rule CSS có thể áp dụng. Cascade hoạt động dựa trên các nguyên tắc về trọng số (specificity), thứ tự xuất hiện (order), và nguồn gốc của style (origin).

#### Trọng số (Specificity): Các rule có trọng số cao hơn sẽ được ưu tiên áp dụng. Trọng số được xác định dựa trên loại selector:

-
-   Inline style (style trong thẻ HTML) có trọng số cao nhất.
-   ID selectors (#id) có trọng số cao.
-   Class selectors (.class), attribute selectors ([attr=value]), và pseudo-classes (:hover, :focus) có trọng số trung bình.
-   Element selectors (div, p, h1) và pseudo-elements (::before, ::after) có trọng số thấp.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSS Cascade Example</title>
        <style>
            p {
                color: blue;
            }

            .important {
                color: red;
            }

            #unique {
                color: green;
            }
        </style>
    </head>
    <body>
        <p class="important" id="unique" style="color: yellow;">
            This is a paragraph.
        </p>
    </body>
</html>
```

7. CSS Box Model là gì ? Box dimension là gì? Cho vi dụ các thuộc tính: min/ max width, min/ max height

-   CSS Box Model là một khái niệm cơ bản trong CSS, mô tả cách các phần tử HTML được bố trí và hiển thị trong tài liệu web.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Box Model Example</title>
        <style>
            .box {
                width: 50%; /* Chiều rộng 50% của phần tử cha */
                height: 150px; /* Chiều cao cố định */
                padding: 20px; /* Padding 20px */
                border: 2px solid black; /* Viền đen dày 2px */
                margin: 10px; /* Khoảng cách 10px từ các phần tử khác */
                background-color: lightblue; /* Màu nền xanh nhạt */
            }

            .box-with-min-max {
                min-width: 200px; /* Chiều rộng tối thiểu 200px */
                max-width: 400px; /* Chiều rộng tối đa 400px */
                min-height: 100px; /* Chiều cao tối thiểu 100px */
                max-height: 300px; /* Chiều cao tối đa 300px */
                width: 60%; /* Chiều rộng dựa trên phần trăm */
                height: auto; /* Chiều cao tự động điều chỉnh */
                padding: 10px; /* Padding 10px */
                border: 1px solid blue; /* Viền xanh dày 1px */
                margin: 15px; /* Khoảng cách 15px từ các phần tử khác */
                background-color: lightgreen; /* Màu nền xanh lá nhạt */
            }
        </style>
    </head>
    <body>
        <div class="box">This is a box with fixed dimensions.</div>
        <div class="box-with-min-max">
            This is a box with min and max dimensions. Resize the window to see
            the effect.
        </div>
    </body>
</html>
```

8. Một số thuộc tính cơ bản của CSS (color, margin, padding, border, background, width, height, text, font, display, position, z-index, opacity…) kèm ví dụ

-   Color: Thuộc tính color xác định màu sắc của văn bản.
-   Margin: Thuộc tính margin xác định khoảng cách bên ngoài của phần tử.
-   Padding: Thuộc tính padding xác định khoảng cách bên trong giữa nội dung và viền của phần tử.
-   Border: Thuộc tính border xác định viền của phần tử.
-   Background: Thuộc tính background xác định màu nền hoặc hình nền của phần tử.
-   Width: Thuộc tính width xác định chiều rộng của phần tử.
-   Height: Thuộc tính height xác định chiều cao của phần tử.
-   Text: Các thuộc tính liên quan đến văn bản như text-align, text-decoration, text-transform.
-   Font: Các thuộc tính liên quan đến phông chữ như `font-family`, `font-size`, `font-weight`.
-   Display: Thuộc tính display xác định cách phần tử được hiển thị.
-   Position: Thuộc tính position xác định cách phần tử được định vị.
-   Z-index: Thuộc tính z-index xác định thứ tự xếp chồng của các phần tử.
-   Opacity: Thuộc tính opacity xác định độ trong suốt của phần tử.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSS Basic Properties Example</title>
        <style>
            .example {
                color: white;
                margin: 20px;
                padding: 15px;
                border: 2px solid black;
                background-color: lightblue;
                width: 200px;
                height: 100px;
                text-align: center;
                font-family: Arial, sans-serif;
                font-size: 16px;
                font-weight: bold;
                display: inline-block;
                position: relative;
                z-index: 10;
                opacity: 0.9;
            }
        </style>
    </head>
    <body>
        <div class="example">This is an example box.</div>
    </body>
</html>
```

9. Website layout với CSS, cho ví dụ dựng layout với float, flex box, grid và so sánh ưu, nhược điểm giữa chúng.

### Ưu và Nhược điểm của Float

### Ưu điểm:

-   Được hỗ trợ rộng rãi bởi tất cả các trình duyệt.
    Dễ sử dụng cho các layout đơn giản.

### Nhược điểm:

-   Khó khăn trong việc tạo layout phức tạp.
-   Cần phải sử dụng các kỹ thuật phụ như clearfix để tránh các vấn đề với phần tử con.

### Ưu và Nhược điểm của Flexbox

### Ưu điểm:

-   Dễ dàng sắp xếp các phần tử theo nhiều chiều (ngang và dọc).
-   Tự động điều chỉnh các phần tử con sao cho phù hợp với không gian sẵn có.
    Giải quyết tốt các vấn đề về căn chỉnh và khoảng cách giữa các phần tử.

### Nhược điểm:

-   Không phù hợp cho các layout phức tạp hoặc có nhiều lớp lồng nhau.
-   Có thể khó hiểu và sử dụng đối với người mới bắt đầu.

### Ưu và Nhược điểm của CSS Grid

### Ưu điểm:

-   Tạo layout phức tạp một cách dễ dàng.
-   Có thể định nghĩa vùng riêng biệt cho mỗi phần tử trong layout.
-   Linh hoạt trong việc sắp xếp và căn chỉnh các phần tử.

### Nhược điểm:

-   Cú pháp phức tạp hơn, có thể gây khó khăn cho người mới bắt đầu.
-   Cần phải tìm hiểu kỹ về các thuộc tính của Grid để sử dụng hiệu quả.

10. Các đơn vị kích thước trong css: absolute, resolution, relative, root- relative (px, rem, em, %, vh, vw…) được sử dụng như thế nào ? Kèm ví dụ

-   px (pixels): Đơn vị điểm ảnh, phổ biến nhất và không thay đổi theo kích thước màn hình.
-   pt (points): Đơn vị thường được sử dụng trong in ấn, tương đương với 1/72 của một inch.
-   in (inches): Đơn vị inch.
-   cm (centimeters): Đơn vị xentimét.
-   mm (millimeters): Đơn vị milimét.

#### Absolute Units

Các đơn vị kích thước tuyệt đối (absolute) là các giá trị cố định, không thay đổi dựa trên kích thước của các phần tử khác hoặc viewport.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Absolute Units Example</title>
    <style>
        .box-px,.box-cm,.box-in{
            color:#333;
        }
        .box-px {
            width: 100px;
            height: 100px;
            background-color: lightblue;
        }
        .box-cm {
            width: 5cm;
            height: 5cm;
            background-color: lightgreen;
        }
        .box-in {
            width: 2in;
            height: 2in;
            background-color: lightcoral;
        }
    </style>
</head>
<body>
    <div class="box-px">100px</div>
    <div class="box-cm">5cm</div>
    <div class="box-in">2in</div>
</body>
</html>

#### Resolution Units

Các đơn vị độ phân giải, thường sử dụng trong các thiết bị hiển thị.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relative Units Example</title>
    <style>
        .box-em,.box-rem{
            color:#333;
        }
        .box-em {
            width: 10em;
            height: 10em;
            background-color: lightblue;
        }
        .box-rem {
            width: 10rem;
            height: 10rem;
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <div class="box-em">10em</div>
    <div class="box-rem">10rem</div>
</body>
</html>

#### Relative Units

Các đơn vị tương đối thay đổi dựa trên kích thước của các phần tử khác hoặc font size của phần tử.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relative Units Example</title>
    <style>
        .box-em {
            width: 10em;
            height: 10em;
            background-color: lightblue;
        }
        .box-rem {
            width: 10rem;
            height: 10rem;
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <div class="box-em">10em</div>
    <div class="box-rem">10rem</div>
</body>
</html>

#### Root-Relative Units

rem: Đơn vị dựa trên kích thước font của phần tử gốc (root).

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Root-Relative Units Example</title>
    <style>
        :root {
            font-size: 16px;
        }
        .box {
            width: 10rem;
            height: 10rem;
            background-color: lightblue;
            color:#333;
        }
    </style>
</head>
<body>
    <div class="box">10rem</div>
</body>
</html>

#### Viewport Units

Các đơn vị viewport dựa trên kích thước của viewport (cửa sổ trình duyệt).

vh (viewport height): 1vh là 1% của chiều cao viewport.

vw (viewport width): 1vw là 1% của chiều rộng viewport.

vmin: Giá trị nhỏ hơn giữa vw và vh.

vmax: Giá trị lớn hơn giữa vw và vh.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Viewport Units Example</title>
    <style>
        .box-vh {
            width: 50vw;
            height: 50vh;
            background-color: lightcoral;
        }
        .box-vmin {
            width: 50vmin;
            height: 50vmin;
            background-color: lightgoldenrodyellow;
        }
    </style>
</head>
<body>
    <div class="box-vh">50vw x 50vh</div>
    <div class="box-vmin">50vmin x 50vmin</div>
</body>
</html>

11. CSS Pseudo là gì ? cho ví dụ 1 số loại phổ biến như: combining, structural, user- action, ui- state

#### CSS Pseudo là các selector đặc biệt được sử dụng để định kiểu cho các trạng thái hoặc phần tử cụ thể mà không cần thêm lớp hoặc thay đổi cấu trúc HTML.

#### Combining Pseudo-classes

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combining Pseudo-classes</title>
    <style>
        a:hover::before {
            content: "→ ";
            color: red;
        }
        a:visited {
            color: purple;
        }
        a:hover {
            color: green;
        }
    </style>
</head>
<body>
    <a href="#">Link Hover and Visited</a>
</body>
</html>

#### Structural Pseudo-classes

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Structural Pseudo-classes</title>
    <style>
        li:first-child {
            color: red;
        }
        li:last-child {
            color: blue;
        }
        li:nth-child(2) {
            color: green;
        }
    </style>
</head>
<body>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
</body>
</html>

#### User-action Pseudo-classes

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User-action Pseudo-classes</title>
    <style>
        button:hover {
            background-color: lightblue;
        }
        button:active {
            background-color: lightcoral;
        }
        input:focus {
            border-color: lightgreen;
        }
    </style>
</head>
<body>
    <button>Hover and Active</button>
    <input type="text" placeholder="Focus on me">
</body>
</html>

#### UI-state Pseudo-classes

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UI-state Pseudo-classes</title>
    <style>
        input:disabled {
            background-color: lightgray;
        }
        input:enabled {
            background-color: white;
        }
        input:checked {
            outline: 2px solid green;
        }
    </style>
</head>
<body>
    <input type="text" disabled placeholder="Disabled input">
    <input type="text" placeholder="Enabled input">
    <input type="checkbox" checked>
    <input type="radio" checked>
</body>
</html>

#### 12. CSS Media Queries là gì ? được ứng dụng như thế nào và tại sao? kèm ví dụ

#### CSS Media Queries là một tính năng của CSS3 cho phép các nhà phát triển thiết kế các trang web đáp ứng (responsive design) bằng cách áp dụng các kiểu CSS khác nhau dựa trên các điều kiện cụ thể của môi trường hiển thị. Điều này cho phép trang web hiển thị tối ưu trên nhiều loại thiết bị khác nhau như điện thoại di động, máy tính bảng, máy tính để bàn, v.v.

#### Ứng dụng của CSS Media Queries

Responsive Design: Giúp trang web hiển thị tốt trên nhiều kích thước màn hình khác nhau.
Custom Styling: Áp dụng các kiểu CSS khác nhau cho các thiết bị hoặc trình duyệt cụ thể.
Performance: Tải các tài nguyên hoặc thành phần CSS chỉ khi cần thiết dựa trên điều kiện của thiết bị.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Media Queries Example</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                width: 100%;
                margin: 0 auto;
                padding: 20px;
            }
            .box {
                background-color: lightblue;
                padding: 20px;
                margin: 10px 0;
            }

            @media (max-width: 600px) {
                .box {
                    background-color: lightgreen;
                }
            }

            @media (min-width: 601px) and (max-width: 1200px) {
                .box {
                    background-color: lightcoral;
                }
            }

            @media (min-width: 1201px) {
                .box {
                    background-color: lightblue;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="box">This is a responsive box</div>
        </div>
    </body>
</html>
```

#### 13. Hiệu ứng (animation) bằng CSS kèm vídụ

CSS Animation là một kỹ thuật mạnh mẽ để tạo ra các hiệu ứng động trên trang web mà không cần sử dụng JavaScript. CSS Animation cho phép bạn thay đổi nhiều thuộc tính của phần tử trong khoảng thời gian xác định. Các thành phần chính của CSS Animation bao gồm:

-   @keyframes: Định nghĩa các khung hình chính (keyframes) của animation.
-   animation-name: Đặt tên cho animation để tham chiếu đến @keyframes.
-   animation-duration: Thời gian thực hiện animation.
-   animation-timing-function: Đường cong tốc độ của animation (ví dụ: ease, linear, ease-in, ease-out, ease-in-out).
-   animation-delay: Thời gian chờ trước khi animation bắt đầu.
-   animation-iteration-count: Số lần lặp lại của animation.
-   animation-direction: Hướng chạy của animation (ví dụ: normal, reverse, alternate, alternate-reverse).
-   animation-fill-mode: Xác định trạng thái của phần tử trước và sau khi animation chạy (ví dụ: none, forwards, backwards, both).

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Simple Animation Example</title>
        <style>
            .box {
                width: 50px;
                height: 50px;
                background-color: lightblue;
                position: relative;
                animation-name: move;
                animation-duration: 2s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }

            @keyframes move {
                0% {
                    left: 0;
                }
                50% {
                    left: 300px;
                }
                100% {
                    left: 0;
                }
            }
        </style>
    </head>
    <body>
        <div class="box"></div>
    </body>
</html>
```

#### 14. Responsive website là gì? Tại sao cần responsive website ? liệt kê các nguyên tắc responsive

Responsive website là một trang web được thiết kế để tự động điều chỉnh và hiển thị tốt trên nhiều loại thiết bị và kích thước màn hình khác nhau, từ điện thoại di động, máy tính bảng đến máy tính để bàn. Mục tiêu của thiết kế responsive là đảm bảo trải nghiệm người dùng tốt nhất có thể, bất kể họ đang sử dụng loại thiết bị nào.

#### Tại sao cần Responsive Website?

Trải nghiệm người dùng tốt hơn: Một trang web responsive giúp đảm bảo rằng người dùng có thể dễ dàng đọc và tương tác với nội dung, bất kể thiết bị mà họ sử dụng.

SEO tốt hơn: Google ưu tiên các trang web responsive trong kết quả tìm kiếm, giúp cải thiện thứ hạng SEO.

Tăng tỷ lệ chuyển đổi: Trải nghiệm người dùng tốt hơn có thể dẫn đến tỷ lệ chuyển đổi cao hơn, chẳng hạn như việc đăng ký, mua hàng hoặc các hành động khác.

Tiết kiệm chi phí và thời gian phát triển: Thay vì phát triển và duy trì nhiều phiên bản của trang web cho các thiết bị khác nhau, một trang web responsive có thể hoạt động tốt trên mọi thiết bị.

Tương lai bảo đảm: Thiết bị và kích thước màn hình tiếp tục thay đổi, và thiết kế responsive giúp trang web của bạn thích ứng với những thay đổi này một cách dễ dàng.

#### Nguyên tắc Responsive

Sử dụng Layout lưới linh hoạt (Flexible Grid Layouts): Sử dụng các đơn vị phần trăm thay vì pixel cố định để thiết lập kích thước và khoảng cách.

```css
.container {
    width: 100%;
    padding: 10%;
}
```

Media Queries: Sử dụng Media Queries để áp dụng các kiểu CSS khác nhau cho các kích thước màn hình khác nhau.

```css
@media (max-width: 768px) {
    .container {
        padding: 5%;
    }
}
```

Hình ảnh linh hoạt (Flexible Images): Đảm bảo hình ảnh có thể thay đổi kích thước để phù hợp với bố cục bằng cách sử dụng các thuộc tính như max-width.

```css
img {
    max-width: 100%;
    height: auto;
}
```

Typography linh hoạt: Sử dụng đơn vị em hoặc rem cho kích thước font chữ để đảm bảo rằng văn bản có thể thay đổi kích thước tương ứng với thiết bị.

```css
body {
    font-size: 1rem;
}
```

Ẩn hoặc hiển thị nội dung tùy theo kích thước màn hình: Sử dụng Media Queries để ẩn hoặc hiển thị nội dung cho các kích thước màn hình khác nhau.

```css
@media (max-width: 600px) {
    .desktop-only {
        display: none;
    }
}
```

Thiết kế Mobile-first: Bắt đầu thiết kế từ phiên bản di động và sau đó mở rộng lên các phiên bản màn hình lớn hơn, thay vì thiết kế ngược lại.

```css
body {
    font-size: 1rem;
}
@media (min-width: 768px) {
    body {
        font-size: 1.2rem;
    }
}
```

#### 15. Thực hành ứng dụng CSS vào các template đã dựng ở phần HTML.
