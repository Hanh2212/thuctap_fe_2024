# HTML

## Nội dung cơ bản

#### 1. HTML là gì ? Cho biết các chuẩn HTML ?

###### HTML là ngôn ngữ đánh dấu dùng để tạo và thiết kế các trang web. Nó cho phép các nhà phát triển web tạo cấu trúc và định dạng nội dung trên trang web bằng cách sử dụng các phần tử (elements) và thẻ (tags). Các thẻ HTML được sử dụng để định nghĩa các đoạn văn, tiêu đề, liên kết, hình ảnh, bảng biểu, và nhiều yếu tố khác trên trang web.

###### Các chuẩn HTML:

-   HTML 1.0
-   HTML 2.0
-   HTML 3.2
-   HTML 4.0 và 4.01
-   XHTML 1.0
-   HTML 5 (mới nhất)

#### 2. Phân tích cấu trúc cơ bản của trang html dưới đây: !DOCTYPE, head, meta...

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HTML5 Boilerplate</title>
        <link rel="stylesheet" href="styles.css" />
    </head>

    <body>
        <h1>Page Title</h1>
        <script src="scripts.js"></script>
    </body>
</html>
```

###### VD: Cấu trúc cơ bản của 1 trang HTML bao gồm:

-   HTML5 Doctype: được sử dụng để thông báo cho trình duyệt của người dùng truy cập trang web rằng tài liệu được hiển thị là tài liệu HTML. Mọi tài liệu HTML phải được khai báo bằng DOCTYPE để tuân thủ các tiêu chuẩn HTML

*   `<!DOCTYPE html>`: Khai báo doctype được sử dụng để thông báo cho trình duyệt rằng tài liệu này là một tài liệu HTML5

*   `<html lang="en">`: Thẻ gốc của tài liệu HTML, chứa tất cả các phần tử HTML khác. Thuộc tính lang="en" chỉ định ngôn ngữ của tài liệu là tiếng Anh, giúp các công cụ tìm kiếm và trình duyệt hỗ trợ tốt hơn về mặt ngôn ngữ.

*   `<head>`: Chứa các thông tin meta về tài liệu HTML như tiêu đề, mã hóa ký tự, liên kết đến các tệp CSS, và các thông tin khác không hiển thị trực tiếp trên trang web.

*   `<meta charset="utf-8">`: Định nghĩa bảng mã ký tự là UTF-8, một chuẩn mã hóa phổ biến hỗ trợ hầu hết các ký tự của các ngôn ngữ trên thế giới.

*   `<meta name="viewport" content="width=device-width, initial-scale=1">`: Đảm bảo rằng trang web sẽ hiển thị tốt trên tất cả các thiết bị, bao gồm cả các thiết bị di động. Thiết lập này giúp trang web có độ rộng tương ứng với độ rộng của thiết bị và không phóng to hay thu nhỏ khi tải trang.

*   `<title>HTML5 Boilerplate</title>`: Đặt tiêu đề cho trang web.

*   `<link rel="stylesheet" href="styles.css">`: Liên kết đến tệp CSS bên ngoài để định dạng và thiết kế trang web.

#### 3. Các quy ước viết code của HTML là gì ?

-   Sử dụng đúng DOCTYPE, luôn khai báo doctype ở dòng đầu tiên của trang.
-   Viết thường tên các thẻ
-   Luôn sử dụng thẻ đóng
-   Đóng thẻ rỗng (ví dụ: `<meta charset="utf-8" />`)
-   Viết thường tên các thuộc tính (ví dụ: `<div class="menu">`)
-   Sử dụng chú thích để giải thích các phần của mã hoặc ghi chú lại những điều quan trọng.
-   Sử dụng các quy ước đặt tên nhất quán cho lớp CSS (classes) và id
-   Tránh sử dụng CSS nội tuyến trong các thẻ HTML. Thay vào đó, sử dụng các tệp CSS bên ngoài hoặc thẻ `<style>` trong phần `<head>`
-   Sử dụng các thuộc tính và thẻ HTML hỗ trợ khả năng truy cập, chẳng hạn như alt cho thẻ `<img>`, aria attributes, và các thẻ ngữ nghĩa.

#### 4. Các phần tử (element) được cấu tạo từ gì ? Các phần tử (element) cơ bản của HTML là gì ?

### Các phần tử (element) trong HTML được cấu tạo từ các thẻ (tags) và nội dung (content). Mỗi phần tử HTML bao gồm các thành phần cơ bản sau:

###### Thẻ mở (Opening tag):

-   Bắt đầu phần tử và có dạng `<element>`.
-   Có thể chứa các thuộc tính (attributes) để cung cấp thông tin bổ sung về phần tử, ví dụ: `<element attribute="value">`.

###### Nội dung (Content):

-   Phần nội dung nằm giữa thẻ mở và thẻ đóng.
-   Có thể là văn bản, các phần tử HTML khác, hoặc thậm chí là trống đối với một số phần tử tự đóng (self-closing).

###### Thẻ đóng (Closing tag):

-   Kết thúc phần tử và có dạng </element>.
-   Một số phần tử không có thẻ đóng riêng biệt và tự đóng (self-closing), ví dụ: <img />.

### Các phần tử cơ bản của HTML

##### 1. Phần tử cấu trúc tài liệu

-   `<html>`: Phần tử gốc của tài liệu HTML.
-   `<head>`: Chứa thông tin meta về tài liệu, liên kết tới các tài nguyên bên ngoài, tiêu đề trang (`<title>`), và các thẻ cấu hình khác.
-   `<body>`: Chứa toàn bộ nội dung hiển thị của trang web.

##### 2. Phần tử tiêu đề và đoạn văn

-   `<h1>` đến `<h6>`: Các tiêu đề, với `<h1>` là tiêu đề quan trọng nhất và `<h6>` là ít quan trọng nhất.
-   `<p>`: Đoạn văn.

##### 3. Phần tử danh sách

-   `<ul>`: Danh sách không thứ tự (unordered list).
-   `<ol>`: Danh sách có thứ tự (ordered list).
-   `<li>`: Phần tử danh sách (list item).

##### 4. Phần tử liên kết và phương tiện

-   `<a>`: Liên kết (anchor).
-   `<img>`: Hình ảnh (image).
-   `<video>`: Video.
-   `<audio>`: Âm thanh (audio).

##### 5. Phần tử bảng biểu

-   `<table>`: Bảng.
-   `<tr>`: Hàng của bảng (table row).
-   `<td>`: Ô của bảng (table data).
-   `<th>`: Ô tiêu đề của bảng (table header).

##### 6. Phần tử biểu mẫu

-   `<form>`: Biểu mẫu (form).
-   `<input>`: Phần tử nhập liệu (input).
-   `<textarea>`: Ô nhập văn bản nhiều dòng (textarea).
-   `<button>`: Nút (button).

##### 7. Phần tử ngữ nghĩa (HTML5)

-   `<header>`: Phần đầu của tài liệu hoặc phần.
-   `<footer>`: Phần cuối của tài liệu hoặc phần.
-   `<nav>`: Liên kết điều hướng (navigation links).
-   `<article>`: Bài viết độc lập.
-   `<section>`: Một phần hoặc một khu vực trong tài liệu.
-   `<aside>`: Nội dung phụ hoặc phần bên.
-   `<main>`: Nội dung chính của tài liệu.

##### 8. Phần tử định dạng văn bản

-   `<strong>`: Đoạn văn bản quan trọng, thường được hiển thị đậm.
-   `<em>`: Đoạn văn bản cần nhấn mạnh, thường được hiển thị nghiêng.
-   `<br>`: Ngắt dòng (line break).
-   `<span>`: Phần tử nội tuyến không có ý nghĩa riêng biệt, thường được sử dụng để áp dụng CSS hoặc JavaScript.

##### 4.1 Phân biệt các phần tử Block và Inline kèm ví dụ.

### Phần tử khối (Block Elements)

-   Chiếm toàn bộ chiều rộng của cha chứa nó: Phần tử khối luôn bắt đầu trên một dòng mới và chiếm toàn bộ chiều ngang của trang hoặc vùng chứa.
-   Có thể chứa các phần tử khối khác hoặc phần tử nội tuyến: Bạn có thể lồng các phần tử khối bên trong phần tử khối khác, cũng như các phần tử nội tuyến.
-   Tạo các khối nội dung: Chúng thường được sử dụng để tạo bố cục và định dạng các khối nội dung lớn.

-   Ví dụ:

```html
<div>
    <h1>This is a heading</h1>
    <p>This is a paragraph inside a div element.</p>
</div>
<section>
    <h2>This is a subheading</h2>
    <p>This is another paragraph inside a section element.</p>
</section>
```

### Phần tử nội tuyến (Inline Elements)

-   Không bắt đầu trên một dòng mới: Phần tử nội tuyến không phá vỡ dòng chảy văn bản, nghĩa là chúng không bắt đầu trên một dòng mới.
-   Chỉ chiếm không gian cần thiết cho nội dung của nó: Phần tử nội tuyến chỉ chiếm không gian cần thiết để chứa nội dung của chúng.
-   Có thể chứa các phần tử nội tuyến khác hoặc nội dung văn bản: Không thể chứa các phần tử khối bên trong phần tử nội tuyến.
-   Ví dụ:

```html
<p>
    This is a paragraph with <a href="#">a link</a> and some
    <strong>bold text</strong>.
</p>
<span>This is a span element inside a paragraph.</span>
```

#### 5. Các thuộc tính (attribute) có ý nghĩa gì ? Cho ví dụ về các thuộc tính cơ bản của một số thẻ HTML (id, class, style, src, width, height, href, tile, alt …)

##### Trong HTML, thuộc tính (attributes) cung cấp thêm thông tin về các phần tử. Thuộc tính được đặt bên trong thẻ mở của phần tử và có cấu trúc chung là name="value". Các thuộc tính giúp tùy chỉnh cách phần tử được hiển thị và tương tác trên trang web.

##### Ví dụ:

-   id: Xác định một định danh duy nhất cho phần tử.

```html
<div id="header">This is the header</div>
```

-   class: Gán một hoặc nhiều lớp (class) cho phần tử, cho phép áp dụng CSS hoặc JavaScript

```html
<p class="intro">This is an introductory paragraph.</p>
```

-   style: Áp dụng kiểu CSS trực tiếp cho phần tử.

```html
<h1 style="color: blue; text-align: center;">This is a heading</h1>
```

-   src: Chỉ định nguồn tài nguyên, thường được sử dụng với các thẻ như `<img>, <script>, <iframe>`.

```html
<img src="image.jpg" alt="Description of image" />
```

-   width và height: Xác định chiều rộng và chiều cao của phần tử, thường được sử dụng với thẻ `<img> hoặc <video>`.

```html
<img src="image.jpg" alt="Description of image" width="500" height="300" />
```

-   href: Chỉ định URL của tài nguyên được liên kết, thường được sử dụng với thẻ `<a>` và `<link>`.

```html
<a href="https://example.com">Visit Example.com</a>
```

-   title: Cung cấp thông tin bổ sung về phần tử dưới dạng chú giải (tooltip).

```html
<p title="This is a tooltip">Hover over this text to see the tooltip.</p>
```

-   alt: Cung cấp văn bản thay thế cho hình ảnh nếu hình ảnh không thể hiển thị. Rất quan trọng cho khả năng truy cập.

```html
<img src="image.jpg" alt="Description of image" />
```

-   type: Chỉ định loại phần tử hoặc loại dữ liệu được gửi đi, thường được sử dụng với thẻ `<input>` hoặc `<button>`.

```html
<input type="text" name="username" /> và <button type="submit">Submit</button>
```

-   name: Chỉ định tên của phần tử, thường được sử dụng với thẻ `<input>`, `<select>`, `<textarea>` trong các biểu mẫu.

#### 6. Một số thẻ thông dụng của HTML (thẻ header, title, footer, section, div, h, p, link, style, script, a, img…)

#### `<header>`: Định nghĩa phần tiêu đề của một trang hoặc một phần của trang.

```html
<header>
    <h1>Website Header</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</header>
```

#### `<title>`: Đặt tiêu đề cho trang web. Tiêu đề này sẽ hiển thị trên thanh tiêu đề của trình duyệt.

```html
<title>Trang chủ</title>
```

#### <footer>: Định nghĩa phần chân trang của một trang hoặc một phần của trang.

```html
<footer>
    <p>&copy; 2024 Company Name. All rights reserved.</p>
</footer>
```

#### `<section>`: Định nghĩa một phần của trang web, thường có một chủ đề cụ thể.

```html
<section>
    <h2>Introduction</h2>
    <p>This is the introduction section.</p>
</section>
```

#### `<div>`: Định nghĩa một khối chứa các phần tử HTML và được sử dụng để tạo bố cục của trang web.

```html
<div class="container">
    <p>This is a paragraph inside a div element.</p>
</div>
```

#### `<h1> đến <h6>`: Định nghĩa các tiêu đề với mức độ quan trọng giảm dần từ `<h1>` (quan trọng nhất) đến `<h6>` (ít quan trọng nhất).

```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
```

#### `<p>`: Định nghĩa một đoạn văn.

```html
<p>This is a paragraph</p>
```

#### `<link>`: Liên kết một tài nguyên bên ngoài, thường là một tập tin CSS để định dạng trang web.

```html
<link rel="stylesheet" href="styles.css" />
```

#### `<style>`: Định nghĩa kiểu CSS trực tiếp trong tài liệu HTML.

```html
<style>
    body {
        font-family: Arial, sans-serif;
    }
</style>
```

#### `<script>`: Chứa mã JavaScript để thực thi trên trang web.

```html
<script>
    console.log("Hello, world!");
</script>
```

#### `<a>`: Định nghĩa một liên kết (hyperlink) đến một trang web khác hoặc một tài nguyên khác.

```html
<a href="https://www.example.com">Visit Example.com</a>
```

#### `<img>`: Chèn một hình ảnh vào trang web.

```html
<img src="image.jpg" alt="Description of image" />
```

##### 6.1 Thêm image vào trang như thế nào ? Các thuộc tính cần thiết cần có trong thẻ img và nêu lý do tại sao ? Vị trí đặt thẻ img trong code là quan trọng vì trình duyệt sẽ hiển thị các phần tử HTML theo 1 trong 2 kiểu ? Đó là 2 kiểu nào và cho ví dụ ? Thuộc tính align trong thẻ img có ý nghĩa gì, cho ví dụ.

### Ví dụ

Để thêm một hình ảnh vào trang web, sử dụng thẻ `<img>` với các thuộc tính cần thiết.

```html
<img src="image.jpg" alt="Description of image" />
```

### Thuộc tính cần thiết

-   src: Chỉ định đường dẫn đến tệp hình ảnh.
-   alt: Cung cấp văn bản thay thế cho hình ảnh nếu hình ảnh không thể hiển thị.
-   width và height: Xác định chiều rộng và chiều cao của hình ảnh.

### Vị trí đặt thẻ <img> trong code

-   Block Elements: Các phần tử block chiếm toàn bộ chiều rộng của phần tử cha và bắt đầu trên một dòng mới.

```html
<div>
    <img src="image.jpg" alt="Beautiful scenery" />
    <p>This is a paragraph after the image.</p>
</div>
```

\*Inline Elements: Các phần tử inline không bắt đầu trên một dòng mới và chỉ chiếm không gian cần thiết cho nội dung của chúng.

```html
<p>
    This is an inline image:
    <img src="image.jpg" alt="Beautiful scenery" /> within text.
</p>
```

### Thuộc tính `align` được sử dụng để căn chỉnh hình ảnh so với văn bản xung quanh nó. Tuy nhiên, thuộc tính này hiện đã bị loại bỏ khỏi chuẩn HTML và không nên sử dụng. Thay vào đó, sử dụng CSS để căn chỉnh hình ảnh.

#### Ví dụ

```html
<img src="image.jpg" alt="Beautiful scenery" align="left" />
<p>This text will flow around the image.</p>
```

#### 7. Một số thẻ nâng cao của HTML (thẻ table, ul, ol, li, form, iframe, canvas, meta…)

#### `<table>` : Định nghĩa một bảng trong tài liệu HTML.

```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

#### ` <ul>` : Định nghĩa một danh sách không thứ tự.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

#### `<ol>`: Định nghĩa một danh sách có thứ tự.

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

#### `<li>`: Định nghĩa một mục trong danh sách, được sử dụng bên trong <ul> và <ol>.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

#### `<form>`: Định nghĩa một biểu mẫu để thu thập dữ liệu người dùng.

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
    <input type="submit" value="Submit" />
</form>
```

#### `<iframe>` : Chèn một tài liệu HTML khác vào trong trang hiện tại.

```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
```

#### `<canvas>`: Định nghĩa một vùng để vẽ đồ họa bằng JavaScript.

```html
<canvas
    id="myCanvas"
    width="200"
    height="100"
    style="border:1px solid #000000;"
></canvas>
<script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
</script>
```

#### `<meta>`: Cung cấp thông tin meta về tài liệu, như charset, author, viewport

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="This is an example of a meta description." />
```

##### 7.1 Có những loại thẻ list nào, cho ví dụ.

`<ul>` (Unordered List)
Danh sách không thứ tự, các mục trong danh sách được đánh dấu bằng các dấu chấm

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

`<ol>`Danh sách có thứ tự, các mục trong danh sách được đánh dấu bằng số.

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

`<dl>`Danh sách mô tả, dùng để tạo danh sách các thuật ngữ và định nghĩa.

```html
<dl>
    <dt>HTML</dt>
    <dd>A markup language for creating web pages.</dd>

    <dt>CSS</dt>
    <dd>
        A style sheet language for describing the presentation of web pages.
    </dd>

    <dt>JavaScript</dt>
    <dd>A programming language for creating interactive web pages.</dd>
</dl>
```

##### 7.2 Các trường hợp nào sử dụng link - thẻ a ?

#### 1. Liên kết đến trang web khác

```html
<a href="https://www.example.com">Visit Example.com</a>
```

#### 2. Liên kết nội bộ đến một phần khác của cùng một trang

```html
<a href="#section1">Go to Section 1</a>

<h2 id="section1">Section 1</h2>
<p>This is section 1 content.</p>
```

#### 3. Liên kết đến một tài liệu hoặc tệp tin để tải về

```html
<a href="files/example.pdf" download>Download Example PDF</a>
```

#### 4. Liên kết để mở email client với địa chỉ email

```html
<a href="mailto:someone@example.com">Send Email</a>
```

#### 5. Liên kết để gọi điện thoại (trên thiết bị di động)

```html
<a href="tel:+1234567890">Call Us</a>
```

#### 6. Liên kết để mở một vị trí trên bản đồ

```html
<a href="https://maps.google.com/?q=40.7128,-74.0060" target="_blank"
    >Open in Google Maps</a
>
```

#### 7. Liên kết kích hoạt JavaScript

```html
<a href="javascript:void(0);" onclick="alert('Hello, world!');">Click me</a>
```

#### 8. Liên kết với thuộc tính target="\_blank" để mở trong tab mới

```html
<a href="https://www.example.com" target="_blank"
    >Visit Example.com in a new tab</a
>
```

##### 7.3 Để link tới 1 trang trong cùng site đó, nên sử dụng relative link hay qualified URL ? Tại sao ?

## Relative Link: Relative link chỉ đường dẫn tới một tài nguyên liên quan đến vị trí của trang hiện tại.

```html
<a href="about.html">About Us</a>
```

## Qualified URL: Qualified URL (hoặc Absolute URL) chỉ đường dẫn đầy đủ bao gồm giao thức (http, https) và tên miền.

```html
<a href="https://www.example.com/about.html">About Us</a>
```

### Nên sử dụng relative link. Điều này giúp cho trang web của bạn dễ bảo trì, linh hoạt và dễ đọc hơn.

##### 7.4 Cấu trúc cơ bản của phần tử table gồm những phần tử con nào, cho ví dụ và nêu ý nghĩa các phần tử con đó ? Cho ví dụ các trường hợp: rowspan, colspan ? Với trường hợp table có nhiều dữ liệu có thể chia table thành 3 phần nhỏ ? 3 phần đó là gì ? <t...>

`<tr>` : Định nghĩa một hàng trong bảng.

```html
<table>
    <tr>
        <!-- Các ô dữ liệu hoặc tiêu đề sẽ nằm ở đây -->
    </tr>
</table>
```

`<th>` : Định nghĩa một ô tiêu đề trong bảng. Mặc định, nội dung của ô tiêu đề sẽ được hiển thị đậm và canh giữa.

```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
</table>
```

`<td>` : Định nghĩa một ô dữ liệu trong bảng.

```html
<table>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

`rowspan`: Gộp nhiều hàng thành một ô.

```html
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td rowspan="2">Rowspan Data</td>
        <td>Data 1</td>
    </tr>
    <tr>
        <td>Data 2</td>
    </tr>
</table>
```

`colspan`: Gộp nhiều cột thành một ô.

```html
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td colspan="2">Colspan Data</td>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

Với trường hợp table có nhiều dữ liệu có thể chia table thành 3 phần nhỏ: `<thead>`, `<tbody>`, `<tfoot>`

##### 7.5 Có những loại form controls nào được dùng để thu thập thông tin từ khách truy cập trang web và cho vd ? VD: text input,...; form hoạt động và cấu trúc bao gồm những thành phần thuộc tính gì, cho vd

`Text Input`: Nhập văn bản một dòng.

```html
<label for="name">Name:</label> <input type="text" id="name" name="name" />
```

`Password Input`: Nhập mật khẩu, văn bản nhập vào sẽ được ẩn.

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password" />
```

`Email Input`: Nhập địa chỉ email, trình duyệt sẽ kiểm tra định dạng hợp lệ của email

```html
<label for="email">Email:</label> <input type="email" id="email" name="email" />
```

`Number Input`: Nhập số, có thể tăng giảm giá trị bằng mũi tên.

```html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="1" max="100" />
```

`Radio Button`: Chọn một trong nhiều tùy chọn.

```html
<p>Gender:</p>
<input type="radio" id="male" name="gender" value="male" />
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female" />
<label for="female">Female</label>
```

`Checkbox`: Chọn một hoặc nhiều tùy chọn.

```html
<p>Hobbies:</p>
<input type="checkbox" id="hobby1" name="hobbies" value="reading" />
<label for="hobby1">Reading</label>
<input type="checkbox" id="hobby2" name="hobbies" value="traveling" />
<label for="hobby2">Traveling</label>
```

`Select (Dropdown)`: Chọn một tùy chọn từ danh sách thả xuống.

```html
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="usa">USA</option>
    <option value="canada">Canada</option>
    <option value="uk">UK</option>
</select>
```

`Textarea`: Nhập văn bản nhiều dòng.

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>
```

`Submit Button`: Gửi dữ liệu của form đến máy chủ.

```html
<input type="submit" value="Submit" />
```

`<form>`: Phần tử bao quanh toàn bộ form, định nghĩa form và các thuộc tính liên quan.

-   `action`: URL nơi dữ liệu form sẽ được gửi đến.
-   `method`: Phương thức gửi dữ liệu (GET hoặc POST).
-   `enctype`: Kiểu mã hóa dữ liệu (thường dùng multipart/form-data cho upload file).

##### 7.6 Sử dụng thẻ iframe khi nào và như thế nào, cho vd.

##### Để sử dụng iFrame trong HTML, có thể sử dụng như sau:

```html
<iframe src="URL"></iframe>
```

-   iframe: Tag dùng để khai báo sử dụng iframe trong HTML.
-   src: Thuộc tính khai báo URL của page sẽ được chèn vào iframe.
-   name: Thuộc tính name thường được dùng để định danh một iFrame. Sẽ rất hữu ích nếu bạn muốn tạo một link để mở một website khác.
-   allowfullscreen: Thuộc tính này cho phép hiển thị frame ở định dạng full-width. Bạn cần set giá trị của thuộc này thành true để nó có tác dụng.
-   frameborder: Thuộc tính này cho phép bạn khai báo có hiện hoặc không hiện border của frame. Khi set giá trị là 1, border sẽ được thể hiện, nếu set giá trị là 0, border của frame sẽ không được thể hiện.
-   marginwidth: Cho phép bạn khai báo khoảng cách của hai bên trái & phải của frame.
    marginheight: Thuộc tính này cho phép bạn khai báo khoảng cách phía trên & phía dưới của frame.
-   scrolling: thuộc tính này dùng để kiểm soát việc thanh cuộn (scrollbar) có hiển thị hay không hiển thị vào iFrame. Các giá trị bao gồm là Yes hoặc No hoặc Auto.
-   height: Được sử dụng để xác định chiều cao cho frame (Được xác định bằng % hoặc tính bằng pixel).
-   width: Được sử dụng để xác định chiều rộng cho frame (Được xác định bằng % hoặc tính bằng pixel).
-   Longdesc: Với sự trợ giúp của thuộc tính này, bạn có thể liên kết một trang khác với mô tả dài về nội dung trong frame của bạn.

#### Ví dụ

```html
<!DOCTYPE html>
<html>
    <body>
        <h2>VIETNIX Iframes Demo</h2>
        <p>
            Here we are showing example of Iframe which containing specifc
            Height and width in pixels format
        </p>
        <iframe
            src="C:\Users\Sonali\Desktop\HTML block elements.html"
            style="height:100px;width:300px;"
        ></iframe>
    </body>
</html>
```

#### 8. Liệt kê 1 số ký tự đặc biệt trong html và cho vd ứng dụng trong thực tế

-   `&quot` nháy đôi
-   `&apos` nháy đơn
-   `&amp` dấu &
-   `&lt` dấu nhỏ hơn
-   `&gt` dấu lớn hơn
-   `&ensp` dấu cách

#### 9. Cho vd về cách chia bố cục (layout) cho ứng dụng web bằng các thẻ HTML

```html
<header>
    <div id="head">
        <div class="logo">logo</div>
        <div class="banner">banner</div>
    </div>
    <div id="head-link">head-link</div>
</header>
<section class="content">
    <div id="left">left</div>
    <div id="content">content</div>
    <div id="right">right</div>
</section>
<footer>footer</footer>
```

#### 10. Cho vd về Responsive web tương thích với các màn hình

```css
body {
    background: #fff;
    color: 333;
}

@media all and (max-width: 480px) {
    body {
        background: #333;
        color: 333;
    }
}

@media all and (max-width: 1024px) {
    body {
        background: #ccc;
        color: 333;
    }
}
```

#### 11. Trình bày ý nghĩa và ứng dụng của các quy tắc semantics trong html

#### Phần tử `<article>` được sử dụng cho các nội dung độc lập và chứa nội dung của riêng nó.

```html
<article>
    <h1>WWF làm gì?</h1>
    <p>
        Sứ mệnh của WWF là ngăn chặn sự xuống cấp môi trường tự nhiên của hành
        tinh chúng ta và xây dựng một tương lai trong đó con người sống hài hòa
        với thiên nhiên.
    </p>
</article>
```

#### Phần tử `<header>`xác định phần đầu của một trang tài liệu hay phần đầu của một đoạn.

```html
<article>
    <header>
        <h1>WWF làm gì?</h1>
        <p>Sứ mệnh của WWF:</p>
    </header>
    <p>
        Sứ mệnh của WWF là ngăn chặn sự xuống cấp môi trường tự nhiên của hành
        tinh chúng ta và xây dựng một tương lai trong đó con người sống hài hòa
        với thiên nhiên.
    </p>
</article>
```

#### Phần tử `<footer>` xác định phần cuối của một trang tài liệu hay phần cuối của một đoạn.

```html
<footer>
    <p>Tác giả: Lê Văn A</p>
    <p>
        Thông tin liên hệ:
        <a href="mailto:someone@example.com"> someone@example.com</a>.
    </p>
</footer>
```

#### Phần tử `<nav>` được sử dụng để định nghĩa một tập các liên kết điều hướng trong trang như menu.

```html
<nav>
    <a href="/html/">HTML</a> | <a href="/css/">CSS</a> |
    <a href="/js/">JavaScript</a> |
    <a href="/jquery/">jQuery</a>
</nav>
```

#### Phần tử `<aside>` Xác định nội dung nằm bên cạnh nội dung của trang.

```html
<p>My family and I visited The Epcot center this summer.</p>

<aside>
    <h4>Epcot Center</h4>
    <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```

#### Trong HTML5, hình ảnh và các ghi chú có thể được đặt cùng nhau bên trong phần tử `<figure>`.

#### Phần tử <img> định nghĩa các hình ảnh, phần tử `<figcaption>` định nghĩa các chú thích cho các hình ảnh.

#### 12. Dựng template luyện tập

-   https://www.figma.com/design/yNXCeGf7pMEo0UF5psxZnQ/School-Solved---simple%C2%A0html%C2%A0template-code-for-school-(Community)?node-id=2415-26437&t=slsqbOjq2UkxI2dW-0
-   https://www.figma.com/design/Edy5OCpaOTKuy5OeqQjzqn/School-Genuine---responsive-website%C2%A0template-download-html-with%C2%A0css-for-school-(Community)?node-id=2415-26437&t=MqsGauTh1Nt6yMZo-0
-   https://www.figma.com/design/CVccjq5f0KwJLqHQxY8CCi/Medical-Universal---responsive-website%C2%A0template-download-html-with%C2%A0css-for-medical-(Community)?node-id=0-1&t=ItWNCHOHYxsbzqJe-0
