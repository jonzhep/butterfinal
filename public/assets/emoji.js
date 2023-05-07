function e(e) {
    let t,
        i,
        n,
        o,
        s = (e && e.emoji) || "🤪",
        h = e && e.element,
        c = h || document.body,
        l = window.innerWidth,
        d = window.innerHeight,
        a = { x: l / 2, y: l / 2 },
        r = [];
    const A = window.matchMedia("(prefers-reduced-motion: reduce)");
    function u() {
        if (A.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            h ? ((t.style.position = "absolute"), c.appendChild(t), (t.width = c.clientWidth), (t.height = c.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = l), (t.height = d)),
            (i.font = "70px serif"),
            (i.textBaseline = "middle"),
            (i.textAlign = "center");
        let e = i.measureText(s),
            n = document.createElement("canvas"),
            a = n.getContext("2d");
        (n.width = e.width), (n.height = 2 * e.actualBoundingBoxAscent), (a.textAlign = "center"), (a.font = "70px serif"), (a.textBaseline = "middle"), a.fillText(s, n.width / 2, e.actualBoundingBoxAscent), (o = n);
        let u = 0;
        for (u = 0; u < 7; u++) r[u] = new x(o);
        c.addEventListener("mousemove", p), c.addEventListener("touchmove", g, { passive: !0 }), c.addEventListener("touchstart", g, { passive: !0 }), window.addEventListener("resize", m), f();
    }
    function m(e) {
        (l = window.innerWidth), (d = window.innerHeight), h ? ((t.width = c.clientWidth), (t.height = c.clientHeight)) : ((t.width = l), (t.height = d));
    }
    function g(e) {
        if (e.touches.length > 0)
            if (h) {
                const t = c.getBoundingClientRect();
                (a.x = e.touches[0].clientX - t.left), (a.y = e.touches[0].clientY - t.top);
            } else (a.x = e.touches[0].clientX), (a.y = e.touches[0].clientY);
    }
    function p(e) {
        if (h) {
            const t = c.getBoundingClientRect();
            (a.x = e.clientX - t.left), (a.y = e.clientY - t.top);
        } else (a.x = e.clientX), (a.y = e.clientY);
    }
    function f() {
        !(function () {
            (t.width = t.width), (r[0].position.x = a.x), (r[0].position.y = a.y);
            for (let e = 1; e < 7; e++) {
                let n = new v(0, 0);
                e > 0 && w(e - 1, e, n), e < 6 && w(e + 1, e, n);
                let o,
                    s,
                    h = new v(10 * -r[e].velocity.x, 10 * -r[e].velocity.y),
                    c = new v((n.X + h.X) / 1, (n.Y + h.Y) / 1 + 50);
                (r[e].velocity.x += 0.01 * c.X),
                    (r[e].velocity.y += 0.01 * c.Y),
                    Math.abs(r[e].velocity.x) < 0.1 && Math.abs(r[e].velocity.y) < 0.1 && Math.abs(c.X) < 0.1 && Math.abs(c.Y) < 0.1 && ((r[e].velocity.x = 0), (r[e].velocity.y = 0)),
                    (r[e].position.x += r[e].velocity.x),
                    (r[e].position.y += r[e].velocity.y),
                    (o = t.clientHeight),
                    (s = t.clientWidth),
                    r[e].position.y >= o - 11 - 1 && (r[e].velocity.y > 0 && (r[e].velocity.y = 0.7 * -r[e].velocity.y), (r[e].position.y = o - 11 - 1)),
                    r[e].position.x >= s - 11 && (r[e].velocity.x > 0 && (r[e].velocity.x = 0.7 * -r[e].velocity.x), (r[e].position.x = s - 11 - 1)),
                    r[e].position.x < 0 && (r[e].velocity.x < 0 && (r[e].velocity.x = 0.7 * -r[e].velocity.x), (r[e].position.x = 0)),
                    r[e].draw(i);
            }
        })(),
            (n = requestAnimationFrame(f));
    }
    function y() {
        t.remove(), cancelAnimationFrame(n), c.removeEventListener("mousemove", p), c.removeEventListener("touchmove", g), c.removeEventListener("touchstart", g), window.addEventListener("resize", m);
    }
    function v(e, t) {
        (this.X = e), (this.Y = t);
    }
    function w(e, t, i) {
        let n = r[e].position.x - r[t].position.x,
            o = r[e].position.y - r[t].position.y,
            s = Math.sqrt(n * n + o * o);
        if (s > 10) {
            let e = 10 * (s - 10);
            (i.X += (n / s) * e), (i.Y += (o / s) * e);
        }
    }
    function x(e) {
        (this.position = { x: a.x, y: a.y }),
            (this.velocity = { x: 0, y: 0 }),
            (this.canv = e),
            (this.draw = function (e) {
                e.drawImage(this.canv, this.position.x - this.canv.width / 2, this.position.y - this.canv.height / 2, this.canv.width, this.canv.height);
            });
    }
    return (
        (A.onchange = () => {
            A.matches ? y() : u();
        }),
        u(),
        { destroy: y }
    );
}
function t(e) {
    let t = (e && e.colors) || ["#D61C59", "#E7D84B", "#1B8798"],
        i = e && e.element,
        n = i || document.body,
        o = window.innerWidth,
        s = window.innerHeight;
    const h = { x: o / 2, y: o / 2 },
        c = { x: o / 2, y: o / 2 },
        l = [],
        d = [];
    let a, r, A;
    const u = window.matchMedia("(prefers-reduced-motion: reduce)");
    function m() {
        if (u.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (a = document.createElement("canvas")),
            (r = a.getContext("2d")),
            (a.style.top = "0px"),
            (a.style.left = "0px"),
            (a.style.pointerEvents = "none"),
            i ? ((a.style.position = "absolute"), n.appendChild(a), (a.width = n.clientWidth), (a.height = n.clientHeight)) : ((a.style.position = "fixed"), n.appendChild(a), (a.width = o), (a.height = s)),
            (r.font = "70px serif"),
            (r.textBaseline = "middle"),
            (r.textAlign = "center"),
            t.forEach((e) => {
                let t = r.measureText("*"),
                    i = document.createElement("canvas"),
                    n = i.getContext("2d");
                (i.width = t.width),
                    (i.height = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent),
                    (n.fillStyle = e),
                    (n.textAlign = "center"),
                    (n.font = "70px serif"),
                    (n.textBaseline = "middle"),
                    n.fillText("*", i.width / 2, t.actualBoundingBoxAscent),
                    d.push(i);
            }),
            n.addEventListener("mousemove", f),
            n.addEventListener("touchmove", p, { passive: !0 }),
            n.addEventListener("touchstart", p, { passive: !0 }),
            window.addEventListener("resize", g),
            v();
    }
    function g(e) {
        (o = window.innerWidth), (s = window.innerHeight), i ? ((a.width = n.clientWidth), (a.height = n.clientHeight)) : ((a.width = o), (a.height = s));
    }
    function p(e) {
        if (e.touches.length > 0) for (let t = 0; t < e.touches.length; t++) y(e.touches[t].clientX, e.touches[t].clientY, d[Math.floor(Math.random() * d.length)]);
    }
    function f(e) {
        window.requestAnimationFrame(() => {
            if (i) {
                const t = n.getBoundingClientRect();
                (h.x = e.clientX - t.left), (h.y = e.clientY - t.top);
            } else (h.x = e.clientX), (h.y = e.clientY);
            Math.hypot(h.x - c.x, h.y - c.y) > 1.5 && (y(h.x, h.y, d[Math.floor(Math.random() * t.length)]), (c.x = h.x), (c.y = h.y));
        });
    }
    function y(e, t, i) {
        l.push(new x(e, t, i));
    }
    function v() {
        !(function () {
            if (0 != l.length) {
                r.clearRect(0, 0, o, s);
                for (let e = 0; e < l.length; e++) l[e].update(r);
                for (let e = l.length - 1; e >= 0; e--) l[e].lifeSpan < 0 && l.splice(e, 1);
                0 == l.length && r.clearRect(0, 0, o, s);
            }
        })(),
            (A = requestAnimationFrame(v));
    }
    function w() {
        a.remove(), cancelAnimationFrame(A), n.removeEventListener("mousemove", f), n.removeEventListener("touchmove", p), n.removeEventListener("touchstart", p), window.addEventListener("resize", g);
    }
    function x(e, t, i) {
        const n = Math.floor(30 * Math.random() + 60);
        (this.initialLifeSpan = n),
            (this.lifeSpan = n),
            (this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2), y: 0.7 * Math.random() + 0.9 }),
            (this.position = { x: e, y: t }),
            (this.canv = i),
            (this.update = function (e) {
                (this.position.x += this.velocity.x), (this.position.y += this.velocity.y), this.lifeSpan--, (this.velocity.y += 0.02);
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                e.drawImage(this.canv, this.position.x - (this.canv.width / 2) * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t);
            });
    }
    return (
        (u.onchange = () => {
            u.matches ? w() : m();
        }),
        m(),
        { destroy: w }
    );
}
function i(e) {
    let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = ["❄️"],
        c = window.innerWidth,
        l = window.innerHeight,
        d = { x: c / 2, y: c / 2 },
        a = [],
        r = [];
    const A = window.matchMedia("(prefers-reduced-motion: reduce)");
    function u() {
        if (A.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            o ? ((t.style.position = "absolute"), s.appendChild(t), (t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = c), (t.height = l)),
            (i.font = "70px serif"),
            (i.textBaseline = "middle"),
            (i.textAlign = "center"),
            h.forEach((e) => {
                let t = i.measureText(e),
                    n = document.createElement("canvas"),
                    o = n.getContext("2d");
                (n.width = t.width), (n.height = 2 * t.actualBoundingBoxAscent), (o.textAlign = "center"), (o.font = "70px serif"), (o.textBaseline = "middle"), o.fillText(e, n.width / 2, t.actualBoundingBoxAscent), r.push(n);
            }),
            s.addEventListener("mousemove", p),
            s.addEventListener("touchmove", g, { passive: !0 }),
            s.addEventListener("touchstart", g, { passive: !0 }),
            window.addEventListener("resize", m),
            y();
    }
    function m(e) {
        (c = window.innerWidth), (l = window.innerHeight), o ? ((t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.width = c), (t.height = l));
    }
    function g(e) {
        if (e.touches.length > 0) for (let t = 0; t < e.touches.length; t++) f(e.touches[t].clientX, e.touches[t].clientY, r[Math.floor(Math.random() * r.length)]);
    }
    function p(e) {
        if (o) {
            const t = s.getBoundingClientRect();
            (d.x = e.clientX - t.left), (d.y = e.clientY - t.top);
        } else (d.x = e.clientX), (d.y = e.clientY);
        f(d.x, d.y, r[Math.floor(Math.random() * h.length)]);
    }
    function f(e, t, i) {
        a.push(new w(e, t, i));
    }
    function y() {
        !(function () {
            if (0 != a.length) {
                i.clearRect(0, 0, c, l);
                for (let e = 0; e < a.length; e++) a[e].update(i);
                for (let e = a.length - 1; e >= 0; e--) a[e].lifeSpan < 0 && a.splice(e, 1);
                0 == a.length && i.clearRect(0, 0, c, l);
            }
        })(),
            (n = requestAnimationFrame(y));
    }
    function v() {
        t.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", p), s.removeEventListener("touchmove", g), s.removeEventListener("touchstart", g), window.addEventListener("resize", m);
    }
    function w(e, t, i) {
        const n = Math.floor(60 * Math.random() + 80);
        (this.initialLifeSpan = n),
            (this.lifeSpan = n),
            (this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2), y: 1 + Math.random() }),
            (this.position = { x: e, y: t }),
            (this.canv = i),
            (this.update = function (e) {
                (this.position.x += this.velocity.x), (this.position.y += this.velocity.y), this.lifeSpan--, (this.velocity.x += (2 * (Math.random() < 0.5 ? -1 : 1)) / 75), (this.velocity.y -= Math.random() / 300);
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0),
                    i = 0.0174533 * (2 * this.lifeSpan);
                e.translate(this.position.x, this.position.y),
                    e.rotate(i),
                    e.drawImage(this.canv, (-this.canv.width / 2) * t, -this.canv.height / 2, this.canv.width * t, this.canv.height * t),
                    e.rotate(-i),
                    e.translate(-this.position.x, -this.position.y);
            });
    }
    return (
        (A.onchange = () => {
            A.matches ? v() : u();
        }),
        u(),
        { destroy: v }
    );
}
function n(e) {
    let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = window.innerWidth,
        c = window.innerHeight,
        l = { x: h / 2, y: h / 2 },
        d = [];
    const a = e?.particles || 15,
        r = e?.rate || 0.4,
        A =
            e?.baseImageSrc ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
    let u = !1,
        m = new Image();
    m.src = A;
    const g = window.matchMedia("(prefers-reduced-motion: reduce)");
    function p() {
        if (g.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            o ? ((t.style.position = "absolute"), s.appendChild(t), (t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = h), (t.height = c)),
            s.addEventListener("mousemove", y),
            window.addEventListener("resize", f),
            v();
    }
    function f(e) {
        (h = window.innerWidth), (c = window.innerHeight), o ? ((t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.width = h), (t.height = c));
    }
    function y(e) {
        if (o) {
            const t = s.getBoundingClientRect();
            (l.x = e.clientX - t.left), (l.y = e.clientY - t.top);
        } else (l.x = e.clientX), (l.y = e.clientY);
        if (!1 === u) {
            u = !0;
            for (let e = 0; e < a; e++) (t = l.x), (i = l.y), (n = m), d.push(new x(t, i, n));
        }
        var t, i, n;
    }
    function v() {
        !(function () {
            i.clearRect(0, 0, h, c);
            let e = l.x,
                t = l.y;
            d.forEach(function (n, o, s) {
                let h = s[o + 1] || s[0];
                (n.position.x = e), (n.position.y = t), n.move(i), (e += (h.position.x - n.position.x) * r), (t += (h.position.y - n.position.y) * r);
            });
        })(),
            (n = requestAnimationFrame(v));
    }
    function w() {
        t.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", y), window.addEventListener("resize", f);
    }
    function x(e, t, i) {
        (this.position = { x: e, y: t }),
            (this.image = i),
            (this.move = function (e) {
                e.drawImage(this.image, this.position.x, this.position.y);
            });
    }
    return (
        (g.onchange = () => {
            g.matches ? w() : p();
        }),
        p(),
        { destroy: w }
    );
}
function o(e) {
    let t,
        i,
        n = e && e.element,
        o = n || document.body,
        s = window.innerWidth,
        h = window.innerHeight,
        c = { x: s / 2, y: s / 2 },
        l = new (function (e, t, i, n) {
            (this.position = { x: e, y: t }),
                (this.width = i),
                (this.lag = n),
                (this.moveTowards = function (e, t, i) {
                    (this.position.x += (e - this.position.x) / this.lag),
                        (this.position.y += (t - this.position.y) / this.lag),
                        (i.fillStyle = d),
                        i.beginPath(),
                        i.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI),
                        i.fill(),
                        i.closePath();
                });
        })(s / 2, h / 2, 10, 10),
        d = e?.color || "#323232a6";
    const a = window.matchMedia("(prefers-reduced-motion: reduce)");
    function r() {
        if (a.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            n ? ((t.style.position = "absolute"), o.appendChild(t), (t.width = o.clientWidth), (t.height = o.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = s), (t.height = h)),
            o.addEventListener("mousemove", u),
            window.addEventListener("resize", A),
            m();
    }
    function A(e) {
        (s = window.innerWidth), (h = window.innerHeight), n ? ((t.width = o.clientWidth), (t.height = o.clientHeight)) : ((t.width = s), (t.height = h));
    }
    function u(e) {
        if (n) {
            const t = o.getBoundingClientRect();
            (c.x = e.clientX - t.left), (c.y = e.clientY - t.top);
        } else (c.x = e.clientX), (c.y = e.clientY);
    }
    function m() {
        i.clearRect(0, 0, s, h), l.moveTowards(c.x, c.y, i), requestAnimationFrame(m);
    }
    function g() {
        t.remove(), cancelAnimationFrame(m), o.removeEventListener("mousemove", u), window.addEventListener("resize", A);
    }
    return (
        (a.onchange = () => {
            a.matches ? g() : r();
        }),
        r(),
        { destroy: g }
    );
}
function s(e) {
    let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = window.innerWidth,
        c = window.innerHeight,
        l = { x: h / 2, y: h / 2 },
        d = [],
        a = [];
    const r = window.matchMedia("(prefers-reduced-motion: reduce)");
    function A() {
        if (r.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            o ? ((t.style.position = "absolute"), s.appendChild(t), (t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = h), (t.height = c)),
            s.addEventListener("mousemove", g),
            s.addEventListener("touchmove", m, { passive: !0 }),
            s.addEventListener("touchstart", m, { passive: !0 }),
            window.addEventListener("resize", u),
            f();
    }
    function u(e) {
        (h = window.innerWidth), (c = window.innerHeight), o ? ((t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.width = h), (t.height = c));
    }
    function m(e) {
        if (e.touches.length > 0) for (let t = 0; t < e.touches.length; t++) p(e.touches[t].clientX, e.touches[t].clientY, a[Math.floor(Math.random() * a.length)]);
    }
    function g(e) {
        if (o) {
            const t = s.getBoundingClientRect();
            (l.x = e.clientX - t.left), (l.y = e.clientY - t.top);
        } else (l.x = e.clientX), (l.y = e.clientY);
        p(l.x, l.y);
    }
    function p(e, t, i) {
        d.push(new v(e, t, i));
    }
    function f() {
        !(function () {
            if (0 != d.length) {
                i.clearRect(0, 0, h, c);
                for (let e = 0; e < d.length; e++) d[e].update(i);
                for (let e = d.length - 1; e >= 0; e--) d[e].lifeSpan < 0 && d.splice(e, 1);
                0 == d.length && i.clearRect(0, 0, h, c);
            }
        })(),
            (n = requestAnimationFrame(f));
    }
    function y() {
        t.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", g), s.removeEventListener("touchmove", m), s.removeEventListener("touchstart", m), window.addEventListener("resize", u);
    }
    function v(e, t, i) {
        const n = Math.floor(60 * Math.random() + 60);
        (this.initialLifeSpan = n),
            (this.lifeSpan = n),
            (this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10), y: -1 * Math.random() - 0.4 }),
            (this.position = { x: e, y: t }),
            (this.canv = i),
            (this.baseDimension = 4),
            (this.update = function (e) {
                (this.position.x += this.velocity.x), (this.position.y += this.velocity.y), (this.velocity.x += (2 * (Math.random() < 0.5 ? -1 : 1)) / 75), (this.velocity.y -= Math.random() / 600), this.lifeSpan--;
                const t = 0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;
                (e.fillStyle = "#e6f1f7"),
                    (e.strokeStyle = "#3a92c5"),
                    e.beginPath(),
                    e.arc(this.position.x - (this.baseDimension / 2) * t, this.position.y - this.baseDimension / 2, this.baseDimension * t, 0, 2 * Math.PI),
                    e.stroke(),
                    e.fill(),
                    e.closePath();
            });
    }
    return (
        (r.onchange = () => {
            r.matches ? y() : A();
        }),
        A(),
        { destroy: y }
    );
}

function h(e) {
    const t = (e && e.emoji) || ["😀", "😂", "😆", "😊"];
    let i = e && e.element,
        n = i || document.body,
        o = window.innerWidth,
        s = window.innerHeight;
    const h = { x: o / 6, y: o / 6 },
        c = { x: o / 2, y: o / 2 };
    let l = 0;
    const d = [],
        a = [];
    let r, A, u;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    function g() {
        if (m.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (r = document.createElement("canvas")),
            (A = r.getContext("2d")),
            (r.style.top = "0px"),
            (r.style.left = "0px"),
            (r.style.pointerEvents = "none"),
            i ? ((r.style.position = "absolute"), n.appendChild(r), (r.width = n.clientWidth), (r.height = n.clientHeight)) : ((r.style.position = "fixed"), document.body.appendChild(r), (r.width = o), (r.height = s)),
            (A.font = "70px serif"),
            (A.textBaseline = "middle"),
            (A.textAlign = "center"),
            t.forEach((e) => {
                let t = A.measureText(e),
                    i = document.createElement("canvas"),
                    n = i.getContext("2d");
                (i.width = t.width), (i.height = 2 * t.actualBoundingBoxAscent), (n.textAlign = "center"), (n.font = "70px serif"), (n.textBaseline = "middle"), n.fillText(e, i.width / 2, t.actualBoundingBoxAscent), a.push(i);
            }),
            n.addEventListener("mousemove", y, { passive: !0 }),
            n.addEventListener("touchmove", f, { passive: !0 }),
            n.addEventListener("touchstart", f, { passive: !0 }),
            window.addEventListener("resize", p),
            w();
    }
    function p(e) {
        (o = window.innerWidth), (s = window.innerHeight), i ? ((r.width = n.clientWidth), (r.height = n.clientHeight)) : ((r.width = o), (r.height = s));
    }
    function f(e) {
        if (e.touches.length > 0) for (let t = 0; t < e.touches.length; t++) v(e.touches[t].clientX, e.touches[t].clientY, a[Math.floor(Math.random() * a.length)]);
    }
    function y(e) {
        e.timeStamp - l < 16 ||
            window.requestAnimationFrame(() => {
                if (i) {
                    const t = n.getBoundingClientRect();
                    (h.x = e.clientX - t.left), (h.y = e.clientY - t.top);
                } else (h.x = e.clientX), (h.y = e.clientY);
                Math.hypot(h.x - c.x, h.y - c.y) > 1 && (v(h.x, h.y, a[Math.floor(Math.random() * t.length)]), (c.x = h.x), (c.y = h.y), (l = e.timeStamp));
            });
    }
    function v(e, t, i) {
        d.push(new E(e, t, i));
    }
    function w() {
        !(function () {
            if (0 != d.length) {
                A.clearRect(0, 0, o, s);
                for (let e = 0; e < d.length; e++) d[e].update(A);
                for (let e = d.length - 1; e >= 0; e--) d[e].lifeSpan < 0 && d.splice(e, 1);
                0 == d.length && A.clearRect(0, 0, o, s);
            }
        })(),
            (u = requestAnimationFrame(w));
    }
    function x() {
        r.remove(), cancelAnimationFrame(u), n.removeEventListener("mousemove", y), n.removeEventListener("touchmove", f), n.removeEventListener("touchstart", f), window.addEventListener("resize", p);
    }
    function E(e, t, i) {
        const n = Math.floor(60 * Math.random() + 80);
        
        (this.initialLifeSpan = n),
            (this.lifeSpan = n),
            (this.velocity = { x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2), y: 0.4 * Math.random() + 0.8 }),
            (this.position = { x: e, y: t }),
            (this.canv = i),
            (this.update = function (e) {
                (this.position.x += this.velocity.x), (this.position.y += this.velocity.y), this.lifeSpan--, (this.velocity.y += 0.05);
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                e.drawImage(this.canv, this.position.x - (this.canv.width / 2) * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t);
            });
    }
    return (
        (m.onchange = () => {
            m.matches ? x() : g();
        }),
        g(),
        { destroy: x }
    );
}
function c(e) {
    let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = window.innerWidth,
        c = window.innerHeight,
        l = { x: h / 2, y: h / 2 },
        d = [],
        a = new Image();
    a.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
    const r = window.matchMedia("(prefers-reduced-motion: reduce)");
    function A() {
        if (r.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            o ? ((t.style.position = "absolute"), s.appendChild(t), (t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = h), (t.height = c)),
            s.addEventListener("mousemove", g),
            s.addEventListener("touchmove", m, { passive: !0 }),
            s.addEventListener("touchstart", m, { passive: !0 }),
            window.addEventListener("resize", u),
            f();
    }
    function u(e) {
        (h = window.innerWidth), (c = window.innerHeight), o ? ((t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.width = h), (t.height = c));
    }
    function m(e) {
        if (e.touches.length > 0) for (let t = 0; t < e.touches.length; t++) p(e.touches[t].clientX, e.touches[t].clientY, a);
    }
    function g(e) {
        if (o) {
            const t = s.getBoundingClientRect();
            (l.x = e.clientX - t.left), (l.y = e.clientY - t.top);
        } else (l.x = e.clientX), (l.y = e.clientY);
        p(l.x, l.y, a);
    }
    function p(e, t, i) {
        d.push(new v(e, t, i));
    }
    function f() {
        !(function () {
            if (0 != d.length) {
                i.clearRect(0, 0, h, c);
                for (let e = 0; e < d.length; e++) d[e].update(i);
                for (let e = d.length - 1; e >= 0; e--) d[e].lifeSpan < 0 && d.splice(e, 1);
                0 == d.length && i.clearRect(0, 0, h, c);
            }
        })(),
            (n = requestAnimationFrame(f));
    }
    function y() {
        t.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", g), s.removeEventListener("touchmove", m), s.removeEventListener("touchstart", m), window.addEventListener("resize", u);
    }
    function v(e, t, i) {
        (this.initialLifeSpan = 40),
            (this.lifeSpan = 40),
            (this.position = { x: e, y: t }),
            (this.image = i),
            (this.update = function (e) {
                this.lifeSpan--;
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                (e.globalAlpha = t), e.drawImage(this.image, this.position.x, this.position.y);
            });
    }
    return (
        (r.onchange = () => {
            r.matches ? y() : A();
        }),
        A(),
        { destroy: y }
    );
}
function l(e) {
    let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = window.innerWidth,
        c = window.innerHeight,
        l = { x: h / 2, y: h / 2 },
        d = [];
    const a = e?.length || 20,
        r = e?.colors || ["#FE0000", "#FD8C00", "#FFE500", "#119F0B", "#0644B3", "#C22EDC"],
        A = e?.size || 3;
    let u = !1;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    function g() {
        if (m.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            o ? ((t.style.position = "absolute"), s.appendChild(t), (t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = h), (t.height = c)),
            s.addEventListener("mousemove", f),
            window.addEventListener("resize", p),
            y();
    }
    function p(e) {
        (h = window.innerWidth), (c = window.innerHeight), o ? ((t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.width = h), (t.height = c));
    }
    function f(e) {
        if (o) {
            const t = s.getBoundingClientRect();
            (l.x = e.clientX - t.left), (l.y = e.clientY - t.top);
        } else (l.x = e.clientX), (l.y = e.clientY);
        if (!1 === u) {
            u = !0;
            for (let e = 0; e < a; e++) (t = l.x), (i = l.y), void 0, d.push(new w(t, i));
        }
        var t, i;
    }
    function y() {
        !(function () {
            i.clearRect(0, 0, h, c), (i.lineJoin = "round");
            let e = [],
                t = l.x,
                n = l.y;
            d.forEach(function (i, o, s) {
                let h = s[o + 1] || s[0];
                (i.position.x = t), (i.position.y = n), e.push({ x: t, y: n }), (t += 0.4 * (h.position.x - i.position.x)), (n += 0.4 * (h.position.y - i.position.y));
            }),
                r.forEach((t, n) => {
                    i.beginPath(),
                        (i.strokeStyle = t),
                        e.length && i.moveTo(e[0].x, e[0].y + n * (A - 1)),
                        e.forEach((e, t) => {
                            0 !== t && i.lineTo(e.x, e.y + n * A);
                        }),
                        (i.lineWidth = A),
                        (i.lineCap = "round"),
                        i.stroke();
                });
        })(),
            (n = requestAnimationFrame(y));
    }
    function v() {
        t.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", f), window.addEventListener("resize", p);
    }
    function w(e, t) {
        this.position = { x: e, y: t };
    }
    return (
        (m.onchange = () => {
            m.matches ? v() : g();
        }),
        g(),
        { destroy: v }
    );
}
function d(e) {
    let t,
        i,
        n,
        o = e && e.element,
        s = o || document.body,
        h = window.innerWidth,
        c = window.innerHeight,
        l = { x: h / 2, y: h / 2 };
    const d = (e && e.dateColor) || "blue",
        a = (e && e.faceColor) || "black",
        r = (e && e.secondsColor) || "red",
        A = (e && e.minutesColor) || "black",
        u = (e && e.hoursColor) || "black",
        m = 0.4;
    let g = new Date(),
        p = g.getDate(),
        f = g.getYear() + 1900;
    const y = (
            " " +
            ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][g.getDay()] +
            " " +
            p +
            " " +
            ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"][g.getMonth()] +
            " " +
            f
        ).split(""),
        v = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2"],
        w = v.length,
        x = ["•", "•", "•"],
        E = ["•", "•", "•", "•"],
        M = ["•", "•", "•", "•", "•"],
        L = 360 / w,
        C = 360 / y.length,
        B = 45 / 6.5,
        R = [],
        b = [],
        Y = [],
        S = [],
        W = [],
        H = [],
        I = [],
        X = [],
        T = [];
    var D = parseInt(y.length + w + x.length + E.length + M.length) + 1;
    const F = window.matchMedia("(prefers-reduced-motion: reduce)");
    function z() {
        if (F.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            o ? ((t.style.position = "absolute"), s.appendChild(t), (t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = h), (t.height = c)),
            (i.font = "70px sans-serif"),
            (i.textAlign = "center"),
            (i.textBaseline = "middle");
        for (let e = 0; e < D; e++) (R[e] = 0), (b[e] = 0), (Y[e] = 0), (S[e] = 0);
        for (let e = 0; e < y.length; e++) T[e] = { color: d, value: y[e] };
        for (let e = 0; e < v.length; e++) X[e] = { color: a, value: v[e] };
        for (let e = 0; e < x.length; e++) I[e] = { color: u, value: x[e] };
        for (let e = 0; e < E.length; e++) H[e] = { color: A, value: E[e] };
        for (let e = 0; e < M.length; e++) W[e] = { color: r, value: M[e] };
        s.addEventListener("mousemove", U), s.addEventListener("touchmove", J, { passive: !0 }), s.addEventListener("touchstart", J, { passive: !0 }), window.addEventListener("resize", P), Q();
    }
    function P(e) {
        (h = window.innerWidth), (c = window.innerHeight), o ? ((t.width = s.clientWidth), (t.height = s.clientHeight)) : ((t.width = h), (t.height = c));
    }
    function J(e) {
        if (e.touches.length > 0)
            if (o) {
                const t = s.getBoundingClientRect();
                (l.x = e.touches[0].clientX - t.left), (l.y = e.touches[0].clientY - t.top);
            } else (l.x = e.touches[0].clientX), (l.y = e.touches[0].clientY);
    }
    function U(e) {
        if (o) {
            const t = s.getBoundingClientRect();
            (l.x = e.clientX - t.left), (l.y = e.clientY - t.top);
        } else (l.x = e.clientX), (l.y = e.clientY);
    }
    function Q() {
        !(function () {
            (Y[0] = Math.round((R[0] += (l.y - R[0]) * m))), (S[0] = Math.round((b[0] += (l.x - b[0]) * m)));
            for (let e = 1; e < D; e++) (Y[e] = Math.round((R[e] += (Y[e - 1] - R[e]) * m))), (S[e] = Math.round((b[e] += (S[e - 1] - b[e]) * m))), R[e - 1] >= c - 80 && (R[e - 1] = c - 80), b[e - 1] >= h - 80 && (b[e - 1] = h - 80);
        })(),
            (function () {
                i.clearRect(0, 0, h, c);
                const e = new Date(),
                    t = e.getSeconds(),
                    n = (Math.PI * (t - 15)) / 30,
                    o = e.getMinutes(),
                    s = (Math.PI * (o - 15)) / 30,
                    l = e.getHours(),
                    d = (Math.PI * (l - 3)) / 6 + (Math.PI * parseInt(e.getMinutes())) / 360;
                for (let e = 0; e < T.length; e++)
                    (T[e].y = R[e] + 67.5 * Math.sin(-n + (e * C * Math.PI) / 180)), (T[e].x = b[e] + 67.5 * Math.cos(-n + (e * C * Math.PI) / 180)), (i.fillStyle = T[e].color), i.fillText(T[e].value, T[e].x, T[e].y);
                for (let e = 0; e < X.length; e++)
                    (X[e].y = R[T.length + e] + 45 * Math.sin((e * L * Math.PI) / 180)), (X[e].x = b[T.length + e] + 45 * Math.cos((e * L * Math.PI) / 180)), (i.fillStyle = X[e].color), i.fillText(X[e].value, X[e].x, X[e].y);
                for (let e = 0; e < I.length; e++) (I[e].y = R[T.length + w + e] + 0 + e * B * Math.sin(d)), (I[e].x = b[T.length + w + e] + 0 + e * B * Math.cos(d)), (i.fillStyle = I[e].color), i.fillText(I[e].value, I[e].x, I[e].y);
                for (let e = 0; e < H.length; e++)
                    (H[e].y = R[T.length + w + I.length + e] + 0 + e * B * Math.sin(s)), (H[e].x = b[T.length + w + I.length + e] + 0 + e * B * Math.cos(s)), (i.fillStyle = H[e].color), i.fillText(H[e].value, H[e].x, H[e].y);
                for (let e = 0; e < W.length; e++)
                    (W[e].y = R[T.length + w + I.length + H.length + e] + 0 + e * B * Math.sin(n)),
                        (W[e].x = b[T.length + w + I.length + H.length + e] + 0 + e * B * Math.cos(n)),
                        (i.fillStyle = W[e].color),
                        i.fillText(W[e].value, W[e].x, W[e].y);
            })(),
            (n = requestAnimationFrame(Q));
    }
    function Z() {
        t.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", U), s.removeEventListener("touchmove", J), s.removeEventListener("touchstart", J), window.addEventListener("resize", P);
    }
    return (
        (F.onchange = () => {
            F.matches ? Z() : z();
        }),
        z(),
        { destroy: Z }
    );
}
function a(e) {
    let t,
        i,
        n,
        o = e || {},
        s = e && e.element,
        h = s || document.body,
        c = o.text ? " " + e.text : " Your Text Here",
        l = o.font || "monospace",
        d = o.textSize || 12,
        a = d + "px " + l,
        r = o.gap || d + 2,
        A = 0,
        u = [],
        m = window.innerWidth,
        g = window.innerHeight,
        p = { x: m / 2, y: m / 2 };
    for (let e = 0; e < c.length; e++) u[e] = { letter: c.charAt(e), x: m / 2, y: m / 2 };
    e?.size;
    const f = window.matchMedia("(prefers-reduced-motion: reduce)");
    function y() {
        if (f.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
        (t = document.createElement("canvas")),
            (i = t.getContext("2d")),
            (t.style.top = "0px"),
            (t.style.left = "0px"),
            (t.style.pointerEvents = "none"),
            s ? ((t.style.position = "absolute"), h.appendChild(t), (t.width = h.clientWidth), (t.height = h.clientHeight)) : ((t.style.position = "fixed"), document.body.appendChild(t), (t.width = m), (t.height = g)),
            h.addEventListener("mousemove", w),
            window.addEventListener("resize", v),
            x();
    }
    function v(e) {
        (m = window.innerWidth), (g = window.innerHeight), s ? ((t.width = h.clientWidth), (t.height = h.clientHeight)) : ((t.width = m), (t.height = g));
    }
    function w(e) {
        if (s) {
            const t = h.getBoundingClientRect();
            (p.x = e.clientX - t.left), (p.y = e.clientY - t.top);
        } else (p.x = e.clientX), (p.y = e.clientY);
    }
    function x() {
        !(function () {
            i.clearRect(0, 0, m, g), (A += 0.15);
            let e = 2 * Math.cos(A),
                t = 5 * Math.sin(A);
            for (let e = u.length - 1; e > 0; e--) (u[e].x = u[e - 1].x + r), (u[e].y = u[e - 1].y), (i.font = a), i.fillText(u[e].letter, u[e].x, u[e].y);
            let n = u[0].x,
                o = u[0].y;
            (n += (p.x - n) / 5 + e + 2), (o += (p.y - o) / 5 + t), (u[0].x = n), (u[0].y = o);
        })(),
            (n = requestAnimationFrame(x));
    }
    function E() {
        t.remove(), cancelAnimationFrame(n), h.removeEventListener("mousemove", w), window.addEventListener("resize", v);
    }
    return (
        (f.onchange = () => {
            f.matches ? E() : y();
        }),
        y(),
        { destroy: E }
    );
}
export { s as bubbleCursor, d as clockCursor, h as emojiCursor, t as fairyDustCursor, o as followingDotCursor, c as ghostCursor, l as rainbowCursor, i as snowflakeCursor, e as springyEmojiCursor, a as textFlag, n as trailingCursor };
