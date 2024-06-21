(window.webpackJsonp = window.webpackJsonp || []).push([["chunk-595725ae"], {
    "1b26": function (t, e, n) {
        "use strict";
        n.d(e, "e", (function () {
            return r
        })), n.d(e, "g", (function () {
            return a
        })), n.d(e, "a", (function () {
            return o
        })), n.d(e, "c", (function () {
            return s
        })), n.d(e, "b", (function () {
            return c
        })), n.d(e, "d", (function () {
            return u
        })), n.d(e, "f", (function () {
            return l
        }));
        var i = n("e20a"), r = function (t) {
            return i.a.get("/policy/", {params: t})
        }, a = function (t) {
            return i.a.post("/task/policy/", t)
        }, o = function (t) {
            return i.a.post("/policy/add/", t)
        }, s = function (t) {
            return i.a.post("/policy/edit/", t)
        }, c = function (t) {
            return i.a.post("/policy/delete/", t)
        }, u = function () {
            return i.a.get("/poc/?plugin_type=poc&size=10000")
        }, l = function () {
            return i.a.get("/poc/?plugin_type=brute&size=10000")
        }
    }, "1da1": function (t, e, n) {
        "use strict";

        function i(t, e, n, i, r, a, o) {
            try {
                var s = t[a](o), c = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(i, r)
        }

        function r(t) {
            return function () {
                var e = this, n = arguments;
                return new Promise((function (r, a) {
                    var o = t.apply(e, n);

                    function s(t) {
                        i(o, r, a, s, c, "next", t)
                    }

                    function c(t) {
                        i(o, r, a, s, c, "throw", t)
                    }

                    s(void 0)
                }))
            }
        }

        n.d(e, "a", (function () {
            return r
        })), n("d3b7")
    }, "66bb": function (t, e, n) {
        "use strict";
        n.r(e), n("4de4"), n("caad"), n("d81d"), n("b0c0"), n("a9e3"), n("cca6"), n("d3b7"), n("a79d"), n("2532");
        var i = n("5530"), r = (n("96cf"), n("1da1")), a = n("d294"), o = n("1b26"), s = n("90d8"), c = {
            data: function () {
                return {
                    expandKey: ["hostPanel"],
                    form: this.$form.createForm(this),
                    initValue: {
                        name: "",
                        desc: "",
                        domain_brute_type: "big",
                        port_scan_type: "top100",
                        port_custom: "",
                        host_timeout_type: "default",
                        host_timeout: "",
                        port_parallelism: 32,
                        port_min_rate: 60,
                        hostSettingGroup: ["domain_brute", "alt_dns", "dns_query_plugin", "arl_search", "port_scan", "skip_scan_cdn_ip"],
                        siteSettingGroup: [],
                        weakSettingGroup: [],
                        pocSettingGroup: []
                    },
                    searchObj: {hostValue: "", siteValue: "", weakValue: "", pocValue: ""},
                    hostSettingList: a.b,
                    siteSettingList: a.f,
                    weakSettingList: [],
                    pocSettingList: [],
                    searchData: {hostSettingList: [], siteSettingList: [], weakSettingList: [], pocSettingList: []},
                    policyList: [],
                    checkHostAll: !1,
                    checkSiteAll: !1,
                    checkPocAll: !1,
                    checkWeakAll: !1,
                    showPort_custom: !1,
                    showHost_timeout: !1,
                    timer: null
                }
            }, mounted: function () {
                var t = this;
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return Object(s.z)({size: 100}).then((function (e) {
                                    t.policyList = e.items
                                })), e.next = 3, t.initWeakPolicyList();
                            case 3:
                                return e.next = 5, t.initpocSettingList();
                            case 5:
                                t.searchData.hostSettingList = t.hostSettingList, t.searchData.siteSettingList = t.siteSettingList, t.$route.query._id && t.getEditdata(t.$route.query._id);
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))()
            }, methods: {
                getEditdata: function (t) {
                    var e = this;
                    Object(o.e)({_id: t}).then((function (t) {
                        200 === t.code && (e.editItem = t.items[0], e.resetForm())
                    }))
                }, resetForm: function () {
                    var t;
                    this.initValue = {
                        name: this.editItem.name,
                        desc: this.editItem.desc,
                        domain_brute_type: this.editItem.policy.domain_config.domain_brute_type,
                        port_scan_type: this.editItem.policy.ip_config.port_scan_type,
                        port_custom: this.editItem.policy.ip_config.port_custom || "",
                        host_timeout_type: this.editItem.policy.ip_config.host_timeout_type,
                        host_timeout: this.editItem.policy.ip_config.host_timeout || "",
                        port_parallelism: this.editItem.policy.ip_config.port_parallelism,
                        port_min_rate: this.editItem.policy.ip_config.port_min_rate,
                        scope_id: null === (t = this.editItem.policy.scope_config) || void 0 === t ? void 0 : t.scope_id,
                        hostSettingGroup: this.getParamsType("domain"),
                        siteSettingGroup: this.getParamsType("site"),
                        weakSettingGroup: this.getParamsType("brute_config"),
                        pocSettingGroup: this.getParamsType("poc_config")
                    }, this.showPort_custom = "custom" === this.editItem.policy.ip_config.port_scan_type, this.showHost_timeout = "custom" === this.editItem.policy.ip_config.host_timeout_type, this.initValue.weakSettingGroup.length && (this.expandKey.push("weakPanel"), this.initValue.weakSettingGroup.length && this.initValue.weakSettingGroup.length === this.weakSettingList.length && (this.checkWeakAll = !0)), this.initValue.pocSettingGroup.length && (this.expandKey.push("pocPanel"), this.pocSettingList.length && this.initValue.pocSettingGroup.length === this.pocSettingList.length && (this.checkPocAll = !0)), this.initValue.siteSettingGroup.length && (this.expandKey.push("sitePanel"), this.initValue.siteSettingGroup.length === this.siteSettingList.length && (this.checkSiteAll = !0)), this.initValue.hostSettingGroup.length === this.hostSettingList.length && (this.checkHostAll = !0)
                }, port_scan_typeChange: function (t) {
                    this.showPort_custom = "custom" === t
                }, host_timeout_typeChange: function (t) {
                    this.showHost_timeout = "custom" === t
                }, getParamsType: function (t) {
                    var e = [];
                    if (["brute_config", "poc_config"].includes(t)) this.editItem.policy[t].map((function (t) {
                        t.enable && e.push(t.plugin_name)
                    })); else if ("domain" === t) {
                        var n = this.editItem.policy.domain_config, i = this.editItem.policy.ip_config;
                        for (var r in n) !0 === n[r] && e.push(r);
                        for (var a in i) !0 === i[a] && e.push(a);
                        this.editItem.policy.npoc_service_detection && e.push("npoc_service_detection")
                    } else if ("site" === t) {
                        var o = this.editItem.policy.site_config;
                        for (var s in this.editItem.policy.file_leak && e.push("file_leak"), o) !0 === o[s] && e.push(s)
                    }
                    return e
                }, initWeakPolicyList: function () {
                    var t = this;
                    return new Promise((function (e) {
                        var n;
                        Object(o.f)().then((n = Object(r.a)(regeneratorRuntime.mark((function n(i) {
                            return regeneratorRuntime.wrap((function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        200 === i.code && (i.items.map((function (t) {
                                            t.value = t.plugin_name, t.name = t.vul_name
                                        })), t.weakSettingList = i.items, t.searchData.weakSettingList = t.weakSettingList, e(!0));
                                    case 1:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        }))), function (t) {
                            return n.apply(this, arguments)
                        }))
                    }))
                }, initpocSettingList: function () {
                    var t = this;
                    return new Promise((function (e) {
                        Object(o.d)().then((function (n) {
                            200 === n.code && (n.items.map((function (t) {
                                t.value = t.plugin_name, t.name = t.vul_name
                            })), t.pocSettingList = n.items, t.searchData.pocSettingList = t.pocSettingList, e(!0))
                        }))
                    }))
                }, checkAll: function (t, e, n) {
                    var i = [];
                    this[t].map((function (t) {
                        i.push(t.value)
                    }));
                    var r = {};
                    this.form.getFieldsValue()[e].length === this[t].length ? (r[e] = [], this[n] = !1) : (r[e] = i, this[n] = !0), this.form.setFieldsValue(r)
                }, filterList: function (t, e) {
                    var n = this, i = this;
                    i.timer || (i.timer = setTimeout((function () {
                        if (clearTimeout(i.timer), i.timer = null, n.searchObj[t]) {
                            var r = i[e].filter((function (e) {
                                return e.name.toLowerCase().includes(n.searchObj[t].toLowerCase())
                            }));
                            i.searchData[e] = r
                        } else i.searchData[e] = i[e]
                    }), 500))
                }, numberValid: function (t, e, n) {
                    e || n(new Error("不能为空")), /^[0-9]*$/.test(e) && n(), n(new Error("只能输入数字"))
                }, subForm: function () {
                    var t = this;
                    this.form.validateFields((function (e, n) {
                        if (!e && !t.submitFLag) {
                            var r = n.name, a = n.desc;
                            t.form.validateFields((function (e, n) {
                                if (!e) {
                                    var s = {name: r, desc: a, policy: {}},
                                        c = t.getParams(n.checkGroup, "hostSettingList", "domain_config"),
                                        u = t.getParams(n.siteSettingGroup, "siteSettingList", "site_config"),
                                        l = t.getParams(n.pocSettingGroup, "pocSettingList", "poc_config"),
                                        p = t.getParams(n.weakSettingGroup, "weakSettingList", "brute_config");
                                    if (Object.assign(s.policy, c, u, l, p, {scope_config: {}}), s.policy.domain_config.domain_brute_type = n.domain_brute_type, s.policy.ip_config.port_scan_type = n.port_scan_type, s.policy.ip_config.port_custom = n.port_custom || "", s.policy.ip_config.host_timeout_type = n.host_timeout_type, s.policy.ip_config.host_timeout = Number(n.host_timeout || ""), s.policy.ip_config.port_parallelism = Number(n.port_parallelism), s.policy.ip_config.port_min_rate = Number(n.port_min_rate), s.policy.scope_config.scope_id = n.scope_id, t.submitFLag) return;
                                    if (t.submitFLag = !0, t.editItem) {
                                        var h = {};
                                        h.policy_id = t.editItem._id, h.policy_data = s, Object(o.c)(Object(i.a)({}, h)).then((function (e) {
                                            200 === e.code && (t.$message.success("修改成功"), t.backPage())
                                        })).finally((function () {
                                            t.submitFLag = !1
                                        }))
                                    } else Object(o.a)(Object(i.a)({}, s)).then((function (e) {
                                        200 === e.code && (t.$message.success("添加成功"), t.backPage())
                                    })).finally((function () {
                                        t.submitFLag = !1
                                    }))
                                }
                            }))
                        }
                    }))
                }, backPage: function () {
                    this.$router.go(-1)
                }, getParams: function (t, e, n) {
                    var i = {};
                    if ("domain_config" === n) {
                        i.domain_config = {}, i.ip_config = {};
                        var r = ["domain_brute", "alt_dns", "dns_query_plugin", "arl_search", "skip_scan_cdn_ip"];
                        t && this[e].map((function (e) {
                            r.includes(e.value) ? i.domain_config[e.value] = t.includes(e.value) : "npoc_service_detection" === e.value ? i.npoc_service_detection = t.includes(e.value) : i.ip_config[e.value] = t.includes(e.value)
                        }))
                    } else "site_config" === n ? (i.site_config = {}, t && this[e].map((function (e) {
                        "file_leak" === e.value ? i.file_leak = t.includes(e.value) : i.site_config[e.value] = t.includes(e.value)
                    }))) : (i[n] = [], t && this[e].map((function (e) {
                        t.includes(e.value) && i[n].push({plugin_name: e.plugin_name, vul_name: e.vul_name, enable: !0})
                    })));
                    return i
                }
            }
        }, u = (n("99e1"), n("2877")), l = Object(u.a)(c, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "policy-setting_wrap"}, [n("a-form", {
                attrs: {
                    form: t.form,
                    "label-col": {span: 4},
                    "wrapper-col": {span: 20}
                }
            }, [n("a-form-item", {attrs: {label: "策略名称"}}, [n("a-input", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["name", {rules: [{required: !0, message: "请输入策略名称!"}], initialValue: t.initValue.name}],
                    expression: "[\n          'name',\n          {\n            rules: [{ required: true, message: '请输入策略名称!' }],\n            initialValue: initValue.name,\n          },\n        ]"
                }], attrs: {placeholder: "请输入策略名称"}
            })], 1), n("a-form-item", {attrs: {label: "策略描述"}}, [n("a-input", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["desc", {initialValue: t.initValue.desc}],
                    expression: "['desc', { initialValue: initValue.desc }]"
                }], attrs: {placeholder: "请输入策略描述"}
            })], 1), n("a-collapse", {
                attrs: {
                    activeKey: t.expandKey,
                    bordered: !1
                }
            }, [n("a-collapse-panel", {
                key: "hostPanel",
                attrs: {header: "域名和IP配置"}
            }, [n("a-form-item", {attrs: {label: "域名爆破类型"}}, [n("a-select", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["domain_brute_type", {
                        rules: [{required: !0, message: "请选择域名爆破类型!"}],
                        initialValue: t.initValue.domain_brute_type
                    }],
                    expression: "[\n              'domain_brute_type',\n              {\n                rules: [{ required: true, message: '请选择域名爆破类型!' }],\n                initialValue: initValue.domain_brute_type,\n              },\n            ]"
                }], attrs: {placeholder: "请选择域名爆破类型"}
            }, [n("a-select-option", {attrs: {value: "big"}}, [t._v(" 大字典 ")]), n("a-select-option", {attrs: {value: "test"}}, [t._v(" 测试 ")])], 1)], 1), n("a-form-item", {attrs: {label: "端口扫描类型"}}, [n("a-select", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["port_scan_type", {
                        rules: [{required: !0, message: "请选择端口扫描类型!"}],
                        initialValue: t.initValue.port_scan_type
                    }],
                    expression: "[\n              'port_scan_type',\n              {\n                rules: [{ required: true, message: '请选择端口扫描类型!' }],\n                initialValue: initValue.port_scan_type,\n              },\n            ]"
                }], attrs: {placeholder: "请选择端口扫描类型"}, on: {change: t.port_scan_typeChange}
            }, [n("a-select-option", {attrs: {value: "test"}}, [t._v(" 测试 ")]), n("a-select-option", {attrs: {value: "top100"}}, [t._v(" TOP100 ")]), n("a-select-option", {attrs: {value: "top1000"}}, [t._v(" TOP1000 ")]), n("a-select-option", {attrs: {value: "all"}}, [t._v(" 全端口 ")]), n("a-select-option", {attrs: {value: "custom"}}, [t._v(" 自定义 ")])], 1)], 1), t.showPort_custom ? n("a-form-item", {attrs: {label: "自定义端口"}}, [n("a-input", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["port_custom", {
                        rules: [{required: !0, message: "请输如自定义端口，如:80,443!"}],
                        initialValue: t.initValue.port_custom
                    }],
                    expression: "[\n              'port_custom',\n              {\n                rules: [\n                  { required: true, message: '请输如自定义端口，如:80,443!' },\n                ],\n                initialValue: initValue.port_custom,\n              },\n            ]"
                }], attrs: {placeholder: "请输如自定义端口，如:80,443"}
            })], 1) : t._e(), n("a-form-item", {
                staticClass: "checkgroup-wrap checkgroup-wrap_option",
                attrs: {label: ""}
            }, [n("a-checkbox", {
                staticClass: "check-all", attrs: {checked: t.checkHostAll}, on: {
                    click: function (e) {
                        return t.checkAll("hostSettingList", "checkGroup", "checkHostAll", "checkHostAll")
                    }
                }
            }, [t._v("全选")]), n("a-input-search", {
                staticClass: "check-input",
                attrs: {allowClear: "", type: "text", placeholder: "请输入关键字进行查询"},
                on: {
                    change: function (e) {
                        return t.filterList("hostValue", "hostSettingList")
                    }
                },
                model: {
                    value: t.searchObj.hostValue, callback: function (e) {
                        t.$set(t.searchObj, "hostValue", e)
                    }, expression: "searchObj.hostValue"
                }
            })], 1), n("a-form-item", {
                staticClass: "checkgroup-wrap",
                attrs: {label: ""}
            }, [n("a-checkbox-group", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["checkGroup", {initialValue: t.initValue.hostSettingGroup}],
                    expression: "[\n              'checkGroup',\n              {\n                initialValue: initValue.hostSettingGroup,\n              },\n            ]"
                }]
            }, [n("div", {staticClass: "checkbox-list"}, t._l(t.searchData.hostSettingList, (function (e, i) {
                return n("a-checkbox", {
                    key: i,
                    class: ["端口扫描", "服务(python)识别"].includes(e.name) ? "mt20" : "",
                    attrs: {value: e.value}
                }, [t._v(t._s(i + 1 + ". " + e.name))])
            })), 1)])], 1)], 1), n("a-collapse-panel", {
                key: "cipPanel",
                attrs: {header: "IP高级配置"}
            }, [n("a-form-item", {attrs: {label: "主机超时时间"}}, [n("a-select", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["host_timeout_type", {
                        rules: [{required: !0, message: "请选择主机超时时间!"}],
                        initialValue: t.initValue.host_timeout_type
                    }],
                    expression: "[\n              'host_timeout_type',\n              {\n                rules: [{ required: true, message: '请选择主机超时时间!' }],\n                initialValue: initValue.host_timeout_type,\n              },\n            ]"
                }], attrs: {placeholder: "请选择主机超时时间"}, on: {change: t.host_timeout_typeChange}
            }, [n("a-select-option", {attrs: {value: "default"}}, [t._v(" 默认(900s) ")]), n("a-select-option", {attrs: {value: "custom"}}, [t._v(" 自定义 ")])], 1)], 1), t.showHost_timeout ? n("a-form-item", {attrs: {label: "主机超时时间(s)"}}, [n("a-input", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["host_timeout", {
                        rules: [{required: !0, message: "请输入主机超时时间!"}],
                        initialValue: t.initValue.host_timeout
                    }],
                    expression: "[\n              'host_timeout',\n              {\n                rules: [{ required: true, message: '请输入主机超时时间!' }],\n                initialValue: initValue.host_timeout,\n              },\n            ]"
                }], attrs: {placeholder: "请输入主机超时时间"}
            })], 1) : t._e(), n("a-form-item", {attrs: {label: "探测报文并行度"}}, [n("a-input", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["port_parallelism", {
                        rules: [{required: !0, validator: t.numberValid}],
                        initialValue: t.initValue.port_parallelism
                    }],
                    expression: "[\n              'port_parallelism',\n              {\n                rules: [{ required: true, validator: numberValid }],\n                initialValue: initValue.port_parallelism,\n              },\n            ]"
                }], attrs: {placeholder: "请输入报文并行度"}
            })], 1), n("a-form-item", {attrs: {label: "最少发包速率"}}, [n("a-input", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["port_min_rate", {
                        rules: [{required: !0, validator: t.numberValid}],
                        initialValue: t.initValue.port_min_rate
                    }],
                    expression: "[\n              'port_min_rate',\n              {\n                rules: [{ required: true, validator: numberValid }],\n                initialValue: initValue.port_min_rate,\n              },\n            ]"
                }], attrs: {placeholder: "请输入最少发包速率"}
            })], 1)], 1), n("a-collapse-panel", {
                key: "sitePanel",
                attrs: {header: "站点和风险配置"}
            }, [n("a-form-item", {
                staticClass: "checkgroup-wrap checkgroup-wrap_option",
                attrs: {label: ""}
            }, [n("a-checkbox", {
                staticClass: "check-all", attrs: {checked: t.checkSiteAll}, on: {
                    click: function (e) {
                        return t.checkAll("siteSettingList", "siteSettingGroup", "checkSiteAll")
                    }
                }
            }, [t._v("全选")]), n("a-input-search", {
                staticClass: "check-input",
                attrs: {allowClear: "", type: "text", placeholder: "请输入关键字进行查询"},
                on: {
                    change: function (e) {
                        return t.filterList("siteValue", "siteSettingList")
                    }
                },
                model: {
                    value: t.searchObj.siteValue, callback: function (e) {
                        t.$set(t.searchObj, "siteValue", e)
                    }, expression: "searchObj.siteValue"
                }
            })], 1), n("a-form-item", {
                staticClass: "checkgroup-wrap",
                attrs: {label: ""}
            }, [n("a-checkbox-group", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["siteSettingGroup", {initialValue: t.initValue.siteSettingGroup}],
                    expression: "[\n              'siteSettingGroup',\n              {\n                initialValue: initValue.siteSettingGroup,\n              },\n            ]"
                }]
            }, [n("div", {staticClass: "checkbox-list"}, t._l(t.searchData.siteSettingList, (function (e, i) {
                return n("a-checkbox", {
                    key: e.value + i + "3",
                    class: ["文件泄露"].includes(e.name) ? "mt20" : "",
                    attrs: {value: e.value}
                }, [t._v(t._s(i + 1 + ". " + e.name))])
            })), 1)])], 1)], 1), n("a-collapse-panel", {
                key: "pocPanel",
                attrs: {header: "PоC配置"}
            }, [n("a-form-item", {
                staticClass: "checkgroup-wrap checkgroup-wrap_option",
                attrs: {label: ""}
            }, [n("a-checkbox", {
                staticClass: "check-all", attrs: {checked: t.checkPocAll}, on: {
                    click: function (e) {
                        return t.checkAll("pocSettingList", "pocSettingGroup", "checkPocAll")
                    }
                }
            }, [t._v("全选")]), n("a-input-search", {
                staticClass: "check-input",
                attrs: {allowClear: "", type: "text", placeholder: "请输入关键字进行查询"},
                on: {
                    change: function (e) {
                        return t.filterList("pocValue", "pocSettingList")
                    }
                },
                model: {
                    value: t.searchObj.pocValue, callback: function (e) {
                        t.$set(t.searchObj, "pocValue", e)
                    }, expression: "searchObj.pocValue"
                }
            })], 1), n("a-form-item", {
                staticClass: "checkgroup-wrap",
                attrs: {label: ""}
            }, [n("a-checkbox-group", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["pocSettingGroup", {initialValue: t.initValue.pocSettingGroup}],
                    expression: "[\n              'pocSettingGroup',\n              {\n                initialValue: initValue.pocSettingGroup,\n              },\n            ]"
                }]
            }, [n("div", {staticClass: "checkbox-list line-two"}, t._l(t.searchData.pocSettingList, (function (e, i) {
                return n("a-checkbox", {key: i + "3", attrs: {value: e.value}}, [t._v(t._s(i + 1 + ". " + e.vul_name))])
            })), 1)])], 1)], 1), n("a-collapse-panel", {
                key: "weakPanel",
                attrs: {header: "弱口令爆破配置"}
            }, [n("a-form-item", {
                staticClass: "checkgroup-wrap checkgroup-wrap_option",
                attrs: {label: ""}
            }, [n("a-checkbox", {
                staticClass: "check-all", attrs: {checked: t.checkWeakAll}, on: {
                    click: function (e) {
                        return t.checkAll("weakSettingList", "weakSettingGroup", "checkWeakAll")
                    }
                }
            }, [t._v("全选")]), n("a-input-search", {
                staticClass: "check-input",
                attrs: {allowClear: "", type: "text", placeholder: "请输入关键字进行查询"},
                on: {
                    change: function (e) {
                        return t.filterList("weakValue", "weakSettingList")
                    }
                },
                model: {
                    value: t.searchObj.weakValue, callback: function (e) {
                        t.$set(t.searchObj, "weakValue", e)
                    }, expression: "searchObj.weakValue"
                }
            })], 1), n("a-form-item", {
                staticClass: "checkgroup-wrap",
                attrs: {label: ""}
            }, [n("a-checkbox-group", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["weakSettingGroup", {initialValue: t.initValue.weakSettingGroup}],
                    expression: "[\n              'weakSettingGroup',\n              {\n                initialValue: initValue.weakSettingGroup,\n              },\n            ]"
                }]
            }, [n("div", {staticClass: "checkbox-list line-two"}, t._l(t.searchData.weakSettingList, (function (e, i) {
                return n("a-checkbox", {key: i + "3", attrs: {value: e.value}}, [t._v(t._s(i + 1 + ". " + e.vul_name))])
            })), 1)])], 1)], 1), n("a-collapse-panel", {
                key: "assetsManagement",
                attrs: {header: "资产组配置"}
            }, [n("a-form-item", {attrs: {label: "关联资产组"}}, [n("a-select", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: ["scope_id", {initialValue: t.initValue.scope_id}],
                    expression: "[\n              'scope_id',\n              {\n                initialValue: initValue.scope_id,\n              },\n            ]"
                }], attrs: {placeholder: "请选择资产", allowClear: "", "aria-label": "scope_id"}
            }, t._l(t.policyList, (function (e, i) {
                return n("a-select-option", {
                    key: i,
                    attrs: {value: e._id}
                }, [t._v(t._s(e.name) + " "), n("i", {staticClass: "space"}), t._v(" (" + t._s(e.scope) + ")")])
            })), 1)], 1)], 1)], 1)], 1), n("div", {staticClass: "submit-wrap"}, [n("a-button", {
                staticClass: "mr24",
                attrs: {type: "primary"},
                on: {click: t.subForm}
            }, [t._v("确 定")]), n("a-button", {on: {click: t.backPage}}, [t._v("取 消")])], 1)], 1)
        }), [], !1, null, "4fda27c6", null);
        e.default = l.exports
    }, 8631: function (t, e, n) {
        "use strict";
        n("c975"), n("d3b7"), n("380f");
        var i = n("f64c"), r = n("bc3a"), a = n.n(r), o = n("a18c"), s = a.a.create({baseURL: "/api", timeout: 12e3});
        s.interceptors.request.use((function (t) {
            t.headers["Content-Type"] = "application/json; charset=UTF-8";
            var e = localStorage.getItem("token");
            return e && (t.headers.token = e), t
        }), (function (t) {
            return Promise.reject(t)
        })), s.interceptors.response.use((function (t) {
            var e = t;
            return void 0 !== e.code && 200 !== e.code ? [401, 403, 404].indexOf(e.code) > -1 ? void o.a.push({name: "login"}) : (i.a.error(e.message), Promise.reject(new Error(e.message || "Error"))) : e
        }), (function (t) {
            return i.a.error(t.message), Promise.reject(t)
        })), e.a = s
    }, "90d8": function (t, e, n) {
        "use strict";
        n.d(e, "z", (function () {
            return a
        })), n.d(e, "d", (function () {
            return o
        })), n.d(e, "c", (function () {
            return s
        })), n.d(e, "k", (function () {
            return c
        })), n.d(e, "j", (function () {
            return u
        })), n.d(e, "w", (function () {
            return l
        })), n.d(e, "x", (function () {
            return p
        })), n.d(e, "y", (function () {
            return h
        })), n.d(e, "i", (function () {
            return d
        })), n.d(e, "h", (function () {
            return f
        })), n.d(e, "g", (function () {
            return m
        })), n.d(e, "b", (function () {
            return _
        })), n.d(e, "a", (function () {
            return g
        })), n.d(e, "u", (function () {
            return v
        })), n.d(e, "p", (function () {
            return y
        })), n.d(e, "v", (function () {
            return k
        })), n.d(e, "t", (function () {
            return b
        })), n.d(e, "s", (function () {
            return w
        })), n.d(e, "q", (function () {
            return S
        })), n.d(e, "r", (function () {
            return V
        })), n.d(e, "m", (function () {
            return L
        })), n.d(e, "n", (function () {
            return x
        })), n.d(e, "o", (function () {
            return P
        })), n.d(e, "A", (function () {
            return G
        })), n.d(e, "l", (function () {
            return O
        })), n.d(e, "f", (function () {
            return j
        })), n.d(e, "e", (function () {
            return C
        }));
        var i = n("e20a"), r = n("8631"), a = function (t) {
            return i.a.get("/asset_scope/", {params: t})
        }, o = function (t) {
            return i.a.post("/asset_scope/", t)
        }, s = function (t) {
            return i.a.post("/asset_scope/add/", t)
        }, c = function (t) {
            return i.a.get("/asset_scope/delete/", {params: t})
        }, u = function (t) {
            return i.a.post("/asset_scope/delete/", t)
        }, l = function (t) {
            return i.a.get("/asset_domain/", {params: t})
        }, p = function (t) {
            return i.a.get("/asset_ip/", {params: t})
        }, h = function (t) {
            return i.a.get("/asset_site/", {params: t})
        }, d = function (t) {
            return i.a.post("/asset_site/delete/", t)
        }, f = function (t) {
            return i.a.post("/asset_ip/delete/", t)
        }, m = function (t) {
            return i.a.post("/asset_domain/delete/", t)
        }, _ = function (t) {
            return i.a.post("/asset_site/", t)
        }, g = function (t) {
            return i.a.post("/asset_domain/", t)
        }, v = function (t) {
            return r.a.get("/site/export/", {params: t})
        }, y = function (t) {
            return r.a.get("/domain/export/", {params: t})
        }, k = function (t) {
            return r.a.get("/url/export/", {params: t})
        }, b = function (t) {
            return r.a.get("/ip/export/", {params: t})
        }, w = function (t) {
            return r.a.get("/asset_site/export/", {params: t})
        }, S = function (t) {
            return r.a.get("/asset_domain/export/", {params: t})
        }, V = function (t) {
            return r.a.get("/asset_ip/export/", {params: t})
        }, L = function (t) {
            return r.a.post("/batch_export/asset_domain/", t)
        }, x = function (t) {
            return r.a.post("/batch_export/asset_ip/", t)
        }, P = function (t) {
            return r.a.post("/batch_export/asset_site/", t)
        }, G = function (t) {
            return i.a.get("/asset_site/save_result_set/", {params: t})
        }, O = function (t) {
            return i.a.post("/asset_site/delete_tag/", t)
        }, j = function (t) {
            return i.a.post("/asset_site/add_tag/", t)
        }, C = function (t) {
            return i.a.post("/scheduler/add/site_monitor/", t)
        }
    }, "96cf": function (t, e, n) {
        var i = function (t) {
            "use strict";
            var e = Object.prototype, n = e.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
                r = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator",
                o = i.toStringTag || "@@toStringTag";

            function s(t, e, n) {
                return Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
            }

            try {
                s({}, "")
            } catch (t) {
                s = function (t, e, n) {
                    return t[e] = n
                }
            }

            function c(t, e, n, i) {
                var r = e && e.prototype instanceof p ? e : p, a = Object.create(r.prototype), o = new S(i || []);
                return a._invoke = function (t, e, n) {
                    var i = "suspendedStart";
                    return function (r, a) {
                        if ("executing" === i) throw new Error("Generator is already running");
                        if ("completed" === i) {
                            if ("throw" === r) throw a;
                            return {value: void 0, done: !0}
                        }
                        for (n.method = r, n.arg = a; ;) {
                            var o = n.delegate;
                            if (o) {
                                var s = k(o, n);
                                if (s) {
                                    if (s === l) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if ("suspendedStart" === i) throw i = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = "executing";
                            var c = u(t, e, n);
                            if ("normal" === c.type) {
                                if (i = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                return {value: c.arg, done: n.done}
                            }
                            "throw" === c.type && (i = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }(t, n, o), a
            }

            function u(t, e, n) {
                try {
                    return {type: "normal", arg: t.call(e, n)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            t.wrap = c;
            var l = {};

            function p() {
            }

            function h() {
            }

            function d() {
            }

            var f = {};
            f[r] = function () {
                return this
            };
            var m = Object.getPrototypeOf, _ = m && m(m(V([])));
            _ && _ !== e && n.call(_, r) && (f = _);
            var g = d.prototype = p.prototype = Object.create(f);

            function v(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    s(t, e, (function (t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function y(t, e) {
                var i;
                this._invoke = function (r, a) {
                    function o() {
                        return new e((function (i, o) {
                            !function i(r, a, o, s) {
                                var c = u(t[r], t, a);
                                if ("throw" !== c.type) {
                                    var l = c.arg, p = l.value;
                                    return p && "object" == typeof p && n.call(p, "__await") ? e.resolve(p.__await).then((function (t) {
                                        i("next", t, o, s)
                                    }), (function (t) {
                                        i("throw", t, o, s)
                                    })) : e.resolve(p).then((function (t) {
                                        l.value = t, o(l)
                                    }), (function (t) {
                                        return i("throw", t, o, s)
                                    }))
                                }
                                s(c.arg)
                            }(r, a, i, o)
                        }))
                    }

                    return i = i ? i.then(o, o) : o()
                }
            }

            function k(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, k(t, e), "throw" === e.method)) return l;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var i = u(n, t.iterator, e.arg);
                if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, l;
                var r = i.arg;
                return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
            }

            function b(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function w(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function S(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(b, this), this.reset(!0)
            }

            function V(t) {
                if (t) {
                    var e = t[r];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1, a = function e() {
                            for (; ++i < t.length;) if (n.call(t, i)) return e.value = t[i], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                        return a.next = a
                    }
                }
                return {next: L}
            }

            function L() {
                return {value: void 0, done: !0}
            }

            return h.prototype = g.constructor = d, d.constructor = h, h.displayName = s(d, o, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s(t, o, "GeneratorFunction")), t.prototype = Object.create(g), t
            }, t.awrap = function (t) {
                return {__await: t}
            }, v(y.prototype), y.prototype[a] = function () {
                return this
            }, t.AsyncIterator = y, t.async = function (e, n, i, r, a) {
                void 0 === a && (a = Promise);
                var o = new y(c(e, n, i, r), a);
                return t.isGeneratorFunction(n) ? o : o.next().then((function (t) {
                    return t.done ? t.value : o.next()
                }))
            }, v(g), s(g, o, "Generator"), g[r] = function () {
                return this
            }, g.toString = function () {
                return "[object Generator]"
            }, t.keys = function (t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(), function n() {
                    for (; e.length;) {
                        var i = e.pop();
                        if (i in t) return n.value = i, n.done = !1, n
                    }
                    return n.done = !0, n
                }
            }, t.values = V, S.prototype = {
                constructor: S, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    if (this.done) throw t;
                    var e = this;

                    function i(n, i) {
                        return o.type = "throw", o.arg = t, e.next = n, i && (e.method = "next", e.arg = void 0), !!i
                    }

                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r], o = a.completion;
                        if ("root" === a.tryLoc) return i("end");
                        if (a.tryLoc <= this.prev) {
                            var s = n.call(a, "catchLoc"), c = n.call(a, "finallyLoc");
                            if (s && c) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            } else if (s) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var r = this.tryEntries[i];
                        if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                    var o = a ? a.completion : {};
                    return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(o)
                }, complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), w(n), l
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var r = i.arg;
                                w(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, e, n) {
                    return this.delegate = {
                        iterator: V(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = i
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(i)
        }
    }, "99e1": function (t, e, n) {
        "use strict";
        var i = n("b443");
        n.n(i).a
    }, b443: function (t, e, n) {
    }, d294: function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return i
        })), n.d(e, "f", (function () {
            return r
        })), n.d(e, "a", (function () {
            return a
        })), n.d(e, "d", (function () {
            return o
        })), n.d(e, "c", (function () {
            return s
        })), n.d(e, "g", (function () {
            return c
        })), n.d(e, "e", (function () {
            return u
        }));
        var i = [{value: "domain_brute", name: "域名爆破"}, {value: "alt_dns", name: "DNS字典智能生成"}, {
                value: "arl_search",
                name: "ARL 历史查询"
            }, {value: "dns_query_plugin", name: "域名查询插件"}, {value: "port_scan", name: "端口扫描"}, {
                value: "service_detection",
                name: "服务识别"
            }, {value: "os_detection", name: "操作系统识别"}, {value: "ssl_cert", name: "SSL 证书获取"}, {
                value: "skip_scan_cdn_ip",
                name: "跳过CDN"
            }, {value: "npoc_service_detection", name: "服务(python)识别"}], r = [{value: "site_identify", name: "站点识别"}, {
                value: "search_engines",
                name: "搜索引擎调用"
            }, {value: "site_spider", name: "站点爬虫"}, {value: "site_capture", name: "站点截图"}, {
                value: "file_leak",
                name: "文件泄露"
            }, {value: "nuclei_scan", name: "nuclei 调用"}], a = {big: "大字典", test: "测试"},
            o = {test: "测试", top100: "TOP100", top1000: "TOP1000", custom: "自定义", all: "全端口"}, s = {
                domain_brute: "域名爆破",
                dns_query_plugin: "域名查询插件",
                alt_dns: "DNS字典智能生成",
                riskiq_search: "RiskIQ 调用",
                arl_search: "ARL 历史查询",
                port_scan: "端口扫描",
                service_detection: "服务识别",
                os_detection: "操作系统识别",
                fofa_search: "Fofa IP查询",
                ssl_cert: "SSL 证书获取",
                skip_scan_cdn_ip: "跳过CDN",
                npoc_service_detection: "服务(python)识别"
            }, c = {
                site_identify: "站点识别",
                search_engines: "搜索引擎调用",
                site_spider: "站点爬虫",
                site_capture: "站点截图",
                file_leak: "文件泄露",
                nuclei_scan: "nuclei 调用"
            }, u = [{name: "策略名称", key: "name"}]
    }
}]);