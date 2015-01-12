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
            'position':'relative',
            'z-index':'10',
            'line-height':'26px',
            'opacity':0,
            '-khtml-appearance':'none'
        },
        /**
         * Default <span> CSS.
         */
        spanCss: {
            'position':'absolute',
            'bottom':'0',
            'float':'left',
            'left':'0',
            'text-indent':'10px',
            'cursor':'default',
            'z-index':'1'
        },

        spanElementCallback: function (title) {
            return '<span class="udselect">' + title + '<span class="udselect-extension"><span class="fa fa-chevron-down"></span></span></span>';
        }
    };


    $.fn.extend({
        udselect: function (options) {
            var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            options = $.extend(defaults, options);

            // Select box CSS
            options.selectCss.width = options.width + ' !important';
            options.selectCss.height = options.height + ' !important';

            // Span CSS
            options.spanCss.width = options.width;
            options.spanCss.height = options.height;
            options.spanCss['line-height'] = options.height;
            options.spanCss.overflow =  'hidden';
            options.spanCss['text-overflow'] = 'ellipsis';
            options.spanCss['-o-text-overflow'] = 'ellipsis';
            options.spanCss['-moz-binding'] = "url('assets/xml/ellipsis.xml#ellipsis')";

            return this.each(function () {

                $(this).parent().css({position: 'relative'});

                if (!isOpera) {

                    var title = $('option:selected',this).text();

                    var span = $(options.spanElementCallback(title || "")).css(options.spanCss);
                    $(this)
                        .css(options.selectCss)
                        .after(span)
                        .change(function(){
                            var val = $('option:selected',this).text();
                            $(this).next().text(val);
                        });
                }

            });
        }
    });
})(jQuery);
