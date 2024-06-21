var isPhone = -1,
    isTablet = -1,
    isPc = -1,
    os = function () {
        var e = navigator.userAgent,
            t = /(?:Windows Phone)/.test(e),
            n = /(?:SymbianOS)/.test(e) || t,
            i = /(?:Android)/.test(e),
            o = /(?:Firefox)/.test(e),
            s = (/(?:Chrome|CriOS)/.test(e), /(?:iPad|PlayBook)/.test(e) || i && !/(?:Mobile)/.test(e) || o && /(?:Tablet)/.test(e)),
            a = /(?:iPhone)/.test(e) && !s;
        i ? isAndroid = 1 : a ? isPhone = 1 : s ? isTablet = 1 : a || i || n || (isPc = 1)
    }();

function __EggcSlotLink() {
    window.open(isPc > 0 ? EggcSLOT_Link_pc : EggcSLOT_Link_mb, "target", "")
}

function __SpinMobilelink(){
    window.open(isPc > 0 ? SpinMobile_pc : SpinMobile_mb, "target", "")
}



