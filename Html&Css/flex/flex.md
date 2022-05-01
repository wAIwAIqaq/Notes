# flex的值

## [成分属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#成分属性)

此属性是以下CSS属性的简写：

- [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)

- [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)
- [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)

可以使用一个，两个或三个值来指定 `flex`属性。

```css
/* 关键字值 */
flex: auto;
flex: initial;
flex: none;

/* 一个值, 无单位数字: flex-grow */
flex: 2;

/* 一个值, width/height: flex-basis */
flex: 10em;
flex: 30px;
flex: min-content;

/* 两个值: flex-grow | flex-basis */
flex: 1 30px;

/* 两个值: flex-grow | flex-shrink */
flex: 2 2;

/* 三个值: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/*全局属性值 */
flex: inherit;
flex: initial;
flex: unset;
```

**单值语法**：值必须为以下之一：

- 一个无单位**数( [``](https://developer.mozilla.org/zh-CN/docs/Web/CSS/number))** : 它的值会被认定`flex:<number> 1 0;` `<flex-shrink>`为1，然后`<flex-basis>` 的值会被认定为`0`。
- 一个有效的**广泛（[`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)）**值：它会当做 `<flex-basis>的值。`
- 关键字`none`，`auto`或`initial`。

**双值**：值必须是一个无单位的数字，它会被当作是第一个值。并且 `<flex-grow>` 第二个值必须为以下：一个

- 无单位数：它会被当作一个价值 `<flex-shrink>` 。
- 有效的丰富价值：它会被当做 `<flex-basis>` 的价值。

**三值语法：**

- 第一个值必须为一个无单位数，并且它会被视为一个 `<flex-grow>` 值。
- 第二个值必须为一个无单位数，并且它会被视为一个 `<flex-shrink>` 的值。
- 第三个价值必须是一个有效的广泛价值，并且它会被当作一个价值 `<flex-basis>` 。

### [取值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#values)

- `initial`

  元素会根据自身的高设置尺寸。它会不断地适应灵活适应以适应伸缩容器，但不会伸长并占用伸缩容器中的额外的自由空间来伸缩容器。将属性设置为“ `flex: 0 1 auto`”。

- `auto`

  元素会根据自身的宽度和高度来确定尺寸，但是会伸长并为伸缩容器中额外的自由空间，也会同时容纳自己来适应伸缩`flex: 1 1 auto`。

- `none`

  元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会收缩，也不会伸长来适应弹性容器。将属性设置为“ `flex: 0 0 auto`”。

- `<'flex-grow'>`

  定义 flex [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) 。负值无效。省略时的默认值为1。（初始项目值为`0`）

- `<'flex-shrink'>`

  定义 flex 元素的[`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)。负值。省略时省略`1`。 (初始值为`1`)

- `<'flex-basis'>`

  定义元素的 [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)属性。若为`，`则必须添加单位，被视为`0`缩略图。