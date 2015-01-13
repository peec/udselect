# udselect
JQuery plugin to style select boxes. Keeping in mind, universal design.

Select boxes are hard to style - and it must be done correctly to maintain Universal design principles and UX. This plugin creates an overlay that can be styled just as you want with no limitation. 


![Example style](https://github.com/peec/udselect/raw/master/doc/example.png "Example")



## Example

See example in the `example` folder.

Wrap a normal select around a `div` tag.

```html
<select class="styled">
    <option value="1">Test</option>
</select>
```

Run the plugin on a selector.

```javascript
$('select.styled').udselect({ /* options */ });
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

## Options

Options are passed to the plugin constructor in a hash. Each key is described below.


#### width

Set a width, default is `100%`, can be a fixed width such as `100px`.


#### height

Set a height, default is `38px`.


#### spanElementCallback

A callback function that should return the span that sits below the invisible `select` tag.

Default includes some extra spans to allow for an arrow on the right side, this can be configured with `spanElementCallback`:

```javascript
        spanElementCallback: function (title) {
            return '<span class="udselect"><span class="udselect-text">' + title + '</span><span class="udselect-extension"><span class="fa fa-chevron-down"></span></span></span>';
        }
```

- It is important that you include `.udselect-text`, this is where the title is put when a user chosen another option.






