jQuery(function (g) {
    if ("undefined" == typeof wc_checkout_params) return !1;
    var v = {
            updateTimer: !(g.blockUI.defaults.overlayCSS.cursor = "default"),
            dirtyInput: !1,
            selectedPaymentMethod: !1,
            xhr: !1,
            $order_review: g("#order_review"),
            $checkout_form: g("form.checkout"),
            init: function () {
                g(document.body).bind("update_checkout", this.update_checkout), g(document.body).bind("init_checkout", this.init_checkout), this.$checkout_form.on("click", 'input[name="payment_method"]', this.payment_method_selected), g(document.body).hasClass("woocommerce-order-pay") && (this.$order_review.on("click", 'input[name="payment_method"]', this.payment_method_selected), this.$order_review.on("submit", this.submitOrder), this.$order_review.attr("novalidate", "novalidate")), this.$checkout_form.attr("novalidate", "novalidate"), this.$checkout_form.on("submit", this.submit), this.$checkout_form.on("input validate change", ".input-text, select, input:checkbox", this.validate_field), this.$checkout_form.on("update", this.trigger_update_checkout), this.$checkout_form.on("change", 'select.shipping_method, input[name^="shipping_method"], #ship-to-different-address input, .update_totals_on_change select, .update_totals_on_change input[type="radio"], .update_totals_on_change input[type="checkbox"]', this.trigger_update_checkout), this.$checkout_form.on("change", ".address-field select", this.input_changed), this.$checkout_form.on("change", ".address-field input.input-text, .update_totals_on_change input.input-text", this.maybe_input_changed), this.$checkout_form.on("keydown", ".address-field input.input-text, .update_totals_on_change input.input-text", this.queue_update_checkout), this.$checkout_form.on("change", "#ship-to-different-address input", this.ship_to_different_address), this.$checkout_form.find("#ship-to-different-address input").change(), this.init_payment_methods(), "1" === wc_checkout_params.is_checkout && g(document.body).trigger("init_checkout"), "yes" === wc_checkout_params.option_guest_checkout && g("input#createaccount").change(this.toggle_create_account).change()
            },
            init_payment_methods: function () {
                var e = g(".woocommerce-checkout").find('input[name="payment_method"]');
                1 === e.length && e.eq(0).hide(), v.selectedPaymentMethod && g("#" + v.selectedPaymentMethod).prop("checked", !0), 0 === e.filter(":checked").length && e.eq(0).prop("checked", !0);
                var t = e.filter(":checked").eq(0).prop("id");
                1 < e.length && g('div.payment_box:not(".' + t + '")').filter(":visible").slideUp(0), e.filter(":checked").eq(0).trigger("click")
            },
            get_payment_method: function () {
                return v.$checkout_form.find('input[name="payment_method"]:checked').val()
            },
            payment_method_selected: function (e) {
                var t, o;
                e.stopPropagation(), 1 < g(".payment_methods input.input-radio").length ? (t = g("div.payment_box." + g(this).attr("ID")), (o = g(this).is(":checked")) && !t.is(":visible") && (g("div.payment_box").filter(":visible").slideUp(230), o && t.slideDown(230))) : g("div.payment_box").show(), g(this).data("order_button_text") ? g("#place_order").text(g(this).data("order_button_text")) : g("#place_order").text(g("#place_order").data("value"));
                var c = g('.woocommerce-checkout input[name="payment_method"]:checked').attr("id");
                c !== v.selectedPaymentMethod && g(document.body).trigger("payment_method_selected"), v.selectedPaymentMethod = c
            },
            toggle_create_account: function () {
                g("div.create-account").hide(), g(this).is(":checked") && (g("#account_password").val("").change(), g("div.create-account").slideDown())
            },
            init_checkout: function () {
                g(document.body).trigger("update_checkout")
            },
            maybe_input_changed: function (e) {
                v.dirtyInput && v.input_changed(e)
            },
            input_changed: function (e) {
                v.dirtyInput = e.target, v.maybe_update_checkout()
            },
            queue_update_checkout: function (e) {
                if (9 === (e.keyCode || e.which || 0)) return !0;
                v.dirtyInput = this, v.reset_update_checkout_timer(), v.updateTimer = setTimeout(v.maybe_update_checkout, "1000")
            },
            trigger_update_checkout: function () {
                v.reset_update_checkout_timer(), v.dirtyInput = !1, g(document.body).trigger("update_checkout")
            },
            maybe_update_checkout: function () {
                var e, t = !0;
                !g(v.dirtyInput).length || (e = g(v.dirtyInput).closest("div").find(".address-field.validate-required")).length && e.each(function () {
                    "" === g(this).find("input.input-text").val() && (t = !1)
                }), t && v.trigger_update_checkout()
            },
            ship_to_different_address: function () {
                g("div.shipping_address").hide(), g(this).is(":checked") && g("div.shipping_address").slideDown()
            },
            reset_update_checkout_timer: function () {
                clearTimeout(v.updateTimer)
            },
            is_valid_json: function (e) {
                try {
                    var t = g.parseJSON(e);
                    return t && "object" == typeof t
                } catch (o) {
                    return !1
                }
            },
            validate_field: function (e) {
                var t = g(this),
                    o = t.closest(".form-row"),
                    c = !0,
                    i = o.is(".validate-required"),
                    n = o.is(".validate-email"),
                    r = e.type;
                "input" === r && o.removeClass("woocommerce-invalid woocommerce-invalid-required-field woocommerce-invalid-email woocommerce-validated"), "validate" !== r && "change" !== r || (i && ("checkbox" === t.attr("type") && !t.is(":checked") || "" === t.val()) && (o.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-required-field"), c = !1), n && t.val() && (new RegExp(/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i).test(t.val()) || (o.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-email"), c = !1)), c && o.removeClass("woocommerce-invalid woocommerce-invalid-required-field woocommerce-invalid-email").addClass("woocommerce-validated"))
            },
            update_checkout: function (e, t) {
                v.reset_update_checkout_timer(), v.updateTimer = setTimeout(v.update_checkout_action, "5", t)
            },
            update_checkout_action: function (e) {
                var t, o, c, i, n, r, a, u, d, s, m, h, l, p, _, f;
                v.xhr && v.xhr.abort(), 0 !== g("form.checkout").length && (e = void 0 !== e ? e : {
                    update_shipping_method: !0
                }, a = t = g("#billing_country").val(), u = o = g("#billing_state").val(), d = c = g(":input#billing_postcode").val(), s = i = g("#billing_city").val(), m = n = g(":input#billing_address_1").val(), h = r = g(":input#billing_address_2").val(), l = g(v.$checkout_form).find(".address-field.validate-required:visible"), p = !0, l.length && l.each(function () {
                    "" === g(this).find(":input").val() && (p = !1)
                }), g("#ship-to-different-address").find("input").is(":checked") && (a = g("#shipping_country").val(), u = g("#shipping_state").val(), d = g(":input#shipping_postcode").val(), s = g("#shipping_city").val(), m = g(":input#shipping_address_1").val(), h = g(":input#shipping_address_2").val()), !(_ = {
                    security: wc_checkout_params.update_order_review_nonce,
                    payment_method: v.get_payment_method(),
                    country: t,
                    state: o,
                    postcode: c,
                    city: i,
                    address: n,
                    address_2: r,
                    s_country: a,
                    s_state: u,
                    s_postcode: d,
                    s_city: s,
                    s_address: m,
                    s_address_2: h,
                    has_full_address: p,
                    post_data: g("form.checkout").serialize()
                }) !== e.update_shipping_method && (f = {}, g('select.shipping_method, input[name^="shipping_method"][type="radio"]:checked, input[name^="shipping_method"][type="hidden"]').each(function () {
                    f[g(this).data("index")] = g(this).val()
                }), _.shipping_method = f), g(".woocommerce-checkout-payment, .woocommerce-checkout-review-order-table").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                }), v.xhr = g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "update_order_review"),
                    data: _,
                    success: function (e) {
                        var t, o, c;
                        e && !0 === e.reload ? window.location.reload() : (g(".woocommerce-NoticeGroup-updateOrderReview").remove(), t = g("#terms").prop("checked"), o = {}, g(".payment_box :input").each(function () {
                            var e = g(this).attr("id");
                            e && (-1 !== g.inArray(g(this).attr("type"), ["checkbox", "radio"]) ? o[e] = g(this).prop("checked") : o[e] = g(this).val())
                        }), e && e.fragments && (g.each(e.fragments, function (e, t) {
                            v.fragments && v.fragments[e] === t || g(e).replaceWith(t), g(e).unblock()
                        }), v.fragments = e.fragments), t && g("#terms").prop("checked", !0), g.isEmptyObject(o) || g(".payment_box :input").each(function () {
                            var e = g(this).attr("id");
                            e && (-1 !== g.inArray(g(this).attr("type"), ["checkbox", "radio"]) ? g(this).prop("checked", o[e]).change() : (-1 !== g.inArray(g(this).attr("type"), ["select"]) || null !== g(this).val() && 0 === g(this).val().length) && g(this).val(o[e]).change())
                        }), e && "failure" === e.result && (c = g("form.checkout"), g(".woocommerce-error, .woocommerce-message").remove(), e.messages ? c.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-updateOrderReview">' + e.messages + "</div>") : c.prepend(e), c.find(".input-text, select, input:checkbox").trigger("validate").blur(), v.scroll_to_notices()), v.init_payment_methods(), g(document.body).trigger("updated_checkout", [e]))
                    }
                }))
            },
            handleUnloadEvent: function (e) {
                return -1 === navigator.userAgent.indexOf("MSIE") && !document.documentMode || (e.preventDefault(), undefined)
            },
            attachUnloadEventsOnSubmit: function () {
                g(window).on("beforeunload", this.handleUnloadEvent)
            },
            detachUnloadEventsOnSubmit: function () {
                g(window).unbind("beforeunload", this.handleUnloadEvent)
            },
            blockOnSubmit: function (e) {
                1 !== e.data()["blockUI.isBlocked"] && e.block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                })
            },
            submitOrder: function () {
                v.blockOnSubmit(g(this))
            },
            submit: function () {
                v.reset_update_checkout_timer();
                var o = g(this);
                return o.is(".processing") || !1 !== o.triggerHandler("checkout_place_order") && !1 !== o.triggerHandler("checkout_place_order_" + v.get_payment_method()) && (o.addClass("processing"), v.blockOnSubmit(o), v.attachUnloadEventsOnSubmit(), g.ajaxSetup({
                    dataFilter: function (e, t) {
                        if ("json" !== t) return e;
                        if (v.is_valid_json(e)) return e;
                        var o = e.match(/{"result.*}/);
                        return null !== o && v.is_valid_json(o[0]) ? (console.log("Fixed malformed JSON. Original:"), console.log(e), e = o[0]) : console.log("Unable to fix malformed JSON"), e
                    }
                }), g.ajax({
                    type: "POST",
                    url: wc_checkout_params.checkout_url,
                    data: o.serialize(),
                    dataType: "json",
                    success: function (e) {
                        v.detachUnloadEventsOnSubmit();
                        try {
                            if ("success" !== e.result || !1 === o.triggerHandler("checkout_place_order_success")) throw "failure" === e.result ? "Result failure" : "Invalid response"; - 1 === e.redirect.indexOf("https://") || -1 === e.redirect.indexOf("http://") ? window.location = e.redirect : window.location = decodeURI(e.redirect)
                        } catch (t) {
                            if (!0 === e.reload) return void window.location.reload();
                            !0 === e.refresh && g(document.body).trigger("update_checkout"), e.messages ? v.submit_error(e.messages) : v.submit_error('<div class="woocommerce-error">' + wc_checkout_params.i18n_checkout_error + "</div>")
                        }
                    },
                    error: function (e, t, o) {
                        v.detachUnloadEventsOnSubmit(), v.submit_error('<div class="woocommerce-error">' + o + "</div>")
                    }
                })), !1
            },
            submit_error: function (e) {
                g(".woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message").remove(), v.$checkout_form.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout">' + e + "</div>"), v.$checkout_form.removeClass("processing").unblock(), v.$checkout_form.find(".input-text, select, input:checkbox").trigger("validate").blur(), v.scroll_to_notices(), g(document.body).trigger("checkout_error")
            },
            scroll_to_notices: function () {
                var e = g(".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout");
                e.length || (e = g(".form.checkout")), g.scroll_to_notices(e)
            }
        },
        e = {
            init: function () {
                g(document.body).on("click", "a.showcoupon", this.show_coupon_form), g(document.body).on("click", ".woocommerce-remove-coupon", this.remove_coupon), g("form.checkout_coupon").hide().submit(this.submit)
            },
            show_coupon_form: function () {
                return g(".checkout_coupon").slideToggle(400, function () {
                    g(".checkout_coupon").find(":input:eq(0)").focus()
                }), !1
            },
            submit: function () {
                var t = g(this);
                if (t.is(".processing")) return !1;
                t.addClass("processing").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                });
                var o = {
                    security: wc_checkout_params.apply_coupon_nonce,
                    coupon_code: t.find('input[name="coupon_code"]').val()
                };
                return g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "apply_coupon"),
                    data: o,
                    success: function (e) {
                        g(".woocommerce-error, .woocommerce-message").remove(), t.removeClass("processing").unblock(), e && (t.before(e), t.slideUp(), g(document.body).trigger("applied_coupon_in_checkout", [o.coupon_code]), g(document.body).trigger("update_checkout", {
                            update_shipping_method: !1
                        }))
                    },
                    dataType: "html"
                }), !1
            },
            remove_coupon: function (e) {
                e.preventDefault();
                var t = g(this).parents(".woocommerce-checkout-review-order"),
                    o = g(this).data("coupon");
                t.addClass("processing").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                });
                var c = {
                    security: wc_checkout_params.remove_coupon_nonce,
                    coupon: o
                };
                g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_coupon"),
                    data: c,
                    success: function (e) {
                        g(".woocommerce-error, .woocommerce-message").remove(), t.removeClass("processing").unblock(), e && (g("form.woocommerce-checkout").before(e), g(document.body).trigger("removed_coupon_in_checkout", [c.coupon_code]), g(document.body).trigger("update_checkout", {
                            update_shipping_method: !1
                        }), g("form.checkout_coupon").find('input[name="coupon_code"]').val(""))
                    },
                    error: function (e) {
                        wc_checkout_params.debug_mode && console.log(e.responseText)
                    },
                    dataType: "html"
                })
            }
        },
        t = {
            init: function () {
                g(document.body).on("click", "a.showlogin", this.show_login_form)
            },
            show_login_form: function () {
                return g("form.login, form.woocommerce-form--login").slideToggle(), !1
            }
        },
        o = {
            init: function () {
                g(document.body).on("click", "a.woocommerce-terms-and-conditions-link", this.toggle_terms)
            },
            toggle_terms: function () {
                if (g(".woocommerce-terms-and-conditions").length) return g(".woocommerce-terms-and-conditions").slideToggle(function () {
                    var e = g(".woocommerce-terms-and-conditions-link");
                    g(".woocommerce-terms-and-conditions").is(":visible") ? (e.addClass("woocommerce-terms-and-conditions-link--open"), e.removeClass("woocommerce-terms-and-conditions-link--closed")) : (e.removeClass("woocommerce-terms-and-conditions-link--open"), e.addClass("woocommerce-terms-and-conditions-link--closed"))
                }), !1
            }
        };
    v.init(), e.init(), t.init(), o.init()
});
jQuery(function (g) {
    if ("undefined" == typeof wc_checkout_params) return !1;
    var v = {
            updateTimer: !(g.blockUI.defaults.overlayCSS.cursor = "default"),
            dirtyInput: !1,
            selectedPaymentMethod: !1,
            xhr: !1,
            $order_review: g("#order_review"),
            $checkout_form: g("form.checkout"),
            init: function () {
                g(document.body).bind("update_checkout", this.update_checkout), g(document.body).bind("init_checkout", this.init_checkout), this.$checkout_form.on("click", 'input[name="payment_method"]', this.payment_method_selected), g(document.body).hasClass("woocommerce-order-pay") && (this.$order_review.on("click", 'input[name="payment_method"]', this.payment_method_selected), this.$order_review.on("submit", this.submitOrder), this.$order_review.attr("novalidate", "novalidate")), this.$checkout_form.attr("novalidate", "novalidate"), this.$checkout_form.on("submit", this.submit), this.$checkout_form.on("input validate change", ".input-text, select, input:checkbox", this.validate_field), this.$checkout_form.on("update", this.trigger_update_checkout), this.$checkout_form.on("change", 'select.shipping_method, input[name^="shipping_method"], #ship-to-different-address input, .update_totals_on_change select, .update_totals_on_change input[type="radio"], .update_totals_on_change input[type="checkbox"]', this.trigger_update_checkout), this.$checkout_form.on("change", ".address-field select", this.input_changed), this.$checkout_form.on("change", ".address-field input.input-text, .update_totals_on_change input.input-text", this.maybe_input_changed), this.$checkout_form.on("keydown", ".address-field input.input-text, .update_totals_on_change input.input-text", this.queue_update_checkout), this.$checkout_form.on("change", "#ship-to-different-address input", this.ship_to_different_address), this.$checkout_form.find("#ship-to-different-address input").change(), this.init_payment_methods(), "1" === wc_checkout_params.is_checkout && g(document.body).trigger("init_checkout"), "yes" === wc_checkout_params.option_guest_checkout && g("input#createaccount").change(this.toggle_create_account).change()
            },
            init_payment_methods: function () {
                var e = g(".woocommerce-checkout").find('input[name="payment_method"]');
                1 === e.length && e.eq(0).hide(), v.selectedPaymentMethod && g("#" + v.selectedPaymentMethod).prop("checked", !0), 0 === e.filter(":checked").length && e.eq(0).prop("checked", !0);
                var t = e.filter(":checked").eq(0).prop("id");
                1 < e.length && g('div.payment_box:not(".' + t + '")').filter(":visible").slideUp(0), e.filter(":checked").eq(0).trigger("click")
            },
            get_payment_method: function () {
                return v.$checkout_form.find('input[name="payment_method"]:checked').val()
            },
            payment_method_selected: function (e) {
                var t, o;
                e.stopPropagation(), 1 < g(".payment_methods input.input-radio").length ? (t = g("div.payment_box." + g(this).attr("ID")), (o = g(this).is(":checked")) && !t.is(":visible") && (g("div.payment_box").filter(":visible").slideUp(230), o && t.slideDown(230))) : g("div.payment_box").show(), g(this).data("order_button_text") ? g("#place_order").text(g(this).data("order_button_text")) : g("#place_order").text(g("#place_order").data("value"));
                var c = g('.woocommerce-checkout input[name="payment_method"]:checked').attr("id");
                c !== v.selectedPaymentMethod && g(document.body).trigger("payment_method_selected"), v.selectedPaymentMethod = c
            },
            toggle_create_account: function () {
                g("div.create-account").hide(), g(this).is(":checked") && (g("#account_password").val("").change(), g("div.create-account").slideDown())
            },
            init_checkout: function () {
                g(document.body).trigger("update_checkout")
            },
            maybe_input_changed: function (e) {
                v.dirtyInput && v.input_changed(e)
            },
            input_changed: function (e) {
                v.dirtyInput = e.target, v.maybe_update_checkout()
            },
            queue_update_checkout: function (e) {
                if (9 === (e.keyCode || e.which || 0)) return !0;
                v.dirtyInput = this, v.reset_update_checkout_timer(), v.updateTimer = setTimeout(v.maybe_update_checkout, "1000")
            },
            trigger_update_checkout: function () {
                v.reset_update_checkout_timer(), v.dirtyInput = !1, g(document.body).trigger("update_checkout")
            },
            maybe_update_checkout: function () {
                var e, t = !0;
                !g(v.dirtyInput).length || (e = g(v.dirtyInput).closest("div").find(".address-field.validate-required")).length && e.each(function () {
                    "" === g(this).find("input.input-text").val() && (t = !1)
                }), t && v.trigger_update_checkout()
            },
            ship_to_different_address: function () {
                g("div.shipping_address").hide(), g(this).is(":checked") && g("div.shipping_address").slideDown()
            },
            reset_update_checkout_timer: function () {
                clearTimeout(v.updateTimer)
            },
            is_valid_json: function (e) {
                try {
                    var t = g.parseJSON(e);
                    return t && "object" == typeof t
                } catch (o) {
                    return !1
                }
            },
            validate_field: function (e) {
                var t = g(this),
                    o = t.closest(".form-row"),
                    c = !0,
                    i = o.is(".validate-required"),
                    n = o.is(".validate-email"),
                    r = e.type;
                "input" === r && o.removeClass("woocommerce-invalid woocommerce-invalid-required-field woocommerce-invalid-email woocommerce-validated"), "validate" !== r && "change" !== r || (i && ("checkbox" === t.attr("type") && !t.is(":checked") || "" === t.val()) && (o.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-required-field"), c = !1), n && t.val() && (new RegExp(/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i).test(t.val()) || (o.removeClass("woocommerce-validated").addClass("woocommerce-invalid woocommerce-invalid-email"), c = !1)), c && o.removeClass("woocommerce-invalid woocommerce-invalid-required-field woocommerce-invalid-email").addClass("woocommerce-validated"))
            },
            update_checkout: function (e, t) {
                v.reset_update_checkout_timer(), v.updateTimer = setTimeout(v.update_checkout_action, "5", t)
            },
            update_checkout_action: function (e) {
                var t, o, c, i, n, r, a, u, d, s, m, h, l, p, _, f;
                v.xhr && v.xhr.abort(), 0 !== g("form.checkout").length && (e = void 0 !== e ? e : {
                    update_shipping_method: !0
                }, a = t = g("#billing_country").val(), u = o = g("#billing_state").val(), d = c = g(":input#billing_postcode").val(), s = i = g("#billing_city").val(), m = n = g(":input#billing_address_1").val(), h = r = g(":input#billing_address_2").val(), l = g(v.$checkout_form).find(".address-field.validate-required:visible"), p = !0, l.length && l.each(function () {
                    "" === g(this).find(":input").val() && (p = !1)
                }), g("#ship-to-different-address").find("input").is(":checked") && (a = g("#shipping_country").val(), u = g("#shipping_state").val(), d = g(":input#shipping_postcode").val(), s = g("#shipping_city").val(), m = g(":input#shipping_address_1").val(), h = g(":input#shipping_address_2").val()), !(_ = {
                    security: wc_checkout_params.update_order_review_nonce,
                    payment_method: v.get_payment_method(),
                    country: t,
                    state: o,
                    postcode: c,
                    city: i,
                    address: n,
                    address_2: r,
                    s_country: a,
                    s_state: u,
                    s_postcode: d,
                    s_city: s,
                    s_address: m,
                    s_address_2: h,
                    has_full_address: p,
                    post_data: g("form.checkout").serialize()
                }) !== e.update_shipping_method && (f = {}, g('select.shipping_method, input[name^="shipping_method"][type="radio"]:checked, input[name^="shipping_method"][type="hidden"]').each(function () {
                    f[g(this).data("index")] = g(this).val()
                }), _.shipping_method = f), g(".woocommerce-checkout-payment, .woocommerce-checkout-review-order-table").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                }), v.xhr = g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "update_order_review"),
                    data: _,
                    success: function (e) {
                        var t, o, c;
                        e && !0 === e.reload ? window.location.reload() : (g(".woocommerce-NoticeGroup-updateOrderReview").remove(), t = g("#terms").prop("checked"), o = {}, g(".payment_box :input").each(function () {
                            var e = g(this).attr("id");
                            e && (-1 !== g.inArray(g(this).attr("type"), ["checkbox", "radio"]) ? o[e] = g(this).prop("checked") : o[e] = g(this).val())
                        }), e && e.fragments && (g.each(e.fragments, function (e, t) {
                            v.fragments && v.fragments[e] === t || g(e).replaceWith(t), g(e).unblock()
                        }), v.fragments = e.fragments), t && g("#terms").prop("checked", !0), g.isEmptyObject(o) || g(".payment_box :input").each(function () {
                            var e = g(this).attr("id");
                            e && (-1 !== g.inArray(g(this).attr("type"), ["checkbox", "radio"]) ? g(this).prop("checked", o[e]).change() : (-1 !== g.inArray(g(this).attr("type"), ["select"]) || null !== g(this).val() && 0 === g(this).val().length) && g(this).val(o[e]).change())
                        }), e && "failure" === e.result && (c = g("form.checkout"), g(".woocommerce-error, .woocommerce-message").remove(), e.messages ? c.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-updateOrderReview">' + e.messages + "</div>") : c.prepend(e), c.find(".input-text, select, input:checkbox").trigger("validate").blur(), v.scroll_to_notices()), v.init_payment_methods(), g(document.body).trigger("updated_checkout", [e]))
                    }
                }))
            },
            handleUnloadEvent: function (e) {
                return -1 === navigator.userAgent.indexOf("MSIE") && !document.documentMode || (e.preventDefault(), undefined)
            },
            attachUnloadEventsOnSubmit: function () {
                g(window).on("beforeunload", this.handleUnloadEvent)
            },
            detachUnloadEventsOnSubmit: function () {
                g(window).unbind("beforeunload", this.handleUnloadEvent)
            },
            blockOnSubmit: function (e) {
                1 !== e.data()["blockUI.isBlocked"] && e.block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                })
            },
            submitOrder: function () {
                v.blockOnSubmit(g(this))
            },
            submit: function () {
                v.reset_update_checkout_timer();
                var o = g(this);
                return o.is(".processing") || !1 !== o.triggerHandler("checkout_place_order") && !1 !== o.triggerHandler("checkout_place_order_" + v.get_payment_method()) && (o.addClass("processing"), v.blockOnSubmit(o), v.attachUnloadEventsOnSubmit(), g.ajaxSetup({
                    dataFilter: function (e, t) {
                        if ("json" !== t) return e;
                        if (v.is_valid_json(e)) return e;
                        var o = e.match(/{"result.*}/);
                        return null !== o && v.is_valid_json(o[0]) ? (console.log("Fixed malformed JSON. Original:"), console.log(e), e = o[0]) : console.log("Unable to fix malformed JSON"), e
                    }
                }), g.ajax({
                    type: "POST",
                    url: wc_checkout_params.checkout_url,
                    data: o.serialize(),
                    dataType: "json",
                    success: function (e) {
                        v.detachUnloadEventsOnSubmit();
                        try {
                            if ("success" !== e.result || !1 === o.triggerHandler("checkout_place_order_success")) throw "failure" === e.result ? "Result failure" : "Invalid response"; - 1 === e.redirect.indexOf("https://") || -1 === e.redirect.indexOf("http://") ? window.location = e.redirect : window.location = decodeURI(e.redirect)
                        } catch (t) {
                            if (!0 === e.reload) return void window.location.reload();
                            !0 === e.refresh && g(document.body).trigger("update_checkout"), e.messages ? v.submit_error(e.messages) : v.submit_error('<div class="woocommerce-error">' + wc_checkout_params.i18n_checkout_error + "</div>")
                        }
                    },
                    error: function (e, t, o) {
                        v.detachUnloadEventsOnSubmit(), v.submit_error('<div class="woocommerce-error">' + o + "</div>")
                    }
                })), !1
            },
            submit_error: function (e) {
                g(".woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message").remove(), v.$checkout_form.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout">' + e + "</div>"), v.$checkout_form.removeClass("processing").unblock(), v.$checkout_form.find(".input-text, select, input:checkbox").trigger("validate").blur(), v.scroll_to_notices(), g(document.body).trigger("checkout_error")
            },
            scroll_to_notices: function () {
                var e = g(".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout");
                e.length || (e = g(".form.checkout")), g.scroll_to_notices(e)
            }
        },
        e = {
            init: function () {
                g(document.body).on("click", "a.showcoupon", this.show_coupon_form), g(document.body).on("click", ".woocommerce-remove-coupon", this.remove_coupon), g("form.checkout_coupon").hide().submit(this.submit)
            },
            show_coupon_form: function () {
                return g(".checkout_coupon").slideToggle(400, function () {
                    g(".checkout_coupon").find(":input:eq(0)").focus()
                }), !1
            },
            submit: function () {
                var t = g(this);
                if (t.is(".processing")) return !1;
                t.addClass("processing").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                });
                var o = {
                    security: wc_checkout_params.apply_coupon_nonce,
                    coupon_code: t.find('input[name="coupon_code"]').val()
                };
                return g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "apply_coupon"),
                    data: o,
                    success: function (e) {
                        g(".woocommerce-error, .woocommerce-message").remove(), t.removeClass("processing").unblock(), e && (t.before(e), t.slideUp(), g(document.body).trigger("applied_coupon_in_checkout", [o.coupon_code]), g(document.body).trigger("update_checkout", {
                            update_shipping_method: !1
                        }))
                    },
                    dataType: "html"
                }), !1
            },
            remove_coupon: function (e) {
                e.preventDefault();
                var t = g(this).parents(".woocommerce-checkout-review-order"),
                    o = g(this).data("coupon");
                t.addClass("processing").block({
                    message: null,
                    overlayCSS: {
                        background: "#fff",
                        opacity: .6
                    }
                });
                var c = {
                    security: wc_checkout_params.remove_coupon_nonce,
                    coupon: o
                };
                g.ajax({
                    type: "POST",
                    url: wc_checkout_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_coupon"),
                    data: c,
                    success: function (e) {
                        g(".woocommerce-error, .woocommerce-message").remove(), t.removeClass("processing").unblock(), e && (g("form.woocommerce-checkout").before(e), g(document.body).trigger("removed_coupon_in_checkout", [c.coupon_code]), g(document.body).trigger("update_checkout", {
                            update_shipping_method: !1
                        }), g("form.checkout_coupon").find('input[name="coupon_code"]').val(""))
                    },
                    error: function (e) {
                        wc_checkout_params.debug_mode && console.log(e.responseText)
                    },
                    dataType: "html"
                })
            }
        },
        t = {
            init: function () {
                g(document.body).on("click", "a.showlogin", this.show_login_form)
            },
            show_login_form: function () {
                return g("form.login, form.woocommerce-form--login").slideToggle(), !1
            }
        },
        o = {
            init: function () {
                g(document.body).on("click", "a.woocommerce-terms-and-conditions-link", this.toggle_terms)
            },
            toggle_terms: function () {
                if (g(".woocommerce-terms-and-conditions").length) return g(".woocommerce-terms-and-conditions").slideToggle(function () {
                    var e = g(".woocommerce-terms-and-conditions-link");
                    g(".woocommerce-terms-and-conditions").is(":visible") ? (e.addClass("woocommerce-terms-and-conditions-link--open"), e.removeClass("woocommerce-terms-and-conditions-link--closed")) : (e.removeClass("woocommerce-terms-and-conditions-link--open"), e.addClass("woocommerce-terms-and-conditions-link--closed"))
                }), !1
            }
        };
    v.init(), e.init(), t.init(), o.init()
});