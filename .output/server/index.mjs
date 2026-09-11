globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-11T12:05:57.815Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/arrow-left-BhMHMrk-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-L7MYw1MKXYhQ0EKhQyraKA3X2QE\"",
		"mtime": "2026-09-11T17:13:58.092Z",
		"size": 155,
		"path": "../public/assets/arrow-left-BhMHMrk-.js"
	},
	"/assets/button-AJdLQrHz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10ddf-A2vB3AfTcHVaeGsNZtoMOUOjA1s\"",
		"mtime": "2026-09-11T17:13:58.092Z",
		"size": 69087,
		"path": "../public/assets/button-AJdLQrHz.js"
	},
	"/assets/checkbox-BmqS9Ir-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1113-qV3Enr6kz+SWJm6XDS+vyixrdbQ\"",
		"mtime": "2026-09-11T17:13:58.092Z",
		"size": 4371,
		"path": "../public/assets/checkbox-BmqS9Ir-.js"
	},
	"/assets/edit-profile-BxmNqTR2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1445-NvzUvxv018r+tHiYdd6QbuBjFL4\"",
		"mtime": "2026-09-11T17:13:58.092Z",
		"size": 5189,
		"path": "../public/assets/edit-profile-BxmNqTR2.js"
	},
	"/assets/campus-listings-0ZouSTjP.jpg": {
		"type": "image/jpeg",
		"etag": "\"3999e-7rAKBrVFyu4TdTzX6Zntc2ui3hw\"",
		"mtime": "2026-09-11T17:13:58.150Z",
		"size": 235934,
		"path": "../public/assets/campus-listings-0ZouSTjP.jpg"
	},
	"/assets/feed-page-CvP160yZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ab6-PV5UZj+dru3Bt25n68jTQ6S08lk\"",
		"mtime": "2026-09-11T17:13:58.103Z",
		"size": 15030,
		"path": "../public/assets/feed-page-CvP160yZ.js"
	},
	"/assets/listing-card-LDvLf-4j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d1e-lBmgoutLg63vYHbBuxd6a1AQZWc\"",
		"mtime": "2026-09-11T17:13:58.103Z",
		"size": 3358,
		"path": "../public/assets/listing-card-LDvLf-4j.js"
	},
	"/assets/listing._id-BjNgosn2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12d0-hCe6D9PkGvgvs13U7/U4gjJLBrQ\"",
		"mtime": "2026-09-11T17:13:58.103Z",
		"size": 4816,
		"path": "../public/assets/listing._id-BjNgosn2.js"
	},
	"/assets/loader-circle-C9EiIv50.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86-UfENlqi6nxpVsI6XmaVAgoi+95E\"",
		"mtime": "2026-09-11T17:13:58.104Z",
		"size": 134,
		"path": "../public/assets/loader-circle-C9EiIv50.js"
	},
	"/assets/login-CCKSSpsW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d1-NvZnKBlN5k8/06UFCGzYjoPldYE\"",
		"mtime": "2026-09-11T17:13:58.104Z",
		"size": 2513,
		"path": "../public/assets/login-CCKSSpsW.js"
	},
	"/assets/lost-and-found-DejAu-Wb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94-7KKmTWOcT0AND7l4MZb8qkLJU9w\"",
		"mtime": "2026-09-11T17:13:58.104Z",
		"size": 148,
		"path": "../public/assets/lost-and-found-DejAu-Wb.js"
	},
	"/assets/marketplace-Dzgca49s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-itYkw9E8Lkk/+vtTBwGE8m74vvw\"",
		"mtime": "2026-09-11T17:13:58.104Z",
		"size": 150,
		"path": "../public/assets/marketplace-Dzgca49s.js"
	},
	"/assets/routes-D8h3hEoi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"183a-SaXkdpadDb8i7CU4AMlRbNyRzJw\"",
		"mtime": "2026-09-11T17:13:58.105Z",
		"size": 6202,
		"path": "../public/assets/routes-D8h3hEoi.js"
	},
	"/assets/my-listings-zTKAfToe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ee-pygYLCekPb2lFmD75nL7uHPlS0A\"",
		"mtime": "2026-09-11T17:13:58.104Z",
		"size": 4590,
		"path": "../public/assets/my-listings-zTKAfToe.js"
	},
	"/assets/index-CRMQGG5s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"78d12-4dbENpo3CKTuvqKGbhW8UO/CNa8\"",
		"mtime": "2026-09-11T17:13:58.092Z",
		"size": 494866,
		"path": "../public/assets/index-CRMQGG5s.js"
	},
	"/assets/shield-check-Ds9r_5mj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-Iu3m0ujnkcP7S7l5M89aJ6xO6g0\"",
		"mtime": "2026-09-11T17:13:58.105Z",
		"size": 310,
		"path": "../public/assets/shield-check-Ds9r_5mj.js"
	},
	"/assets/signup-CfeJXSst.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f12-fnf/EJ3zx7a+AJmvWXPEydO5g9U\"",
		"mtime": "2026-09-11T17:13:58.105Z",
		"size": 3858,
		"path": "../public/assets/signup-CfeJXSst.js"
	},
	"/assets/tabs-CwPcc3Fn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d6a-4QUcNeF3sSHwfKhpxgYNL1A9ktQ\"",
		"mtime": "2026-09-11T17:13:58.141Z",
		"size": 3434,
		"path": "../public/assets/tabs-CwPcc3Fn.js"
	},
	"/assets/styles-BxgG4jiX.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1460b-A5VhP8fg+xjpraiedDP1u4DYfRc\"",
		"mtime": "2026-09-11T17:13:58.150Z",
		"size": 83467,
		"path": "../public/assets/styles-BxgG4jiX.css"
	},
	"/assets/to-let-DFsEdyOp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-TXl45ZmGTRUYphOwQrUSGm62XZQ\"",
		"mtime": "2026-09-11T17:13:58.142Z",
		"size": 151,
		"path": "../public/assets/to-let-DFsEdyOp.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-11T12:06:04.033Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/icon.svg": {
		"type": "image/svg+xml",
		"etag": "\"78c-TKxvVC9BVT9AUAURp+aPsfT/8Hg\"",
		"mtime": "2026-09-11T12:05:05.961Z",
		"size": 1932,
		"path": "../public/icon.svg"
	},
	"/campuscratelogo.svg": {
		"type": "image/svg+xml",
		"etag": "\"61e-16btGBFFruHuKiAhbmUt5Wxi5P8\"",
		"mtime": "2026-09-11T12:02:11.892Z",
		"size": 1566,
		"path": "../public/campuscratelogo.svg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6jTWF2 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6jTWF2
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
