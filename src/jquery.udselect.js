/**
 * jQuery Plugin.
 *
 * Select boxes are sometimes hard to style. This plugin makes this easy.
 *
 * ## Usage:
 *
 * ### HTML:
 *
 * <code>
 *     <!-- All select boxes must be wrapped in empty DIV tag -->
 *     <div>
 *         <select>
 *             <option value="...">...</option>
 *         </select>
 *     </div>
 * </code>
 *
 * ### JS:
 *
 * <code>
 *     $('select').udselect();
 * </code>
 *
 * ### EXAMPLE CSS:
 *
 * This should be your own CSS, this is just example.
 *
 * <code>
     .udselect {
        background: #ffffff;
        border-radius: 4px;
        color: #000000;

        padding-right: 40px;
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
 * </code>
 *
 *
 * @author Petter Kjelkenes
 */
(function($) {


    // Default options.
    var defaults = {
        /**
         * Width of the box, default is 100% for responsiveness.
         */
        width: '100%',
        /**
         * Static height in pixles. Ex. 32px.
         */
        height: '38px',
        /**
         * Default <select> CSS.
         */
        selectCss: {
            'z-index':'10',
            'position':'relative',
            'opacity':0,
            '-khtml-appearance':'none',
            '-webkit-appearance': 'menulist-button' // http://stackoverflow.com/questions/2547354/how-to-increase-the-height-of-the-select-box
        },
        /**
         * Default <span> CSS.
         */
        spanCss: {
            'z-index':'1',
            'position':'absolute',
            'bottom':'0',
            'left':'0',
            'text-indent':'10px',
            'cursor':'default',
            'overflow': 'hidden',
            'word-break': 'break-all'
        },

        spanElementCallback: function (title) {
            return '<span class="udselect"><span class="udselect-text">' + title + '</span><span class="udselect-extension"><span class="fa fa-chevron-down"></span></span></span>';
        }
    };


    $.fn.extend({
        udselect: function (options) {
            var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            options = $.extend(defaults, options);

            // Select box CSS
            options.selectCss.width = options.width;
            options.selectCss.height = options.height;
            options.selectCss['line-height'] = options.height;


            // Span CSS
            options.spanCss.width = options.width;
            options.spanCss.height = options.height;
            options.spanCss['line-height'] = options.height;



            return this.each(function () {

                var $mock = $(this).wrap('<div></div>');
                $mock.parent().css({position: 'relative'});

                if (!isOpera) {

                    var title = $('option:selected',this).text();

                    var span = $(options.spanElementCallback(title || "")).css(options.spanCss);
                    $(this)
                        .css(options.selectCss)
                        .after(span)
                        .change(function(){
                            var val = $('option:selected',this).text();
                            $(this).next().find('.udselect-text').text(val);
                        });

                }

            });
        }
    });
})(jQuery);