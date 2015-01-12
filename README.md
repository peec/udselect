# udselect
JQuery plugin to style select boxes. Keeping in mind, universal design.

Select boxes are hard to style - and it must be done correctly to maintain Universal design principles and UX. This plugin creates an overlay that can be styled just as you want with no limitation. 



## Example

See example in the `example` folder.

Wrap a normal select around a `div` tag.

```html
<div>
<select class="styled">
<option value="1">Test</option>
</select>
</div>
```

Run the plugin on a selector.

```javascript
$('select.styled').udselect();
```

Style it! This is example of styling:

```css
.udselect {
    background: #ffffff;
    border-radius: 4px;
    color: #000000;
    padding-right: 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.udselect span.udselect-extension {
    color: #ffffff;
    background: #ACC0CA;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    padding-left: 7px;
    padding-right: 14px;
}
.udselect span.udselect-extension .fa {
    margin-left: -15px;
}
```





