(window.webpackJsonp = window.webpackJsonp || []).push([["chunk-15dd32e8"], {
    "11be": function (t, e, a) {
    }, "1b26": function (t, e, a) {
        "use strict";
        a.d(e, "e", (function () {
            return s
        })), a.d(e, "g", (function () {
            return n
        })), a.d(e, "a", (function () {
            return r
        })), a.d(e, "c", (function () {
            return o
        })), a.d(e, "b", (function () {
            return c
        })), a.d(e, "d", (function () {
            return l
        })), a.d(e, "f", (function () {
            return u
        }));
        var i = a("e20a"), s = function (t) {
            return i.a.get("/policy/", {params: t})
        }, n = function (t) {
            return i.a.post("/task/policy/", t)
        }, r = function (t) {
            return i.a.post("/policy/add/", t)
        }, o = function (t) {
            return i.a.post("/policy/edit/", t)
        }, c = function (t) {
            return i.a.post("/policy/delete/", t)
        }, l = function () {
            return i.a.get("/poc/?plugin_type=poc&size=10000")
        }, u = function () {
            return i.a.get("/poc/?plugin_type=brute&size=10000")
        }
    }, "2b51": function (t, e, a) {
        "use strict";
        var i = a("ebca");
        a.n(i).a
    }, "9c55": function (t, e, a) {
        "use strict";
        a.r(e), a("caad"), a("d81d"), a("b0c0");
        var i = a("5530"), s = a("1b26"), n = a("d294"),
            r = (a("99af"), a("d3b7"), a("a79d"), a("ac1f"), a("2532"), a("1276"), {
                props: {
                    policyId: {
                        type: String,
                        default: ""
                    }, name: {type: String, default: ""}
                }, data: function () {
                    return {
                        isLoading: !1,
                        form: this.$form.createForm(this),
                        nameString: void 0,
                        isEmpty: !1,
                        placeHolderTip: {
                            "task,资产侦查任务": "请输入目标，支持IP、IP段、域名",
                            "risk_cruising,风险巡航任务": "请输入确定的目标，不会进行端口扫描,如: http://10.0.1.1:8081/ 10.0.1.1:2222"
                        },
                        taskType: "请输入目标，支持IP、IP段、域名"
                    }
                }, methods: {
                    handleSubmit: function () {
                        var t = this;
                        this.form.validateFields((function (e, a) {
                            if (t.nameString || (t.isEmpty = !0), !e) {
                                t.isLoading = !0;
                                var n = {
                                    policy_id: t.policyId,
                                    name: t.nameString,
                                    task_tag: a.task_tag.split(",")[0],
                                    target: a.target
                                };
                                Object(s.g)(Object(i.a)({}, n)).then((function (e) {
                                    200 === e.code && (t.$message.success("下发成功"), t.$emit("resetTable"), t.closeModal())
                                })).finally((function () {
                                    t.isLoading = !1
                                }))
                            }
                        }))
                    }, changeTaskName: function (t) {
                        this.taskType = this.placeHolderTip[t], this.nameString && !this.nameString.includes(this.name) || (this.nameString = "".concat(t.split(",")[1], "-").concat(this.name))
                    }, closeModal: function () {
                        this.$emit("closeModal")
                    }
                }
            }), o = (a("ac4f"), a("2877")), c = {
                components: {
                    issuedTask: Object(o.a)(r, (function () {
                        var t = this, e = t.$createElement, a = t._self._c || e;
                        return a("a-modal", {
                            attrs: {visible: !0, title: "任务下发", confirmLoading: t.isLoading},
                            on: {ok: t.handleSubmit, cancel: t.closeModal}
                        }, [a("a-form", {
                            attrs: {
                                form: t.form,
                                "label-col": {span: 5},
                                "wrapper-col": {span: 18}
                            }
                        }, [a("a-form-item", {attrs: {label: "任务类型"}}, [a("a-select", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["task_tag", {rules: [{required: !0, message: "请选择任务类型!"}]}],
                                expression: "[\n          'task_tag',\n          { rules: [{ required: true, message: '请选择任务类型!' }] },\n        ]"
                            }], attrs: {placeholder: "请选择任务类型"}, on: {change: t.changeTaskName}
                        }, [a("a-select-option", {attrs: {value: "task,资产侦查任务"}}, [t._v("资产侦查任务")]), a("a-select-option", {attrs: {value: "risk_cruising,风险巡航任务"}}, [t._v("风险巡航任务")])], 1)], 1), a("a-form-item", {
                            staticClass: "required",
                            class: t.isEmpty ? "has-error" : "",
                            attrs: {label: "任务名称"}
                        }, [a("a-input", {
                            attrs: {allowClear: "", placeholder: "请输入任务名称"}, on: {
                                change: function (e) {
                                    t.isEmpty = !1
                                }
                            }, model: {
                                value: t.nameString, callback: function (e) {
                                    t.nameString = e
                                }, expression: "nameString"
                            }
                        })], 1), a("a-form-item", {attrs: {label: "目标"}}, [a("a-textarea", {
                            directives: [{
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["target", {rules: [{required: !0, message: t.taskType + "!"}]}],
                                expression: "['target', { rules: [{ required: true, message: taskType + '!' }] }]"
                            }], staticStyle: {height: "100px"}, attrs: {placeholder: t.taskType}
                        })], 1)], 1)], 1)
                    }), [], !1, null, "1e3b592c", null).exports
                }, data: function () {
                    return {
                        dataList: [],
                        columns: [{title: "序号", width: 80, dataIndex: "index", key: "index"}, {
                            title: "名称",
                            dataIndex: "name",
                            key: "name"
                        }, {title: "描述", dataIndex: "desc", key: "desc"}, {
                            title: "更新时间",
                            width: 280,
                            dataIndex: "update_date",
                            key: "update_date"
                        }, {title: "操作", width: 290, key: "operation", scopedSlots: {customRender: "operation"}}],
                        searchList: n.e,
                        total: 0,
                        issuedShow: !1,
                        taskName: "",
                        taskId: "",
                        params: {size: 10, page: 1, order: "-update_date"}
                    }
                }, computed: {
                    page_num: function () {
                        return this.total % this.params.size > 0 ? parseInt(this.total / this.params.size) + 1 : this.total / this.params.size
                    }
                }, mounted: function () {
                    this.initData()
                }, watch: {
                    $route: function (t, e) {
                        this.checkInitParams(), this.initData()
                    }
                }, methods: {
                    searchData: function (t, e) {
                        this.params.page = this.params.size === e ? t : 1, this.params.size = e, this.initData()
                    }, initData: function () {
                        var t = this;
                        Object(s.e)(Object(i.a)({}, this.params)).then((function (e) {
                            200 === e.code && (e.items.map((function (e, a) {
                                e.index = (t.params.page - 1) * t.params.size + a + 1, e.key = a + 1, e.desc = e.desc || "-", e.hostConfig = t.getHostConfig(e.policy), e.siteConfig = t.getSiteConfig(e.policy), e.pocConfig = t.getOtherConfig(e.policy.poc_config), e.bruteConfig = t.getOtherConfig(e.policy.brute_config)
                            })), t.total = e.total, t.dataList = e.items)
                        }))
                    }, getHostConfig: function (t) {
                        if (void 0 === t.domain_config.domain_brute_type) return null;
                        var e = {
                            domain_brute_type: n.a[t.domain_config.domain_brute_type],
                            scanType: n.d[t.ip_config.port_scan_type],
                            settingArray: []
                        }, a = t.domain_config;
                        for (var i in a) !0 === a[i] && e.settingArray.push(n.c[i]);
                        var s = t.ip_config;
                        for (var r in s) !0 === s[r] && e.settingArray.push(n.c[r]);
                        return !0 === t.npoc_service_detection && e.settingArray.push(n.c.npoc_service_detection), "自定义" === e.scanType && (e.port_custom = t.ip_config.port_custom), e
                    }, getSiteConfig: function (t) {
                        var e = !1, a = [];
                        for (var i in t.site_config) !0 === t.site_config[i] && (e = !0, a.push(n.g[i]));
                        return !0 === t.file_leak && a.push(n.g.file_leak), e ? a : null
                    }, getOtherConfig: function (t) {
                        if (void 0 === t || !t.length) return null;
                        var e = [];
                        return t.map((function (t) {
                            e.push(t.vul_name)
                        })), e
                    }, issuedTaskOption: function (t) {
                        var e = t._id, a = t.name;
                        this.taskId = e, this.issuedShow = !0, this.taskName = a
                    }, editItem: function (t) {
                        var e = t._id;
                        this.$router.push({name: "policyDetail", query: {_id: e}})
                    }, deleteCallback: function (t) {
                        var e = this;
                        Object(s.b)({policy_id: [t._id]}).then((function (t) {
                            200 === t.code && (e.$message.success("删除成功"), e.initData())
                        }))
                    }, searchListData: function (t, e) {
                        for (var a in this.params.page = 1, this.params.size = 10, this.$route.query[t] = e, this.$route.query) this.$route.query[a] || delete this.$route.query[a];
                        this.$route.query.page = 1, this.$route.query.size = 10, this.$router.push({query: Object(i.a)(Object(i.a)({}, this.$route.query), {}, {ts: (new Date).getTime()})})
                    }, checkInitParams: function () {
                        for (var t in this.params = {
                            page: 1,
                            size: 10
                        }, this.$route.query) ["page", "size"].includes(t) && (this.$route.query[t] = parseInt(this.$route.query[t])), this.params[t] = this.$route.query[t];
                        this.$route.query.name && "-" !== this.$route.query.name && (this.params.name = this.$route.query.name)
                    }
                }
            }, l = (a("2b51"), {
                name: "policy", components: {
                    Dtable: Object(o.a)(c, (function () {
                        var t = this, e = t.$createElement, a = t._self._c || e;
                        return a("div", {staticClass: "table-wrap"}, [a("div", {staticClass: "search-wrap"}, t._l(t.searchList, (function (e, i) {
                            return a("span", {
                                key: i,
                                staticClass: "item"
                            }, [a("span", {staticClass: "label"}, [t._v(t._s(e.name) + "：")]), a("a-input-search", {
                                staticStyle: {width: "260px"},
                                attrs: {allowClear: "", "aria-label": e.key, placeholder: "请输入" + e.name + "进行搜索"},
                                on: {
                                    search: function (a) {
                                        return t.searchListData(e.key, t.params[e.key])
                                    }
                                },
                                model: {
                                    value: t.params[e.key], callback: function (a) {
                                        t.$set(t.params, e.key, a)
                                    }, expression: "params[item.key]"
                                }
                            })], 1)
                        })), 0), a("a-table", {
                            attrs: {columns: t.columns, "data-source": t.dataList, pagination: !1},
                            scopedSlots: t._u([{
                                key: "operation", fn: function (e) {
                                    return a("div", {}, [a("a-button", {
                                        staticClass: "edit-icon", on: {
                                            click: function (a) {
                                                return t.issuedTaskOption(e)
                                            }
                                        }
                                    }, [t._v("任务下发")]), a("a-button", {
                                        staticClass: "edit-icon", on: {
                                            click: function (a) {
                                                return t.editItem(e)
                                            }
                                        }
                                    }, [t._v("编辑")]), a("a-popconfirm", {
                                        attrs: {"ok-text": "确认", "cancel-text": "取消"},
                                        on: {
                                            confirm: function (a) {
                                                return t.deleteCallback(e)
                                            }
                                        }
                                    }, [a("template", {slot: "title"}, [a("p", [t._v("确认删除所选数据吗？")])]), a("a-button", [t._v("删除")])], 2)], 1)
                                }
                            }, {
                                key: "expandedRowRender", fn: function (e) {
                                    return a("a-descriptions", {
                                        staticStyle: {"margin-bottom": "40px"},
                                        attrs: {title: "", bordered: !0, layout: "vertical", column: 1}
                                    }, [e.hostConfig ? a("a-descriptions-item", {attrs: {label: "域名和IP配置"}}, [a("div", {staticClass: "decription-desc"}, [a("span", {staticClass: "label"}, [t._v("域名爆破类型")]), t._v(t._s(e.hostConfig.domain_brute_type))]), a("div", {staticClass: "decription-desc"}, [a("span", {staticClass: "label"}, [t._v("端口扫描类型")]), t._v(t._s(e.hostConfig.scanType))]), e.hostConfig.port_custom ? a("div", {staticClass: "decription-desc"}, [a("span", {staticClass: "label"}, [t._v("自定义端口")]), t._v(t._s(e.hostConfig.port_custom))]) : t._e(), a("div", {staticClass: "decription-desc"}, [a("span", {staticClass: "label"}, [t._v("配置信息")]), t._v(t._s(e.hostConfig.settingArray.join("、")))])]) : t._e(), e.siteConfig ? a("a-descriptions-item", {attrs: {label: "站点和风险配置"}}, [a("div", {staticClass: "decription-desc"}, [a("span", {staticClass: "label"}, [t._v("配置信息")]), t._v(t._s(e.siteConfig.join("、")))])]) : t._e(), e.pocConfig ? a("a-descriptions-item", {attrs: {label: "PoC配置"}}, [a("div", {staticClass: "decription-desc"}, [a("span", {staticClass: "label"}, [t._v("配置信息")]), a("span", {staticClass: "content"}, [t._v(t._s(e.pocConfig.join("、")))])])]) : t._e(), e.bruteConfig ? a("a-descriptions-item", {attrs: {label: "弱口令爆破配置"}}, [a("div", {staticClass: "decription-desc"}, [a("span", {staticClass: "label"}, [t._v("配置信息")]), a("span", {staticClass: "content"}, [t._v(t._s(e.bruteConfig.join("、")))])])]) : t._e()], 1)
                                }
                            }])
                        }), t.total > 0 ? a("div", {staticClass: "pagination-wrap"}, [a("div", {staticClass: "left"}, [t._v("共" + t._s(t.page_num) + "页/" + t._s(t.total) + "条数据")]), a("a-pagination", {
                            staticClass: "right",
                            attrs: {
                                showQuickJumper: "",
                                "show-size-changer": "",
                                pageSize: t.params.size,
                                current: t.params.page,
                                pageSizeOptions: ["10", "20", "50", "100", "500"],
                                total: t.total
                            },
                            on: {change: t.searchData, showSizeChange: t.searchData}
                        })], 1) : t._e(), t.issuedShow ? a("issued-task", {
                            attrs: {policyId: t.taskId, name: t.taskName},
                            on: {
                                closeModal: function (e) {
                                    t.issuedShow = !1
                                }, resetTable: t.initData
                            }
                        }) : t._e()], 1)
                    }), [], !1, null, "1d1d9008", null).exports
                }, data: function () {
                    return {isNewPolicy: !1, editItem: null}
                }, methods: {
                    initTable: function () {
                        this.$refs.table.initData()
                    }, showPolicySetting: function () {
                        this.$router.push({name: "policyDetail"}), this.editItem = null
                    }, editCallback: function (t) {
                        this.isNewPolicy = !0, this.editItem = t
                    }
                }
            }), u = Object(o.a)(l, (function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "policy table-wrap"}, [e("a-button", {
                    attrs: {type: "primary"},
                    on: {click: this.showPolicySetting}
                }, [this._v("新建策略")]), e("Dtable", {ref: "table", on: {editCallback: this.editCallback}})], 1)
            }), [], !1, null, "18671cf1", null);
        e.default = u.exports
    }, ac4f: function (t, e, a) {
        "use strict";
        var i = a("11be");
        a.n(i).a
    }, d294: function (t, e, a) {
        "use strict";
        a.d(e, "b", (function () {
            return i
        })), a.d(e, "f", (function () {
            return s
        })), a.d(e, "a", (function () {
            return n
        })), a.d(e, "d", (function () {
            return r
        })), a.d(e, "c", (function () {
            return o
        })), a.d(e, "g", (function () {
            return c
        })), a.d(e, "e", (function () {
            return l
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
            }, {value: "npoc_service_detection", name: "服务(python)识别"}], s = [{value: "site_identify", name: "站点识别"}, {
                value: "search_engines",
                name: "搜索引擎调用"
            }, {value: "site_spider", name: "站点爬虫"}, {value: "site_capture", name: "站点截图"}, {
                value: "file_leak",
                name: "文件泄露"
            }, {value: "nuclei_scan", name: "nuclei 调用"}], n = {big: "大字典", test: "测试"},
            r = {test: "测试", top100: "TOP100", top1000: "TOP1000", custom: "自定义", all: "全端口"}, o = {
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
            }, l = [{name: "策略名称", key: "name"}]
    }, ebca: function (t, e, a) {
    }
}]);