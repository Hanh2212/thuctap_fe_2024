# VUEJS

## Nội dung cơ bản

1. Tìm hiểu ứng dụng Single Page Aplication (SPA) là gì ? Ưu điểm của SPA là gì ? So sánh website truyền thống với SPA

Single Page Application (SPA) là một ứng dụng web hoặc trang web tương tác mà tải một trang HTML duy nhất và sau đó cập nhật nội dung của trang đó một cách động thông qua JavaScript khi người dùng tương tác với ứng dụng. Điều này giúp mang lại trải nghiệm người dùng mượt mà và nhanh chóng hơn, vì không cần phải tải lại toàn bộ trang khi chuyển đổi giữa các phần khác nhau của ứng dụng.

Đặc điểm của SPA:

-   Tải Trang Duy Nhất: SPA chỉ tải một lần duy nhất toàn bộ trang HTML, CSS và JavaScript cần thiết. Sau đó, mọi thao tác và điều hướng trong trang đều được xử lý bằng JavaScript.

-   Điều Hướng Nhanh: Khi người dùng điều hướng qua các phần khác nhau của ứng dụng, SPA chỉ tải và thay đổi các phần cần thiết trên trang mà không cần tải lại toàn bộ trang từ máy chủ.

-   Trải Nghiệm Người Dùng Mượt Mà: Việc không phải tải lại toàn bộ trang giúp giảm thời gian chờ đợi và mang lại trải nghiệm người dùng mượt mà hơn.

-   Sử Dụng AJAX và API: SPA thường sử dụng AJAX để gửi và nhận dữ liệu từ máy chủ mà không cần tải lại trang. Điều này cho phép ứng dụng tương tác với máy chủ và cập nhật nội dung một cách nhanh chóng và hiệu quả.

-   Quản Lý Trạng Thái Ứng Dụng: SPA thường sử dụng các thư viện hoặc framework quản lý trạng thái như Vuex (đối với Vue.js) để quản lý dữ liệu và trạng thái của ứng dụng.

Ưu điểm SPA:

Trải nghiệm người dùng mượt mà:

-   SPA tải một lần duy nhất khi người dùng truy cập trang web. Sau đó, chỉ những phần cần thiết của trang mới được tải và cập nhật, giúp trải nghiệm người dùng mượt mà và nhanh chóng.
    Tốc độ nhanh:

-   Do chỉ tải và cập nhật những phần cần thiết, thời gian phản hồi của SPA nhanh hơn nhiều so với website truyền thống, nơi mà mỗi lần thay đổi trang đều phải tải lại toàn bộ nội dung trang từ server.
    Giảm tải cho server:

-   SPA chủ yếu giao tiếp với server thông qua API để lấy dữ liệu, giảm bớt khối lượng công việc xử lý và truyền tải dữ liệu của server.
    Cải thiện trải nghiệm người dùng (UX):

-   SPA cho phép thiết kế giao diện người dùng tương tác tốt hơn với các hiệu ứng động, chuyển trang mượt mà, không bị gián đoạn.
    Phát triển và bảo trì dễ dàng:

-   SPA thường được xây dựng với các framework hiện đại như Vue.js, React.js, Angular.js, giúp tổ chức mã nguồn tốt hơn, dễ dàng bảo trì và mở rộng.

#### So sánh

Website truyền thống

-   Cách tải trang Tải lại toàn bộ trang mỗi khi người dùng chuyển trang
-   Tốc độ tải trang chậm hơn do phải tải lại toàn bộ nội dung trang từ server
-   Trải nghiệm người dùng có thể bị gián đoạn mỗi khi tải lại trang
-   Giao tiếp với server chủ yếu thông qua gửi request toàn bộ trang
-   SEO (Tối ưu hóa công cụ tìm kiếm) dễ dàng hơn, server-rendered, dễ dàng index bởi các công cụ tìm kiếm
-   Phát triển và bảo trì có thể phức tạp hơn với các dự án lớn, mã nguồn không tổ chức tốt
-   Chuyển trang mất thời gian và có thể không mượt mà

SPA sử dụng Vue.js

-   Tải một lần, chỉ cập nhật những phần cần thiết
-   Nhanh hơn do chỉ tải những phần cần thiết
-   Trải nghiệm mượt mà, không bị gián đoạn
-   Chủ yếu giao tiếp thông qua API
-   Khó khăn hơn, cần sử dụng thêm kỹ thuật như server-side rendering (SSR)
-   Dễ dàng hơn với các framework hiện đại, mã nguồn tổ chức tốt hơn
-   Chuyển trang nhanh chóng và mượt mà

2. Vuejs là gì, ưu và nhược điểm của Vuejs so với Angular, React.js là gì, sử dụng Vuejs tạo ứng dụng SPA

Vue.js là một framework JavaScript tiến bộ dùng để xây dựng giao diện người dùng (UI). Không giống như các framework nguyên khối khác, Vue được thiết kế từ đầu để có thể áp dụng từ từ. Thư viện cốt lõi của Vue tập trung vào lớp view, và dễ dàng tích hợp với các thư viện hoặc dự án hiện có. Vue cũng rất thích hợp để phát triển các ứng dụng single-page application (SPA) khi kết hợp với các công cụ hiện đại và thư viện hỗ trợ khác.

Ưu điểm của Vue.js:

Dễ học và sử dụng:
Cú pháp đơn giản và dễ hiểu, giúp các nhà phát triển nhanh chóng nắm bắt và bắt đầu sử dụng.

Tài liệu phong phú:
Vue.js có tài liệu hướng dẫn chi tiết và dễ hiểu, giúp người mới học dễ dàng tiếp cận.

Hiệu suất cao:
Vue.js có kích thước nhỏ và hiệu suất cao, giúp giảm thời gian tải trang và cải thiện trải nghiệm người dùng.

Reactivity:
Hệ thống reactivity mạnh mẽ, giúp cập nhật giao diện người dùng một cách tự động khi dữ liệu thay đổi.

Cộng đồng hỗ trợ mạnh mẽ:
Cộng đồng Vue.js đang ngày càng phát triển với nhiều plugin và thư viện hỗ trợ.

Dễ dàng tích hợp:
Vue.js có thể dễ dàng tích hợp vào các dự án hiện có hoặc sử dụng cùng với các framework khác.

Nhược điểm của Vue.js:

Cộng đồng nhỏ hơn:
So với React và Angular, cộng đồng Vue.js nhỏ hơn, dẫn đến ít tài liệu và tài nguyên hỗ trợ hơn.

Hỗ trợ doanh nghiệp ít hơn:
Mặc dù Vue.js đang trở nên phổ biến, nhưng số lượng công ty lớn sử dụng nó vẫn ít hơn so với React và Angular.

#### So sánh Vue.js, Angular và React.js:

Vue.js

-   Dễ học với cú pháp đơn giản
-   Hiệu suất cao với kích thước nhỏ và reactivity tốt
-   Cộng đồng và tài nguyên đang phát triển nhanh chóng
-   Cách tiếp cận progressive framework
-   Tài liệu rất tốt và chi tiết
-   Tích hợp dễ dàng tích hợp với dự án hiện có
-   Kiến trúc MVVM (Model-View-ViewModel)

Angular

-   Tính dễ học khó hơn do cấu trúc phức tạp và nhiều khái niệm
-   Hiệu suất tốt, nhưng có thể nặng hơn do tính năng nhiều
-   Cộng đồng và tài nguyên rất lớn và phát triển lâu dài
-   Cách tiếp cận full-fledged framework4
-   Tài liệu rất tốt và chi tiết
-   Tích hợp khó hơn do tính toàn diện
-   Kiến trúc MVC (Model-View-Controller)

React.js

-   Tính dễ học trung bình, cần hiểu ES6 và JSX
-   Hiệu suất cao, sử dụng Virtual DOM
-   Cộng đồng và tài nguyên rất lớn và được Facebook hỗ trợ
-   Cách tiếp cận library, tập trung vào view layer
-   Tài liệu tốt, nhưng cần hiểu nhiều khái niệm khác
-   Tích hợp dễ dàng tích hợp với nhiều công cụ khác
-   Kiến trúc component-based

3. Cách khởi tạo, chạy một ứng dụng Vuejs bằng dòng lệnh Vue Cli (đọc hướng dẫn trên trang chủ của Vue).
4. Làm quen cấu trúc thư mục của một ứng dụng Vuejs, cách tạo mới các trang trong thư mục Vuejs

5. Root instance trong Vuejs là gì ? Root instance được tạo ra thế nào ? Bootstrap trong ứng dụng Vuejs là thực hiện những gì ?

Root Instance trong Vue.js là thể hiện đầu tiên của Vue được khởi tạo trong ứng dụng của bạn. Nó là điểm bắt đầu cho tất cả các thành phần Vue khác và điều khiển toàn bộ ứng dụng Vue của bạn. Root Instance chịu trách nhiệm quản lý cây thành phần và quản lý trạng thái toàn cục của ứng dụng.

Cách tạo Root Instance trong Vue.js 3

Trong Vue 3, việc tạo root instance được thực hiện bằng cách sử dụng hàm createApp. Hàm này tạo ra một ứng dụng Vue và gắn nó vào một phần tử HTML cụ thể trong DOM.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Vue 3 Root Instance</title>
        <script src="https://unpkg.com/vue@next"></script>
    </head>
    <body>
        <div id="app">{{ message }}</div>

        <script>
            const { createApp } = Vue;

            const app = createApp({
                data() {
                    return {
                        message: "Hello Vue 3!",
                    };
                },
            });
            app.mount("#app");
        </script>
    </body>
</html>
```

#### Bootstrap trong ứng dụng Vue.js 3 là gì?

Bootstrap trong ngữ cảnh của Vue.js 3 đề cập đến quá trình khởi tạo và thiết lập ứng dụng Vue. Quá trình này bao gồm các bước sau:

-   Khởi tạo Root Instance:Sử dụng createApp để tạo ứng dụng Vue và gắn nó vào một phần tử HTML trong DOM.

-   Cấu hình ứng dụng:
    Định nghĩa các thuộc tính như data, methods, computed, và watch để quản lý trạng thái và hành vi của ứng dụng.

-   Thiết lập các thành phần Vue, router, và store (nếu sử dụng Vue Router và Vuex).

-   Tích hợp plugin và thư viện:
    Cài đặt và tích hợp các plugin Vue hoặc các thư viện JavaScript bên ngoài cần thiết cho ứng dụng.

-   Tải các thành phần (components):
    Định nghĩa và đăng ký các thành phần Vue để sử dụng trong root instance và các thành phần con.

6. Component là gì ? Một component trong Vuejs bao gồm những thành phần gì ? Ví dụ.

### Component trong Vue.js là các đơn vị tái sử dụng của giao diện người dùng, có thể được lắp ráp và sử dụng lại trong các phần khác nhau của ứng dụng. Mỗi component chứa logic, giao diện và phong cách của riêng mình, giúp tách biệt các phần của ứng dụng để dễ dàng quản lý và phát triển.

### Một component trong Vue.js bao gồm các phần sau:

-   Template: Định nghĩa cấu trúc HTML của component.
-   Script: Chứa logic JavaScript của component, bao gồm dữ liệu, phương thức và vòng đời của component.
-   Style: Định nghĩa các kiểu CSS áp dụng cho component.

```html
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>This is a simple Vue.js component example.</p>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String,
        },
    };
</script>

<style scoped>
    .hello {
        color: #42b983;
    }
</style>
```

7. Tìm hiểu Data trong Vuejs, cơ chế two-way binding là gì ? So sánh two-way binding với one-way binding ? Ưu, nhược điểm của two-way binding là gì ? Tìm hiểu 1 số directive thông dụng: v-bind, v-if, v-else, v-show, v-model... và 1 số modifier: trim, number, lazy... Ví dụ.

-   Trong Vue.js, data là một đối tượng chứa các thuộc tính dữ liệu của một component. Những thuộc tính này có thể được sử dụng trong template của component để hiển thị dữ liệu, và cũng có thể được thao tác trong các phương thức của component. Dữ liệu trong Vue.js được khai báo trong phần data của component, và Vue sẽ tự động phản ứng với các thay đổi trong dữ liệu này để cập nhật giao diện người dùng.

-   Two-way binding trong Vue.js cho phép dữ liệu trong model (dữ liệu trong data) và giao diện người dùng (template) được đồng bộ hóa tự động. Khi người dùng thay đổi giá trị trong giao diện, dữ liệu trong model cũng được cập nhật và ngược lại. Vue.js thực hiện điều này thông qua directive v-model.

-   One-way binding chỉ cho phép dữ liệu đi theo một hướng: từ model đến giao diện người dùng. Điều này có nghĩa là nếu model thay đổi, giao diện người dùng sẽ được cập nhật, nhưng thay đổi trong giao diện người dùng sẽ không ảnh hưởng đến model.

### Ưu và nhược điểm của Two-Way Binding

#### Ưu điểm:

-   Two-way binding giúp đồng bộ hóa dữ liệu giữa model và giao diện người dùng một cách tự động, giảm bớt lượng mã cần viết và quản lý.
    Trải nghiệm người dùng tốt hơn:

-   Khi giao diện người dùng thay đổi, dữ liệu model cũng được cập nhật ngay lập tức, cung cấp trải nghiệm người dùng mượt mà hơn.
    Dễ hiểu và sử dụng:

-   Two-way binding dễ hiểu và dễ sử dụng đối với các trường hợp đơn giản, đặc biệt là với các form input.

#### Nhược điểm:

-   Two-way binding có thể làm giảm hiệu năng của ứng dụng khi có nhiều thao tác đồng bộ dữ liệu giữa model và giao diện người dùng.
    Phức tạp trong quản lý:

-   Khi ứng dụng trở nên phức tạp, việc quản lý trạng thái dữ liệu giữa model và giao diện người dùng có thể trở nên khó khăn và dễ gây lỗi.
    Không phù hợp cho các ứng dụng lớn:

-   Với các ứng dụng lớn, one-way binding kết hợp với quản lý trạng thái (như Vuex trong Vue.js) có thể là lựa chọn tốt hơn để đảm bảo hiệu năng và khả năng bảo trì của ứng dụng.

#### Các Cách Binding Data với HTML trên Template

```js
data: function() {
    return {
      message: 'Hello, Vue!',
      url:'facebook.com',
      isVisible:true,
      items:['1','2','3'],
      count:0
    };
  }

computed:{
    incrementCounter(){
        return this.count++;
    }
}
```

#### 1.Interpolation ({{ }})

Interpolation được sử dụng để hiển thị dữ liệu trong HTML.

```html
<div id="app">
    <p>{{ message }}</p>
</div>
```

#### 2.Directive

v-bind được sử dụng để bind thuộc tính HTML với data.

```html
<div id="app">
    <a v-bind:href="url">Link</a>
</div>
```

v-if được sử dụng để render các phần tử dựa trên điều kiện.

```html
<div id="app">
    <p v-if="isVisible">This is visible</p>
</div>
```

v-for được sử dụng để lặp qua các mảng và render các phần tử tương ứng.

```html
<div id="app">
    <ul>
        <li v-for="(item,i) in items" :key="i">{{ item }}</li>
    </ul>
</div>
```

v-on được sử dụng để bind các sự kiện với phương thức trong Vue instance.

```html
<div id="app">
    <button v-on:click="incrementCounter">Click me</button>
    <p>Counter: {{ counter }}</p>
</div>
```

v-model là một directive đặc biệt trong Vue.js để tạo ra two-way data binding với các input elements, textarea và select. Điều này có nghĩa là khi giá trị của input thay đổi, giá trị trong Vue instance cũng thay đổi, và ngược lại.

```html
<div id="app">
    <input v-model="message" placeholder="Enter a message" />
    <p>{{ message }}</p>
</div>
```

#### trim

Chức năng: Loại bỏ khoảng trắng ở đầu và cuối của giá trị input.

Cú pháp: v-model.trim="dataProperty"

#### number

Chức năng: Chuyển đổi giá trị input thành số.

Cú pháp: v-model.number="dataProperty"

#### lazy

Chức năng: Chỉ cập nhật dữ liệu khi sự kiện change được kích hoạt thay vì sự kiện input.

Cú pháp: v-model.lazy="dataProperty"

8. Tìm hiểu Life Circle Hook trong Vuejs. Virtual DOM là gì ? Tại sao Vuejs sử dụng Virtual DOM ? Cơ chế hoạt động của Virtual DOM là gì, Ưu và nhược điểm của Virtual DOM.

![Alt text](image.png)

Virtual DOM (DOM ảo) là một khái niệm được sử dụng trong các thư viện và framework JavaScript hiện đại như React và Vue.js để tối ưu hóa việc cập nhật giao diện người dùng. Thay vì thao tác trực tiếp trên DOM thật, các thay đổi được áp dụng lên một bản sao ảo của DOM. Sau đó, sự khác biệt giữa bản sao ảo này và DOM thật được tính toán, và chỉ các thay đổi cần thiết mới được áp dụng lên DOM thật.

#### Tại sao Vue.js sử dụng Virtual DOM?

Vue.js sử dụng Virtual DOM để cải thiện hiệu suất và hiệu quả của việc cập nhật giao diện người dùng. Một số lý do chính bao gồm:

Hiệu suất cao hơn: Việc thao tác trực tiếp trên DOM thật có thể rất tốn kém về mặt hiệu năng, đặc biệt là khi có nhiều thay đổi nhỏ cần được thực hiện. Virtual DOM giảm số lượng thao tác trực tiếp trên DOM thật, từ đó cải thiện hiệu suất.

Quản lý thay đổi dễ dàng: Sử dụng Virtual DOM giúp đơn giản hóa việc quản lý và theo dõi các thay đổi trong giao diện người dùng. Điều này làm cho việc phát triển và bảo trì ứng dụng trở nên dễ dàng hơn.

Phát triển nhất quán: Virtual DOM giúp đảm bảo rằng các thay đổi được thực hiện một cách nhất quán và có thể dự đoán được, giảm thiểu các lỗi liên quan đến việc thao tác trực tiếp trên DOM thật.

#### Cơ chế hoạt động của Virtual DOM

Cơ chế hoạt động của Virtual DOM trong Vue.js có thể được tóm tắt qua các bước sau:

Tạo bản sao Virtual DOM: Khi một component được render, Vue.js tạo ra một bản sao của DOM dưới dạng cây các đối tượng JavaScript, gọi là Virtual DOM.

Thực hiện thay đổi: Khi có thay đổi trong dữ liệu hoặc trạng thái của component, các thay đổi này được áp dụng lên Virtual DOM thay vì DOM thật.

So sánh (diffing): Vue.js so sánh Virtual DOM mới với phiên bản trước đó (diffing) để xác định sự khác biệt giữa hai cây.

Áp dụng thay đổi (patching): Dựa trên kết quả của quá trình diffing, Vue.js chỉ cập nhật những phần của DOM thật mà cần thay đổi. Điều này giúp tối thiểu hóa số lượng thao tác trực tiếp trên DOM thật và cải thiện hiệu suất.

#### Ưu và nhược điểm của Virtual DOM

##### Ưu điểm:

Hiệu suất tối ưu: Bằng cách giảm thiểu số lượng thao tác trực tiếp trên DOM thật, Virtual DOM cải thiện hiệu suất của ứng dụng, đặc biệt là khi có nhiều thay đổi nhỏ và liên tục.

Quản lý thay đổi dễ dàng: Virtual DOM giúp đơn giản hóa việc quản lý và theo dõi các thay đổi trong giao diện người dùng, từ đó làm cho việc phát triển và bảo trì ứng dụng trở nên dễ dàng hơn.

Phát triển nhất quán: Sử dụng Virtual DOM giúp đảm bảo rằng các thay đổi được thực hiện một cách nhất quán và có thể dự đoán được, giảm thiểu các lỗi liên quan đến việc thao tác trực tiếp trên DOM thật.

Khả năng mở rộng: Với Virtual DOM, các ứng dụng Vue.js có thể mở rộng dễ dàng hơn mà không gặp phải các vấn đề về hiệu suất liên quan đến việc thao tác trực tiếp trên DOM thật.

##### Nhược điểm:

Bộ nhớ và CPU: Việc tạo ra và duy trì một bản sao Virtual DOM tiêu tốn bộ nhớ và CPU. Điều này có thể là vấn đề đối với các ứng dụng lớn hoặc phức tạp.

Không phải là giải pháp toàn diện: Virtual DOM không thể giải quyết mọi vấn đề về hiệu suất và không phải lúc nào cũng là giải pháp tốt nhất cho mọi tình huống. Trong một số trường hợp, việc tối ưu hóa trực tiếp trên DOM thật có thể đem lại hiệu quả cao hơn.

Phức tạp hơn: Mặc dù Virtual DOM đơn giản hóa việc quản lý thay đổi, nhưng nó cũng thêm một lớp trừu tượng phức tạp vào ứng dụng. Điều này có thể làm tăng độ phức tạp của ứng dụng và yêu cầu các lập trình viên phải hiểu rõ cách hoạt động của Virtual DOM.

9. Các viết các function trong method Vuejs, các gọi các function này (gọi trên template, gọi từ life circle hook, gọi từ function khác …

Gọi trên tamplate

```html
<template>
    <div>
        <p>{{ message }}</p>
        <button @click="updateMessage">Update Message</button>
        <button @click="resetMessage">Reset Message</button>
        <button @click="logAndUpdateMessage">Log and Update Message</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Hello, Vue!",
            };
        },
        methods: {
            updateMessage() {
                this.message = "Message updated!";
            },
            resetMessage() {
                this.message = "Hello, Vue!";
            },
            logMessage() {
                console.log(this.message);
            },
            logAndUpdateMessage() {
                console.log("Updating message");
                this.updateMessage();
            },
        },
        mounted() {
            this.logMessage();
        },
    };
</script>
```

10. Event trong Vuejs, cách binding event từ template với method trong Vuejs. Ví dụ.

#### 1.Binding Event với Method trong Template

```html
<div id="app">
    <button @click="doSomething">Click me</button>
</div>
```

#### 4. Truyền Tham Số vào Method

```html
<div id="app">
    <button @click="greet('Hello')">Greet</button>
</div>
```

#### 3.Sử dụng $event để Truyền Đối Tượng Sự Kiện

```html
<div id="app">
    <button @click="showEvent($event)">Show Event</button>
</div>
```

```html
<!-- Ngăn chặn sự kiện lan truyền -->
<button @click.stop="doSomething">Click me</button>

<!-- Ngăn chặn hành vi mặc định -->
<form @submit.prevent="onSubmit">Submit</form>

<!-- Chỉ kích hoạt sự kiện một lần -->
<button @click.once="doSomething">Click me once</button>
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vue Event Binding Example</title>
    </head>
    <body>
        <div id="app">
            <button @click="incrementCounter">Click me</button>
            <p>Counter: {{ counter }}</p>

            <button @click.stop="doSomething">
                Click me (stop propagation)
            </button>

            <form @submit.prevent="onSubmit">
                <input v-model="inputValue" placeholder="Enter something" />
                <button type="submit">Submit</button>
            </form>

            <button @click.once="alertMessage">Click me once</button>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
        <script>
            new Vue({
                el: "#app",
                data: function () {
                    return {
                        inputValue: "",
                    };
                },
                methods: {
                    doSomething: function () {
                        console.log("Event propagation stopped!");
                    },
                    onSubmit: function () {
                        alert("Form submitted with value: " + this.inputValue);
                    },
                    alertMessage: function () {
                        alert("This will only be shown once.");
                    },
                },
            });
        </script>
    </body>
</html>
```

11. Tìm hiểu computed trong Vuejs: khi nào sử dụng, cơ chế hoạt động là gì và so sánh với watch. Ví dụ.

`computed` là một thuộc tính trong Vue.js dùng để khai báo các thuộc tính được tính toán dựa trên các thuộc tính data khác. Các thuộc tính `computed` được tính toán lại một cách tự động khi các thuộc tính mà chúng phụ thuộc thay đổi. Điều này giúp tối ưu hóa hiệu suất của ứng dụng bằng cách tránh tính toán lại các giá trị không cần thiết.

Cơ chế hoạt động của computed

-   Cơ chế hoạt động của computed là dựa trên việc theo dõi các phụ thuộc của nó. Khi bất kỳ phụ thuộc nào thay đổi, thuộc tính computed sẽ được tính toán lại và cache giá trị mới.
-   Điều này giúp giảm thiểu việc tính toán lại không cần thiết và tối ưu hóa hiệu suất, vì thuộc tính computed chỉ được tính toán lại khi các giá trị phụ thuộc thay đổi.

#### So sánh computed và watch

computed và watch đều được sử dụng để theo dõi và phản ứng với các thay đổi của dữ liệu trong Vue.js, nhưng có những khác biệt quan trọng:

Computed

-   Tính toán và cache giá trị dựa trên các thuộc tính phụ thuộc
-   Khi bạn cần một thuộc tính phụ thuộc vào các thuộc tính khác
-   Tự động tính toán lại và cache giá trị
-   Tối ưu hơn khi cần tính toán lại các giá trị phức tạp, ít tốn tài nguyên

Watch

-   Thực hiện hành động (callback) khi thuộc tính được theo dõi thay đổi
-   Khi bạn cần thực hiện logic tùy ý khi một thuộc tính thay đổi
-   Thực hiện logic tùy ý khi thuộc tính thay đổi, không cache kết quả
-   Có thể kém hiệu quả nếu thực hiện các tác vụ tốn kém tài nguyên

```html
<div id="app">
    <p>Original message: {{ message }}</p>
    <p>Reversed message: {{ reversedMessage }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
    new Vue({
        el: "#app",
        data: {
            message: "Hello Vue.js!",
        },
        computed: {
            reversedMessage: function () {
                return this.message.split("").reverse().join("");
            },
        },
    });
</script>
```

12. Tìm hiểu Watch trong Vuejs: cơ chế hoạt động, ý nghĩa của thuộc tính immediate, deep trong watch là gì ?

watch là một thuộc tính trong Vue.js dùng để lắng nghe và phản ứng lại các thay đổi của một thuộc tính data hoặc một computed property. watch đặc biệt hữu ích khi bạn cần thực hiện các hành động không đồng bộ hoặc các thao tác tốn kém về mặt hiệu suất khi một giá trị nào đó thay đổi.

#### Cơ chế hoạt động của watch

Cơ chế hoạt động của watch là theo dõi các thay đổi của thuộc tính được chỉ định trong Vue instance và thực hiện một hành động cụ thể khi giá trị của thuộc tính đó thay đổi.
watch nhận vào một hàm callback, hàm này sẽ được gọi mỗi khi giá trị của thuộc tính được theo dõi thay đổi.

Điều này hữu ích khi bạn cần thực hiện một số tác vụ phụ thuộc vào việc thay đổi giá trị của thuộc tính, chẳng hạn như thực hiện một yêu cầu API hoặc thay đổi giá trị của một thuộc tính khác.

#### Ý nghĩa của thuộc tính immediate trong watch

immediate là một thuộc tính trong đối tượng tùy chọn của watch dùng để chỉ định rằng callback nên được gọi ngay lập tức khi thiết lập watcher, thay vì chỉ đợi đến khi thuộc tính được theo dõi thay đổi lần đầu tiên.

Khi immediate được thiết lập là true, callback sẽ được gọi ngay lập tức với giá trị hiện tại của thuộc tính được theo dõi.

```html
<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Hello, Vue!",
            };
        },
        watch: {
            message: {
                handler(newVal, oldVal) {
                    console.log(
                        `Message changed from "${oldVal}" to "${newVal}"`
                    );
                },
                immediate: true,
            },
        },
    };
</script>
```

#### Ý nghĩa của thuộc tính deep trong watch

deep là một thuộc tính trong đối tượng tùy chọn của watch dùng để chỉ định rằng watcher nên theo dõi các thay đổi trong tất cả các cấp con của một đối tượng hoặc mảng.

Mặc định, watch không thể theo dõi các thay đổi trong các thuộc tính con của một đối tượng hoặc mảng, do đó thuộc tính deep cần được thiết lập để theo dõi các thay đổi này.
Khi deep được thiết lập là true, watcher sẽ theo dõi các thay đổi trong toàn bộ cấu trúc đối tượng hoặc mảng.

```html
<template>
    <div>
        <button @click="updateUser">Update User</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: "John Doe",
                    age: 30,
                },
            };
        },
        methods: {
            updateUser() {
                this.user.age += 1;
            },
        },
        watch: {
            user: {
                handler(newVal, oldVal) {
                    console.log("User object changed:", newVal);
                },
                deep: true,
            },
        },
    };
</script>
```

##### watch hữu ích để theo dõi và phản ứng với các thay đổi của thuộc tính trong Vue instance.

##### immediate cho phép callback được gọi ngay lập tức với giá trị hiện tại của thuộc tính khi thiết lập watcher.

##### deep cho phép theo dõi các thay đổi trong toàn bộ cấu trúc đối tượng hoặc mảng, thay vì chỉ theo dõi các thay đổi ở cấp độ đầu tiên.

Tổng hợp ví dụ về watch với immediate và deep

```html
<template>
    <div>
        <button @click="updateUser">Update User</button>
        <p>{{ user.name }} - {{ user.age }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: "John Doe",
                    age: 30,
                },
            };
        },
        methods: {
            updateUser() {
                this.user.age += 1;
            },
        },
        watch: {
            user: {
                handler(newVal, oldVal) {
                    console.log("User object changed:", newVal);
                },
                deep: true,
                immediate: true,
            },
        },
    };
</script>
```

```js
const question = ref("");
const answer = ref("I cannot give you an answer until you ask a question!");

watch(question, (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf("?") > -1) {
        answer.value = "Thinking...";
        getAnswer();
    } else {
        answer.value = "Questions usually contain a question mark. ;-)";
    }
});

function getAnswer() {
    setTimeout(() => {
        answer.value = "The answer is 42.";
    }, 1000);
}
```

13. Các truyền dữ liệu từ component cha xuống component con (props). Ví dụ.

Component Con (ChildComponent.vue)

```vue
<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
    },
};
</script>
```

Component Cha (ParentComponent.vue)

```vue
<template>
    <div>
        <ChildComponent :message="parentMessage" />
    </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
    components: {
        ChildComponent,
    },
    data() {
        return {
            parentMessage: "Hello from Parent!",
        };
    },
};
</script>
```

14. Các truyền dữ liệu từ component con lên component cha (emit). Ví dụ.
15. Tìm hiểu cách render một list dữ liệu lên template (v-for), tại sao cần key khi sử dụng v-for? Ví dụ.
16. Tìm hiểu cách binding style, class vào component trên template theo điều kiện, có những cách binding nào ? Ví dụ.
17. Tìm hiểu router trong Vuejs, cách setup, khai báo routers. Ví dụ. router-view, router-outlet là gì ?
18. Tìm hiểu các điều hướng (routing) trong vuejs sử dụng router (router link, router push, router go, router replace…). Ví dụ.
19. Tìm hiểu cách lấy các tham số của router trong Vuejs (ví dụ params, query, meta data…). Ví dụ.
20. Tìm hiểu Quản lý trạng thái (store) với Vuex: Vuex là gì ? Vuex gồm các thành phần gì ?
21. Tìm hiểu state, getter, action, mutation của Vuex. Ví dụ.
22. Tìm hiểu Slot component trong Vuejs. Ví dụ.
23. Tìm hiểu Mixin trong Vuejs và ứng dụng. Ví dụ.
24. Tìm hiểu cách cài đặt, sử dụng các thư viện js thông qua NPM, Yarn…
25. Tìm hiểu cách sử dụng thư viện UI cho Vuejs (Boostrap-Vue hoặc Vuetify hoặc Element-UI…) và ứng dụng.
