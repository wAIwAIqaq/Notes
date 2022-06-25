## @midea

`@media` [CSS](https://developer.mozilla.org/en/CSS) [@规则](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule) 可用于基于一个或多个 [媒体查询 ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)的结果来应用样式表的一部分。 使用它，您可以指定一个媒体查询和一个 CSS 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档。

```scss
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media