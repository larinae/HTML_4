function area_trapezoid(obj) {
    let a = obj.a.value
    let b = obj.b.value
    let h = obj.h.value
    let s = ((+a + + b)/2)*h
    obj.res.value = s
}
