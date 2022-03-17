AngularJS1 "@uirouter" Target By Absolute Names Demo
====================================================

```
views: {
  '$default.body.head@': {
    templateUrl: './some.html'
  }
}
```

其中`$default.body.head@`这样理解：

- `@`右边本来应该是state，如果为空白，表示root state
- 左边的是uiview names，其中`$default`表示一个unnamed的uiview

结合起来，它表示的就是：root state下的`<ui-view/>`下的`<div ui-view='body'/>`下的`<div ui-view='head'/>`

```
npm install
npm start
```

Documentation
-------------

- <https://ui-router.github.io/guide/views>
