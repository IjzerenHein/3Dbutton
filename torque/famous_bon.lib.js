!function(t, i) {
    if ("function" == typeof define && define.amd)
        define(i);
    else if ("object" == typeof window) {
        var e;
        window.addEventListener("load", function() {
            t.Famous = i(), e && t.Famous(e)
        }), t.Famous = function(t) {
            e = t
        }
    } else
        t.Famous = i()
}(this, function() {
});