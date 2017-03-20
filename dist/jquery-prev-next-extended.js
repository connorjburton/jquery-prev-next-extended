(function($)
{
    var ref = $.fn.next;
    $.fn.next = function(num)
    {
    	if(typeof num === 'undefined') num = 1;
        var ret = ref.apply(this, arguments);

        if(num > 1 && ret.length) {
            var all = ret.nextAll();
            
            if(all.length >= num - 1) {
                var idx = ret.index();
                ret = ret.add(all.slice(0, num - 1));
            } else {
                ret = ret.add(all);
            }
        }

        return ret;
    };
})(jQuery);