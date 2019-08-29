define("js/v4/song_detail.js", function (t, a, n) {
    var o = t("js/common/music.js"), e = o.$, i = o.statistics, s = o.jQueryAjax;
    window.MUSIC = o;
    o.widget.user, o.popup;

    function l(a) {
        g_SongData.songmid ? function (t, a) {
            var n = "//c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_yqq.fcg?nobase64=1&musicid=" + g_SongData.songid + "&callback=jsonp1" + (111 == g_SongData.songtype || 112 == g_SongData.songtype || 113 == g_SongData.songtype ? "&songtype=" + g_SongData.songtype : "");
            o.jQueryAjax.jsonp({
                url: n, charset: "utf-8", jsonpCallback: "jsonp1", success: function (t) {
                    0 == t.code ? a && a(t) : a && a(null)
                }, error: function (t) {
                    a && a(null)
                }
            })
        }(g_SongData.songid, function (n) {
            if (g_SongData.songmid && n) {
                var s = n.lyric.unescapeHTML(), l = s.replace(/\[[^\[\]]*\]/g, "<p>").replace(/\\n/g, "</p>").trim();
                -1 == l.indexOf("<p>") && (l = "<p>" + n.lyric.replace(/&#10;/g, "</p><p>") + "</p>"), lyricStr = s.replace(/\[[^\[\]]*\]/g, "").replace(/\\n/g, "\r\n").trim(), e("#lrc_content").html(l), e("#copy_content").html(lyricStr), e("#copy_content").val(lyricStr), window.clipboardData ? e(document).off("click", "#copy_link").on("click", "#copy_link", function () {
                    var t = e("#copy_content").val();
                    window.clipboardData.setData("text", t), o.popup.show("澶嶅埗鎴愬姛锛�", 2e3)
                }) : o.userAgent.macs || !o.util.checkFlash() ? (e("#copy_link").attr("data-clipboard-action", "copy"), e("#copy_link").attr("data-clipboard-target", "#copy_content"), t.load(location.protocol + "//y.gtimg.cn/music/h5/lib/js/module/clipboard.js?max_age=604800", function () {
                    var t = new Clipboard("#copy_link", {
                        text: function () {
                            return e("#copy_content").val()
                        }
                    });
                    t.on("success", function (t) {
                        o.popup.show("澶嶅埗鎴愬姛")
                    }), t.on("error", function (t) {
                        o.popup.show("鏆備笉鏀寔涓€閿鍒�", 3e3, 1)
                    })
                })) : t.async("js/common/music/ZeroClipboard.js", function (t) {
                    new t(document.getElementById("copy_link")).on("copy", function (t) {
                        o.popup.show("澶嶅埗鎴愬姛锛�"), i.pgvClickStat("y_new.song.copylyric")
                    })
                })
            } else e("#lrc_content").html("鏆傛棤姝岃瘝"), e(".js_open_lyric").hide(), e("#copy_link").hide();
            a && a()
        }) : (e("#lrc_content").html("鏆傛棤姝岃瘝"), e(".js_open_lyric").hide(), e("#copy_link").hide(), a && a())
    }

    function c() {
        e(".main").remove(), e(".footer").before('<div class="none_txt" style="display:none;"><i class="none_txt__symbol"></i><p>寰堟姳姝夛紝鎮ㄦ煡鐪嬬殑姝屾洸宸蹭笅鏋�</p><p>鍒�<a href="javascript:;" class="js_btn_feedback">QQ闊充箰鍙嶉骞冲彴</a>鍚戞垜浠姇璇夋垨鎻愬嚭寤鸿</p></div>'), g_SongData.alertid <= 0 && g_SongData.msgid <= 0 || g_SongData.action.play || g_SongData.pay.payplay || g_SongData.pay.paydownload || t.async("js/common/showMsg.js", function (t) {
            t(g_SongData, null, null, function (t) {
                if (t) {
                    if (g_SongData.msgid) {
                        if (t && t.btn && t.url) if (/^http:\/\//.test(t.url)) e(".none_txt").html('<i class="none_txt__symbol"></i><p>' + t.desc + '</p><p>鎮ㄥ彲<a href="' + t.url + '" rel="noopener nofollow" target="_blank">' + t.btn + "</a>鍚庣晠浜€�</p>"); else if (/^pcqqmusic:\/\//.test(t.url)) {
                            var a = t.url.match(/^pcqqmusic:\/\/(\w+)/);
                            if (a && a[1]) switch (a[1]) {
                                case"buygreen":
                                case"buysupergreen":
                                    e(".none_txt").html('<i class="none_txt__symbol"></i><p>' + t.desc + '</p><p>鎮ㄥ彲<a href="javascript:;" class="js_openvip" data-aid="' + t.aid + "$songid" + g_SongData.songid + '" data-stat="' + t.aid + "$songid" + g_SongData.songid + '">' + t.btn + "</a>鍚庣晠浜€�</p>");
                                    break;
                                case"buy8yuan":
                                case"buy12yuan":
                                    e(".none_txt").html('<i class="none_txt__symbol"></i><p>' + t.desc + '</p><p>鎮ㄥ彲<a href="javascript:;" class="js_openmusic" data-aid="' + t.aid + "$songid" + g_SongData.songid + '" data-stat="' + t.aid + "$songid" + g_SongData.songid + '">' + t.btn + "</a>鍚庣晠浜€�</p>");
                                    break;
                                case"buydigitalalbum":
                                    e(".none_txt").html('<i class="none_txt__symbol"></i><p>' + t.desc + '</p><p>鎮ㄥ彲<a href="javascript:;" class="js_buy_album" data-aid="' + t.aid + "$songid" + g_SongData.songid + '" data-stat="' + t.aid + "$songid" + g_SongData.songid + '" data-albumid="' + g_SongData.albumid + '">' + t.btn + "</a>鍚庣晠浜€�</p>")
                            }
                        }
                    } else g_SongData.alertid > 0 && e(".none_txt").html('<i class="none_txt__symbol"></i><p>' + t.desc + '</p><p>鍒�<a href="javascript:;" class="js_btn_feedback">QQ闊充箰鍙嶉骞冲彴</a>鍚戞垜浠姇璇夋垨鎻愬嚭寤鸿</p>');
                    e(".none_txt").show()
                } else e(".none_txt").show()
            })
        })
    }

    var r = {0: "1", 13: "1", 111: "13", 112: "14", 113: "15"}, g = null;
    var d = 0;

    function m() {
        ++d >= 2 && -1 != window.location.href.indexOf("#comment_box") && e("#comment_box").length > 0 && (document.documentElement.scrollTop = document.body.scrollTop = e("#comment_box").offset().top)
    }

    var p = null;

    function u() {
        var t = e(".data__info>li.data_info__item"), a = 0;
        e.each(t, function (t, n) {
            "none" != e(n).css("display") && (a % 2 ? e(n).removeClass("data_info__item--even") : e(n).addClass("data_info__item--even"), a++)
        })
    }

    return {
        init: function (a) {
            p = a.info, function () {
                p && p.genre && p.genre.content && p.genre.content.length > 0 && p.genre.content[0].value && "鏃犳祦娲�" != p.genre.content[0].value && (e(".js_genre").html("娴佹淳锛�" + p.genre.content[0].value), e(".js_genre").show()), p && p.lan && p.lan.content && p.lan.content.length > 0 && p.lan.content[0].value && (e(".js_lan").html("璇锛�" + p.lan.content[0].value), e(".js_lan").show());
                var t = p && p.intro && p.intro.content && p.intro.content.length > 0 && p.intro.content[0].value ? p.intro.content[0].value : "";
                e("#album_desc div.about__cont").html(t), "" !== e.trim(t) && e("#album_desc").show(), t.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\n/g, "<br />").replace(/\<br\s*\/\>/g, " ").replace(/\<br\s*\>/g, " ").replace(/<p>/gi, "").replace(/<\/p>/gi, " ").length > 100 ? e(".about__more").show() : e(".about__more").hide(), e("#popup_data_detail div.popup_data_detail__cont").html('<h3 class="popup_data_detail__tit">涓撹緫绠€浠�</h3><p>' + t.replace(/\n/gi, "</p><p>") + "</p>"), u()
            }(), function (a) {
                if (!g_SongData.songmid) return t.async("js/common/fav.js", function (t) {
                    t.combineData(o.player.formatMusics([g_SongData]), function (t) {
                        t = o.player.formatMusics(t), a(t[0])
                    })
                }), g_SongData;
                var n = {song_type: +g_SongData.type};
                g_SongData.songmid && (n.song_mid = g_SongData.songmid), g_SongData.songid && (n.song_id = +g_SongData.songid);
                var e = {
                    comm: {ct: 24, cv: 0},
                    songinfo: {method: "get_song_detail_yqq", param: n, module: "music.pf_song_detail_svr"}
                }, i = "getUCGI" + (Math.random() + "").replace("0.", "");
                o.jQueryAjax.jsonp({
                    url: "//u.y.qq.com/cgi-bin/musicu.fcg?callback=" + i,
                    data: {data: JSON.stringify(e)},
                    jsonpCallback: i,
                    charset: "utf-8",
                    success: function (n) {
                        0 == n.code && n.songinfo && n.songinfo.data && n.songinfo.data.track_info ? (n.songinfo.data.track_info = o.player.formatMusic(n.songinfo.data.track_info), t.async("js/common/fav.js", function (t) {
                            t.combineData(o.player.formatMusics([n.songinfo.data.track_info]), function (t) {
                                t = o.player.formatMusics(t), a(t[0])
                            })
                        })) : c()
                    },
                    error: function () {
                        crenderNoSongInfo()
                    }
                })
            }(function (a) {
                if (g_SongData = a, g_SongData.disabled) c(), SPD.mark(34); else {
                    if (e(".main").show(), e(".js_soso").length > 0 && 1 == g_SongData.action.soso && t.async("js/common/showMsg.js", function (t) {
                        t(g_SongData, null, null, function (t) {
                            if (t) if (g_SongData.alertid > 0) {
                                if (t && t.btn && t.url) {
                                    if (/^http:\/\//.test(t.url)) e(".js_soso").html(t.desc + '\t  鎮ㄥ彲<a href="' + t.url + '" rel="noopener nofollow" target="_blank">' + t.btn + "</a>鍚庣晠浜�"); else if (/^pcqqmusic:\/\//.test(t.url)) {
                                        var a = t.url.match(/^pcqqmusic:\/\/(\w+)/);
                                        if (a && a[1]) switch (a[1]) {
                                            case"buygreen":
                                            case"buysupergreen":
                                                e(".js_soso").html(t.desc + '\t  鎮ㄥ彲<a href="javascript:;" class="js_openvip" data-aid="' + t.aid + "$songid" + g_SongData.songid + '" data-stat="' + t.aid + "$songid" + g_SongData.songid + '">' + t.btn + "</a>鍚庣晠浜�");
                                                break;
                                            case"buy8yuan":
                                            case"buy12yuan":
                                                e(".js_soso").html(t.desc + '\t  鎮ㄥ彲<a href="javascript:;" class="js_openmusic" data-aid="' + t.aid + "$songid" + g_SongData.songid + '" data-stat="' + t.aid + "$songid" + g_SongData.songid + '">' + t.btn + "</a>鍚庣晠浜�");
                                                break;
                                            case"buydigitalalbum":
                                                e(".js_soso").html(t.desc + '\t  鎮ㄥ彲<a href="javascript:;" class="js_buy_album" data-aid="' + t.aid + "$songid" + g_SongData.songid + '" data-stat="' + t.aid + "$songid" + g_SongData.songid + '" data-albumid="' + g_SongData.albumid + '">' + t.btn + "</a>鍚庣晠浜�")
                                        }
                                    }
                                    t && t.desc && e(".js_soso").html(t.desc + '\t  鍒�<a href="javascript:;" class="js_btn_feedback">QQ闊充箰鍙嶉骞冲彴</a>鍚戞垜浠姇璇夋垨鎻愬嚭寤鸿'), e(".js_soso").show()
                                }
                            } else g_SongData.msgid && (e(".js_soso").html(t + '\t  鍒�<a href="javascript:;" class="js_btn_feedback">QQ闊充箰鍙嶉骞冲彴</a>鍚戞垜浠姇璇夋垨鎻愬嚭寤鸿'), e(".js_soso").show())
                        })
                    }), g_SongData.fav && "1" != g_SongData.fav) {
                        var n = e(".js_all_like").html();
                        e(".js_all_like").html(n.replace("鏀惰棌", "宸叉敹钘�")), e(".js_all_like i").addClass("mod_btn__icon_like--like")
                    }
                    g_SongData.songmid ? (d = void 0, g_SongData.albummid ? (8623 == g_SongData.albumid ? (e(".js_company").hide(), e(".js_public_time").hide()) : (e(".js_company").show(), e(".js_public_time").show()), p && p.company && p.company.content && p.company.content.length > 0 && p.company.content[0].value && "鏆傛棤" == p.company.content[0].value ? e(".js_company").hide() : p && p.company && p.company.content && p.company.content.length > 0 && p.company.content[0].value ? (e(".js_company").show(), p.company.content[0].id > 0 ? e(".js_company").html('鍞辩墖鍏徃锛�<a href="' + location.protocol + "//y.qq.com/portal/company_detail.html?id=" + p.company.content[0].id + '">' + p.company.content[0].value + "</a>") : e(".js_company").html("鍞辩墖鍏徃锛�" + p.company.content[0].value)) : e(".js_company").hide(), p && p.pub_time && p.pub_time.content && p.pub_time.content.length > 0 && p.pub_time.content[0].value ? (e(".js_public_time").html(e(".js_public_time").html() + p.pub_time.content[0].value), e(".js_public_time").show()) : e(".js_public_time").hide(), u(), d && d()) : d && d(), l(function () {
                        !function (t) {
                            var a = {
                                comm: {ct: 24, cv: 0},
                                mv: {
                                    module: "MvService.MvInfoProServer",
                                    method: "GetMvBySongid",
                                    param: {mids: [g_SongData.songmid]}
                                }
                            }, n = "getMvForSong" + (Math.random() + "").replace("0.", "");
                            s.jsonp({
                                url: "//u.y.qq.com/cgi-bin/musicu.fcg?callback=" + n,
                                data: {data: JSON.stringify(a)},
                                jsonpCallback: n,
                                charset: "utf-8",
                                success: function (a) {
                                    if (0 == a.code && 0 == a.mv.code && a.mv.data && a.mv.data.mvinfo && g_SongData.songmid in a.mv.data.mvinfo) {
                                        var n = a.mv.data.mvinfo[g_SongData.songmid];
                                        e.extend(n, {
                                            singer: g_SongData.singer,
                                            mv_name: n.title
                                        }), e("#song_mv").html(function (t) {
                                            var a, e = "";
                                            if (Array.prototype.join, e += '\r\n\t    <h3 class="other_part__tit">鐩稿叧MV</h3>\r\n\t    <div class="mod_mv_list">\r\n\t\t<div class="mv_list__item_box" data-vid="' + (null == (a = n.mvvid) ? "" : a) + '" data-id="' + (null == (a = n.mvid) ? "" : a) + '">\r\n\t\t    <a href="' + (null == (a = o.util.getMvUrl(n.vid)) ? "" : a) + '" class="mv_list__cover mod_cover js_mv" data-vid="' + (null == (a = n.vid) ? "" : a) + '" data-id="' + (null == (a = n.mvid) ? "" : a) + '"  hidefocus="true">\r\n\t\t\t<img class="mv_list__pic" src="', n.picurl ? e += "" + (null == (a = o.util.fixUrl(n.picurl)) ? "" : a) : e += "//shp.qpic.cn/qqvideo_ori/0/" + (null == (a = n.mvvid) ? "" : a) + "_360_204/0", e += '" onerror="this.src=\'//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000\';this.onerror=null;" alt="' + (null == (a = n.mv_name) ? "" : _.escape(a)) + '">\r\n\t\t\t<i class="mod_cover__icon_play"></i>\r\n\t\t    </a>\r\n\t\t    <h3 class="mv_list__title"><a href="' + (null == (a = o.util.getMvUrl(n.vid)) ? "" : a) + '" class="js_mv" data-vid="' + (null == (a = n.vid) ? "" : a) + '" data-id="' + (null == (a = n.mvid) ? "" : a) + '" title="' + (null == (a = n.mv_name) ? "" : _.escape(a)) + '">' + (null == (a = n.mv_name) ? "" : _.escape(a)) + "</a></h3>\r\n\t\t    ", t.singer) {
                                                e += "\r\n\t\t\t\t";
                                                for (var i = [], s = 0, l = t.singer.length; s < l; s++) i.push(t.singer[s].name);
                                                for (e += '\r\n\t\t    <p class="mv_list__singer" title="' + (null == (a = i.join(" / ")) ? "" : _.escape(a)) + '">\r\n\t\t\t', s = 0, l = t.singer.length; s < l; s++) e += "\r\n\t\t\t", s > 0 && (e += " / "), e += '\r\n\t\t\t<a href="' + (null == (a = o.util.getSingerUrl(t.singer[s])) ? "" : a) + '" data-mid="' + (null == (a = t.singer[s].mid) ? "" : a) + '" title="' + (null == (a = t.singer[s].name) ? "" : _.escape(a)) + '" class="js_singer"> ' + (null == (a = t.singer[s].name) ? "" : _.escape(a)) + " </a>\r\n\t\t\t";
                                                e += "\r\n\t\t    </p>\r\n\t\t    "
                                            }
                                            return e += "\r\n\t\t</div>\r\n\t    </div> "
                                        }(n)), t && t(data)
                                    } else t && t(null)
                                },
                                error: function () {
                                    t && t(null)
                                }
                            })
                        }(), function () {
                            if (g_SongData.songtype > 0) return !1;
                            var a = function (t) {
                                var a, n = "";
                                Array.prototype.join, n += "\t\t\t    ";
                                for (var e = 0, i = t.list.length; e < i && e < 6; e++) {
                                    var s = t.list[e];
                                    n += '\r\n\t\t\t    <li class="playlist__item" onmouseover="this.className=(this.className+\' playlist__item--hover\')" onmouseout="this.className=this.className.replace(/ playlist__item--hover/, \'\')" data-disstid="' + (null == (a = s.tid) ? "" : a) + '">\r\n                                <div class="playlist__item_box">\r\n                                    <div class="playlist__cover mod_cover"><a href="' + (null == (a = o.util.getPlaylistUrl(s.tid)) ? "" : a) + '#stat=y_new.song.hotgedan.click" onclick="setStatCookie&&setStatCookie();" class="js_playlist" data-stat="y_new.song.hotgedan.click" data-disstid="' + (null == (a = s.tid) ? "" : a) + '"><img src="' + (null == (a = o.util.fixUrl(s.imgurl)) ? "" : _.escape(a)) + '" alt="' + (null == (a = s.dissname) ? "" : _.escape(a)) + '" class="playlist__pic"><i class="mod_cover__icon_play js_play" data-stat="y_new.song.hotgedan.play"></i></a></div>\r\n                                    <h4 class="playlist__title"><span class="playlist__title_txt"><a href="' + (null == (a = o.util.getPlaylistUrl(s.tid)) ? "" : a) + '#stat=y_new.song.hotgedan.click" onclick="setStatCookie&&setStatCookie();" class="js_playlist" data-stat="y_new.song.hotgedan.click" data-disstid="' + (null == (a = s.tid) ? "" : a) + '" title="' + (null == (a = s.dissname) ? "" : _.escape(a)) + '">' + (null == (a = s.dissname) ? "" : _.escape(a)) + '</a></span></h4>\r\n                                    <div class="playlist__author">\r\n\t\t\t\t\t    ' + (null == (a = s.creator) ? "" : _.escape(a)) + "\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n\t\t\t    "
                                }
                                return n += ""
                            }, n = {
                                comm: {ct: 24, cv: 0},
                                song_gedan: {
                                    module: "music.mb_gedan_recommend_svr",
                                    method: "get_related_gedan",
                                    param: {song_id: g_SongData.songid, song_type: 1, sin: 0, last_id: 0}
                                }
                            }, i = "getUCGI" + (Math.random() + "").replace("0.", "");
                            o.jQueryAjax.jsonp({
                                url: "//u.y.qq.com/cgi-bin/musicu.fcg?callback=" + i,
                                data: {data: JSON.stringify(n)},
                                jsonpCallback: i,
                                charset: "utf-8",
                                success: function (n) {
                                    0 == n.code && n.song_gedan && n.song_gedan.data && n.song_gedan.data.vec_gedan && n.song_gedan.data.vec_gedan.length > 0 && (t.async("js/common/html/taogelist.js", function (t) {
                                        t.init({
                                            container: e("#song_playlist ul.playlist__list"),
                                            specilData: n.song_gedan.data.vec_gedan > 6 ? n.song_gedan.data.vec_gedan.slice(0, 6) : n.song_gedan.data.vec_gedan.slice(0, 3),
                                            specialTpl: a,
                                            reportType: o.reportMap.song_detail
                                        })
                                    }), e("#song_playlist").show())
                                },
                                error: function () {
                                }
                            })
                        }(), SPD.mark(34), m()
                    })) : (e("#lrc_content").html("鏆傛棤姝岃瘝"), e(".js_open_lyric").hide(), e("#copy_link").hide(), SPD.mark(34)), g_SongData.songmid && 5 != g_SongData.songtype && (!function (t, a, n) {
                        var e = "jsoncallback" + (Math.random() + "").replace("0.", "");
                        o.jQueryAjax.jsonp({
                            url: location.protocol + "//c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg",
                            data: {
                                cid: 205360772,
                                reqtype: 1,
                                biztype: t,
                                topid: a,
                                cmd: 4,
                                needmusiccrit: 0,
                                pagenum: 0,
                                pagesize: 0,
                                lasthotcommentid: "",
                                callback: e,
                                format: "fs",
                                domain: "qq.com"
                            },
                            type: "post",
                            jsonpCallback: e,
                            success: function (t) {
                                if (!t || "object" != typeof t) return !1;
                                n && n(t.commenttotal || 0)
                            },
                            error: function () {
                            }
                        })
                    }(r[g_SongData.songtype], g_SongData.songid, function (t) {
                        t > 0 && e(".js_into_comment").html('<i class="mod_btn__icon_comment"></i>璇勮(' + t + ")")
                    }), e(".detail_layout__main").append('<div class="mod_comment" id="comment_box"></div>'), t.async("js/common/comment.js", function (t) {
                        g ? g.setPager(0, 0, !0) : g = t.init({
                            container: "#comment_box",
                            outer_container: ".detail_layout__main",
                            isOnPage: !0,
                            type: r[g_SongData.songtype],
                            topid: g_SongData.songid,
                            cur_page: 0,
                            per_page: 25,
                            subSource: "song.comment",
                            cb: function () {
                                m()
                            }
                        })
                    }))
                }
                var d;
                e(document).on("click", ".js_singer", function (t) {
                    var a = {
                        singermid: e(this).data("mid") || e(this).data("singermid") || "",
                        singerid: e(this).data("id") || e(this).data("singerid") || 0
                    }, n = e(this).data("stat") || "";
                    return n && (a.stat = n), o.util.gotoSinger(a), !1
                }).on("click", ".js_user", function (t) {
                    var a = e(this).data("uin"), n = e(this).data("stat") || "", i = {uin: a, target: "_blank"};
                    n && (i.stat = n), o.util.gotoUser(i)
                }).on("click", ".js_album", function (t) {
                    var a = {albummid: e(this).data("albummid")}, n = e(this).data("stat") || "";
                    return n && (a.stat = n), o.util.gotoAlbum(a), !1
                }).on("click", ".js_all_play", function (t) {
                    return o.player.play([g_SongData], 1), i.pgvClickStat("y_new.song.header.playall"), !1
                }).on("click", ".js_mv", function (t, a) {
                    var n = e(this).data("vid"), s = e(this).data("stat") || "";
                    return s && i.pgvClickStat(s), o.util.gotoMvdetail({vid: n}), !1
                }).on("click", ".js_all_like", function (a, n) {
                    var o = e(this);
                    i.pgvClickStat("y_new.song.header.loveall"), e("i", o).hasClass("mod_btn__icon_like--like") ? t.async("js/common/fav.js", function (t) {
                        t.unlike([g_SongData], function () {
                            var t = e(".js_all_like").html();
                            e(".js_all_like").html(t.replace("宸叉敹钘�", "鏀惰棌")), e("i", o).removeClass("mod_btn__icon_like--like")
                        })
                    }) : t.async("js/common/fav.js", function (t) {
                        t.like([g_SongData], function () {
                            var t = e(".js_all_like").html();
                            e(".js_all_like").html(t.replace("鏀惰棌", "宸叉敹钘�")), e("i", o).addClass("mod_btn__icon_like--like")
                        })
                    })
                }).on("click", ".js_open_lyric", function () {
                    var t = e(this);
                    t.parents(".limit").length > 0 ? (t.html("[鏀惰捣]"), t.parents(".limit").removeClass("limit")) : (t.parents(".lyric__cont").addClass("limit"), t.html("[灞曞紑]"))
                }), window.copyLyric = function (t) {
                    if (window.clipboardData) {
                        var a = e("#" + t).html();
                        window.clipboardData.setData("text", a), i.pgvClickStat("y_new.song.copylyric"), o.popup.show("澶嶅埗鎴愬姛锛�", 2e3)
                    }
                }, e(".about__more").popupmore(), t.async("js/common/menu.js", function (t) {
                    e(".js_more").menu({content: ["fav", "share", "down", "accusation"], type: 1})
                });
                var y = o.util.getParameterNew("play");
                setTimeout(function () {
                    1 == parseInt(y) && o.player.play([g_SongData], 1, !0)
                }, 1500)
            }), setTimeout(function () {
                i.doPvg(location.protocol + "//y.qq.com/portal/song/detail.html")
            }, 1e3)
        }
    }
});