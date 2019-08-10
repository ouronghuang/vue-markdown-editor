# viconfont

[十一维度官方图标库](https://icon.11dom.com)

# 安装

1. 克隆源代码

```
git clone git@gitee.com:sywd-vr/viconfont.git
```

2. 复制 `dist` 到项目目录，并更名为 viconfont（建议）

```
cp -r <path>/viconfont/dist <path>/viconfont
```

3. 通过 `link` 标签引入

```
<link href="<path>/viconfont/css/viconfont.css" rel="stylesheet">
```

# 使用

1. 通过 `i` 标签使用

```
<i class="viconfont vi-vip-designer"></i>
```

2. 放大图标

```
<i class="viconfont vi-vip-designer vi-lg"></i>
```

> 所有尺寸

| vi-lg | vi-2x | vi-3x | vi-4x | vi-5x |
| -------- | -------- | -------- | -------- | -------- |
| 放大 33% | 2em | 3em | 4em | 5em |

3. 使用动画

```
<i class="viconfont vi-vip-designer vi-spin"></i>
```

> 所有动画

| vi-spin | vi-pulse |
| -------- | -------- |
| linear | steps |

# 开发

参照 [制作教程](./course/course.md)
