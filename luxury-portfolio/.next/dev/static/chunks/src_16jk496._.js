(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AIAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/PortfolioContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.mjs [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AIAssistant() {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const defaultGreeting = data.aiCopy?.greeting || `Greetings. I am ${data.hero.name}'s digital twin and portfolio system guide. Ask me anything regarding engineering projects, technical competencies, architecture, credentials, or verified background documentation.`;
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            sender: "ai",
            text: defaultGreeting
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAssistant.useEffect": ()=>{
            scrollRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["AIAssistant.useEffect"], [
        messages,
        loading
    ]);
    // Synchronize greeting when portfolio data is rehydrated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAssistant.useEffect": ()=>{
            if (messages.length === 1 && messages[0].sender === "ai") {
                setMessages([
                    {
                        sender: "ai",
                        text: defaultGreeting
                    }
                ]);
            }
        }
    }["AIAssistant.useEffect"], [
        defaultGreeting
    ]);
    const handleResetChat = ()=>{
        setMessages([
            {
                sender: "ai",
                text: "Session context refreshed. How can I assist you with the verified portfolio data or background document?"
            }
        ]);
    };
    const handleSend = async (e)=>{
        e.preventDefault();
        if (!input.trim() || loading) return;
        const userText = input.trim();
        setInput("");
        // Map internal 'ai' sender to the standard 'model' identifier expected by the route
        const formattedHistory = messages.map((m)=>({
                sender: m.sender === "ai" ? "model" : "user",
                text: m.text
            }));
        setMessages((prev)=>[
                ...prev,
                {
                    sender: "user",
                    text: userText
                }
            ]);
        setLoading(true);
        try {
            const res = await fetch("/api/assistant", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userText,
                    history: formattedHistory,
                    context: data,
                    aiInstructions: data.aiInstructions
                })
            });
            const json = await res.json();
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: json.reply || "No response received from system telemetry."
                    }
                ]);
        } catch  {
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "ai",
                        text: "Connection interrupted. Please verify your network connection and server status."
                    }
                ]);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full glass-panel border border-[var(--color-primary)] text-[var(--color-text)] shadow-luxury-glow hover:scale-105 active:scale-95 transition-all group",
                "aria-label": "Open AI Assistant",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                className: "w-5 h-5 text-[var(--color-primary)] group-hover:rotate-12 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-ping absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AIAssistant.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs uppercase tracking-wider font-semibold font-serif hidden sm:inline",
                        children: "AI Assistant"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AIAssistant.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AIAssistant.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[540px] max-h-[85dvh] rounded-3xl glass-panel border border-[var(--color-border)] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-3.5 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 flex items-center justify-between flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 truncate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-bg)] shadow-luxury-glow flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIAssistant.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AIAssistant.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-sm font-bold text-[var(--color-text)]",
                                                children: data.aiCopy?.title || "Digital Twin AI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AIAssistant.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-mono text-[var(--color-primary)] truncate flex items-center gap-1",
                                                children: data.resumePdfName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-3 h-3 flex-shrink-0 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AIAssistant.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: [
                                                                "Indexed: ",
                                                                data.resumePdfName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AIAssistant.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AIAssistant.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this) : data.aiCopy?.subtitle || "Online • Grounded in system data"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AIAssistant.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AIAssistant.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleResetChat,
                                        className: "p-1.5 rounded-xl text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors",
                                        title: "Reset session history",
                                        "aria-label": "Reset session history",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIAssistant.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AIAssistant.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(false),
                                        className: "p-1.5 rounded-xl text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors",
                                        "aria-label": "Minimize AI Assistant",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIAssistant.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AIAssistant.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AIAssistant.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans book-scroll",
                        children: [
                            messages.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`,
                                    children: [
                                        m.sender === "ai" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 rounded-lg bg-[var(--color-primary)] text-[var(--color-bg)] flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5",
                                            children: "AI"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIAssistant.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[84%] px-3.5 py-2.5 rounded-2xl leading-relaxed whitespace-pre-line ${m.sender === "user" ? "bg-[var(--color-primary)] text-[var(--color-bg)] font-medium rounded-tr-sm shadow-sm" : "glass-panel border border-[var(--color-border)] text-[var(--color-text)] rounded-tl-sm"}`,
                                            children: m.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AIAssistant.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/components/AIAssistant.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[var(--color-muted)] text-xs font-mono pl-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-spin text-[var(--color-primary)]",
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AIAssistant.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    " Grounding response against portfolio state & PDF..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollRef
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AIAssistant.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSend,
                        className: "p-3 border-t border-[var(--color-border)] bg-[var(--color-surface)]/80 flex items-center gap-2 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                placeholder: data.aiCopy?.inputPlaceholder || "Ask about certificates, education, stack...",
                                className: "flex-1 px-3.5 py-2 rounded-xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] bg-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading || !input.trim(),
                                className: "p-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-bg)] hover:brightness-110 disabled:opacity-40 transition-all flex-shrink-0",
                                "aria-label": "Send message",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AIAssistant.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AIAssistant.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AIAssistant.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AIAssistant.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AIAssistant.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(AIAssistant, "jjdZCuYpPDjRlfLNFIIGHtRztqw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"]
    ];
});
_c = AIAssistant;
var _c;
__turbopack_context__.k.register(_c, "AIAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AdminModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/PortfolioContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.mjs [app-client] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.mjs [app-client] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check.mjs [app-client] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-up.mjs [app-client] (ecmascript) <export default as FileUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.mjs [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Inline Instagram SVG component to prevent missing lucide icon exports
function InstagramIcon({ className = "w-3 h-3" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "20",
                height: "20",
                x: "2",
                y: "2",
                rx: "5",
                ry: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/AdminModal.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }, void 0, false, {
                fileName: "[project]/src/components/AdminModal.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17.5",
                x2: "17.51",
                y1: "6.5",
                y2: "6.5"
            }, void 0, false, {
                fileName: "[project]/src/components/AdminModal.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AdminModal.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = InstagramIcon;
function AdminModal() {
    _s();
    const { data, updateData, deleteMessage, isAdminOpen, setIsAdminOpen, isAuthenticated, setIsAuthenticated, setTheme, activeTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"])();
    const [passcode, setPasscode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newPasscode, setNewPasscode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [spread, setSpread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isFlipping, setIsFlipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flipDirection, setFlipDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("forward");
    const [selectedProjectIndex, setSelectedProjectIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data);
    // PDF Parsing & Telemetry States
    const [parsingPdf, setParsingPdf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pdfStats, setPdfStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Multi-frame project upload state
    const [uploadingProject360, setUploadingProject360] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AdminModal.useEffect": ()=>{
            setFormData(data);
            setNewPasscode(data.adminPasscode || "fiker4620");
            if (data.resumePdfText) {
                setPdfStats(`Indexed document (${data.resumePdfText.length} characters)`);
            }
        }
    }["AdminModal.useEffect"], [
        data,
        isAdminOpen
    ]);
    if (!isAdminOpen) return null;
    const currentPassword = data.adminPasscode || "fiker4620";
    const handleLogin = (e)=>{
        e.preventDefault();
        if (passcode === currentPassword) {
            setIsAuthenticated(true);
            setError(false);
            setSpread(1);
        } else {
            setError(true);
        }
    };
    // Canvas Image Compression Helper (~70KB - 130KB per frame)
    const compressImage = (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = (event)=>{
                const img = new Image();
                img.src = event.target?.result;
                img.onload = ()=>{
                    const canvas = document.createElement("canvas");
                    const MAX_WIDTH = 600;
                    const MAX_HEIGHT = 600;
                    let width = img.width;
                    let height = img.height;
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = Math.round(width);
                    canvas.height = Math.round(height);
                    const ctx = canvas.getContext("2d");
                    ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
                    // 50% WebP quality keeps each frame at only ~25-35KB
                    resolve(canvas.toDataURL("image/webp", 0.5));
                };
                img.onerror = reject;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };
    // Single File Upload
    const handleFileUpload = async (e, onComplete)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.type.startsWith("video")) {
            alert("Please provide an external URL for videos.");
            return;
        }
        try {
            const compressed = await compressImage(file);
            onComplete(compressed, "image");
        } catch (err) {
            console.error("Compression error:", err);
        } finally{
            e.target.value = "";
        }
    };
    // Batch Upload 360° Frames for Currently Selected Project
    const handleProject360Upload = async (e)=>{
        const files = e.target.files;
        if (!files || files.length === 0) return;
        setUploadingProject360(true);
        try {
            const fileList = Array.from(files);
            const compressedBatch = [];
            for (const file of fileList){
                if (!file.type.startsWith("image/")) continue;
                try {
                    const comp = await compressImage(file);
                    if (comp) compressedBatch.push(comp);
                } catch (compErr) {
                    console.warn("Frame compression failure:", file.name, compErr);
                }
            }
            if (compressedBatch.length > 0) {
                setFormData((prev)=>{
                    const upProjects = [
                        ...prev.projects
                    ];
                    const target = upProjects[selectedProjectIndex];
                    if (!target) return prev;
                    const currentFrames = Array.isArray(target.rotation360Images) && target.rotation360Images.length > 0 ? target.rotation360Images : [
                        target.mediaUrl
                    ].filter(Boolean);
                    const combined = [
                        ...currentFrames,
                        ...compressedBatch
                    ];
                    upProjects[selectedProjectIndex] = {
                        ...target,
                        mediaUrl: combined[0] || target.mediaUrl,
                        rotation360Images: combined
                    };
                    return {
                        ...prev,
                        projects: upProjects
                    };
                });
            }
        } catch (err) {
            console.error("Project 360 upload processing error:", err);
        } finally{
            e.target.value = "";
            setUploadingProject360(false);
        }
    };
    // Server-Side PDF Ingestion with Safe Parsing
    const handlePdfUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.type !== "application/pdf" && !file.name.endsWith(".pdf")) {
            setPdfStats("Please select a valid .pdf file.");
            return;
        }
        setParsingPdf(true);
        setPdfStats("Transmitting and indexing document...");
        try {
            const formPayload = new FormData();
            formPayload.append("file", file);
            const res = await fetch("/api/parse-pdf", {
                method: "POST",
                body: formPayload
            });
            const rawResponse = await res.text();
            let json = {};
            try {
                json = JSON.parse(rawResponse);
            } catch  {
                throw new Error(`Server returned non-JSON response (${res.status}): ${rawResponse.slice(0, 100)}`);
            }
            if (!res.ok || json.success === false) {
                throw new Error(json.error || `Server error (HTTP ${res.status})`);
            }
            const cleanedText = (json.text || "").trim();
            setFormData((prev)=>({
                    ...prev,
                    resumePdfName: json.fileName || file.name,
                    resumePdfText: cleanedText
                }));
            setPdfStats(`Parsed ${json.numPages} page(s) (${cleanedText.length} characters indexed)`);
        } catch (err) {
            console.error("PDF Parsing Error:", err);
            setPdfStats(err.message || "Extraction failed. Ensure PDF is readable.");
        } finally{
            setParsingPdf(false);
            e.target.value = "";
        }
    };
    const handleRemovePdf = ()=>{
        setFormData((prev)=>({
                ...prev,
                resumePdfName: "",
                resumePdfText: ""
            }));
        setPdfStats(null);
    };
    const flipForward = ()=>{
        if (spread >= 4 || isFlipping) return;
        setIsFlipping(true);
        setFlipDirection("forward");
        setTimeout(()=>{
            setSpread((prev)=>prev + 1);
            setIsFlipping(false);
        }, 550);
    };
    const flipBackward = ()=>{
        if (spread <= 1 || isFlipping) return;
        setIsFlipping(true);
        setFlipDirection("backward");
        setTimeout(()=>{
            setSpread((prev)=>prev - 1);
            setIsFlipping(false);
        }, 550);
    };
    const handleThemeChange = (selectedTheme)=>{
        setFormData((prev)=>({
                ...prev,
                theme: selectedTheme
            }));
        setTheme(selectedTheme);
    };
    const handleSave = async (e)=>{
        if (e) e.stopPropagation();
        setSuccessMessage("Binding to cloud...");
        const payload = {
            ...formData,
            adminPasscode: newPasscode.trim() || currentPassword
        };
        const synced = await updateData(payload);
        if (synced) {
            setSuccessMessage("Globally Synchronized (Phone & PC)!");
        } else {
            setSuccessMessage("Saved to device & cloud!");
        }
        setTimeout(()=>setSuccessMessage(""), 3500);
    };
    const availableThemes = [
        {
            id: "obsidian-gold",
            label: "Obsidian & Gold",
            previewBg: "#09090b",
            ringColor: "ring-[#facc15]"
        },
        {
            id: "emerald-rose",
            label: "Emerald & Rose",
            previewBg: "#022019",
            ringColor: "ring-[#fb923c]"
        },
        {
            id: "sapphire-ice",
            label: "Sapphire & Ice",
            previewBg: "#081536",
            ringColor: "ring-[#38bdf8]"
        },
        {
            id: "minimal-alabaster",
            label: "70% Alabaster & 30% Carbon",
            previewBg: "#f8fafc",
            ringColor: "ring-[#d97706]"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 backdrop-blur-2xl transition-colors duration-500 overflow-hidden",
        style: {
            backgroundColor: activeTheme === "minimal-alabaster" ? "rgba(248, 250, 252, 0.88)" : "rgba(0, 0, 0, 0.88)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[92%] sm:w-auto gap-4 sm:gap-6 px-5 py-2.5 rounded-full glass-panel border border-[var(--color-border)] shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-4 h-4 text-[var(--color-primary)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminModal.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif text-xs font-bold uppercase tracking-wider text-[var(--color-text)]",
                                children: spread === 0 ? "Volume Sealed" : `Folios ${spread * 2 - 1} & ${spread * 2} of 8`
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminModal.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminModal.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-emerald-500 text-xs font-mono flex items-center gap-1.5 animate-pulse font-semibold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AdminModal.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            " ",
                            successMessage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AdminModal.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setIsAdminOpen(false);
                            setSpread(0);
                        },
                        className: "p-1 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors",
                        title: "Close Atelier",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AdminModal.tsx",
                            lineNumber: 344,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AdminModal.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AdminModal.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl h-[86dvh] max-h-[820px] flex items-center justify-center pt-10 sm:pt-0",
                style: {
                    perspective: 2800
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        spread === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.9,
                                opacity: 0,
                                rotateY: 15
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                rotateY: 0
                            },
                            exit: {
                                rotateY: -95,
                                x: -320,
                                opacity: 0,
                                transition: {
                                    duration: 0.75,
                                    ease: [
                                        0.65,
                                        0,
                                        0.35,
                                        1
                                    ]
                                }
                            },
                            style: {
                                transformOrigin: "left center",
                                transformStyle: "preserve-3d",
                                background: "linear-gradient(145deg, var(--color-surface) 0%, var(--color-bg) 100%)",
                                borderColor: "var(--color-border)"
                            },
                            className: "relative w-full max-w-sm sm:max-w-md h-[520px] sm:h-[580px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-[0_30px_90px_rgba(0,0,0,0.45)] border-2 overflow-hidden transition-colors duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-y-0 left-0 w-8 pointer-events-none opacity-40",
                                    style: {
                                        background: "linear-gradient(to right, var(--color-primary), transparent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex flex-col items-center gap-3 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-2xl glass-panel border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] shadow-luxury-glow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                                className: "w-8 h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AdminModal.tsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-mono tracking-widest uppercase text-[var(--color-primary)] font-bold",
                                            children: "Personal Codex"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-serif text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]",
                                            children: "The Master Atelier"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--color-muted)] max-w-xs leading-relaxed",
                                            children: "Provide master passcode to open folios and edit all site copy, projects, and AI documents."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 380,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleLogin,
                                    className: "relative z-10 w-full flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            placeholder: "Master Passcode...",
                                            value: passcode,
                                            onChange: (e)=>setPasscode(e.target.value),
                                            className: "w-full px-4 py-3 rounded-2xl glass-panel border border-[var(--color-border)] text-[var(--color-text)] text-center font-mono tracking-widest text-base sm:text-lg focus:outline-none focus:border-[var(--color-primary)] bg-transparent",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-500 font-medium",
                                            children: "Authentication invalid."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 404,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full py-3.5 rounded-2xl font-bold uppercase tracking-wider text-xs bg-[var(--color-primary)] text-[var(--color-bg)] shadow-luxury-glow hover:brightness-110 transition-all",
                                            children: "Turn & Open Book"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 text-[10px] font-mono text-[var(--color-muted)]",
                                    children: [
                                        "Default: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--color-primary)] font-bold",
                                            children: "fiker4620"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 415,
                                            columnNumber: 26
                                        }, this),
                                        " • Click to open"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "closed-book", true, {
                            fileName: "[project]/src/components/AdminModal.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        spread > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.97
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "relative w-full h-full flex flex-col lg:flex-row rounded-3xl border shadow-2xl overflow-hidden transition-colors duration-500",
                            style: {
                                backgroundColor: "var(--color-card)",
                                borderColor: "var(--color-border)",
                                transformStyle: "preserve-3d"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block absolute left-1/2 top-0 bottom-0 w-10 -translate-x-1/2 z-40 pointer-events-none border-x opacity-20",
                                    style: {
                                        background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.5))",
                                        borderColor: "var(--color-border)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 435,
                                    columnNumber: 15
                                }, this),
                                isFlipping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        rotateY: flipDirection === "forward" ? 0 : -180
                                    },
                                    animate: {
                                        rotateY: flipDirection === "forward" ? -180 : 0
                                    },
                                    transition: {
                                        duration: 0.55,
                                        ease: [
                                            0.65,
                                            0,
                                            0.35,
                                            1
                                        ]
                                    },
                                    style: {
                                        transformOrigin: flipDirection === "forward" ? "left center" : "right center",
                                        left: "50%",
                                        transformStyle: "preserve-3d"
                                    },
                                    className: "hidden lg:block absolute top-0 bottom-0 w-1/2 z-30 pointer-events-none rounded-r-3xl border border-[var(--color-border)] shadow-2xl overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex flex-col items-center justify-center p-8 border-l border-[var(--color-border)]",
                                            style: {
                                                backgroundColor: "var(--color-surface)",
                                                backfaceVisibility: "hidden"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-primary)] animate-pulse",
                                                    children: "✦"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-serif text-sm tracking-widest text-[var(--color-primary)] mt-3",
                                                    children: "Turning Folio..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 456,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex flex-col items-center justify-center p-8 border-r border-[var(--color-border)]",
                                            style: {
                                                backgroundColor: "var(--color-bg)",
                                                backfaceVisibility: "hidden",
                                                transform: "rotateY(180deg)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-primary)] animate-pulse",
                                                    children: "✦"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-serif text-sm tracking-widest text-[var(--color-primary)] mt-3",
                                                    children: "Opening Folio..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 463,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 445,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-1/2 h-1/2 lg:h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--color-border)] relative overflow-hidden transition-colors duration-500",
                                    style: {
                                        backgroundColor: "var(--color-surface)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: flipBackward,
                                            className: "flex items-center justify-between pb-2 sm:pb-3 border-b border-[var(--color-border)] flex-shrink-0 cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold",
                                                    children: [
                                                        "Folio ",
                                                        spread * 2 - 1,
                                                        " / 8"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] sm:text-xs font-mono text-[var(--color-muted)] flex items-center gap-1 group-hover:text-[var(--color-primary)] transition-colors",
                                                    children: spread > 1 ? "◂ Turn Back" : "Book Spine Anchor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 py-3 overflow-y-auto book-scroll min-h-0 flex flex-col gap-4 text-[var(--color-text)]",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                spread === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 499,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-xs sm:text-sm font-bold uppercase tracking-wider",
                                                                            children: "Active Atmosphere"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2 pt-1",
                                                                    children: availableThemes.map((t)=>{
                                                                        const isSelected = formData.theme === t.id;
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleThemeChange(t.id),
                                                                            className: `flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all ${isSelected ? "bg-[var(--color-bg)] border-[var(--color-primary)] shadow-sm" : "glass-panel border-[var(--color-border)] opacity-70 hover:opacity-100"}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `w-4 h-4 rounded-full border border-black/30 flex-shrink-0 ${isSelected ? `ring-2 ${t.ringColor} ring-offset-1 ring-offset-[var(--color-surface)]` : ""}`,
                                                                                    style: {
                                                                                        backgroundColor: t.previewBg
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 516,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[11px] font-medium truncate text-[var(--color-text)]",
                                                                                    children: t.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 522,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, t.id, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 506,
                                                                            columnNumber: 31
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-xs sm:text-sm font-bold uppercase tracking-wider",
                                                                            children: "Change Master Passcode"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 532,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: newPasscode,
                                                                    onChange: (e)=>setNewPasscode(e.target.value),
                                                                    className: "w-full px-3.5 py-2 rounded-xl glass-panel border border-[var(--color-border)] text-sm font-mono text-[var(--color-primary)] font-bold tracking-widest bg-transparent",
                                                                    placeholder: "Cipher..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 534,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 545,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-xs sm:text-sm font-bold uppercase tracking-wider",
                                                                            children: "Hero Status & Badges"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 546,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                                    children: "Badge Text"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 550,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.hero.badge,
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            hero: {
                                                                                                ...formData.hero,
                                                                                                badge: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] bg-transparent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 551,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                                    children: "Availability Label"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 559,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.hero.status,
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            hero: {
                                                                                                ...formData.hero,
                                                                                                status: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] bg-transparent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 560,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 558,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 21
                                                }, this),
                                                spread === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pb-2 border-b border-[var(--color-border)] flex-shrink-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs uppercase font-serif font-bold text-[var(--color-primary)]",
                                                                    children: [
                                                                        "Curated Works (",
                                                                        formData.projects.length,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 576,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        const newP = {
                                                                            id: Date.now().toString(),
                                                                            title: "Engineered Architecture",
                                                                            tagline: "High-Performance System",
                                                                            description: "Mathematical modeling and scalable server architecture.",
                                                                            tags: [
                                                                                "TypeScript",
                                                                                "Next.js"
                                                                            ],
                                                                            mediaType: "image",
                                                                            mediaUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                                                                            rotation360Images: [],
                                                                            liveUrl: "https://",
                                                                            githubUrl: "https://github.com",
                                                                            featured: true
                                                                        };
                                                                        setFormData({
                                                                            ...formData,
                                                                            projects: [
                                                                                newP,
                                                                                ...formData.projects
                                                                            ]
                                                                        });
                                                                        setSelectedProjectIndex(0);
                                                                    },
                                                                    className: "px-2.5 py-1 rounded-lg bg-[var(--color-primary)] text-[var(--color-bg)] text-xs font-bold flex items-center gap-1 hover:brightness-110",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "w-3.5 h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " Add Project"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 575,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 overflow-x-auto pb-1 flex-shrink-0 book-scroll",
                                                            children: formData.projects.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setSelectedProjectIndex(idx),
                                                                    className: `px-3 py-1.5 rounded-xl text-left whitespace-nowrap transition-all border text-xs ${selectedProjectIndex === idx ? "bg-[var(--color-primary)] text-[var(--color-bg)] font-bold border-[var(--color-primary)] shadow-sm" : "glass-panel text-[var(--color-muted)] border-[var(--color-border)] hover:text-[var(--color-text)]"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate max-w-[120px] inline-block",
                                                                        children: p.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                        lineNumber: 616,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, p.id, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 606,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 23
                                                        }, this),
                                                        formData.projects[selectedProjectIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                                    children: "Project Title"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 625,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.projects[selectedProjectIndex].title,
                                                                                    onChange: (e)=>{
                                                                                        const up = [
                                                                                            ...formData.projects
                                                                                        ];
                                                                                        up[selectedProjectIndex].title = e.target.value;
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            projects: up
                                                                                        });
                                                                                    },
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs sm:text-sm font-bold text-[var(--color-text)] bg-transparent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 626,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>{
                                                                                const up = formData.projects.filter((_, i)=>i !== selectedProjectIndex);
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    projects: up
                                                                                });
                                                                                setSelectedProjectIndex(Math.max(0, selectedProjectIndex - 1));
                                                                            },
                                                                            className: "p-2 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors self-end",
                                                                            title: "Delete project",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminModal.tsx",
                                                                                lineNumber: 647,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                                    children: "Tagline"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 653,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.projects[selectedProjectIndex].tagline,
                                                                                    onChange: (e)=>{
                                                                                        const up = [
                                                                                            ...formData.projects
                                                                                        ];
                                                                                        up[selectedProjectIndex].tagline = e.target.value;
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            projects: up
                                                                                        });
                                                                                    },
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-primary)] bg-transparent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 654,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 652,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                                    children: "Tech Tags"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 666,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.projects[selectedProjectIndex].tags.join(", "),
                                                                                    onChange: (e)=>{
                                                                                        const up = [
                                                                                            ...formData.projects
                                                                                        ];
                                                                                        up[selectedProjectIndex].tags = e.target.value.split(",").map((t)=>t.trim()).filter(Boolean);
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            projects: up
                                                                                        });
                                                                                    },
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-muted)] bg-transparent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 667,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 665,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 651,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                            children: "Architecture Summary"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 681,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            rows: 3,
                                                                            value: formData.projects[selectedProjectIndex].description,
                                                                            onChange: (e)=>{
                                                                                const up = [
                                                                                    ...formData.projects
                                                                                ];
                                                                                up[selectedProjectIndex].description = e.target.value;
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    projects: up
                                                                                });
                                                                            },
                                                                            className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] resize-none leading-relaxed bg-transparent"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 682,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 21
                                                }, this),
                                                spread === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pb-2 border-b border-[var(--color-border)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 703,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-xs sm:text-sm font-bold uppercase tracking-wider",
                                                                            children: [
                                                                                "Dynamic Skills Categories (",
                                                                                formData.skills?.length || 0,
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 704,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 702,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        const newCategory = {
                                                                            category: "New Competency Domain",
                                                                            list: [
                                                                                "Skill Alpha",
                                                                                "Skill Beta"
                                                                            ]
                                                                        };
                                                                        setFormData({
                                                                            ...formData,
                                                                            skills: [
                                                                                ...formData.skills || [],
                                                                                newCategory
                                                                            ]
                                                                        });
                                                                    },
                                                                    className: "px-2.5 py-1 rounded-lg bg-[var(--color-primary)] text-[var(--color-bg)] text-xs font-bold flex items-center gap-1 hover:brightness-110",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            className: "w-3.5 h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 722,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        " Add Domain"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 708,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-3",
                                                            children: formData.skills?.map((catGroup, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3.5 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: catGroup.category,
                                                                                    onChange: (e)=>{
                                                                                        const updated = [
                                                                                            ...formData.skills
                                                                                        ];
                                                                                        updated[cIdx].category = e.target.value;
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            skills: updated
                                                                                        });
                                                                                    },
                                                                                    className: "flex-1 px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-bold font-serif text-[var(--color-text)] bg-transparent",
                                                                                    placeholder: "Category Title"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 730,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        const updated = formData.skills.filter((_, i)=>i !== cIdx);
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            skills: updated
                                                                                        });
                                                                                    },
                                                                                    className: "p-1.5 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors",
                                                                                    title: "Remove Domain",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                                        lineNumber: 750,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 741,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 729,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: catGroup.list.join(", "),
                                                                                onChange: (e)=>{
                                                                                    const updated = [
                                                                                        ...formData.skills
                                                                                    ];
                                                                                    updated[cIdx].list = e.target.value.split(",").map((s)=>s.trim()).filter(Boolean);
                                                                                    setFormData({
                                                                                        ...formData,
                                                                                        skills: updated
                                                                                    });
                                                                                },
                                                                                className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-primary)] bg-transparent",
                                                                                placeholder: "Node.js, PostgreSQL, Docker..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/AdminModal.tsx",
                                                                                lineNumber: 755,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 754,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, cIdx, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 728,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 21
                                                }, this),
                                                spread === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3.5 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 778,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-xs sm:text-sm font-bold uppercase tracking-wider",
                                                                            children: "Direct Contact Channels"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 779,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-[var(--color-muted)] leading-tight",
                                                                    children: "Configure live phone numbers, transmission emails, and social handles displayed across the portfolio."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 783,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1 flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                            className: "w-3 h-3 text-[var(--color-primary)]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 790,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        " Primary Email"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 789,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "email",
                                                                                    value: formData.contact.email,
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            contact: {
                                                                                                ...formData.contact,
                                                                                                email: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] bg-transparent",
                                                                                    placeholder: "fikiylkal@gmail.com"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 792,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 788,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1 flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                            className: "w-3 h-3 text-[var(--color-primary)]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 803,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        " Phone / Call"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 802,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.contact.phone,
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            contact: {
                                                                                                ...formData.contact,
                                                                                                phone: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] bg-transparent",
                                                                                    placeholder: "+251 900 000 000"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 805,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 801,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1 flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                                            className: "w-3 h-3 text-[var(--color-primary)]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 816,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        " Telegram Handle"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 815,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.contact.telegram,
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            contact: {
                                                                                                ...formData.contact,
                                                                                                telegram: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] bg-transparent",
                                                                                    placeholder: "https://t.me/..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 818,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 814,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1 flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIcon, {
                                                                                            className: "w-3 h-3 text-[var(--color-primary)]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 829,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        " Instagram Link"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 828,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.contact.instagram,
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            contact: {
                                                                                                ...formData.contact,
                                                                                                instagram: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] bg-transparent",
                                                                                    placeholder: "https://instagram.com/..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 831,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 827,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pb-1 border-b border-[var(--color-border)]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                        lineNumber: 845,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-serif text-xs font-bold uppercase tracking-wider",
                                                                        children: [
                                                                            "Live Messages Inbox (",
                                                                            data.messages?.length || 0,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                        lineNumber: 846,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminModal.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 843,
                                                            columnNumber: 23
                                                        }, this),
                                                        !data.messages || data.messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center py-6 px-4 rounded-2xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-muted)] font-mono",
                                                            children: "No transmissions received yet. Inquiries will arrive here in real-time."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 853,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2 max-h-[200px] overflow-y-auto book-scroll pr-1",
                                                            children: data.messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "truncate",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "font-serif font-bold text-xs text-[var(--color-text)]",
                                                                                            children: m.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 862,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] font-mono text-[var(--color-primary)] ml-1.5",
                                                                                            children: [
                                                                                                "(",
                                                                                                m.email,
                                                                                                ")"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 863,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 861,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>deleteMessage(m.id),
                                                                                    className: "text-red-400 hover:text-red-500 p-1",
                                                                                    title: "Delete message",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "w-3.5 h-3.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                                        lineNumber: 871,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 865,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 860,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        m.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] font-mono font-semibold text-[var(--color-text)]",
                                                                            children: m.subject
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 874,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-[var(--color-muted)] font-sans leading-relaxed whitespace-pre-line bg-[var(--color-bg)]/40 p-2 rounded-xl",
                                                                            children: m.message
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 875,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between text-[10px] font-mono text-[var(--color-muted)] pt-0.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                            className: "w-3 h-3 text-[var(--color-primary)]"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 880,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        new Date(m.createdAt).toLocaleDateString()
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 879,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: `mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject || "Portfolio Inquiry")}`,
                                                                                    className: "text-[var(--color-primary)] font-bold hover:underline",
                                                                                    children: "Reply via Email"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 883,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 878,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, m.id, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 859,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: flipBackward,
                                            className: "pt-2 sm:pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[10px] sm:text-xs font-mono text-[var(--color-muted)] cursor-pointer hover:text-[var(--color-primary)] flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 903,
                                                            columnNumber: 61
                                                        }, this),
                                                        " Turn Back"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Folio ",
                                                        spread * 2 - 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 899,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-1/2 h-1/2 lg:h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden transition-colors duration-500",
                                    style: {
                                        backgroundColor: "var(--color-surface)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: flipForward,
                                            className: "flex items-center justify-between pb-2 sm:pb-3 border-b border-[var(--color-border)] flex-shrink-0 cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] sm:text-xs font-mono text-[var(--color-muted)] flex items-center gap-1 group-hover:text-[var(--color-primary)] transition-colors",
                                                    children: spread < 4 ? "Turn Forward ▸" : "Final Leaf"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold",
                                                    children: [
                                                        "Folio ",
                                                        spread * 2,
                                                        " / 8"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 920,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 py-3 overflow-y-auto book-scroll min-h-0 flex flex-col gap-4 text-[var(--color-text)]",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                spread === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                    children: "Display Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 933,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.hero.name || "",
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            hero: {
                                                                                ...formData.hero,
                                                                                name: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs sm:text-sm font-bold text-[var(--color-primary)] font-serif bg-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 934,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 932,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                    children: "Headline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 942,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.hero.headline,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            hero: {
                                                                                ...formData.hero,
                                                                                headline: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs sm:text-sm font-serif text-[var(--color-text)] font-bold bg-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 943,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 941,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                    children: "Subheadline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 951,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.hero.subheadline,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            hero: {
                                                                                ...formData.hero,
                                                                                subheadline: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] bg-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 952,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 950,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                    children: "Biography"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 960,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    rows: 2,
                                                                    value: formData.hero.bio,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            hero: {
                                                                                ...formData.hero,
                                                                                bio: e.target.value
                                                                            }
                                                                        }),
                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] resize-none leading-relaxed bg-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 961,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 959,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                    children: "Hero Portrait Asset"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 971,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: formData.hero.avatarUrl,
                                                                            onChange: (e)=>setFormData({
                                                                                    ...formData,
                                                                                    hero: {
                                                                                        ...formData.hero,
                                                                                        avatarUrl: e.target.value
                                                                                    }
                                                                                }),
                                                                            className: "flex-1 px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] bg-transparent",
                                                                            placeholder: "Image URL or upload..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 973,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-primary)] text-xs text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] transition-all",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 981,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Upload"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 982,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "file",
                                                                                    accept: "image/*",
                                                                                    className: "hidden",
                                                                                    onChange: (e)=>handleFileUpload(e, (dataUrl)=>{
                                                                                            setFormData({
                                                                                                ...formData,
                                                                                                hero: {
                                                                                                    ...formData.hero,
                                                                                                    avatarUrl: dataUrl
                                                                                                }
                                                                                            });
                                                                                        })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 983,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 980,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 970,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 21
                                                }, this),
                                                spread === 2 && formData.projects[selectedProjectIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                            children: "Live URL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1005,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: formData.projects[selectedProjectIndex].liveUrl || "",
                                                                            onChange: (e)=>{
                                                                                const up = [
                                                                                    ...formData.projects
                                                                                ];
                                                                                up[selectedProjectIndex].liveUrl = e.target.value;
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    projects: up
                                                                                });
                                                                            },
                                                                            className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] bg-transparent",
                                                                            placeholder: "https://..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1006,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1004,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                            children: "GitHub URL"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1019,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: formData.projects[selectedProjectIndex].githubUrl || "",
                                                                            onChange: (e)=>{
                                                                                const up = [
                                                                                    ...formData.projects
                                                                                ];
                                                                                up[selectedProjectIndex].githubUrl = e.target.value;
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    projects: up
                                                                                });
                                                                            },
                                                                            className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs font-mono text-[var(--color-text)] bg-transparent",
                                                                            placeholder: "https://github.com/..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1020,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1018,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3.5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-mono uppercase tracking-wider text-[var(--color-primary)] font-bold flex items-center gap-1.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                                                                                    className: "w-3.5 h-3.5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1038,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        "Project 360° Perspectives (",
                                                                                        formData.projects[selectedProjectIndex].rotation360Images?.length || 1,
                                                                                        " frames)"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1039,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1037,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        (formData.projects[selectedProjectIndex].rotation360Images?.length || 0) > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>{
                                                                                const up = [
                                                                                    ...formData.projects
                                                                                ];
                                                                                up[selectedProjectIndex].rotation360Images = [
                                                                                    up[selectedProjectIndex].mediaUrl || ""
                                                                                ];
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    projects: up
                                                                                });
                                                                            },
                                                                            className: "text-[10px] font-mono text-red-400 hover:underline",
                                                                            children: "Clear 360"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1042,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1036,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-[var(--color-muted)] leading-tight",
                                                                    children: "Upload multiple perspective photos for this project. Visitors will be able to spin and view it in 360°!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1056,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2 items-center flex-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--color-primary)] text-[var(--color-bg)] text-xs font-bold hover:brightness-110 transition-all shadow-sm",
                                                                            children: [
                                                                                uploadingProject360 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            className: "w-3.5 h-3.5 animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1064,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "Compressing Frames..."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1065,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1063,
                                                                                    columnNumber: 31
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                                            className: "w-3.5 h-3.5"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1069,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "Upload Multiple 360° Frames"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1070,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1068,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "file",
                                                                                    accept: "image/*",
                                                                                    multiple: true,
                                                                                    disabled: uploadingProject360,
                                                                                    className: "hidden",
                                                                                    onChange: handleProject360Upload
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1073,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1061,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "cursor-pointer inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-text)] hover:border-[var(--color-primary)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                                    className: "w-3 h-3 text-[var(--color-primary)]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1084,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Single Thumbnail"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1085,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "file",
                                                                                    accept: "image/*",
                                                                                    className: "hidden",
                                                                                    onChange: (e)=>handleFileUpload(e, (dataUrl)=>{
                                                                                            const up = [
                                                                                                ...formData.projects
                                                                                            ];
                                                                                            up[selectedProjectIndex].mediaUrl = dataUrl;
                                                                                            up[selectedProjectIndex].rotation360Images = [
                                                                                                dataUrl
                                                                                            ];
                                                                                            setFormData({
                                                                                                ...formData,
                                                                                                projects: up
                                                                                            });
                                                                                        })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1086,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1083,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1060,
                                                                    columnNumber: 25
                                                                }, this),
                                                                formData.projects[selectedProjectIndex].rotation360Images && formData.projects[selectedProjectIndex].rotation360Images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-1.5 overflow-x-auto py-1 book-scroll",
                                                                    children: formData.projects[selectedProjectIndex].rotation360Images.map((imgUrl, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-[var(--color-border)] group",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: imgUrl,
                                                                                    alt: `Project frame ${i + 1}`,
                                                                                    className: "w-full h-full object-cover"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1105,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "absolute bottom-0 right-0 bg-black/75 text-[8px] font-mono px-1 text-white",
                                                                                    children: i + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1106,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>{
                                                                                        const up = [
                                                                                            ...formData.projects
                                                                                        ];
                                                                                        const filtered = (up[selectedProjectIndex].rotation360Images || []).filter((_, idx)=>idx !== i);
                                                                                        up[selectedProjectIndex].rotation360Images = filtered;
                                                                                        up[selectedProjectIndex].mediaUrl = filtered[0] || up[selectedProjectIndex].mediaUrl;
                                                                                        setFormData({
                                                                                            ...formData,
                                                                                            projects: up
                                                                                        });
                                                                                    },
                                                                                    className: "absolute top-0 right-0 p-0.5 bg-red-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        className: "w-2.5 h-2.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                                        lineNumber: 1120,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1109,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1104,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1102,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1035,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 1002,
                                                    columnNumber: 21
                                                }, this),
                                                spread === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                        lineNumber: 1135,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-serif text-xs sm:text-sm font-bold uppercase tracking-wider",
                                                                        children: "GitHub Username Handle"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                                        lineNumber: 1136,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AdminModal.tsx",
                                                                lineNumber: 1134,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-[var(--color-muted)]",
                                                                children: "Provide your GitHub username to sync profile and repositories."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminModal.tsx",
                                                                lineNumber: 1138,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.githubUsername,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        githubUsername: e.target.value
                                                                    }),
                                                                className: "w-full px-3.5 py-2.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs sm:text-sm font-mono text-[var(--color-text)] bg-transparent",
                                                                placeholder: "GitHub Username"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AdminModal.tsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AdminModal.tsx",
                                                        lineNumber: 1133,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 1132,
                                                    columnNumber: 21
                                                }, this),
                                                spread === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3.5 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1158,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "font-serif text-xs sm:text-sm font-bold uppercase tracking-wider",
                                                                                    children: "AI Knowledge Base Document (PDF)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1159,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1157,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        formData.resumePdfName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20",
                                                                            children: "Indexed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1164,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1156,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-[var(--color-muted)] leading-relaxed",
                                                                    children: "Upload your resume, CV, or detailed background document. The AI Assistant will ingest every page."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1170,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 flex-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-bg)] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-sm",
                                                                            children: [
                                                                                parsingPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                                            className: "w-3.5 h-3.5 animate-spin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1178,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: "Ingesting PDF..."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1179,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1177,
                                                                                    columnNumber: 31
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"], {
                                                                                            className: "w-3.5 h-3.5"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1183,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: formData.resumePdfName ? "Replace PDF" : "Upload Background PDF"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                                            lineNumber: 1184,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1182,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "file",
                                                                                    accept: "application/pdf",
                                                                                    disabled: parsingPdf,
                                                                                    className: "hidden",
                                                                                    onChange: handlePdfUpload
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1187,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1175,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        formData.resumePdfName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: handleRemovePdf,
                                                                            className: "px-3 py-2 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors text-xs font-mono border border-red-500/20",
                                                                            title: "Remove Ingested Document",
                                                                            children: "Remove PDF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1197,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1174,
                                                                    columnNumber: 25
                                                                }, this),
                                                                formData.resumePdfName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] font-mono text-[var(--color-primary)] truncate mt-1",
                                                                    children: [
                                                                        "📄 ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: formData.resumePdfName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1210,
                                                                            columnNumber: 32
                                                                        }, this),
                                                                        " ",
                                                                        pdfStats && `• ${pdfStats}`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1209,
                                                                    columnNumber: 27
                                                                }, this),
                                                                !formData.resumePdfName && pdfStats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] font-mono text-amber-400",
                                                                    children: pdfStats
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1214,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1221,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-xs font-bold uppercase tracking-wider",
                                                                            children: "Contact Form Copy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1222,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1220,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                                    children: "Heading"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1226,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.contactCopy?.heading || "",
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            contactCopy: {
                                                                                                ...formData.contactCopy,
                                                                                                heading: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-2.5 py-1.5 rounded-lg glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] bg-transparent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1227,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1225,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "block text-[10px] font-mono uppercase text-[var(--color-muted)] mb-1",
                                                                                    children: "Button Label"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1235,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: formData.contactCopy?.buttonText || "",
                                                                                    onChange: (e)=>setFormData({
                                                                                            ...formData,
                                                                                            contactCopy: {
                                                                                                ...formData.contactCopy,
                                                                                                buttonText: e.target.value
                                                                                            }
                                                                                        }),
                                                                                    className: "w-full px-2.5 py-1.5 rounded-lg glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] bg-transparent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                                    lineNumber: 1236,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1234,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1224,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1219,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-2xl glass-panel border border-[var(--color-border)] flex flex-col gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-[var(--color-primary)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1249,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-serif text-xs font-bold uppercase tracking-wider",
                                                                            children: "Gemini AI Persona Directives"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                                            lineNumber: 1250,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1248,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    rows: 2,
                                                                    value: formData.aiInstructions,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            aiInstructions: e.target.value
                                                                        }),
                                                                    className: "w-full px-3 py-1.5 rounded-xl glass-panel border border-[var(--color-border)] text-xs text-[var(--color-text)] resize-none leading-relaxed bg-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1252,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1247,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleSave,
                                                            className: "w-full py-3 rounded-2xl bg-[var(--color-primary)] text-[var(--color-bg)] font-bold text-xs uppercase tracking-widest shadow-luxury-glow hover:brightness-110 transition-all flex items-center justify-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1266,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Inscribe & Bind Grimoire"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                                    lineNumber: 1267,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1261,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 925,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: flipForward,
                                            className: "pt-2 sm:pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[10px] sm:text-xs font-mono text-[var(--color-muted)] cursor-pointer hover:text-[var(--color-primary)] flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        spread < 4 ? "Turn Forward" : "✦ Complete Edition",
                                                        spread < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1280,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 1278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleSave,
                                                    className: "text-[var(--color-primary)] font-bold hover:underline flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AdminModal.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Save"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AdminModal.tsx",
                                                    lineNumber: 1282,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AdminModal.tsx",
                                            lineNumber: 1274,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AdminModal.tsx",
                                    lineNumber: 909,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "book-desk", true, {
                            fileName: "[project]/src/components/AdminModal.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AdminModal.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AdminModal.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AdminModal.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_s(AdminModal, "WqnbFpr+ytzhCYay1xcy3+1GIDw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"]
    ];
});
_c1 = AdminModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "InstagramIcon");
__turbopack_context__.k.register(_c1, "AdminModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/PortfolioContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const { setIsAdminOpen, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navLinks = [
        {
            label: "Overview",
            href: "#hero"
        },
        {
            label: "Selected Works",
            href: "#projects"
        },
        {
            label: "Expertise",
            href: "#skills"
        },
        {
            label: "Connect",
            href: "#contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl glass-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "group flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-xl flex items-center justify-center font-serif font-bold text-lg border border-[var(--color-primary)] bg-[var(--color-surface)] text-[var(--color-primary)] group-hover:shadow-[0_0_20px_var(--color-primary-glow)] transition-all",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif tracking-widest text-sm sm:text-base font-semibold text-[var(--color-text)] uppercase group-hover:text-[var(--color-primary)] transition-colors",
                                children: "Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-xs uppercase tracking-widest font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors",
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsAdminOpen(true),
                                "aria-label": "Admin Portal",
                                className: `p-2 rounded-xl border border-[var(--color-border)] transition-all duration-300 ${isAuthenticated ? "bg-[var(--color-primary)] text-[var(--color-bg)] shadow-[0_0_15px_var(--color-primary-glow)]" : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"}`,
                                title: isAuthenticated ? "Admin Active" : "Access Admin CMS",
                                children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "md:hidden p-2 rounded-xl text-[var(--color-muted)] hover:text-[var(--color-text)]",
                                "aria-label": "Toggle menu",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 59
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden mt-2 p-5 rounded-2xl glass-panel flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-200",
                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        onClick: ()=>setMobileMenuOpen(false),
                        className: "text-sm font-medium tracking-wide text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors py-1",
                        children: link.label
                    }, link.label, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Navbar, "e6XdInAJRe6PEp/sxzmjv/lCvHQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/PortfolioContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ThemeSwitcher() {
    _s();
    const { activeTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"])();
    const themes = [
        {
            id: "obsidian-gold",
            label: "Obsidian & Gold",
            previewBg: "#09090b",
            ringColor: "ring-[#facc15]"
        },
        {
            id: "emerald-rose",
            label: "Emerald & Rose",
            previewBg: "#022019",
            ringColor: "ring-[#fb923c]"
        },
        {
            id: "sapphire-ice",
            label: "Sapphire & Ice",
            previewBg: "#081536",
            ringColor: "ring-[#38bdf8]"
        },
        {
            id: "minimal-alabaster",
            label: "70% Alabaster White & 30% Carbon Gold",
            previewBg: "#f8fafc",
            ringColor: "ring-[#d97706]"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 p-1.5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm",
        children: themes.map((t)=>{
            const isActive = activeTheme === t.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setTheme(t.id),
                title: t.label,
                "aria-label": `Switch to ${t.label}`,
                style: {
                    backgroundColor: t.previewBg
                },
                className: `w-5 h-5 rounded-full transition-all duration-300 border border-black/30 shadow-inner flex-shrink-0 ${isActive ? `ring-2 ${t.ringColor} ring-offset-2 ring-offset-[var(--color-surface)] scale-110` : "opacity-60 hover:opacity-100 hover:scale-105"}`
            }, t.id, false, {
                fileName: "[project]/src/components/ThemeSwitcher.tsx",
                lineNumber: 47,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeSwitcher.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(ThemeSwitcher, "khiRvaApBjNrcIbm62exGNVN0ek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$PortfolioContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolio"]
    ];
});
_c = ThemeSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ThemeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/PortfolioContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioProvider",
    ()=>PortfolioProvider,
    "usePortfolio",
    ()=>usePortfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/initialData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const PortfolioContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = "luxury_portfolio_data_v2";
function PortfolioProvider({ children }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialData"]);
    const [isAdminOpen, setIsAdminOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const applyTheme = (theme)=>{
        document.documentElement.setAttribute("data-theme", theme);
        document.body.setAttribute("data-theme", theme);
    };
    // Safe deep merger that prioritizes USER DATA over initialData
    const mergeData = (incoming, fallback)=>{
        if (!incoming || typeof incoming !== "object") return fallback;
        return {
            ...fallback,
            ...incoming,
            navbar: {
                ...fallback.navbar,
                ...incoming.navbar || {}
            },
            hero: {
                ...fallback.hero,
                ...incoming.hero || {},
                rotation360Images: incoming?.hero?.rotation360Images?.length > 0 ? incoming.hero.rotation360Images : incoming?.hero?.avatarUrl ? [
                    incoming.hero.avatarUrl
                ] : fallback.hero.rotation360Images
            },
            // CRUCIAL: If incoming has projects, NEVER overwrite with fallback projects!
            projects: Array.isArray(incoming.projects) && incoming.projects.length > 0 ? incoming.projects : fallback.projects,
            skills: Array.isArray(incoming.skills) && incoming.skills.length > 0 ? incoming.skills : fallback.skills,
            projectsCopy: {
                ...fallback.projectsCopy,
                ...incoming.projectsCopy || {}
            },
            skillsCopy: {
                ...fallback.skillsCopy,
                ...incoming.skillsCopy || {}
            },
            githubCopy: {
                ...fallback.githubCopy,
                ...incoming.githubCopy || {}
            },
            contactCopy: {
                ...fallback.contactCopy,
                ...incoming.contactCopy || {}
            },
            contact: {
                ...fallback.contact,
                ...incoming.contact || {}
            },
            aiCopy: {
                ...fallback.aiCopy,
                ...incoming.aiCopy || {}
            },
            messages: Array.isArray(incoming.messages) ? incoming.messages : fallback.messages || []
        };
    };
    // 1. Initial Load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioProvider.useEffect": ()=>{
            let currentBestData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialData"];
            // A. Read LocalStorage First
            try {
                const localRaw = localStorage.getItem(STORAGE_KEY);
                if (localRaw) {
                    const parsed = JSON.parse(localRaw);
                    currentBestData = mergeData(parsed, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialData"]);
                    setData(currentBestData);
                    applyTheme(currentBestData.theme || "obsidian-gold");
                    console.log("[PortfolioContext] Loaded from LocalStorage:", currentBestData);
                } else {
                    applyTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialData"].theme || "obsidian-gold");
                }
            } catch (e) {
                console.warn("[PortfolioContext] LocalStorage read failed:", e);
            }
            // B. Fetch from API (Cloud Database)
            async function fetchCloudData() {
                try {
                    const res = await fetch(`/api/portfolio?t=${Date.now()}`, {
                        cache: "no-store",
                        headers: {
                            Pragma: "no-cache"
                        }
                    });
                    if (!res.ok) return;
                    const json = await res.json();
                    if (json.success && json.data) {
                        // If cloud has valid user data, merge it with current best data
                        const cloudMerged = mergeData(json.data, currentBestData);
                        setData(cloudMerged);
                        applyTheme(cloudMerged.theme || "obsidian-gold");
                        console.log("[PortfolioContext] Synced with Cloud DB:", cloudMerged);
                        try {
                            localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudMerged));
                        } catch  {}
                    }
                } catch (err) {
                    console.warn("[PortfolioContext] Cloud fetch error:", err);
                }
            }
            fetchCloudData();
        }
    }["PortfolioProvider.useEffect"], []);
    // 2. Save Data Function
    const updateData = async (newData)=>{
        let updatedPayload = {
            ...data,
            ...newData
        };
        setData((prev)=>{
            updatedPayload = mergeData(newData, prev);
            return updatedPayload;
        });
        applyTheme(updatedPayload.theme || "obsidian-gold");
        // A. Always save to LocalStorage immediately
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPayload));
            console.log("[PortfolioContext] Successfully saved to LocalStorage:", updatedPayload);
        } catch (e) {
            console.warn("[PortfolioContext] LocalStorage quota exceeded:", e);
        }
        // B. Push to Server / Cloud Database
        try {
            const res = await fetch("/api/portfolio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedPayload)
            });
            const json = await res.json();
            console.log("[PortfolioContext] Server save response:", json);
            return json.success === true;
        } catch (err) {
            console.error("[PortfolioContext] Cloud save network failure:", err);
            // Even if network fails, user data is safe in localStorage
            return true;
        }
    };
    const addMessage = (msg)=>{
        const newMessage = {
            ...msg,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            read: false
        };
        const updatedMessages = [
            newMessage,
            ...data.messages || []
        ];
        updateData({
            messages: updatedMessages
        });
        return newMessage;
    };
    const deleteMessage = (id)=>{
        const updated = (data.messages || []).filter((m)=>m.id !== id);
        updateData({
            messages: updated
        });
    };
    const setTheme = (theme)=>{
        applyTheme(theme);
        updateData({
            theme
        });
    };
    const resetData = ()=>{
        setData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialData"]);
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch  {}
        applyTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$initialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialData"].theme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioContext.Provider, {
        value: {
            data,
            updateData,
            resetData,
            addMessage,
            deleteMessage,
            isAdminOpen,
            setIsAdminOpen,
            isAuthenticated,
            setIsAuthenticated,
            activeTheme: data.theme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/PortfolioContext.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(PortfolioProvider, "yCZHudmwO2oXJ7hYssU8fNAc3fg=");
_c = PortfolioProvider;
function usePortfolio() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PortfolioContext);
    if (!context) {
        throw new Error("usePortfolio must be used within a PortfolioProvider");
    }
    return context;
}
_s1(usePortfolio, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "PortfolioProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/initialData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialData",
    ()=>initialData
]);
const initialData = {
    adminPasscode: "fiker4620",
    theme: "obsidian-gold",
    navbar: {
        brandMonogram: "✦",
        brandTitle: "Portfolio",
        navOverview: "Overview",
        navProjects: "Selected Works",
        navSkills: "Expertise",
        navContact: "Connect"
    },
    hero: {
        name: "Abdulbasit Ylkal Abate",
        badge: "Available for High-Impact Roles",
        status: "Active & Available",
        headline: "Architecting Resilient Software & Scalable AI Systems",
        subheadline: "Full-Stack Software Engineer & Distributed Systems Developer",
        bio: "Specializing in high-throughput backend services, modern reactive web interfaces, database optimization, and automated machine learning scoring microservices.",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        // 360° Rotation Frames initialized with sequential angles:
        rotation360Images: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
        ],
        resumeUrl: "#",
        ctaPrimaryText: "Explore Architectural Works",
        ctaSecondaryText: "Initiate Consultation"
    },
    projectsCopy: {
        badge: "Selected Portfolio Works",
        heading: "Engineered Deployments & Systems",
        subheading: "A curated index of production architectures, AI pipelines, and distributed platforms."
    },
    projects: [
        {
            id: "smart-internship",
            title: "Smart Internship & Job Matching System",
            tagline: "AI Matching & Multi-Role Pipeline",
            description: "FastAPI and Express microservice architecture with automated scoring algorithms, normalized database schema, and role-based matching workflows.",
            tags: [
                "FastAPI",
                "Express.js",
                "PostgreSQL",
                "Next.js"
            ],
            mediaType: "image",
            mediaUrl: "",
            rotation360Images: [],
            liveUrl: "https://",
            githubUrl: "https://github.com/Fonkaa",
            featured: true
        },
        {
            id: "homerentalpro",
            title: "HomeRentalPro",
            tagline: "Full-Stack Property Management",
            description: "Robust property management endpoints, automated database migration scripts, transaction management, and rental verification pipelines.",
            tags: [
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Docker"
            ],
            mediaType: "image",
            mediaUrl: "",
            rotation360Images: [],
            liveUrl: "https://",
            githubUrl: "https://github.com/Fonkaa",
            featured: true
        }
    ],
    skillsCopy: {
        badge: "Core Technical Disciplines",
        heading: "Architectural Disciplines & Stack",
        subheading: "Battle-tested competencies across backend systems, web interfaces, and automated infrastructure."
    },
    skills: [
        {
            category: "Backend & Systems",
            list: [
                "FastAPI",
                "Express.js",
                "Node.js",
                "Python",
                "REST APIs",
                "Concurrency Management"
            ]
        },
        {
            category: "Databases & Storage",
            list: [
                "PostgreSQL",
                "Database Migrations",
                "Schema Normalization",
                "Query Optimization",
                "Redis"
            ]
        },
        {
            category: "Frontend & Reactive Architecture",
            list: [
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "State Management"
            ]
        },
        {
            category: "DevOps & Tooling",
            list: [
                "Docker",
                "Git/GitHub",
                "Linux Systems",
                "CI/CD Workflows"
            ]
        }
    ],
    githubCopy: {
        badge: "Live GitHub Telemetry",
        heading: "Open Source & Public Repositories",
        placeholder: "GitHub handle (e.g. Fonkaa)...",
        buttonText: "Sync Repos"
    },
    githubUsername: "Fonkaa",
    contactCopy: {
        badge: "Direct Communication Hub",
        heading: "Initiate Contact & Engineering Inquiries",
        subheading: "Send an instant transmission directly to my primary dispatch inbox, or reach out through direct communication channels.",
        formTitle: "Send Direct Transmission",
        formSubtitle: "Dispatches directly to verified email & Admin Codex",
        buttonText: "Dispatch Message",
        successMessage: "Transmission received. Dispatched directly to the primary email and inscribed into the Admin Codex.",
        footerCopyright: "© 2026 Portfolio Atelier. All dynamic systems connected.",
        footerStatus: "High Availability Online"
    },
    contact: {
        email: "fikiylkal@gmail.com",
        phone: "+251 900 000 000",
        telegram: "@Fonkaa",
        instagram: "Fonkaa"
    },
    aiCopy: {
        title: "Digital Twin AI",
        subtitle: "Online • Grounded in system data",
        greeting: "Greetings. I am the digital twin and portfolio system guide. Ask me anything regarding projects, technical competencies, or contact information.",
        inputPlaceholder: "Ask about architecture, stack, or experience..."
    },
    aiInstructions: "Represent the candidate with executive precision, authoritative system design knowledge, and strict adherence to verified portfolio data.",
    messages: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_16jk496._.js.map