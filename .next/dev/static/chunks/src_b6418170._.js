(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/OSContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OSProvider",
    ()=>OSProvider,
    "useOS",
    ()=>useOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const OSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function OSProvider({ children }) {
    _s();
    const [windows, setWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [highestZIndex, setHighestZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const openWindow = (id, title)=>{
        setWindows((prev)=>{
            const existing = prev.find((w)=>w.id === id);
            if (existing) {
                if (existing.isMinimized) {
                    return prev.map((w)=>w.id === id ? {
                            ...w,
                            isMinimized: false,
                            zIndex: highestZIndex + 1
                        } : w);
                }
                return prev.map((w)=>w.id === id ? {
                        ...w,
                        zIndex: highestZIndex + 1
                    } : w);
            }
            setHighestZIndex((z)=>z + 1);
            return [
                ...prev,
                {
                    id,
                    title,
                    isOpen: true,
                    isMinimized: false,
                    zIndex: highestZIndex + 1
                }
            ];
        });
        setHighestZIndex((z)=>z + 1);
    };
    const closeWindow = (id)=>{
        setWindows((prev)=>prev.filter((w)=>w.id !== id));
    };
    const focusWindow = (id)=>{
        setHighestZIndex((z)=>z + 1);
        setWindows((prev)=>prev.map((w)=>w.id === id ? {
                    ...w,
                    zIndex: highestZIndex + 1
                } : w));
    };
    const toggleMinimize = (id)=>{
        setWindows((prev)=>prev.map((w)=>w.id === id ? {
                    ...w,
                    isMinimized: !w.isMinimized
                } : w));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OSContext.Provider, {
        value: {
            windows,
            openWindow,
            closeWindow,
            focusWindow,
            toggleMinimize
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/OSContext.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(OSProvider, "YS7lAh70DHlus4Sjz5VNyVOltqA=");
_c = OSProvider;
function useOS() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OSContext);
    if (!context) {
        throw new Error("useOS must be used within an OSProvider");
    }
    return context;
}
_s1(useOS, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "OSProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Desktop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Desktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$spade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spade$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/spade.js [app-client] (ecmascript) <export default as Spade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Desktop() {
    _s();
    const { openWindow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const desktopIcons = [
        {
            id: "minesweeper",
            title: "Minesweeper",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"]
        },
        {
            id: "solitaire",
            title: "Solitaire",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$spade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spade$3e$__["Spade"]
        },
        {
            id: "snake",
            title: "Snake",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full p-6 grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] grid-rows-[repeat(auto-fill,minmax(100px,1fr))] gap-4 content-start",
        children: desktopIcons.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>openWindow(app.id, app.title),
                className: "flex flex-col items-center gap-2 p-2 hover:bg-white/10 rounded-md transition-colors group outline-none focus:ring-2 focus:ring-white/30",
                onDoubleClick: ()=>openWindow(app.id, app.title),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-zinc-800/80 group-hover:bg-zinc-700 rounded-xl flex items-center justify-center shadow-lg shadow-black/50 border border-zinc-700/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(app.icon, {
                            className: "w-6 h-6 text-zinc-300 group-hover:text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Desktop.tsx",
                            lineNumber: 26,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-center text-zinc-300 group-hover:text-white drop-shadow-md select-none",
                        children: app.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Desktop.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this)
                ]
            }, app.id, true, {
                fileName: "[project]/src/components/Desktop.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Desktop.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(Desktop, "QUo82R+mHsWdDo6/dLOIBtTvwHA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = Desktop;
var _c;
__turbopack_context__.k.register(_c, "Desktop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Taskbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Taskbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Taskbar() {
    _s();
    const { windows, openWindow, toggleMinimize, focusWindow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [startOpen, setStartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Taskbar.useEffect": ()=>{
            const updateTime = {
                "Taskbar.useEffect.updateTime": ()=>{
                    setTime(new Date().toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true
                    }));
                }
            }["Taskbar.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            return ({
                "Taskbar.useEffect": ()=>clearInterval(interval)
            })["Taskbar.useEffect"];
        }
    }["Taskbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-12 bg-black/60 backdrop-blur-md border-t border-zinc-800 flex items-center px-4 justify-between relative z-[9999]",
        children: [
            startOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-14 left-4 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl p-2 flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 border-b border-zinc-800",
                        children: "System Links"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://github.com/hyeonguk-roh",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 rounded-md transition-colors text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Taskbar.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this),
                            "GitHub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://linkedin.com/in/hyeonguk-roh",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 rounded-md transition-colors text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Taskbar.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this),
                            "LinkedIn"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "mailto:hyeonguk.roh@gmail.com",
                        className: "flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 rounded-md transition-colors text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Taskbar.tsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, this),
                            "Email"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Taskbar.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStartOpen(!startOpen),
                        className: `h-8 px-4 rounded-md font-bold text-sm transition-colors ${startOpen ? "bg-white text-black" : "hover:bg-zinc-800"}`,
                        children: "START"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-zinc-700 mx-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this),
                    windows.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (w.isMinimized) {
                                    toggleMinimize(w.id);
                                    focusWindow(w.id);
                                } else {
                                    toggleMinimize(w.id);
                                }
                            },
                            className: `h-8 px-3 rounded-md text-sm max-w-[150px] truncate transition-all duration-200 border ${w.isMinimized ? "bg-transparent border-transparent hover:bg-zinc-800 text-zinc-400" : "bg-zinc-800 border-zinc-600 shadow-inner text-white"}`,
                            children: w.title
                        }, w.id, false, {
                            fileName: "[project]/src/components/Taskbar.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Taskbar.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openWindow("kofi", "Support Me"),
                        className: "h-8 px-2 flex items-center gap-2 hover:bg-zinc-800 rounded-md text-pink-500 transition-colors",
                        title: "Buy me a coffee",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-4 h-4 fill-pink-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Taskbar.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-zinc-300 font-mono tracking-wider",
                        children: time
                    }, void 0, false, {
                        fileName: "[project]/src/components/Taskbar.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Taskbar.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Taskbar.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(Taskbar, "mLz48K0vil4IPkVhmD2eG6YMhIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = Taskbar;
var _c;
__turbopack_context__.k.register(_c, "Taskbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Window.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Window
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Window({ id, title, children, defaultWidth = 600, defaultHeight = 400 }) {
    _s();
    const { windows, closeWindow, focusWindow, toggleMinimize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const windowState = windows.find((w)=>w.id === id);
    if (!windowState || windowState.isMinimized) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".window-handle",
        onMouseDown: ()=>focusWindow(id),
        bounds: "parent",
        defaultPosition: {
            x: Math.random() * 50 + 50,
            y: Math.random() * 50 + 50
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            style: {
                zIndex: windowState.zIndex,
                width: defaultWidth,
                height: defaultHeight
            },
            className: "absolute bg-black border border-zinc-700 rounded-md overflow-hidden shadow-2xl shadow-black flex flex-col will-change-transform",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "window-handle h-8 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-2 cursor-grab active:cursor-grabbing select-none hover:bg-zinc-800 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-bold text-zinc-300 tracking-wider",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Window.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleMinimize(id),
                                    className: "p-1 hover:bg-zinc-700 rounded-sm text-zinc-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Window.tsx",
                                        lineNumber: 53,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Window.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-1 hover:bg-zinc-700 rounded-sm text-zinc-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Window.tsx",
                                        lineNumber: 56,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Window.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>closeWindow(id),
                                    className: "p-1 hover:bg-red-900 rounded-sm text-zinc-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Window.tsx",
                                        lineNumber: 62,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Window.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Window.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Window.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-auto relative bg-zinc-950",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/Window.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Window.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Window.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(Window, "eRMdIG8DY3SzJdgqab0mI62I3xI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = Window;
var _c;
__turbopack_context__.k.register(_c, "Window");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/MinesweeperApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MinesweeperApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bomb.js [app-client] (ecmascript) <export default as Bomb>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ROWS = 10;
const COLS = 10;
const MINES = 15;
function MinesweeperApp() {
    _s();
    const [board, setBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gameWon, setGameWon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mineCount, setMineCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(MINES);
    const initBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MinesweeperApp.useCallback[initBoard]": ()=>{
            let newBoard = Array.from({
                length: ROWS
            }, {
                "MinesweeperApp.useCallback[initBoard].newBoard": (_, r)=>Array.from({
                        length: COLS
                    }, {
                        "MinesweeperApp.useCallback[initBoard].newBoard": (_, c)=>({
                                r,
                                c,
                                isMine: false,
                                isRevealed: false,
                                isFlagged: false,
                                neighborMines: 0
                            })
                    }["MinesweeperApp.useCallback[initBoard].newBoard"])
            }["MinesweeperApp.useCallback[initBoard].newBoard"]);
            // Place mines
            let minesPlaced = 0;
            while(minesPlaced < MINES){
                const r = Math.floor(Math.random() * ROWS);
                const c = Math.floor(Math.random() * COLS);
                if (!newBoard[r][c].isMine) {
                    newBoard[r][c].isMine = true;
                    minesPlaced++;
                }
            }
            // Calculate neighbors
            for(let r = 0; r < ROWS; r++){
                for(let c = 0; c < COLS; c++){
                    if (newBoard[r][c].isMine) continue;
                    let count = 0;
                    for(let dr = -1; dr <= 1; dr++){
                        for(let dc = -1; dc <= 1; dc++){
                            const nr = r + dr;
                            const nc = c + dc;
                            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && newBoard[nr][nc].isMine) {
                                count++;
                            }
                        }
                    }
                    newBoard[r][c].neighborMines = count;
                }
            }
            setBoard(newBoard);
            setGameOver(false);
            setGameWon(false);
            setMineCount(MINES);
        }
    }["MinesweeperApp.useCallback[initBoard]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MinesweeperApp.useEffect": ()=>{
            initBoard();
        }
    }["MinesweeperApp.useEffect"], [
        initBoard
    ]);
    const revealCell = (r, c)=>{
        if (gameOver || gameWon || board[r][c].isRevealed || board[r][c].isFlagged) return;
        const newBoard = [
            ...board
        ];
        if (newBoard[r][c].isMine) {
            // Game Over
            newBoard.forEach((row)=>row.forEach((cell)=>{
                    if (cell.isMine) cell.isRevealed = true;
                }));
            setBoard(newBoard);
            setGameOver(true);
            return;
        }
        // Flood fill
        const stack = [
            [
                r,
                c
            ]
        ];
        while(stack.length > 0){
            const [currR, currC] = stack.pop();
            if (!newBoard[currR][currC].isRevealed) {
                newBoard[currR][currC].isRevealed = true;
                if (newBoard[currR][currC].neighborMines === 0) {
                    for(let dr = -1; dr <= 1; dr++){
                        for(let dc = -1; dc <= 1; dc++){
                            const nr = currR + dr;
                            const nc = currC + dc;
                            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !newBoard[nr][nc].isRevealed && !newBoard[nr][nc].isFlagged) {
                                stack.push([
                                    nr,
                                    nc
                                ]);
                            }
                        }
                    }
                }
            }
        }
        setBoard(newBoard);
        checkWinCondition(newBoard);
    };
    const toggleFlag = (e, r, c)=>{
        e.preventDefault();
        if (gameOver || gameWon || board[r][c].isRevealed) return;
        const newBoard = [
            ...board
        ];
        const cell = newBoard[r][c];
        if (!cell.isFlagged && mineCount > 0) {
            cell.isFlagged = true;
            setMineCount((prev)=>prev - 1);
        } else if (cell.isFlagged) {
            cell.isFlagged = false;
            setMineCount((prev)=>prev + 1);
        }
        setBoard(newBoard);
        checkWinCondition(newBoard);
    };
    const checkWinCondition = (currentBoard)=>{
        let unrevealedSafeCells = 0;
        currentBoard.forEach((row)=>row.forEach((cell)=>{
                if (!cell.isMine && !cell.isRevealed) unrevealedSafeCells++;
            }));
        if (unrevealedSafeCells === 0) {
            setGameWon(true);
            setGameOver(true);
        }
    };
    const getColor = (num)=>{
        const colors = [
            'text-transparent',
            'text-blue-500',
            'text-green-500',
            'text-red-500',
            'text-purple-500',
            'text-yellow-500',
            'text-teal-500',
            'text-black',
            'text-gray-500'
        ];
        return colors[num];
    };
    if (board.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col items-center p-4 bg-zinc-300 text-black select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[320px] bg-zinc-400 p-2 border-t-zinc-200 border-l-zinc-200 border-b-zinc-600 border-r-zinc-600 border-4 mb-4 flex justify-between items-center text-red-600 font-mono text-xl bg-black px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: mineCount.toString().padStart(3, '0')
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: initBoard,
                        className: "bg-zinc-300 p-1 border-t-zinc-100 border-l-zinc-100 border-b-zinc-500 border-r-zinc-500 border-2 active:border-t-zinc-500 active:border-l-zinc-500 active:border-b-zinc-100 active:border-r-zinc-100 hover:bg-zinc-200",
                        children: gameWon ? '😎' : gameOver ? '😵' : '🙂'
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-400 p-1 border-t-zinc-600 border-l-zinc-600 border-b-zinc-200 border-r-zinc-200 border-4 inline-block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-[1px] bg-zinc-500",
                    style: {
                        gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`
                    },
                    children: board.map((row, r)=>row.map((cell, c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>revealCell(r, c),
                                onContextMenu: (e)=>toggleFlag(e, r, c),
                                className: `w-7 h-7 flex items-center justify-center text-sm font-bold ${cell.isRevealed ? cell.isMine ? 'bg-red-500' // Mine exploded
                                 : 'bg-zinc-300' : 'bg-zinc-300 border-t-zinc-100 border-l-zinc-100 border-b-zinc-500 border-r-zinc-500 border-2 hover:bg-zinc-200 cursor-pointer'}`,
                                children: cell.isRevealed ? cell.isMine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bomb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bomb$3e$__["Bomb"], {
                                    className: "w-4 h-4 text-black"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                                    lineNumber: 177,
                                    columnNumber: 51
                                }, this) : cell.neighborMines > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: getColor(cell.neighborMines),
                                    children: cell.neighborMines
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                                    lineNumber: 177,
                                    columnNumber: 118
                                }, this) : '' : cell.isFlagged ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                    className: "w-4 h-4 text-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                                    lineNumber: 179,
                                    columnNumber: 37
                                }, this) : ''
                            }, `${r}-${c}`, false, {
                                fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                                lineNumber: 165,
                                columnNumber: 29
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                    lineNumber: 162,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                lineNumber: 161,
                columnNumber: 13
            }, this),
            gameWon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-green-700 font-bold",
                children: "You Win!"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                lineNumber: 187,
                columnNumber: 25
            }, this),
            gameOver && !gameWon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-red-600 font-bold",
                children: "Game Over"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
                lineNumber: 188,
                columnNumber: 38
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/MinesweeperApp.tsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
_s(MinesweeperApp, "Z+qi51U6Xw+VzuL/Z9k0a14Nfdg=");
_c = MinesweeperApp;
var _c;
__turbopack_context__.k.register(_c, "MinesweeperApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/SnakeApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SnakeApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const GRID_SIZE = 20;
function SnakeApp() {
    _s();
    const [snake, setSnake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            x: 10,
            y: 10
        }
    ]);
    const [food, setFood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 5,
        y: 5
    });
    const [dir, setDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: -1
    });
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const spawnFood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SnakeApp.useCallback[spawnFood]": (currentSnake)=>{
            let newFood;
            while(true){
                newFood = {
                    x: Math.floor(Math.random() * GRID_SIZE),
                    y: Math.floor(Math.random() * GRID_SIZE)
                };
                if (!currentSnake.some({
                    "SnakeApp.useCallback[spawnFood]": (segment)=>segment.x === newFood.x && segment.y === newFood.y
                }["SnakeApp.useCallback[spawnFood]"])) {
                    break;
                }
            }
            setFood(newFood);
        }
    }["SnakeApp.useCallback[spawnFood]"], []);
    const resetGame = ()=>{
        setSnake([
            {
                x: 10,
                y: 10
            }
        ]);
        setDir({
            x: 0,
            y: -1
        });
        setScore(0);
        setGameOver(false);
        setIsPaused(false);
        spawnFood([
            {
                x: 10,
                y: 10
            }
        ]);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SnakeApp.useEffect": ()=>{
            const handleKeyDown = {
                "SnakeApp.useEffect.handleKeyDown": (e)=>{
                    if ([
                        'ArrowUp',
                        'ArrowDown',
                        'ArrowLeft',
                        'ArrowRight'
                    ].includes(e.key)) {
                        e.preventDefault();
                    }
                    setDir({
                        "SnakeApp.useEffect.handleKeyDown": (prev)=>{
                            switch(e.key){
                                case 'ArrowUp':
                                    return prev.y === 1 ? prev : {
                                        x: 0,
                                        y: -1
                                    };
                                case 'ArrowDown':
                                    return prev.y === -1 ? prev : {
                                        x: 0,
                                        y: 1
                                    };
                                case 'ArrowLeft':
                                    return prev.x === 1 ? prev : {
                                        x: -1,
                                        y: 0
                                    };
                                case 'ArrowRight':
                                    return prev.x === -1 ? prev : {
                                        x: 1,
                                        y: 0
                                    };
                                default:
                                    return prev;
                            }
                        }
                    }["SnakeApp.useEffect.handleKeyDown"]);
                }
            }["SnakeApp.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "SnakeApp.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["SnakeApp.useEffect"];
        }
    }["SnakeApp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SnakeApp.useEffect": ()=>{
            if (gameOver || isPaused) return;
            const moveSnake = {
                "SnakeApp.useEffect.moveSnake": ()=>{
                    setSnake({
                        "SnakeApp.useEffect.moveSnake": (prevSnake)=>{
                            const head = prevSnake[0];
                            const newHead = {
                                x: head.x + dir.x,
                                y: head.y + dir.y
                            };
                            // Check Wall Collision
                            if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
                                setGameOver(true);
                                return prevSnake;
                            }
                            // Check Self Collision
                            if (prevSnake.some({
                                "SnakeApp.useEffect.moveSnake": (segment)=>segment.x === newHead.x && segment.y === newHead.y
                            }["SnakeApp.useEffect.moveSnake"])) {
                                setGameOver(true);
                                return prevSnake;
                            }
                            const newSnake = [
                                newHead,
                                ...prevSnake
                            ];
                            // Check Food Collision
                            if (newHead.x === food.x && newHead.y === food.y) {
                                setScore({
                                    "SnakeApp.useEffect.moveSnake": (s)=>s + 10
                                }["SnakeApp.useEffect.moveSnake"]);
                                spawnFood(newSnake);
                            } else {
                                newSnake.pop();
                            }
                            return newSnake;
                        }
                    }["SnakeApp.useEffect.moveSnake"]);
                }
            }["SnakeApp.useEffect.moveSnake"];
            const intervalId = setInterval(moveSnake, 120);
            return ({
                "SnakeApp.useEffect": ()=>clearInterval(intervalId)
            })["SnakeApp.useEffect"];
        }
    }["SnakeApp.useEffect"], [
        dir,
        food,
        gameOver,
        isPaused,
        spawnFood
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col items-center justify-center bg-[#001100] text-[#00ff00] font-mono p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[400px] flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold",
                        children: "SNAKE.EXE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SnakeApp.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg tracking-widest text-[#00ff00]",
                        children: [
                            "SCORE: ",
                            score.toString().padStart(4, '0')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/SnakeApp.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SnakeApp.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full aspect-square max-w-[400px] bg-black border-2 border-[#00ff00] grid",
                style: {
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
                },
                children: Array.from({
                    length: GRID_SIZE * GRID_SIZE
                }).map((_, i)=>{
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);
                    const isSnakeHead = snake[0].x === x && snake[0].y === y;
                    const isSnakeBody = snake.some((segment, idx)=>idx !== 0 && segment.x === x && segment.y === y);
                    const isFood = food.x === x && food.y === y;
                    let cellClass = "";
                    if (isSnakeHead) cellClass = "bg-[#00ff00]";
                    else if (isSnakeBody) cellClass = "bg-[#00aa00]";
                    else if (isFood) cellClass = "bg-red-500 animate-pulse";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-full ${cellClass}`
                    }, i, false, {
                        fileName: "[project]/src/components/apps/SnakeApp.tsx",
                        lineNumber: 133,
                        columnNumber: 28
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/apps/SnakeApp.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsPaused(!isPaused),
                        className: "px-4 py-2 border border-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors",
                        disabled: gameOver,
                        children: isPaused ? "RESUME" : "PAUSE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SnakeApp.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetGame,
                        className: "px-4 py-2 border border-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors",
                        children: "RESTART"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SnakeApp.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SnakeApp.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            gameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-red-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4 animate-bounce",
                        children: "GAME OVER"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SnakeApp.tsx",
                        lineNumber: 148,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetGame,
                        className: "px-6 py-2 border-2 border-red-500 hover:bg-red-500 hover:text-black font-bold transition-colors",
                        children: "TRY AGAIN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/SnakeApp.tsx",
                        lineNumber: 149,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/SnakeApp.tsx",
                lineNumber: 147,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/SnakeApp.tsx",
        lineNumber: 107,
        columnNumber: 9
    }, this);
}
_s(SnakeApp, "YIvoqnFtEJ/7Qe6MEMBZUULTeMQ=");
_c = SnakeApp;
var _c;
__turbopack_context__.k.register(_c, "SnakeApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/KofiApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KofiApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
"use client";
;
;
function KofiApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col items-center justify-center p-6 bg-zinc-950 text-white text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                    className: "w-8 h-8 text-pink-500 fill-pink-500 animate-pulse border-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/apps/KofiApp.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/apps/KofiApp.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-2",
                children: "Buy me a Coffee!"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/KofiApp.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-zinc-400 text-sm mb-8 max-w-[250px] leading-relaxed",
                children: "If you found my work helpful, consider leaving a tip. It helps keep the servers running and the coffee flowing!"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/KofiApp.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://ko-fi.com/dannyroh",
                target: "_blank",
                rel: "noreferrer",
                className: "px-6 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-bold transition-colors shadow-lg shadow-pink-500/20",
                children: "Support on Ko-fi"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/KofiApp.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/KofiApp.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = KofiApp;
var _c;
__turbopack_context__.k.register(_c, "KofiApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/OSManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OSManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Window.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MinesweeperApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/MinesweeperApp.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './apps/SolitaireApp'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$SnakeApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/SnakeApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$KofiApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/KofiApp.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function OSManager() {
    _s();
    const { windows } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: windows.map((w)=>{
            let content = null;
            let width = 600;
            let height = 400;
            switch(w.id){
                case "minesweeper":
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MinesweeperApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/OSManager.tsx",
                        lineNumber: 24,
                        columnNumber: 35
                    }, this);
                    width = 450;
                    height = 550;
                    break;
                case "solitaire":
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SolitaireApp, {}, void 0, false, {
                        fileName: "[project]/src/components/OSManager.tsx",
                        lineNumber: 29,
                        columnNumber: 35
                    }, this);
                    width = 800;
                    height = 600;
                    break;
                case "snake":
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$SnakeApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/OSManager.tsx",
                        lineNumber: 34,
                        columnNumber: 35
                    }, this);
                    width = 450;
                    height = 500;
                    break;
                case "kofi":
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$KofiApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/OSManager.tsx",
                        lineNumber: 39,
                        columnNumber: 35
                    }, this);
                    width = 380;
                    height = 420;
                    break;
                default:
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: "App not found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/OSManager.tsx",
                        lineNumber: 44,
                        columnNumber: 35
                    }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Window$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: w.id,
                title: w.title,
                defaultWidth: width,
                defaultHeight: height,
                children: content
            }, w.id, false, {
                fileName: "[project]/src/components/OSManager.tsx",
                lineNumber: 48,
                columnNumber: 21
            }, this);
        })
    }, void 0, false);
}
_s(OSManager, "nylZYj2m1j8o/hoaJGzt40W9oOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = OSManager;
var _c;
__turbopack_context__.k.register(_c, "OSManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Desktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Desktop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Taskbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OSManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OSManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OSProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "w-screen h-screen relative flex flex-col bg-black overflow-hidden font-mono text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full h-full relative z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Desktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OSManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full relative z-[9999]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Taskbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b6418170._.js.map