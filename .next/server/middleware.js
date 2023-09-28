(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[826],{

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_js_page_2Fmiddleware_rootDir_C_3A_5CUsers_5Crejoy_5COneDrive_5CDesktop_5Cclass_20project_5Cnext_5Ckin_20_20nextjs_20_20Copy_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2xvZ2luKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2xvZ2luIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FXFwvcmVnaXN0ZXIoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcmVnaXN0ZXIifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifV0_3D_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2xvZ2luKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2xvZ2luIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FXFwvcmVnaXN0ZXIoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcmVnaXN0ZXIifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifV19_)
});

// NAMESPACE OBJECT: ./middleware.js
var middleware_namespaceObject = {};
__webpack_require__.r(middleware_namespaceObject);
__webpack_require__.d(middleware_namespaceObject, {
  config: () => (config),
  middleware: () => (middleware)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/globals.js
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/utils.js
/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
/**
 * Converts a Headers object to a Node.js OutgoingHttpHeaders object. This is
 * required to support the set-cookie header, which may have multiple values.
 *
 * @param headers the headers object to convert
 * @returns the converted headers object
 */ function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var _edge_runtime_cookies = __webpack_require__(4865);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js
 //# sourceMappingURL=cookies.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        validateURL(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new NextURL(url, {
            headers: toNodeOutgoingHttpHeaders(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new _edge_runtime_cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js



const response_INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[response_INTERNALS] = {
            cookies: new _edge_runtime_cookies.ResponseCookies(this.headers),
            url: init.url ? new NextURL(init.url, {
                headers: toNodeOutgoingHttpHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[response_INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH + ", " + NEXT_URL;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc"; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js

const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    NEXT_RSC_UNION_QUERY
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
} //# sourceMappingURL=internal-utils.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js

/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment[0] === "(" && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = (/* unused pure expression or super */ null && (`(?:src/)?${MIDDLEWARE_FILENAME}`));
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
// Consolidate this consts when the `appDir` will be stable.
const ESLINT_DEFAULT_DIRS = [
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_DEFAULT_DIRS_WITH_APP = [
    "app",
    ...ESLINT_DEFAULT_DIRS
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "actionBrowser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
}; //# sourceMappingURL=constants.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js

/**
 * @internal
 */ class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js


/**
 * @internal
 */ class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res`' cookies
    // will still take precedence.
    const resCookies = new ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookes = new _edge_runtime_cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookes.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            var _fetch___nextGetStaticStore;
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = fetch.__nextGetStaticStore == null ? void 0 : (_fetch___nextGetStaticStore = fetch.__nextGetStaticStore()) == null ? void 0 : _fetch___nextGetStaticStore.getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookes.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _edge_runtime_cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookes, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/api-utils/index.js


/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __webpack_require__(2487);
        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
    };
}
/**
 *
 * @param res response object
 * @param statusCode `HTTP` status code of response
 */ function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
/**
 *
 * @param res response object
 * @param [statusOrUrl] `HTTP` status code of redirect
 * @param url URL of redirect
 */ function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = HeadersAdapter.from(req.headers);
    const previewModeId = headers.get(PRERENDER_REVALIDATE_HEADER);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = (/* unused pure expression or super */ null && (4 * 1024 * 1024));
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __webpack_require__(2487);
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
/**
 * Custom error class
 */ class ApiError extends (/* unused pure expression or super */ null && (Error)) {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
/**
 * Sends error in `response`
 * @param res response object
 * @param statusCode of response
 * @param message of response
 */ function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
/**
 * Execute getter function only if its needed
 * @param LazyProps `req` and `params` for lazyProp
 * @param prop name of property
 * @param getter function to get data
 */ function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js

class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && checkIsOnDemandRevalidate(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(COOKIE_NAME_PRERENDER_BYPASS)) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: this._previewModeId,
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: COOKIE_NAME_PRERENDER_BYPASS,
            value: "",
            httpOnly: true,
            sameSite:  true ? "none" : 0,
            secure: "production" !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js





function getHeaders(headers) {
    const cleaned = HeadersAdapter.from(headers);
    for (const param of FLIGHT_PARAMETERS){
        cleaned.delete(param.toString().toLowerCase());
    }
    return HeadersAdapter.seal(cleaned);
}
function getCookies(headers) {
    const cookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(headers));
    return RequestCookiesAdapter.seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new _edge_runtime_cookies.RequestCookies(HeadersAdapter.from(headers));
    return MutableRequestCookiesAdapter.wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new DraftModeProvider(previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            }
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/async-local-storage.js
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/request-async-storage.js

const requestAsyncStorage = createAsyncLocalStorage(); //# sourceMappingURL=request-async-storage.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js















class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ],
    [
        FETCH_CACHE_HEADER
    ]
];
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new NextURL(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = fromNodeOutgoingHttpHeaders(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl =  false ? 0 : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: stripInternalSearchParams(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: "production" !== "development",
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    // we only care to make async storage available for middleware
    if (params.page === "/middleware") {
        response = await RequestAsyncStorageWrapper.wrap(requestAsyncStorage, {
            req: request,
            renderOpts: {
                onUpdateCookies: (cookies)=>{
                    cookiesFromResponse = cookies;
                },
                // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                    previewModeId: "development-id",
                    previewModeEncryptionKey: "",
                    previewModeSigningKey: ""
                }
            }
        }, ()=>params.handler(request, event));
    } else {
        response = await params.handler(request, event);
    }
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new NextURL(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new NextURL(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : NextResponse.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol])
    };
} //# sourceMappingURL=adapter.js.map

// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(1509);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/exports/next-response.js
// This file is for modularized imports for next/server to get fully-treeshaking.
 //# sourceMappingURL=next-response.js.map

// EXTERNAL MODULE: ./node_modules/cookies-next/lib/index.js
var lib = __webpack_require__(5683);
;// CONCATENATED MODULE: ./middleware.js



// This function can be marked `async` if using `await` inside
function middleware(request) {
    const token = request.cookies.get("token");
    //  console.log(token);
    const path = request.nextUrl.pathname;
    //  console.log(path);
    // public routes
    const isPublicPath = path === "/login/" || path === "/register/";
    // private routes
    const isPrivatePath = path === "/profile/";
    // if user is not logged in and tries to access private route
    if (!token && isPrivatePath) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    // console.log(request);
    // if user is logged in and tries to access public route
    if (token && isPublicPath) {
        return NextResponse.redirect(new URL("/profile", request.nextUrl));
    }
}
// See "Matching Paths" below to learn more
const config = {
    matcher: [
        "/login",
        "/register",
        "/profile"
    ]
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fmiddleware.js&page=%2Fmiddleware&rootDir=C%3A%5CUsers%5Crejoy%5COneDrive%5CDesktop%5Cclass%20project%5Cnext%5Ckin%20(%20nextjs)%20-%20Copy&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2xvZ2luKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2xvZ2luIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk%2FXFwvcmVnaXN0ZXIoLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcmVnaXN0ZXIifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifV0%3D&preferredRegion=&middlewareConfig=eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2xvZ2luKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2xvZ2luIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk%2FXFwvcmVnaXN0ZXIoLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcmVnaXN0ZXIifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifV19!

        
        
        

        const mod = { ...middleware_namespaceObject }
        const handler = mod.middleware || mod.default

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_js_page_2Fmiddleware_rootDir_C_3A_5CUsers_5Crejoy_5COneDrive_5CDesktop_5Cclass_20project_5Cnext_5Ckin_20_20nextjs_20_20Copy_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2xvZ2luKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2xvZ2luIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FXFwvcmVnaXN0ZXIoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcmVnaXN0ZXIifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifV0_3D_preferredRegion_middlewareConfig_eyJtYXRjaGVycyI6W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL2xvZ2luKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL2xvZ2luIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FXFwvcmVnaXN0ZXIoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcmVnaXN0ZXIifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifV19_(opts) {
          return adapter({
            ...opts,
            page: "/middleware",
            handler,
          })
        }
    

/***/ }),

/***/ 4801:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 
/**
 * Module exports.
 * @public
 */ exports.parse = parse;
exports.serialize = serialize;
/**
 * Module variables.
 * @private
 */ var decode = decodeURIComponent;
var encode = encodeURIComponent;
/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */ var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */ function parse(str, options) {
    if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
    }
    var obj = {};
    var opt = options || {};
    var pairs = str.split(";");
    var dec = opt.decode || decode;
    for(var i = 0; i < pairs.length; i++){
        var pair = pairs[i];
        var index = pair.indexOf("=");
        // skip things that don't look like key=value
        if (index < 0) {
            continue;
        }
        var key = pair.substring(0, index).trim();
        // only assign once
        if (undefined == obj[key]) {
            var val = pair.substring(index + 1, pair.length).trim();
            // quoted values
            if (val[0] === '"') {
                val = val.slice(1, -1);
            }
            obj[key] = tryDecode(val, dec);
        }
    }
    return obj;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */ function serialize(name, val, options) {
    var opt = options || {};
    var enc = opt.encode || encode;
    if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
    }
    if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
    }
    var value = enc(val);
    if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
    }
    var str = name + "=" + value;
    if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
            throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
    }
    if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
            throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
    }
    if (opt.httpOnly) {
        str += "; HttpOnly";
    }
    if (opt.secure) {
        str += "; Secure";
    }
    if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch(sameSite){
            case true:
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid");
        }
    }
    return str;
}
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */ function tryDecode(str, decode) {
    try {
        return decode(str);
    } catch (e) {
        return str;
    }
}


/***/ }),

/***/ 5683:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

var __assign = (void 0) && (void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (void 0) && (void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = exports.d8 = __webpack_unused_export__ = exports.$1 = void 0;
var cookie_1 = __webpack_require__(4801);
var isClientSide = function() {
    return "undefined" !== "undefined";
};
var isCookiesFromAppRouterMiddleware = function(cookieStore) {
    if (!cookieStore) return false;
    return  true && "set" in cookieStore && typeof cookieStore.getAll === "function" && typeof cookieStore.set === "function";
};
var isContextFromAppRouterMiddleware = function(context) {
    return !!(context === null || context === void 0 ? void 0 : context.req) && "cookies" in context.req && isCookiesFromAppRouterMiddleware(context === null || context === void 0 ? void 0 : context.req.cookies) || !!(context === null || context === void 0 ? void 0 : context.res) && "cookies" in context.res && isCookiesFromAppRouterMiddleware(context === null || context === void 0 ? void 0 : context.res.cookies);
};
var transformAppRouterMiddlewareCookies = function(cookies) {
    var _cookies = {};
    cookies.getAll().forEach(function(_a) {
        var name = _a.name, value = _a.value;
        _cookies[name] = value;
    });
    return _cookies;
};
var stringify = function(value) {
    if (value === void 0) {
        value = "";
    }
    try {
        var result = JSON.stringify(value);
        return /^[\{\[]/.test(result) ? result : value;
    } catch (e) {
        return value;
    }
};
var decode = function(str) {
    if (!str) return str;
    return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
};
var getCookies = function(options) {
    if (isContextFromAppRouterMiddleware(options) && (options === null || options === void 0 ? void 0 : options.req)) return transformAppRouterMiddlewareCookies(options.req.cookies);
    var req;
    // DefaultOptions['req] can be casted here because is narrowed by using the fn: isContextFromAppRouterMiddleware
    if (options) req = options.req;
    if (!isClientSide()) {
        // if cookie-parser is used in project get cookies from ctx.req.cookies
        // if cookie-parser isn't used in project get cookies from ctx.req.headers.cookie
        if (req && req.cookies) return req.cookies;
        if (req && req.headers.cookie) return (0, cookie_1.parse)(req.headers.cookie);
        return {};
    }
    var _cookies = {};
    var documentCookies = document.cookie ? document.cookie.split("; ") : [];
    for(var i = 0, len = documentCookies.length; i < len; i++){
        var cookieParts = documentCookies[i].split("=");
        var _cookie = cookieParts.slice(1).join("=");
        var name_1 = cookieParts[0];
        _cookies[name_1] = _cookie;
    }
    return _cookies;
};
exports.$1 = getCookies;
var getCookie = function(key, options) {
    var _cookies = (0, exports.$1)(options);
    var value = _cookies[key];
    if (value === undefined) return undefined;
    return decode(value);
};
__webpack_unused_export__ = getCookie;
var setCookie = function(key, data, options) {
    if (isContextFromAppRouterMiddleware(options)) {
        var req = options.req, res = options.res, restOptions = __rest(options, [
            "req",
            "res"
        ]);
        var payload = __assign({
            name: key,
            value: data
        }, restOptions);
        if (req) {
            req.cookies.set(payload);
        }
        if (res) {
            res.cookies.set(payload);
        }
        return;
    }
    var _cookieOptions;
    var _req;
    var _res;
    if (options) {
        // DefaultOptions can be casted here because the AppRouterMiddlewareOptions is narrowed using the fn: isContextFromAppRouterMiddleware
        var _a = options, req = _a.req, res = _a.res, _options = __rest(_a, [
            "req",
            "res"
        ]);
        _req = req;
        _res = res;
        _cookieOptions = _options;
    }
    var cookieStr = (0, cookie_1.serialize)(key, stringify(data), __assign({
        path: "/"
    }, _cookieOptions));
    if (!isClientSide()) {
        if (_res && _req) {
            var currentCookies = _res.getHeader("Set-Cookie");
            if (!Array.isArray(currentCookies)) {
                currentCookies = !currentCookies ? [] : [
                    String(currentCookies)
                ];
            }
            _res.setHeader("Set-Cookie", currentCookies.concat(cookieStr));
            if (_req && _req.cookies) {
                var _cookies = _req.cookies;
                data === "" ? delete _cookies[key] : _cookies[key] = stringify(data);
            }
            if (_req && _req.headers && _req.headers.cookie) {
                var _cookies = (0, cookie_1.parse)(_req.headers.cookie);
                data === "" ? delete _cookies[key] : _cookies[key] = stringify(data);
                _req.headers.cookie = Object.entries(_cookies).reduce(function(accum, item) {
                    return accum.concat("".concat(item[0], "=").concat(item[1], ";"));
                }, "");
            }
        }
    } else {
        document.cookie = cookieStr;
    }
};
exports.d8 = setCookie;
var deleteCookie = function(key, options) {
    return (0, exports.d8)(key, "", __assign(__assign({}, options), {
        maxAge: -1
    }));
};
__webpack_unused_export__ = deleteCookie;
var hasCookie = function(key, options) {
    if (!key) return false;
    var cookie = (0, exports.$1)(options);
    return cookie.hasOwnProperty(key);
};
__webpack_unused_export__ = hasCookie;


/***/ }),

/***/ 7077:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addBasePath", ({
    enumerable: true,
    get: function() {
        return addBasePath;
    }
}));
const _addpathprefix = __webpack_require__(5001);
const _normalizetrailingslash = __webpack_require__(9417);
const basePath =  false || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)( false ? 0 : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 572:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(9417);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 1127:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectDomainLocale", ({
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
}));
const detectDomainLocale = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if (false) {}
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 8175:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "hasBasePath", ({
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
}));
const _pathhasprefix = __webpack_require__(2142);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 9717:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DOMAttributeNames: function() {
        return DOMAttributeNames;
    },
    isEqualNode: function() {
        return isEqualNode;
    },
    default: function() {
        return initHeadManager;
    }
});
const DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
function reactElementToDOM(param) {
    let { type, props } = param;
    const el = document.createElement(type);
    for(const p in props){
        if (!props.hasOwnProperty(p)) continue;
        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    const { children, dangerouslySetInnerHTML } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute("nonce")) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute("nonce", "");
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
let updateElements;
if (false) {} else {
    updateElements = (type, components)=>{
        const headEl = document.getElementsByTagName("head")[0];
        const headCountEl = headEl.querySelector("meta[name=next-head-count]");
        if (false) {}
        const headCount = Number(headCountEl.content);
        const oldTags = [];
        for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
            var _j_tagName;
            if ((j == null ? void 0 : (_j_tagName = j.tagName) == null ? void 0 : _j_tagName.toLowerCase()) === type) {
                oldTags.push(j);
            }
        }
        const newTags = components.map(reactElementToDOM).filter((newTag)=>{
            for(let k = 0, len = oldTags.length; k < len; k++){
                const oldTag = oldTags[k];
                if (isEqualNode(oldTag, newTag)) {
                    oldTags.splice(k, 1);
                    return false;
                }
            }
            return true;
        });
        oldTags.forEach((t)=>{
            var _t_parentNode;
            return (_t_parentNode = t.parentNode) == null ? void 0 : _t_parentNode.removeChild(t);
        });
        newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
        headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
    };
}
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === "link" && h.props["data-optimized-fonts"]) {
                    if (document.querySelector('style[data-href="' + h.props["data-href"] + '"]')) {
                        return;
                    } else {
                        h.props.href = h.props["data-href"];
                        h.props["data-href"] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = "";
            if (titleComponent) {
                const { children } = titleComponent.props;
                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            if (title !== document.title) document.title = title;
            [
                "meta",
                "base",
                "link",
                "style",
                "script"
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map


/***/ }),

/***/ 9417:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathTrailingSlash", ({
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
}));
const _removetrailingslash = __webpack_require__(7571);
const _parsepath = __webpack_require__(5017);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if (true) {
        if (/\.[^/]+\/?$/.test(pathname)) {
            return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
        } else if (pathname.endsWith("/")) {
            return "" + pathname + query + hash;
        } else {
            return pathname + "/" + query + hash;
        }
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 9454:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeBasePath", ({
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
}));
const _hasbasepath = __webpack_require__(8175);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = "/" + path;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 6559:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeLocale", ({
    enumerable: true,
    get: function() {
        return removeLocale;
    }
}));
const _parsepath = __webpack_require__(5017);
function removeLocale(path, locale) {
    if (false) {}
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map


/***/ }),

/***/ 2873:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 9211:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    markAssetError: function() {
        return markAssetError;
    },
    isAssetError: function() {
        return isAssetError;
    },
    getClientBuildManifest: function() {
        return getClientBuildManifest;
    },
    createRouteLoader: function() {
        return createRouteLoader;
    }
});
const _interop_require_default = __webpack_require__(2573);
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__webpack_require__(919));
const _trustedtypes = __webpack_require__(7192);
const _requestidlecallback = __webpack_require__(2873);
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ("future" in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function hasPrefetch(link) {
    try {
        link = document.createElement("link");
        return(// with relList.support
        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch"));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
const getAssetQueryString = ()=>{
    return  false ? 0 : "";
};
function prefetchViaDom(href, as, link) {
    return new Promise((resolve, reject)=>{
        const selector = '\n      link[rel="prefetch"][href^="' + href + '"],\n      link[rel="preload"][href^="' + href + '"],\n      script[src^="' + href + '"]';
        if (document.querySelector(selector)) {
            return resolve();
        }
        link = document.createElement("link");
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = "prefetch";
        link.crossOrigin = undefined;
        link.onload = resolve;
        link.onerror = ()=>reject(markAssetError(new Error("Failed to prefetch: " + href)));
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement("script");
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error("Failed to load script: " + src)));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestidlecallback.requestIdleCallback)(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms));
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error("Failed to lookup route: " + route));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + "/_next/" + encodeURI(entry));
        return {
            scripts: allFiles.filter((v)=>v.endsWith(".js")).map((v)=>(0, _trustedtypes.__unsafeCreateTrustedScriptURL)(v) + getAssetQueryString()),
            css: allFiles.filter((v)=>v.endsWith(".css")).map((v)=>v + getAssetQueryString())
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src.toString());
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector('script[src^="' + src + '"]')) {
                return Promise.resolve();
            }
            loadedScripts.set(src.toString(), prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error("Failed to load stylesheet: " + href);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && "resolve" in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then((param)=>{
                    let { scripts, css } = param;
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet))
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: " + route))).then((param)=>{
                    let { entrypoint, styles } = param;
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return "error" in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), "script")) : [])).then(()=>{
                (0, _requestidlecallback.requestIdleCallback)(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 2108:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* global window */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Router: function() {
        return _router.default;
    },
    // Export the singletonRouter and this is the public API.
    default: function() {
        return _default;
    },
    withRouter: function() {
        return _withrouter.default;
    },
    useRouter: function() {
        return useRouter;
    },
    createRouter: function() {
        return createRouter;
    },
    makePublicRouterInstance: function() {
        return makePublicRouterInstance;
    }
});
const _interop_require_default = __webpack_require__(2573);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9040));
const _router = /*#__PURE__*/ _interop_require_default._(__webpack_require__(1701));
const _routercontext = __webpack_require__(8243);
const _iserror = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5955));
const _withrouter = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9516));
const singletonRouter = {
    router: null,
    readyCallbacks: [],
    ready (cb) {
        if (this.router) return cb();
        if (false) {}
    }
};
// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = [
    "pathname",
    "route",
    "query",
    "asPath",
    "components",
    "isFallback",
    "basePath",
    "locale",
    "locales",
    "defaultLocale",
    "isReady",
    "isPreview",
    "isLocaleDomain",
    "domainLocales"
];
const routerEvents = [
    "routeChangeStart",
    "beforeHistoryChange",
    "routeChangeComplete",
    "routeChangeError",
    "hashChangeStart",
    "hashChangeComplete"
];
const coreMethodFields = [
    "push",
    "replace",
    "reload",
    "back",
    "prefetch",
    "beforePopState"
];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, "events", {
    get () {
        return _router.default.events;
    }
});
function getRouter() {
    if (!singletonRouter.router) {
        const message = "No router instance found.\n" + 'You should only use "next/router" on the client side of your app.\n';
        throw new Error(message);
    }
    return singletonRouter.router;
}
urlPropertyFields.forEach((field)=>{
    // Here we need to use Object.defineProperty because we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
        get () {
            const router = getRouter();
            return router[field];
        }
    });
});
coreMethodFields.forEach((field)=>{
    singletonRouter[field] = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const router = getRouter();
        return router[field](...args);
    };
});
routerEvents.forEach((event)=>{
    singletonRouter.ready(()=>{
        _router.default.events.on(event, function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
            const _singletonRouter = singletonRouter;
            if (_singletonRouter[eventField]) {
                try {
                    _singletonRouter[eventField](...args);
                } catch (err) {
                    console.error("Error when running the Router event: " + eventField);
                    console.error((0, _iserror.default)(err) ? err.message + "\n" + err.stack : err + "");
                }
            }
        });
    });
});
const _default = singletonRouter;
function useRouter() {
    const router = _react.default.useContext(_routercontext.RouterContext);
    if (!router) {
        throw new Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted");
    }
    return router;
}
function createRouter() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    singletonRouter.router = new _router.default(...args);
    singletonRouter.readyCallbacks.forEach((cb)=>cb());
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
}
function makePublicRouterInstance(router) {
    const scopedRouter = router;
    const instance = {};
    for (const property of urlPropertyFields){
        if (typeof scopedRouter[property] === "object") {
            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
            ;
            continue;
        }
        instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
    instance.events = _router.default.events;
    coreMethodFields.forEach((field)=>{
        instance[field] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return scopedRouter[field](...args);
        };
    });
    return instance;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router.js.map


/***/ }),

/***/ 3423:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(2573);
const _interop_require_wildcard = __webpack_require__(7736);
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8276));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(9040));
const _headmanagercontext = __webpack_require__(6124);
const _headmanager = __webpack_require__(9717);
const _requestidlecallback = __webpack_require__(2873);
const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = [
    "onLoad",
    "onReady",
    "dangerouslySetInnerHTML",
    "children",
    "onError",
    "strategy",
    "stylesheets"
];
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: "style"
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (false) {}
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = "", strategy = "afterInteractive", onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement("script");
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener("load", function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener("error", function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    for (const [k, value] of Object.entries(props)){
        if (value === undefined || ignoreProps.includes(k)) {
            continue;
        }
        const attr = _headmanager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
    }
    if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
    }
    el.setAttribute("data-nscript", strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = "afterInteractive" } = props;
    if (strategy === "lazyOnload") {
        window.addEventListener("load", ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === "complete") {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener("load", ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
function Script(props) {
    const { id, src = "", onLoad = ()=>{}, onReady = null, strategy = "afterInteractive", onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    const { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === "afterInteractive") {
                loadScript(props);
            } else if (strategy === "lazyOnload") {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: "style"
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === "beforeInteractive") {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ _react.default.createElement("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            0,
                            {
                                ...restProps
                            }
                        ]) + ")"
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: "script",
                    integrity: restProps.integrity
                } : {
                    as: "script"
                });
                return /*#__PURE__*/ _react.default.createElement("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            src
                        ]) + ")"
                    }
                });
            }
        } else if (strategy === "afterInteractive") {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: "script",
                    integrity: restProps.integrity
                } : {
                    as: "script"
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, "__nextScript", {
    value: true
});
const _default = Script;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map


/***/ }),

/***/ 7192:
/***/ ((module, exports) => {

"use strict";
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "__unsafeCreateTrustedScriptURL", ({
    enumerable: true,
    get: function() {
        return __unsafeCreateTrustedScriptURL;
    }
}));
let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === "undefined" && "undefined" !== "undefined") { var _window_trustedTypes; }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var _getPolicy;
    return ((_getPolicy = getPolicy()) == null ? void 0 : _getPolicy.createScriptURL(url)) || url;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map


/***/ }),

/***/ 9516:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return withRouter;
    }
}));
const _interop_require_default = __webpack_require__(2573);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9040));
const _router = __webpack_require__(2108);
function withRouter(ComposedComponent) {
    function WithRouterWrapper(props) {
        return /*#__PURE__*/ _react.default.createElement(ComposedComponent, {
            router: (0, _router.useRouter)(),
            ...props
        });
    }
    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
    if (false) {}
    return WithRouterWrapper;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=with-router.js.map


/***/ }),

/***/ 4865:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    splitCookiesString: ()=>splitCookiesString,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = // @ts-expect-error See https://github.com/whatwg/fetch/issues/973
        (_c = (_b = (_a = responseHeaders.getAll) == null ? void 0 : _a.call(responseHeaders, "set-cookie")) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 2487:
/***/ ((module) => {

"use strict";
var __dirname = "/";

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();


/***/ }),

/***/ 2705:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isAPIRoute", ({
    enumerable: true,
    get: function() {
        return isAPIRoute;
    }
}));
function isAPIRoute(value) {
    return value === "/api" || Boolean(value == null ? void 0 : value.startsWith("/api/"));
} //# sourceMappingURL=is-api-route.js.map


/***/ }),

/***/ 5955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __webpack_require__(6879);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isplainobject.isPlainObject)(err) ? JSON.stringify(err) : err + "");
} //# sourceMappingURL=is-error.js.map


/***/ }),

/***/ 1906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    }
});
const _apppaths = __webpack_require__(3233);
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map


/***/ }),

/***/ 8398:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// minimal implementation MurmurHash2 hash function

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "BloomFilter", ({
    enumerable: true,
    get: function() {
        return BloomFilter;
    }
}));
function murmurhash2(str) {
    let h = 0;
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        h = Math.imul(h ^ c, 0x5bd1e995);
        h ^= h >>> 13;
        h = Math.imul(h, 0x5bd1e995);
    }
    return h >>> 0;
}
class BloomFilter {
    static from(items, errorRate) {
        if (errorRate === void 0) errorRate = 0.01;
        const filter = new BloomFilter(items.length, errorRate);
        for (const item of items){
            filter.add(item);
        }
        return filter;
    }
    export() {
        const data = {
            numItems: this.numItems,
            errorRate: this.errorRate,
            numBits: this.numBits,
            numHashes: this.numHashes,
            bitArray: this.bitArray
        };
        if (false) {}
        return data;
    }
    import(data) {
        this.numItems = data.numItems;
        this.errorRate = data.errorRate;
        this.numBits = data.numBits;
        this.numHashes = data.numHashes;
        this.bitArray = data.bitArray;
    }
    add(item) {
        const hashValues = this.getHashValues(item);
        hashValues.forEach((hash)=>{
            this.bitArray[hash] = 1;
        });
    }
    contains(item) {
        const hashValues = this.getHashValues(item);
        return hashValues.every((hash)=>this.bitArray[hash]);
    }
    getHashValues(item) {
        const hashValues = [];
        for(let i = 1; i <= this.numHashes; i++){
            const hash = murmurhash2("" + item + i) % this.numBits;
            hashValues.push(hash);
        }
        return hashValues;
    }
    constructor(numItems, errorRate){
        this.numItems = numItems;
        this.errorRate = errorRate;
        this.numBits = Math.ceil(-(numItems * Math.log(errorRate)) / (Math.log(2) * Math.log(2)));
        this.numHashes = Math.ceil(this.numBits / numItems * Math.log(2));
        this.bitArray = new Array(this.numBits).fill(0);
    }
} //# sourceMappingURL=bloom-filter.js.map


/***/ }),

/***/ 1177:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// regexp is based on https://github.com/sindresorhus/escape-string-regexp

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "escapeStringRegexp", ({
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
}));
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map


/***/ }),

/***/ 6124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "HeadManagerContext", ({
    enumerable: true,
    get: function() {
        return HeadManagerContext;
    }
}));
const _interop_require_default = __webpack_require__(2573);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9040));
const HeadManagerContext = _react.default.createContext({});
if (false) {} //# sourceMappingURL=head-manager-context.js.map


/***/ }),

/***/ 193:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeLocalePath", ({
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
}));
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 6879:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getObjectClassLabel: function() {
        return getObjectClassLabel;
    },
    isPlainObject: function() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== "[object Object]") {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty("isPrototypeOf");
} //# sourceMappingURL=is-plain-object.js.map


/***/ }),

/***/ 857:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return mitt;
    }
}));
function mitt() {
    const all = Object.create(null);
    return {
        on (type, handler) {
            (all[type] || (all[type] = [])).push(handler);
        },
        off (type, handler) {
            if (all[type]) {
                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
            }
        },
        emit (type) {
            for(var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                evts[_key - 1] = arguments[_key];
            }
            (all[type] || []).slice().map((handler)=>{
                handler(...evts);
            });
        }
    };
} //# sourceMappingURL=mitt.js.map


/***/ }),

/***/ 1478:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "denormalizePagePath", ({
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
}));
const _utils = __webpack_require__(8445);
const _normalizepathsep = __webpack_require__(6538);
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith("/index/") && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
} //# sourceMappingURL=denormalize-page-path.js.map


/***/ }),

/***/ 5819:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ensureLeadingSlash", ({
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
}));
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map


/***/ }),

/***/ 6538:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizePathSep", ({
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
}));
function normalizePathSep(path) {
    return path.replace(/\\/g, "/");
} //# sourceMappingURL=normalize-path-sep.js.map


/***/ }),

/***/ 8243:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "RouterContext", ({
    enumerable: true,
    get: function() {
        return RouterContext;
    }
}));
const _interop_require_default = __webpack_require__(2573);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9040));
const RouterContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=router-context.js.map


/***/ }),

/***/ 1701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// tslint:disable:no-console

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return Router;
    },
    matchesMiddleware: function() {
        return matchesMiddleware;
    },
    createKey: function() {
        return createKey;
    }
});
const _interop_require_default = __webpack_require__(2573);
const _interop_require_wildcard = __webpack_require__(7736);
const _removetrailingslash = __webpack_require__(7571);
const _routeloader = __webpack_require__(9211);
const _script = __webpack_require__(3423);
const _iserror = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(5955));
const _denormalizepagepath = __webpack_require__(1478);
const _normalizelocalepath = __webpack_require__(193);
const _mitt = /*#__PURE__*/ _interop_require_default._(__webpack_require__(857));
const _utils = __webpack_require__(5005);
const _isdynamic = __webpack_require__(1369);
const _parserelativeurl = __webpack_require__(1123);
const _resolverewrites = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2431));
const _routematcher = __webpack_require__(742);
const _routeregex = __webpack_require__(8501);
const _formaturl = __webpack_require__(6948);
const _detectdomainlocale = __webpack_require__(1127);
const _parsepath = __webpack_require__(5017);
const _addlocale = __webpack_require__(572);
const _removelocale = __webpack_require__(6559);
const _removebasepath = __webpack_require__(9454);
const _addbasepath = __webpack_require__(7077);
const _hasbasepath = __webpack_require__(8175);
const _isapiroute = __webpack_require__(2705);
const _getnextpathnameinfo = __webpack_require__(8278);
const _formatnextpathnameinfo = __webpack_require__(639);
const _comparestates = __webpack_require__(3884);
const _islocalurl = __webpack_require__(9891);
const _isbot = __webpack_require__(2226);
const _omit = __webpack_require__(2632);
const _resolvehref = __webpack_require__(7612);
const _interpolateas = __webpack_require__(3042);
const _handlesmoothscroll = __webpack_require__(9641);
function buildCancellationError() {
    return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
    });
}
async function matchesMiddleware(options) {
    const matchers = await Promise.resolve(options.router.pageLoader.getMiddleware());
    if (!matchers) return false;
    const { pathname: asPathname } = (0, _parsepath.parsePath)(options.asPath);
    // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`
    const cleanedAs = (0, _hasbasepath.hasBasePath)(asPathname) ? (0, _removebasepath.removeBasePath)(asPathname) : asPathname;
    const asWithBasePathAndLocale = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(cleanedAs, options.locale));
    // Check only path match on client. Matching "has" should be done on server
    // where we can access more info such as headers, HttpOnly cookie, etc.
    return matchers.some((m)=>new RegExp(m.regexp).test(asWithBasePathAndLocale));
}
function stripOrigin(url) {
    const origin = (0, _utils.getLocationOrigin)();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, url, true);
    const origin = (0, _utils.getLocationOrigin)();
    const hrefWasAbsolute = resolvedHref.startsWith(origin);
    const asWasAbsolute = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefWasAbsolute ? resolvedHref : (0, _addbasepath.addBasePath)(resolvedHref);
    const preparedAs = as ? stripOrigin((0, _resolvehref.resolveHref)(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asWasAbsolute ? preparedAs : (0, _addbasepath.addBasePath)(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _removetrailingslash.removeTrailingSlash)((0, _denormalizepagepath.denormalizePagePath)(pathname));
    if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isdynamic.isDynamicRoute)(page) && (0, _routeregex.getRouteRegex)(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _removetrailingslash.removeTrailingSlash)(pathname);
}
function getMiddlewareData(source, response, options) {
    const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
            locales: options.router.locales
        },
        trailingSlash: Boolean(true)
    };
    const rewriteHeader = response.headers.get("x-nextjs-rewrite");
    let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
    const matchedPath = response.headers.get("x-matched-path");
    if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
        // leverage x-matched-path to detect next.config.js rewrites
        rewriteTarget = matchedPath;
    }
    if (rewriteTarget) {
        if (rewriteTarget.startsWith("/") || undefined) {
            const parsedRewriteTarget = (0, _parserelativeurl.parseRelativeUrl)(rewriteTarget);
            const pathnameInfo = (0, _getnextpathnameinfo.getNextPathnameInfo)(parsedRewriteTarget.pathname, {
                nextConfig,
                parseData: true
            });
            let fsPathname = (0, _removetrailingslash.removeTrailingSlash)(pathnameInfo.pathname);
            return Promise.all([
                options.router.pageLoader.getPageList(),
                (0, _routeloader.getClientBuildManifest)()
            ]).then((param)=>{
                let [pages, { __rewrites: rewrites }] = param;
                let as = (0, _addlocale.addLocale)(pathnameInfo.pathname, pathnameInfo.locale);
                if ((0, _isdynamic.isDynamicRoute)(as) || !rewriteHeader && pages.includes((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(as), options.router.locales).pathname)) {
                    const parsedSource = (0, _getnextpathnameinfo.getNextPathnameInfo)((0, _parserelativeurl.parseRelativeUrl)(source).pathname, {
                        nextConfig:  false ? 0 : nextConfig,
                        parseData: true
                    });
                    as = (0, _addbasepath.addBasePath)(parsedSource.pathname);
                    parsedRewriteTarget.pathname = as;
                }
                if (false) {} else if (!pages.includes(fsPathname)) {
                    const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
                    if (resolvedPathname !== fsPathname) {
                        fsPathname = resolvedPathname;
                    }
                }
                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizelocalepath.normalizeLocalePath)((0, _removebasepath.removeBasePath)(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
                if ((0, _isdynamic.isDynamicRoute)(resolvedHref)) {
                    const matches = (0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(resolvedHref))(as);
                    Object.assign(parsedRewriteTarget.query, matches || {});
                }
                return {
                    type: "rewrite",
                    parsedAs: parsedRewriteTarget,
                    resolvedHref
                };
            });
        }
        const src = (0, _parsepath.parsePath)(source);
        const pathname = (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            ...(0, _getnextpathnameinfo.getNextPathnameInfo)(src.pathname, {
                nextConfig,
                parseData: true
            }),
            defaultLocale: options.router.defaultLocale,
            buildId: ""
        });
        return Promise.resolve({
            type: "redirect-external",
            destination: "" + pathname + src.query + src.hash
        });
    }
    const redirectTarget = response.headers.get("x-nextjs-redirect");
    if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
            const src = (0, _parsepath.parsePath)(redirectTarget);
            const pathname = (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
                ...(0, _getnextpathnameinfo.getNextPathnameInfo)(src.pathname, {
                    nextConfig,
                    parseData: true
                }),
                defaultLocale: options.router.defaultLocale,
                buildId: ""
            });
            return Promise.resolve({
                type: "redirect-internal",
                newAs: "" + pathname + src.query + src.hash,
                newUrl: "" + pathname + src.query + src.hash
            });
        }
        return Promise.resolve({
            type: "redirect-external",
            destination: redirectTarget
        });
    }
    return Promise.resolve({
        type: "next"
    });
}
async function withMiddlewareEffects(options) {
    const matches = await matchesMiddleware(options);
    if (!matches || !options.fetchData) {
        return null;
    }
    try {
        const data = await options.fetchData();
        const effect = await getMiddlewareData(data.dataHref, data.response, options);
        return {
            dataHref: data.dataHref,
            json: data.json,
            response: data.response,
            text: data.text,
            cacheKey: data.cacheKey,
            effect
        };
    } catch (e) {
        /**
     * TODO: Revisit this in the future.
     * For now we will not consider middleware data errors to be fatal.
     * maybe we should revisit in the future.
     */ return null;
    }
}
const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
function fetchRetry(url, attempts, options) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
            "x-nextjs-data": "1"
        })
    }).then((response)=>{
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
    });
}
function tryToParseAsJSON(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
}
function fetchNextData(param) {
    let { dataHref, inflightCache, isPrefetch, hasMiddleware, isServerRender, parseJSON, persistCache, isBackground, unstable_skipClientCache } = param;
    const { href: cacheKey } = new URL(dataHref, window.location.href);
    var _params_method;
    const getData = (params)=>{
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
            headers: Object.assign({}, isPrefetch ? {
                purpose: "prefetch"
            } : {}, isPrefetch && hasMiddleware ? {
                "x-middleware-prefetch": "1"
            } : {}),
            method: (_params_method = params == null ? void 0 : params.method) != null ? _params_method : "GET"
        }).then((response)=>{
            if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
                return {
                    dataHref,
                    response,
                    text: "",
                    json: {},
                    cacheKey
                };
            }
            return response.text().then((text)=>{
                if (!response.ok) {
                    /**
             * When the data response is a redirect because of a middleware
             * we do not consider it an error. The headers must bring the
             * mapped location.
             * TODO: Change the status code in the handler.
             */ if (hasMiddleware && [
                        301,
                        302,
                        307,
                        308
                    ].includes(response.status)) {
                        return {
                            dataHref,
                            response,
                            text,
                            json: {},
                            cacheKey
                        };
                    }
                    if (response.status === 404) {
                        var _tryToParseAsJSON;
                        if ((_tryToParseAsJSON = tryToParseAsJSON(text)) == null ? void 0 : _tryToParseAsJSON.notFound) {
                            return {
                                dataHref,
                                json: {
                                    notFound: SSG_DATA_NOT_FOUND
                                },
                                response,
                                text,
                                cacheKey
                            };
                        }
                    }
                    const error = new Error("Failed to load static props");
                    /**
             * We should only trigger a server-side transition if this was
             * caused on a client-side transition. Otherwise, we'd get into
             * an infinite loop.
             */ if (!isServerRender) {
                        (0, _routeloader.markAssetError)(error);
                    }
                    throw error;
                }
                return {
                    dataHref,
                    json: parseJSON ? tryToParseAsJSON(text) : null,
                    response,
                    text,
                    cacheKey
                };
            });
        }).then((data)=>{
            if (!persistCache || "production" !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
                delete inflightCache[cacheKey];
            }
            return data;
        }).catch((err)=>{
            if (!unstable_skipClientCache) {
                delete inflightCache[cacheKey];
            }
            if (err.message === "Failed to fetch" || // firefox
            err.message === "NetworkError when attempting to fetch resource." || // safari
            err.message === "Load failed") {
                (0, _routeloader.markAssetError)(err);
            }
            throw err;
        });
    };
    // when skipping client cache we wait to update
    // inflight cache until successful data response
    // this allows racing click event with fetching newer data
    // without blocking navigation when stale data is available
    if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data)=>{
            inflightCache[cacheKey] = Promise.resolve(data);
            return data;
        });
    }
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
    } : {});
}
function createKey() {
    return Math.random().toString(36).slice(2, 10);
}
function handleHardNavigation(param) {
    let { url, router } = param;
    // ensure we don't trigger a hard navigation to the same
    // URL as this can end up with an infinite refresh
    if (url === (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(router.asPath, router.locale))) {
        throw new Error("Invariant: attempted to hard navigate to the same URL " + url + " " + location.href);
    }
    window.location.href = url;
}
const getCancelledHandler = (param)=>{
    let { route, router } = param;
    let cancelled = false;
    const cancel = router.clc = ()=>{
        cancelled = true;
    };
    const handleCancelled = ()=>{
        if (cancelled) {
            const error = new Error('Abort fetching component for route: "' + route + '"');
            error.cancelled = true;
            throw error;
        }
        if (cancel === router.clc) {
            router.clc = null;
        }
    };
    return handleCancelled;
};
class Router {
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Go forward in history
   */ forward() {
        window.history.forward();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options) {
        if (options === void 0) options = {};
        if (false) {}
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options) {
        if (options === void 0) options = {};
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
    }
    async _bfl(as, resolvedAs, locale, skipNavigate) {
        if (true) {
            let matchesBflStatic = false;
            let matchesBflDynamic = false;
            for (const curAs of [
                as,
                resolvedAs
            ]){
                if (curAs) {
                    const asNoSlash = (0, _removetrailingslash.removeTrailingSlash)(new URL(curAs, "http://n").pathname);
                    const asNoSlashLocale = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(asNoSlash, locale || this.locale));
                    if (asNoSlash !== (0, _removetrailingslash.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
                        var _this__bfl_s, _this__bfl_s1;
                        matchesBflStatic = matchesBflStatic || !!((_this__bfl_s = this._bfl_s) == null ? void 0 : _this__bfl_s.contains(asNoSlash)) || !!((_this__bfl_s1 = this._bfl_s) == null ? void 0 : _this__bfl_s1.contains(asNoSlashLocale));
                        for (const normalizedAS of [
                            asNoSlash,
                            asNoSlashLocale
                        ]){
                            // if any sub-path of as matches a dynamic filter path
                            // it should be hard navigated
                            const curAsParts = normalizedAS.split("/");
                            for(let i = 0; !matchesBflDynamic && i < curAsParts.length + 1; i++){
                                var _this__bfl_d;
                                const currentPart = curAsParts.slice(0, i).join("/");
                                if (currentPart && ((_this__bfl_d = this._bfl_d) == null ? void 0 : _this__bfl_d.contains(currentPart))) {
                                    matchesBflDynamic = true;
                                    break;
                                }
                            }
                        }
                        // if the client router filter is matched then we trigger
                        // a hard navigation
                        if (matchesBflStatic || matchesBflDynamic) {
                            if (skipNavigate) {
                                return true;
                            }
                            handleHardNavigation({
                                url: (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, locale || this.locale, this.defaultLocale)),
                                router: this
                            });
                            return new Promise(()=>{});
                        }
                    }
                }
            }
        }
        return false;
    }
    async change(method, url, as, options, forcedScroll) {
        var _this_components_pathname;
        if (!(0, _islocalurl.isLocalURL)(url)) {
            handleHardNavigation({
                url,
                router: this
            });
            return false;
        }
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.
        const isQueryUpdating = options._h === 1;
        if (!isQueryUpdating && !options.shallow) {
            await this._bfl(as, undefined, options.locale);
        }
        let shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsepath.parsePath)(url).pathname === (0, _parsepath.parsePath)(as).pathname;
        const nextState = {
            ...this.state
        };
        // for static pages with query params in the URL we delay
        // marking the router ready until after the query is updated
        // or a navigation has occurred
        const readyStateChange = this.isReady !== true;
        this.isReady = true;
        const isSsr = this.isSsr;
        if (!isQueryUpdating) {
            this.isSsr = false;
        }
        // if a route transition is already in progress before
        // the query updating is triggered ignore query updating
        if (isQueryUpdating && this.clc) {
            return false;
        }
        const prevLocale = nextState.locale;
        if (false) { var _this_locales; }
        // marking route changes as a navigation start entry
        if (_utils.ST) {
            performance.mark("routeChange");
        }
        const { shallow = false, scroll = true } = options;
        const routeProps = {
            shallow
        };
        if (this._inFlightRoute && this.clc) {
            if (!isSsr) {
                Router.events.emit("routeChangeError", buildCancellationError(), this._inFlightRoute, routeProps);
            }
            this.clc();
            this.clc = null;
        }
        as = (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)((0, _hasbasepath.hasBasePath)(as) ? (0, _removebasepath.removeBasePath)(as) : as, options.locale, this.defaultLocale));
        const cleanedAs = (0, _removelocale.removeLocale)((0, _hasbasepath.hasBasePath)(as) ? (0, _removebasepath.removeBasePath)(as) : as, nextState.locale);
        this._inFlightRoute = as;
        const localeChange = prevLocale !== nextState.locale;
        // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        if (!isQueryUpdating && this.onlyAHashChange(cleanedAs) && !localeChange) {
            nextState.asPath = cleanedAs;
            Router.events.emit("hashChangeStart", as, routeProps);
            // TODO: do we need the resolved href when only a hash change?
            this.changeState(method, url, as, {
                ...options,
                scroll: false
            });
            if (scroll) {
                this.scrollToHash(cleanedAs);
            }
            try {
                await this.set(nextState, this.components[nextState.route], null);
            } catch (err) {
                if ((0, _iserror.default)(err) && err.cancelled) {
                    Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                }
                throw err;
            }
            Router.events.emit("hashChangeComplete", as, routeProps);
            return true;
        }
        let parsed = (0, _parserelativeurl.parseRelativeUrl)(url);
        let { pathname, query } = parsed;
        // if we detected the path as app route during prefetching
        // trigger hard navigation
        if ((_this_components_pathname = this.components[pathname]) == null ? void 0 : _this_components_pathname.__appRouter) {
            handleHardNavigation({
                url: as,
                router: this
            });
            return new Promise(()=>{});
        }
        // The build manifest needs to be loaded before auto-static dynamic pages
        // get their query parameters to allow ensuring they can be parsed properly
        // when rewritten to
        let pages, rewrites;
        try {
            [pages, { __rewrites: rewrites }] = await Promise.all([
                this.pageLoader.getPageList(),
                (0, _routeloader.getClientBuildManifest)(),
                this.pageLoader.getMiddleware()
            ]);
        } catch (err) {
            // If we fail to resolve the page list or client-build manifest, we must
            // do a server-side transition:
            handleHardNavigation({
                url: as,
                router: this
            });
            return false;
        }
        // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url
        if (!this.urlIsNew(cleanedAs) && !localeChange) {
            method = "replaceState";
        }
        // we need to resolve the as value using rewrites for dynamic SSG
        // pages to allow building the data URL correctly
        let resolvedAs = as;
        // url and as should always be prefixed with basePath by this
        // point by either next/link or router.push/replace so strip the
        // basePath from the pathname to match the pages dir 1-to-1
        pathname = pathname ? (0, _removetrailingslash.removeTrailingSlash)((0, _removebasepath.removeBasePath)(pathname)) : pathname;
        let route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        const parsedAsPathname = as.startsWith("/") && (0, _parserelativeurl.parseRelativeUrl)(as).pathname;
        const isMiddlewareRewrite = !!(parsedAsPathname && route !== parsedAsPathname && (!(0, _isdynamic.isDynamicRoute)(route) || !(0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(route))(parsedAsPathname)));
        // we don't attempt resolve asPath when we need to execute
        // middleware as the resolving will occur server-side
        const isMiddlewareMatch = !options.shallow && await matchesMiddleware({
            asPath: as,
            locale: nextState.locale,
            router: this
        });
        if (isQueryUpdating && isMiddlewareMatch) {
            shouldResolveHref = false;
        }
        if (shouldResolveHref && pathname !== "/_error") {
            options._shouldResolveHref = true;
            if (false) {} else {
                parsed.pathname = resolveDynamicRoute(pathname, pages);
                if (parsed.pathname !== pathname) {
                    pathname = parsed.pathname;
                    parsed.pathname = (0, _addbasepath.addBasePath)(pathname);
                    if (!isMiddlewareMatch) {
                        url = (0, _formaturl.formatWithValidation)(parsed);
                    }
                }
            }
        }
        if (!(0, _islocalurl.isLocalURL)(as)) {
            if (false) {}
            handleHardNavigation({
                url: as,
                router: this
            });
            return false;
        }
        resolvedAs = (0, _removelocale.removeLocale)((0, _removebasepath.removeBasePath)(resolvedAs), nextState.locale);
        route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        let routeMatch = false;
        if ((0, _isdynamic.isDynamicRoute)(route)) {
            const parsedAs = (0, _parserelativeurl.parseRelativeUrl)(resolvedAs);
            const asPathname = parsedAs.pathname;
            const routeRegex = (0, _routeregex.getRouteRegex)(route);
            routeMatch = (0, _routematcher.getRouteMatcher)(routeRegex)(asPathname);
            const shouldInterpolate = route === asPathname;
            const interpolatedAs = shouldInterpolate ? (0, _interpolateas.interpolateAs)(route, asPathname, query) : {};
            if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param] && !routeRegex.groups[param].optional);
                if (missingParams.length > 0 && !isMiddlewareMatch) {
                    if (false) {}
                    throw new Error((shouldInterpolate ? "The provided `href` (" + url + ") value is missing query values (" + missingParams.join(", ") + ") to be interpolated properly. " : "The provided `as` value (" + asPathname + ") is incompatible with the `href` value (" + route + "). ") + ("Read more: https://nextjs.org/docs/messages/" + (shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as")));
                }
            } else if (shouldInterpolate) {
                as = (0, _formaturl.formatWithValidation)(Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: (0, _omit.omit)(query, interpolatedAs.params)
                }));
            } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
            }
        }
        if (!isQueryUpdating) {
            Router.events.emit("routeChangeStart", as, routeProps);
        }
        const isErrorRoute = this.pathname === "/404" || this.pathname === "/_error";
        try {
            var _self___NEXT_DATA___props, _self___NEXT_DATA___props_pageProps, _routeInfo_props;
            let routeInfo = await this.getRouteInfo({
                route,
                pathname,
                query,
                as,
                resolvedAs,
                routeProps,
                locale: nextState.locale,
                isPreview: nextState.isPreview,
                hasMiddleware: isMiddlewareMatch,
                unstable_skipClientCache: options.unstable_skipClientCache,
                isQueryUpdating: isQueryUpdating && !this.isFallback,
                isMiddlewareRewrite
            });
            if (!isQueryUpdating && !options.shallow) {
                await this._bfl(as, "resolvedAs" in routeInfo ? routeInfo.resolvedAs : undefined, nextState.locale);
            }
            if ("route" in routeInfo && isMiddlewareMatch) {
                pathname = routeInfo.route || route;
                route = pathname;
                if (!routeProps.shallow) {
                    query = Object.assign({}, routeInfo.query || {}, query);
                }
                const cleanedParsedPathname = (0, _hasbasepath.hasBasePath)(parsed.pathname) ? (0, _removebasepath.removeBasePath)(parsed.pathname) : parsed.pathname;
                if (routeMatch && pathname !== cleanedParsedPathname) {
                    Object.keys(routeMatch).forEach((key)=>{
                        if (routeMatch && query[key] === routeMatch[key]) {
                            delete query[key];
                        }
                    });
                }
                if ((0, _isdynamic.isDynamicRoute)(pathname)) {
                    const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(new URL(as, location.href).pathname, nextState.locale), true);
                    let rewriteAs = prefixedAs;
                    if ((0, _hasbasepath.hasBasePath)(rewriteAs)) {
                        rewriteAs = (0, _removebasepath.removeBasePath)(rewriteAs);
                    }
                    if (false) {}
                    const routeRegex = (0, _routeregex.getRouteRegex)(pathname);
                    const curRouteMatch = (0, _routematcher.getRouteMatcher)(routeRegex)(new URL(rewriteAs, location.href).pathname);
                    if (curRouteMatch) {
                        Object.assign(query, curRouteMatch);
                    }
                }
            }
            // If the routeInfo brings a redirect we simply apply it.
            if ("type" in routeInfo) {
                if (routeInfo.type === "redirect-internal") {
                    return this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
                } else {
                    handleHardNavigation({
                        url: routeInfo.destination,
                        router: this
                    });
                    return new Promise(()=>{});
                }
            }
            const component = routeInfo.Component;
            if (component && component.unstable_scriptLoader) {
                const scripts = [].concat(component.unstable_scriptLoader());
                scripts.forEach((script)=>{
                    (0, _script.handleClientScriptLoad)(script.props);
                });
            }
            // handle redirect on client-transition
            if ((routeInfo.__N_SSG || routeInfo.__N_SSP) && routeInfo.props) {
                if (routeInfo.props.pageProps && routeInfo.props.pageProps.__N_REDIRECT) {
                    // Use the destination from redirect without adding locale
                    options.locale = false;
                    const destination = routeInfo.props.pageProps.__N_REDIRECT;
                    // check if destination is internal (resolves to a page) and attempt
                    // client-navigation if it is falling back to hard navigation if
                    // it's not
                    if (destination.startsWith("/") && routeInfo.props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                        const parsedHref = (0, _parserelativeurl.parseRelativeUrl)(destination);
                        parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                        const { url: newUrl, as: newAs } = prepareUrlAs(this, destination, destination);
                        return this.change(method, newUrl, newAs, options);
                    }
                    handleHardNavigation({
                        url: destination,
                        router: this
                    });
                    return new Promise(()=>{});
                }
                nextState.isPreview = !!routeInfo.props.__N_PREVIEW;
                // handle SSG data 404
                if (routeInfo.props.notFound === SSG_DATA_NOT_FOUND) {
                    let notFoundRoute;
                    try {
                        await this.fetchComponent("/404");
                        notFoundRoute = "/404";
                    } catch (_) {
                        notFoundRoute = "/_error";
                    }
                    routeInfo = await this.getRouteInfo({
                        route: notFoundRoute,
                        pathname: notFoundRoute,
                        query,
                        as,
                        resolvedAs,
                        routeProps: {
                            shallow: false
                        },
                        locale: nextState.locale,
                        isPreview: nextState.isPreview,
                        isNotFound: true
                    });
                    if ("type" in routeInfo) {
                        throw new Error("Unexpected middleware effect on /404");
                    }
                }
            }
            if (isQueryUpdating && this.pathname === "/_error" && ((_self___NEXT_DATA___props = self.__NEXT_DATA__.props) == null ? void 0 : (_self___NEXT_DATA___props_pageProps = _self___NEXT_DATA___props.pageProps) == null ? void 0 : _self___NEXT_DATA___props_pageProps.statusCode) === 500 && ((_routeInfo_props = routeInfo.props) == null ? void 0 : _routeInfo_props.pageProps)) {
                // ensure statusCode is still correct for static 500 page
                // when updating query information
                routeInfo.props.pageProps.statusCode = 500;
            }
            var _routeInfo_route;
            // shallow routing is only allowed for same page URL changes.
            const isValidShallowRoute = options.shallow && nextState.route === ((_routeInfo_route = routeInfo.route) != null ? _routeInfo_route : route);
            var _options_scroll;
            const shouldScroll = (_options_scroll = options.scroll) != null ? _options_scroll : !isQueryUpdating && !isValidShallowRoute;
            const resetScroll = shouldScroll ? {
                x: 0,
                y: 0
            } : null;
            const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
            // the new state that the router gonna set
            const upcomingRouterState = {
                ...nextState,
                route,
                pathname,
                query,
                asPath: cleanedAs,
                isFallback: false
            };
            // When the page being rendered is the 404 page, we should only update the
            // query parameters. Route changes here might add the basePath when it
            // wasn't originally present. This is also why this block is before the
            // below `changeState` call which updates the browser's history (changing
            // the URL).
            if (isQueryUpdating && isErrorRoute) {
                var _self___NEXT_DATA___props1, _self___NEXT_DATA___props_pageProps1, _routeInfo_props1;
                routeInfo = await this.getRouteInfo({
                    route: this.pathname,
                    pathname: this.pathname,
                    query,
                    as,
                    resolvedAs,
                    routeProps: {
                        shallow: false
                    },
                    locale: nextState.locale,
                    isPreview: nextState.isPreview,
                    isQueryUpdating: isQueryUpdating && !this.isFallback
                });
                if ("type" in routeInfo) {
                    throw new Error("Unexpected middleware effect on " + this.pathname);
                }
                if (this.pathname === "/_error" && ((_self___NEXT_DATA___props1 = self.__NEXT_DATA__.props) == null ? void 0 : (_self___NEXT_DATA___props_pageProps1 = _self___NEXT_DATA___props1.pageProps) == null ? void 0 : _self___NEXT_DATA___props_pageProps1.statusCode) === 500 && ((_routeInfo_props1 = routeInfo.props) == null ? void 0 : _routeInfo_props1.pageProps)) {
                    // ensure statusCode is still correct for static 500 page
                    // when updating query information
                    routeInfo.props.pageProps.statusCode = 500;
                }
                try {
                    await this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                } catch (err) {
                    if ((0, _iserror.default)(err) && err.cancelled) {
                        Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                    }
                    throw err;
                }
                return true;
            }
            Router.events.emit("beforeHistoryChange", as, routeProps);
            this.changeState(method, url, as, options);
            // for query updates we can skip it if the state is unchanged and we don't
            // need to scroll
            // https://github.com/vercel/next.js/issues/37139
            const canSkipUpdating = isQueryUpdating && !upcomingScrollState && !readyStateChange && !localeChange && (0, _comparestates.compareRouterStates)(upcomingRouterState, this.state);
            if (!canSkipUpdating) {
                try {
                    await this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                } catch (e) {
                    if (e.cancelled) routeInfo.error = routeInfo.error || e;
                    else throw e;
                }
                if (routeInfo.error) {
                    if (!isQueryUpdating) {
                        Router.events.emit("routeChangeError", routeInfo.error, cleanedAs, routeProps);
                    }
                    throw routeInfo.error;
                }
                if (false) {}
                if (!isQueryUpdating) {
                    Router.events.emit("routeChangeComplete", as, routeProps);
                }
                // A hash mark # is the optional last part of a URL
                const hashRegex = /#.+$/;
                if (shouldScroll && hashRegex.test(as)) {
                    this.scrollToHash(as);
                }
            }
            return true;
        } catch (err) {
            if ((0, _iserror.default)(err) && err.cancelled) {
                return false;
            }
            throw err;
        }
    }
    changeState(method, url, as, options) {
        if (options === void 0) options = {};
        if (false) {}
        if (method !== "pushState" || (0, _utils.getURL)() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                key: this._key = method !== "pushState" ? this._key : createKey()
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            "", as);
        }
    }
    async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        console.error(err);
        if (err.cancelled) {
            // bubble up cancellation errors
            throw err;
        }
        if ((0, _routeloader.isAssetError)(err) || loadErrorFail) {
            Router.events.emit("routeChangeError", err, as, routeProps);
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            handleHardNavigation({
                url: as,
                router: this
            });
            // Changing the URL doesn't block executing the current code path.
            // So let's throw a cancellation error stop the routing logic.
            throw buildCancellationError();
        }
        try {
            let props;
            const { page: Component, styleSheets } = await this.fetchComponent("/_error");
            const routeInfo = {
                props,
                Component,
                styleSheets,
                err,
                error: err
            };
            if (!routeInfo.props) {
                try {
                    routeInfo.props = await this.getInitialProps(Component, {
                        err,
                        pathname,
                        query
                    });
                } catch (gipErr) {
                    console.error("Error in error page `getInitialProps`: ", gipErr);
                    routeInfo.props = {};
                }
            }
            return routeInfo;
        } catch (routeInfoErr) {
            return this.handleRouteInfoError((0, _iserror.default)(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
        }
    }
    async getRouteInfo(param) {
        let { route: requestedRoute, pathname, query, as, resolvedAs, routeProps, locale, hasMiddleware, isPreview, unstable_skipClientCache, isQueryUpdating, isMiddlewareRewrite, isNotFound } = param;
        /**
     * This `route` binding can change if there's a rewrite
     * so we keep a reference to the original requested route
     * so we can store the cache for it and avoid re-requesting every time
     * for shallow routing purposes.
     */ let route = requestedRoute;
        try {
            var _data_effect, _data_effect1, _data_effect2, _data_response;
            const handleCancelled = getCancelledHandler({
                route,
                router: this
            });
            let existingInfo = this.components[route];
            if (routeProps.shallow && existingInfo && this.route === route) {
                return existingInfo;
            }
            if (hasMiddleware) {
                existingInfo = undefined;
            }
            let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && "production" !== "development" ? existingInfo : undefined;
            const isBackground = isQueryUpdating;
            const fetchNextDataParams = {
                dataHref: this.pageLoader.getDataHref({
                    href: (0, _formaturl.formatWithValidation)({
                        pathname,
                        query
                    }),
                    skipInterpolation: true,
                    asPath: isNotFound ? "/404" : resolvedAs,
                    locale
                }),
                hasMiddleware: true,
                isServerRender: this.isSsr,
                parseJSON: true,
                inflightCache: isBackground ? this.sbc : this.sdc,
                persistCache: !isPreview,
                isPrefetch: false,
                unstable_skipClientCache,
                isBackground
            };
            let data = isQueryUpdating && !isMiddlewareRewrite ? null : await withMiddlewareEffects({
                fetchData: ()=>fetchNextData(fetchNextDataParams),
                asPath: isNotFound ? "/404" : resolvedAs,
                locale: locale,
                router: this
            }).catch((err)=>{
                // we don't hard error during query updating
                // as it's un-necessary and doesn't need to be fatal
                // unless it is a fallback route and the props can't
                // be loaded
                if (isQueryUpdating) {
                    return null;
                }
                throw err;
            });
            // when rendering error routes we don't apply middleware
            // effects
            if (data && (pathname === "/_error" || pathname === "/404")) {
                data.effect = undefined;
            }
            if (isQueryUpdating) {
                if (!data) {
                    data = {
                        json: self.__NEXT_DATA__.props
                    };
                } else {
                    data.json = self.__NEXT_DATA__.props;
                }
            }
            handleCancelled();
            if ((data == null ? void 0 : (_data_effect = data.effect) == null ? void 0 : _data_effect.type) === "redirect-internal" || (data == null ? void 0 : (_data_effect1 = data.effect) == null ? void 0 : _data_effect1.type) === "redirect-external") {
                return data.effect;
            }
            if ((data == null ? void 0 : (_data_effect2 = data.effect) == null ? void 0 : _data_effect2.type) === "rewrite") {
                const resolvedRoute = (0, _removetrailingslash.removeTrailingSlash)(data.effect.resolvedHref);
                const pages = await this.pageLoader.getPageList();
                // during query updating the page must match although during
                // client-transition a redirect that doesn't match a page
                // can be returned and this should trigger a hard navigation
                // which is valid for incremental migration
                if (!isQueryUpdating || pages.includes(resolvedRoute)) {
                    route = resolvedRoute;
                    pathname = data.effect.resolvedHref;
                    query = {
                        ...query,
                        ...data.effect.parsedAs.query
                    };
                    resolvedAs = (0, _removebasepath.removeBasePath)((0, _normalizelocalepath.normalizeLocalePath)(data.effect.parsedAs.pathname, this.locales).pathname);
                    // Check again the cache with the new destination.
                    existingInfo = this.components[route];
                    if (routeProps.shallow && existingInfo && this.route === route && !hasMiddleware) {
                        // If we have a match with the current route due to rewrite,
                        // we can copy the existing information to the rewritten one.
                        // Then, we return the information along with the matched route.
                        return {
                            ...existingInfo,
                            route
                        };
                    }
                }
            }
            if ((0, _isapiroute.isAPIRoute)(route)) {
                handleHardNavigation({
                    url: as,
                    router: this
                });
                return new Promise(()=>{});
            }
            const routeInfo = cachedRouteInfo || await this.fetchComponent(route).then((res)=>({
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                }));
            if (false) {}
            const wasBailedPrefetch = data == null ? void 0 : (_data_response = data.response) == null ? void 0 : _data_response.headers.get("x-middleware-skip");
            const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
            // For non-SSG prefetches that bailed before sending data
            // we clear the cache to fetch full response
            if (wasBailedPrefetch && (data == null ? void 0 : data.dataHref)) {
                delete this.sdc[data.dataHref];
            }
            const { props, cacheKey } = await this._getData(async ()=>{
                if (shouldFetchData) {
                    if ((data == null ? void 0 : data.json) && !wasBailedPrefetch) {
                        return {
                            cacheKey: data.cacheKey,
                            props: data.json
                        };
                    }
                    const dataHref = (data == null ? void 0 : data.dataHref) ? data.dataHref : this.pageLoader.getDataHref({
                        href: (0, _formaturl.formatWithValidation)({
                            pathname,
                            query
                        }),
                        asPath: resolvedAs,
                        locale
                    });
                    const fetched = await fetchNextData({
                        dataHref,
                        isServerRender: this.isSsr,
                        parseJSON: true,
                        inflightCache: wasBailedPrefetch ? {} : this.sdc,
                        persistCache: !isPreview,
                        isPrefetch: false,
                        unstable_skipClientCache
                    });
                    return {
                        cacheKey: fetched.cacheKey,
                        props: fetched.json || {}
                    };
                }
                return {
                    headers: {},
                    props: await this.getInitialProps(routeInfo.Component, {
                        pathname,
                        query,
                        asPath: as,
                        locale,
                        locales: this.locales,
                        defaultLocale: this.defaultLocale
                    })
                };
            });
            // Only bust the data cache for SSP routes although
            // middleware can skip cache per request with
            // x-middleware-cache: no-cache as well
            if (routeInfo.__N_SSP && fetchNextDataParams.dataHref && cacheKey) {
                delete this.sdc[cacheKey];
            }
            // we kick off a HEAD request in the background
            // when a non-prefetch request is made to signal revalidation
            if (!this.isPreview && routeInfo.__N_SSG && "production" !== "development" && !isQueryUpdating) {
                fetchNextData(Object.assign({}, fetchNextDataParams, {
                    isBackground: true,
                    persistCache: false,
                    inflightCache: this.sbc
                })).catch(()=>{});
            }
            props.pageProps = Object.assign({}, props.pageProps);
            routeInfo.props = props;
            routeInfo.route = route;
            routeInfo.query = query;
            routeInfo.resolvedAs = resolvedAs;
            this.components[route] = routeInfo;
            return routeInfo;
        } catch (err) {
            return this.handleRouteInfoError((0, _iserror.getProperError)(err), pathname, query, as, routeProps);
        }
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
            // Scroll to top if the hash is just `#` with no value or `#top`
            // To mirror browsers
            if (hash === "" || hash === "top") {
                window.scrollTo(0, 0);
                return;
            }
            // Decode hash to make non-latin anchor works.
            const rawHash = decodeURIComponent(hash);
            // First we check if the element by id is found
            const idEl = document.getElementById(rawHash);
            if (idEl) {
                idEl.scrollIntoView();
                return;
            }
            // If there's no element with the id, we check the `name` property
            // To mirror browsers
            const nameEl = document.getElementsByName(rawHash)[0];
            if (nameEl) {
                nameEl.scrollIntoView();
            }
        }, {
            onlyHashChange: this.onlyAHashChange(as)
        });
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ async prefetch(url, asPath, options) {
        if (asPath === void 0) asPath = url;
        if (options === void 0) options = {};
        // Prefetch is not supported in development mode because it would trigger on-demand-entries
        if (false) {}
        if (false) {}
        let parsed = (0, _parserelativeurl.parseRelativeUrl)(url);
        const urlPathname = parsed.pathname;
        let { pathname, query } = parsed;
        const originalPathname = pathname;
        if (false) {}
        const pages = await this.pageLoader.getPageList();
        let resolvedAs = asPath;
        const locale = typeof options.locale !== "undefined" ? options.locale || undefined : this.locale;
        const isMiddlewareMatch = await matchesMiddleware({
            asPath: asPath,
            locale: locale,
            router: this
        });
        if (false) {}
        parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
        if ((0, _isdynamic.isDynamicRoute)(parsed.pathname)) {
            pathname = parsed.pathname;
            parsed.pathname = pathname;
            Object.assign(query, (0, _routematcher.getRouteMatcher)((0, _routeregex.getRouteRegex)(parsed.pathname))((0, _parsepath.parsePath)(asPath).pathname) || {});
            if (!isMiddlewareMatch) {
                url = (0, _formaturl.formatWithValidation)(parsed);
            }
        }
        const data =  false ? 0 : await withMiddlewareEffects({
            fetchData: ()=>fetchNextData({
                    dataHref: this.pageLoader.getDataHref({
                        href: (0, _formaturl.formatWithValidation)({
                            pathname: originalPathname,
                            query
                        }),
                        skipInterpolation: true,
                        asPath: resolvedAs,
                        locale
                    }),
                    hasMiddleware: true,
                    isServerRender: this.isSsr,
                    parseJSON: true,
                    inflightCache: this.sdc,
                    persistCache: !this.isPreview,
                    isPrefetch: true
                }),
            asPath: asPath,
            locale: locale,
            router: this
        });
        /**
     * If there was a rewrite we apply the effects of the rewrite on the
     * current parameters for the prefetch.
     */ if ((data == null ? void 0 : data.effect.type) === "rewrite") {
            parsed.pathname = data.effect.resolvedHref;
            pathname = data.effect.resolvedHref;
            query = {
                ...query,
                ...data.effect.parsedAs.query
            };
            resolvedAs = data.effect.parsedAs.pathname;
            url = (0, _formaturl.formatWithValidation)(parsed);
        }
        /**
     * If there is a redirect to an external destination then we don't have
     * to prefetch content as it will be unused.
     */ if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
            return;
        }
        const route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        if (await this._bfl(asPath, resolvedAs, options.locale, true)) {
            this.components[urlPathname] = {
                __appRouter: true
            };
        }
        await Promise.all([
            this.pageLoader._isSsg(route).then((isSsg)=>{
                return isSsg ? fetchNextData({
                    dataHref: (data == null ? void 0 : data.json) ? data == null ? void 0 : data.dataHref : this.pageLoader.getDataHref({
                        href: url,
                        asPath: resolvedAs,
                        locale: locale
                    }),
                    isServerRender: false,
                    parseJSON: true,
                    inflightCache: this.sdc,
                    persistCache: !this.isPreview,
                    isPrefetch: true,
                    unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                }).then(()=>false).catch(()=>false) : false;
            }),
            this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
        ]);
    }
    async fetchComponent(route) {
        const handleCancelled = getCancelledHandler({
            route,
            router: this
        });
        try {
            const componentResult = await this.pageLoader.loadPage(route);
            handleCancelled();
            return componentResult;
        } catch (err) {
            handleCancelled();
            throw err;
        }
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData({
            dataHref,
            isServerRender: true,
            parseJSON: false,
            inflightCache: this.sdc,
            persistCache: false,
            isPrefetch: false
        }).then((param)=>{
            let { text } = param;
            return {
                data: text
            };
        });
    }
    getInitialProps(Component, ctx) {
        const { Component: App } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils.loadGetInitialProps)(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
    constructor(pathname, query, as, { initialProps, pageLoader, App, wrapApp, Component, err, subscription, isFallback, locale, locales, defaultLocale, domainLocales, isPreview }){
        // Server Data Cache (full data requests)
        this.sdc = {};
        // Server Background Cache (HEAD requests)
        this.sbc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e)=>{
            const { isFirstPopStateEvent } = this;
            this.isFirstPopStateEvent = false;
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname, query } = this;
                this.changeState("replaceState", (0, _formaturl.formatWithValidation)({
                    pathname: (0, _addbasepath.addBasePath)(pathname),
                    query
                }), (0, _utils.getURL)());
                return;
            }
            // __NA is used to identify if the history entry can be handled by the app-router.
            if (state.__NA) {
                window.location.reload();
                return;
            }
            if (!state.__N) {
                return;
            }
            // Safari fires popstateevent when reopening the browser.
            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
                return;
            }
            let forcedScroll;
            const { url, as, options, key } = state;
            if (false) {}
            this._key = key;
            const { pathname } = (0, _parserelativeurl.parseRelativeUrl)(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === (0, _addbasepath.addBasePath)(this.asPath) && pathname === (0, _addbasepath.addBasePath)(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change("replaceState", url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale,
                // @ts-ignore internal value not exposed on types
                _h: 0
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _removetrailingslash.removeTrailingSlash)(pathname);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname !== "/_error") {
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP
            };
        }
        this.components["/_app"] = {
            Component: App,
            styleSheets: []
        };
        if (true) {
            const { BloomFilter } = __webpack_require__(8398);
            const staticFilterData = {"numItems":20,"errorRate":0.01,"numBits":192,"numHashes":7,"bitArray":[0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1]};
            const dynamicFilterData = {"numItems":2,"errorRate":0.01,"numBits":20,"numHashes":7,"bitArray":[1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1]};
            if (staticFilterData == null ? void 0 : staticFilterData.numHashes) {
                this._bfl_s = new BloomFilter(staticFilterData.numItems, staticFilterData.errorRate);
                this._bfl_s.import(staticFilterData);
            }
            if (dynamicFilterData == null ? void 0 : dynamicFilterData.numHashes) {
                this._bfl_d = new BloomFilter(dynamicFilterData.numItems, dynamicFilterData.errorRate);
                this._bfl_d.import(dynamicFilterData);
            }
        }
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isdynamic.isDynamicRoute)(pathname) && self.__NEXT_DATA__.autoExport;
        this.basePath =  false || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
        if (false) {}
        this.state = {
            route,
            pathname,
            query,
            asPath: autoExportDynamic ? pathname : as,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (false) {}
    }
}
(()=>{
    Router.events = (0, _mitt.default)();
})(); //# sourceMappingURL=router.js.map


/***/ }),

/***/ 5619:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _addpathprefix = __webpack_require__(5001);
const _pathhasprefix = __webpack_require__(2142);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 5001:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(5017);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 8452:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathSuffix", ({
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
}));
const _parsepath = __webpack_require__(5017);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 3233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscPath: function() {
        return normalizeRscPath;
    }
});
const _ensureleadingslash = __webpack_require__(5819);
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment[0] === "(" && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map


/***/ }),

/***/ 3884:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "compareRouterStates", ({
    enumerable: true,
    get: function() {
        return compareRouterStates;
    }
}));
function compareRouterStates(a, b) {
    const stateKeys = Object.keys(a);
    if (stateKeys.length !== Object.keys(b).length) return false;
    for(let i = stateKeys.length; i--;){
        const key = stateKeys[i];
        if (key === "query") {
            const queryKeys = Object.keys(a.query);
            if (queryKeys.length !== Object.keys(b.query).length) {
                return false;
            }
            for(let j = queryKeys.length; j--;){
                const queryKey = queryKeys[j];
                if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
                    return false;
                }
            }
        } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=compare-states.js.map


/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "formatNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
}));
const _removetrailingslash = __webpack_require__(7571);
const _addpathprefix = __webpack_require__(5001);
const _addpathsuffix = __webpack_require__(8452);
const _addlocale = __webpack_require__(5619);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 6948:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    }
});
const _interop_require_wildcard = __webpack_require__(7736);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(7996));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || "";
    let pathname = urlObj.pathname || "";
    let hash = urlObj.hash || "";
    let query = urlObj.query || "";
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ":" + urlObj.port;
        }
    }
    if (query && typeof query === "object") {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || "";
    if (protocol && !protocol.endsWith(":")) protocol += ":";
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
    } else if (!host) {
        host = "";
    }
    if (hash && hash[0] !== "#") hash = "#" + hash;
    if (search && search[0] !== "?") search = "?" + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace("#", "%23");
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    "auth",
    "hash",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "slashes"
];
function formatWithValidation(url) {
    if (false) {}
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map


/***/ }),

/***/ 919:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return getAssetPathFromRoute;
    }
}));
function getAssetPathFromRoute(route, ext) {
    if (ext === void 0) ext = "";
    const path = route === "/" ? "/index" : /^\/index(\/|$)/.test(route) ? "/index" + route : "" + route;
    return path + ext;
} //# sourceMappingURL=get-asset-path-from-route.js.map


/***/ }),

/***/ 8278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
}));
const _normalizelocalepath = __webpack_require__(193);
const _removepathprefix = __webpack_require__(6497);
const _pathhasprefix = __webpack_require__(2142);
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 9641:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "handleSmoothScroll", ({
    enumerable: true,
    get: function() {
        return handleSmoothScroll;
    }
}));
function handleSmoothScroll(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=handle-smooth-scroll.js.map


/***/ }),

/***/ 8445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __webpack_require__(5951);
const _isdynamic = __webpack_require__(1369); //# sourceMappingURL=index.js.map


/***/ }),

/***/ 3042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "interpolateAs", ({
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
}));
const _routematcher = __webpack_require__(742);
const _routeregex = __webpack_require__(8501);
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map


/***/ }),

/***/ 2226:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isBot", ({
    enumerable: true,
    get: function() {
        return isBot;
    }
}));
function isBot(userAgent) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
} //# sourceMappingURL=is-bot.js.map


/***/ }),

/***/ 1369:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// Identify /[param]/ in route string

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isDynamicRoute", ({
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
}));
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map


/***/ }),

/***/ 9891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isLocalURL", ({
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
}));
const _utils = __webpack_require__(5005);
const _hasbasepath = __webpack_require__(8175);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map


/***/ }),

/***/ 2632:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "omit", ({
    enumerable: true,
    get: function() {
        return omit;
    }
}));
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
} //# sourceMappingURL=omit.js.map


/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 1123:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parseRelativeUrl", ({
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
}));
const _utils = __webpack_require__(5005);
const _querystring = __webpack_require__(7996);
function parseRelativeUrl(url, base) {
    const globalBase = new URL( true ? "http://n" : 0);
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL( true ? "http://n" : 0) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map


/***/ }),

/***/ 2142:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(5017);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 7996:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    },
    assign: function() {
        return assign;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map


/***/ }),

/***/ 6497:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removePathPrefix", ({
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
}));
const _pathhasprefix = __webpack_require__(2142);
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 7571:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 7612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "resolveHref", ({
    enumerable: true,
    get: function() {
        return resolveHref;
    }
}));
const _querystring = __webpack_require__(7996);
const _formaturl = __webpack_require__(6948);
const _omit = __webpack_require__(2632);
const _utils = __webpack_require__(5005);
const _normalizetrailingslash = __webpack_require__(9417);
const _islocalurl = __webpack_require__(9891);
const _isdynamic = __webpack_require__(1369);
const _interpolateas = __webpack_require__(3042);
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?");
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isdynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
} //# sourceMappingURL=resolve-href.js.map


/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getRouteMatcher", ({
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
}));
const _utils = __webpack_require__(5005);
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError("failed to decode param");
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map


/***/ }),

/***/ 8501:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRouteRegex: function() {
        return getRouteRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    }
});
const _interceptionroutes = __webpack_require__(1906);
const _escaperegexp = __webpack_require__(1177);
const _removetrailingslash = __webpack_require__(7571);
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
/**
 * Parses a given parameter from a route to a data structure that can be used
 * to generate the parametrized route. Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 */ function parseParameter(param) {
    const optional = param.startsWith("[") && param.endsWith("]");
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith("...");
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = "";
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, "");
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = "" + key;
    }
    return repeat ? optional ? "(?:/(?<" + cleanedKey + ">.+?))?" : "/(?<" + cleanedKey + ">.+?)" : "/(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split("/");
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(""),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map


/***/ }),

/***/ 5951:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSortedRoutes", ({
    enumerable: true,
    get: function() {
        return getSortedRoutes;
    }
}));
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = "/";
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get("[]")._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === "/" ? "/" : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get("[...]")._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get("[[...]]")._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith("...")) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith(".")) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = "[[...]]";
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = "[...]";
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = "[]";
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
} //# sourceMappingURL=sorted-routes.js.map


/***/ }),

/***/ 5005:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    isResSent: function() {
        return isResSent;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    DecodeError: function() {
        return DecodeError;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : "");
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split("?");
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? "?" + urlParts.slice(1).join("?") : "");
}
async function loadGetInitialProps(App, ctx) {
    if (false) { var _App_prototype; }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw new Error(message);
    }
    if (false) {}
    return props;
}
const SP = typeof performance !== "undefined";
const ST = SP && [
    "mark",
    "measure",
    "getEntriesByName"
].every((method)=>typeof performance[method] === "function");
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = "ENOENT";
        this.name = "PageNotFoundError";
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = "ENOENT";
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map


/***/ }),

/***/ 1509:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* unused reexport */ __webpack_require__(2108);


/***/ }),

/***/ 4831:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/ 
var aa = __webpack_require__(9040), ca = __webpack_require__(4102);
function p(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set, ea = {};
function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
}
function ha(a, b) {
    ea[a] = b;
    for(a = 0; a < b.length; a++)da.add(b[a]);
}
var ia = !( true || 0), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
    if (ja.call(ma, a)) return !0;
    if (ja.call(la, a)) return !1;
    if (ka.test(a)) return ma[a] = !0;
    la[a] = !0;
    return !1;
}
function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch(typeof b){
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (d) return !1;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
        default:
            return !1;
    }
}
function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch(c.type){
        case 3:
            return !b;
        case 4:
            return !1 === b;
        case 5:
            return isNaN(b);
        case 6:
            return isNaN(b) || 1 > b;
    }
    return !1;
}
function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    z[a] = new v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    z[a] = new v(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    z[a] = new v(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    z[a] = new v(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var Ja = Symbol.iterator;
function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
    if (void 0 === La) try {
        throw Error();
    } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
    }
    return "\n" + La + a;
}
var Na = !1;
function Oa(a, b) {
    if (!a || Na) return "";
    Na = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (b) if (b = function() {
            throw Error();
        }, Object.defineProperty(b.prototype, "props", {
            set: function() {
                throw Error();
            }
        }), "object" === typeof Reflect && Reflect.construct) {
            try {
                Reflect.construct(b, []);
            } catch (l) {
                var d = l;
            }
            Reflect.construct(a, [], b);
        } else {
            try {
                b.call();
            } catch (l) {
                d = l;
            }
            a.call(b.prototype);
        }
        else {
            try {
                throw Error();
            } catch (l) {
                d = l;
            }
            a();
        }
    } catch (l) {
        if (l && d && "string" === typeof l.stack) {
            for(var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];)h--;
            for(; 1 <= g && 0 <= h; g--, h--)if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                    do if (g--, h--, 0 > h || e[g] !== f[h]) {
                        var k = "\n" + e[g].replace(" at new ", " at ");
                        a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                        return k;
                    }
                    while (1 <= g && 0 <= h);
                }
                break;
            }
        }
    } finally{
        Na = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
    switch(a.tag){
        case 5:
            return Ma(a.type);
        case 16:
            return Ma("Lazy");
        case 13:
            return Ma("Suspense");
        case 19:
            return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
            return a = Oa(a.type, !1), a;
        case 11:
            return a = Oa(a.type.render, !1), a;
        case 1:
            return a = Oa(a.type, !0), a;
        default:
            return "";
    }
}
function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case ya:
            return "Fragment";
        case wa:
            return "Portal";
        case Aa:
            return "Profiler";
        case za:
            return "StrictMode";
        case Ea:
            return "Suspense";
        case Fa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case Ca:
            return (a.displayName || "Context") + ".Consumer";
        case Ba:
            return (a._context.displayName || "Context") + ".Provider";
        case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case Ga:
            return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
            b = a._payload;
            a = a._init;
            try {
                return Qa(a(b));
            } catch (c) {}
    }
    return null;
}
function Ra(a) {
    var b = a.type;
    switch(a.tag){
        case 24:
            return "Cache";
        case 9:
            return (b.displayName || "Context") + ".Consumer";
        case 10:
            return (b._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return b;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Qa(b);
        case 8:
            return b === za ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
    }
    return null;
}
function Sa(a) {
    switch(typeof a){
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return a;
        case "object":
            return a;
        default:
            return "";
    }
}
function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, {
            configurable: !0,
            get: function() {
                return e.call(this);
            },
            set: function(a) {
                d = "" + a;
                f.call(this, a);
            }
        });
        Object.defineProperty(a, b, {
            enumerable: c.enumerable
        });
        return {
            getValue: function() {
                return d;
            },
            setValue: function(a) {
                d = "" + a;
            },
            stopTracking: function() {
                a._valueTracker = null;
                delete a[b];
            }
        };
    }
}
function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
}
function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
        return a.activeElement || a.body;
    } catch (b) {
        return a.body;
    }
}
function Ya(a, b) {
    var c = b.checked;
    return A({}, b, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != c ? c : a._wrapperState.initialChecked
    });
}
function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
}
function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, !1);
}
function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
}
function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
    a = a.options;
    if (b) {
        b = {};
        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
        c = "" + Sa(c);
        b = null;
        for(e = 0; e < a.length; e++){
            if (a[e].value === c) {
                a[e].selected = !0;
                d && (a[e].defaultSelected = !0);
                return;
            }
            null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = !0);
    }
}
function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, {
        value: void 0,
        defaultValue: void 0,
        children: "" + a._wrapperState.initialValue
    });
}
function hb(a, b) {
    var c = b.value;
    if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
                if (1 < c.length) throw Error(p(93));
                c = c[0];
            }
            b = c;
        }
        null == b && (b = "");
        c = b;
    }
    a._wrapperState = {
        initialValue: Sa(c)
    };
}
function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
}
function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
    switch(a){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
        });
    } : a;
}(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for(b = mb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
        for(; b.firstChild;)a.appendChild(b.firstChild);
    }
});
function ob(a, b) {
    if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
        }
    }
    a.textContent = b;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, qb = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
    });
});
function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
    a = a.style;
    for(var c in b)if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ub(a, b) {
    if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
    }
}
function vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch(a){
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var wb = null;
function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
    if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
}
function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [
        a
    ] : zb = a;
}
function Fb() {
    if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for(a = 0; a < b.length; a++)Bb(b[a]);
    }
}
function Gb(a, b) {
    return a(b);
}
function Hb() {}
var Ib = !1;
function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = !0;
    try {
        return Gb(a, b, c);
    } finally{
        if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
    }
}
function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch(b){
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
        default:
            a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
    return c;
}
var Lb = !1;
if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", {
        get: function() {
            Lb = !0;
        }
    });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
} catch (a) {
    Lb = !1;
}
function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        b.apply(c, l);
    } catch (m) {
        this.onError(m);
    }
}
var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = {
    onError: function(a) {
        Ob = !0;
        Pb = a;
    }
};
function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = !1;
    Pb = null;
    Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
        if (Ob) {
            var l = Pb;
            Ob = !1;
            Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = !0, Rb = l);
    }
}
function Vb(a) {
    var b = a, c = a;
    if (a.alternate) for(; b.return;)b = b.return;
    else {
        a = b;
        do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
    }
    return 3 === b.tag ? c : null;
}
function Wb(a) {
    if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
    }
    return null;
}
function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
    var b = a.alternate;
    if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
    }
    for(var c = a, d = b;;){
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
            d = e.return;
            if (null !== d) {
                c = d;
                continue;
            }
            break;
        }
        if (e.child === f.child) {
            for(f = e.child; f;){
                if (f === c) return Xb(e), a;
                if (f === d) return Xb(e), b;
                f = f.sibling;
            }
            throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
            for(var g = !1, h = e.child; h;){
                if (h === c) {
                    g = !0;
                    c = e;
                    d = f;
                    break;
                }
                if (h === d) {
                    g = !0;
                    d = e;
                    c = f;
                    break;
                }
                h = h.sibling;
            }
            if (!g) {
                for(h = f.child; h;){
                    if (h === c) {
                        g = !0;
                        c = f;
                        d = e;
                        break;
                    }
                    if (h === d) {
                        g = !0;
                        d = f;
                        c = e;
                        break;
                    }
                    h = h.sibling;
                }
                if (!g) throw Error(p(189));
            }
        }
        if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
}
function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
}
function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for(a = a.child; null !== a;){
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
    }
    return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
    switch(a & -a){
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return a & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return a;
    }
}
function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
}
function vc(a, b) {
    switch(a){
        case 1:
        case 2:
        case 4:
            return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return b + 5E3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function wc(a, b) {
    for(var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;){
        var g = 31 - oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
    }
}
function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
}
function zc(a) {
    for(var b = [], c = 0; 31 > c; c++)b.push(a);
    return b;
}
function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
}
function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for(a = a.expirationTimes; 0 < c;){
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
    }
}
function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for(a = a.entanglements; c;){
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
    }
}
var C = 0;
function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
    switch(a){
        case "focusin":
        case "focusout":
            Lc = null;
            break;
        case "dragenter":
        case "dragleave":
            Mc = null;
            break;
        case "mouseover":
        case "mouseout":
            Nc = null;
            break;
        case "pointerover":
        case "pointerout":
            Oc.delete(b.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Pc.delete(b.pointerId);
    }
}
function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = {
        blockedOn: b,
        domEventName: c,
        eventSystemFlags: d,
        nativeEvent: f,
        targetContainers: [
            e
        ]
    }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
}
function Uc(a, b, c, d, e) {
    switch(b){
        case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), !0;
        case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), !0;
        case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), !0;
        case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return !0;
        case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
    }
    return !1;
}
function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
            if (b = c.tag, 13 === b) {
                if (b = Wb(c), null !== b) {
                    a.blockedOn = b;
                    Ic(a.priority, function() {
                        Gc(c);
                    });
                    return;
                }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                return;
            }
        }
    }
    a.blockedOn = null;
}
function Xc(a) {
    if (null !== a.blockedOn) return !1;
    for(var b = a.targetContainers; 0 < b.length;){
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
        b.shift();
    }
    return !0;
}
function Zc(a, b, c) {
    Xc(a) && c.delete(b);
}
function $c() {
    Jc = !1;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
}
function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
    function b(b) {
        return ad(b, a);
    }
    if (0 < Kc.length) {
        ad(Kc[0], a);
        for(var c = 1; c < Kc.length; c++){
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
        }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for(c = 0; c < Qc.length; c++)d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for(; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);)Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = !0;
function ed(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
        C = 1, fd(a, b, c, d);
    } finally{
        C = e, cd.transition = f;
    }
}
function gd(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
        C = 4, fd(a, b, c, d);
    } finally{
        C = e, cd.transition = f;
    }
}
function fd(a, b, c, d) {
    if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for(; null !== e;){
                var f = Cb(e);
                null !== f && Ec(f);
                f = Yc(a, b, c, d);
                null === f && hd(a, b, d, id, c);
                if (f === e) break;
                e = f;
            }
            null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
    }
}
var id = null;
function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a) if (b = Vb(a), null === b) a = null;
    else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
    } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
    } else b !== a && (a = null);
    id = a;
    return null;
}
function jd(a) {
    switch(a){
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch(ec()){
                case fc:
                    return 1;
                case gc:
                    return 4;
                case hc:
                case ic:
                    return 16;
                case jc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var kd = null, ld = null, md = null;
function nd() {
    if (md) return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for(a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
}
function pd() {
    return !0;
}
function qd() {
    return !1;
}
function rd(a) {
    function b(b, d, e, f, g) {
        this._reactName = b;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
    }
    A(b.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
        },
        stopPropagation: function() {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
        },
        persist: function() {},
        isPersistent: pd
    });
    return b;
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
        return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
}, td = rd(sd), ud = A({}, sd, {
    view: 0,
    detail: 0
}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
    },
    movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
    }
}), Bd = rd(Ad), Cd = A({}, Ad, {
    dataTransfer: 0
}), Dd = rd(Cd), Ed = A({}, ud, {
    relatedTarget: 0
}), Fd = rd(Ed), Gd = A({}, sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Hd = rd(Gd), Id = A({}, sd, {
    clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
}), Jd = rd(Id), Kd = A({}, sd, {
    data: 0
}), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
}
function zd() {
    return Pd;
}
var Qd = A({}, ud, {
    key: function(a) {
        if (a.key) {
            var b = Md[a.key] || a.key;
            if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
    },
    keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
}), Rd = rd(Qd), Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Td = rd(Sd), Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
}), Vd = rd(Ud), Wd = A({}, sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
}), Zd = rd(Yd), $d = [
    9,
    13,
    27,
    32
], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
function ge(a, b) {
    switch(a){
        case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
            return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = !1;
function je(a, b) {
    switch(a){
        case "compositionend":
            return he(b);
        case "keypress":
            if (32 !== b.which) return null;
            fe = !0;
            return ee;
        case "textInput":
            return a = b.data, a === ee && fe ? null : a;
        default:
            return null;
    }
}
function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
    switch(a){
        case "paste":
            return null;
        case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                if (b.char && 1 < b.char.length) return b.char;
                if (b.which) return String.fromCharCode(b.which);
            }
            return null;
        case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
        default:
            return null;
    }
}
var le = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
}
function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
        event: c,
        listeners: b
    }));
}
var pe = null, qe = null;
function re(a) {
    se(a, 0);
}
function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
}
function ve(a, b) {
    if ("change" === a) return b;
}
var we = !1;
if (ia) {
    var xe;
    if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
            var ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
        }
        xe = ye;
    } else xe = !1;
    we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
    }
}
function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
    if ("click" === a) return te(b);
}
function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
    if (He(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for(d = 0; d < c.length; d++){
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
    }
    return !0;
}
function Je(a) {
    for(; a && a.firstChild;)a = a.firstChild;
    return a;
}
function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for(var d; c;){
        if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return {
                node: c,
                offset: b - a
            };
            a = d;
        }
        a: {
            for(; c;){
                if (c.nextSibling) {
                    c = c.nextSibling;
                    break a;
                }
                c = c.parentNode;
            }
            c = void 0;
        }
        c = Je(c);
    }
}
function Le(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function Me() {
    for(var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;){
        try {
            var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
            c = !1;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
    }
    return b;
}
function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
                a = a.getSelection();
                var e = c.textContent.length, f = Math.min(d.start, e);
                d = void 0 === d.end ? f : Math.min(d.end, e);
                !a.extend && f > d && (e = d, d = f, f = e);
                e = Ke(c, f);
                var g = Ke(c, d);
                e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
        }
        b = [];
        for(a = c; a = a.parentNode;)1 === a.nodeType && b.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
        });
        "function" === typeof c.focus && c.focus();
        for(c = 0; c < b.length; c++)a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
        start: d.selectionStart,
        end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
        anchorNode: d.anchorNode,
        anchorOffset: d.anchorOffset,
        focusNode: d.focusNode,
        focusOffset: d.focusOffset
    }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
        event: b,
        listeners: d
    }), b.target = Qe)));
}
function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
}
var We = {
    animationend: Ve("Animation", "AnimationEnd"),
    animationiteration: Ve("Animation", "AnimationIteration"),
    animationstart: Ve("Animation", "AnimationStart"),
    transitionend: Ve("Transition", "TransitionEnd")
}, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a], c;
    for(c in b)if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
    return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map, ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
    df.set(a, b);
    fa(b, [
        a
    ]);
}
for(var gf = 0; gf < ef.length; gf++){
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", [
    "mouseout",
    "mouseover"
]);
ha("onMouseLeave", [
    "mouseout",
    "mouseover"
]);
ha("onPointerEnter", [
    "pointerout",
    "pointerover"
]);
ha("onPointerLeave", [
    "pointerout",
    "pointerover"
]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
}
function se(a, b) {
    b = 0 !== (b & 4);
    for(var c = 0; c < a.length; c++){
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
            var f = void 0;
            if (b) for(var g = d.length - 1; 0 <= g; g--){
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                nf(e, h, l);
                f = k;
            }
            else for(g = 0; g < d.length; g++){
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                nf(e, h, l);
                f = k;
            }
        }
    }
    if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
}
function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = new Set);
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, !1), c.add(d));
}
function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
    if (!a[rf]) {
        a[rf] = !0;
        da.forEach(function(b) {
            "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
    }
}
function pf(a, b, c, d) {
    switch(jd(b)){
        case 1:
            var e = ed;
            break;
        case 4:
            e = gd;
            break;
        default:
            e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
        capture: !0,
        passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
        passive: e
    }) : a.addEventListener(b, c, !1);
}
function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for(;;){
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for(g = d.return; null !== g;){
                var k = g.tag;
                if (3 === k || 4 === k) {
                    if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                }
                g = g.return;
            }
            for(; null !== h;){
                g = Wc(h);
                if (null === g) return;
                k = g.tag;
                if (5 === k || 6 === k) {
                    d = f = g;
                    continue a;
                }
                h = h.parentNode;
            }
        }
        d = d.return;
    }
    Jb(function() {
        var d = f, e = xb(c), g = [];
        a: {
            var h = df.get(a);
            if (void 0 !== h) {
                var k = td, n = a;
                switch(a){
                    case "keypress":
                        if (0 === od(c)) break a;
                    case "keydown":
                    case "keyup":
                        k = Rd;
                        break;
                    case "focusin":
                        n = "focus";
                        k = Fd;
                        break;
                    case "focusout":
                        n = "blur";
                        k = Fd;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = Fd;
                        break;
                    case "click":
                        if (2 === c.button) break a;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = Bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = Dd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = Vd;
                        break;
                    case $e:
                    case af:
                    case bf:
                        k = Hd;
                        break;
                    case cf:
                        k = Xd;
                        break;
                    case "scroll":
                        k = vd;
                        break;
                    case "wheel":
                        k = Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = Jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = Td;
                }
                var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                t = [];
                for(var w = d, u; null !== w;){
                    u = w;
                    var F = u.stateNode;
                    5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                    if (J) break;
                    w = w.return;
                }
                0 < t.length && (h = new k(h, n, null, c, e), g.push({
                    event: h,
                    listeners: t
                }));
            }
        }
        if (0 === (b & 7)) {
            a: {
                h = "mouseover" === a || "pointerover" === a;
                k = "mouseout" === a || "pointerout" === a;
                if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
                if (k || h) {
                    h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                    if (k) {
                        if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                    } else k = null, n = d;
                    if (k !== n) {
                        t = Bd;
                        F = "onMouseLeave";
                        x = "onMouseEnter";
                        w = "mouse";
                        if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                        J = null == k ? h : ue(k);
                        u = null == n ? h : ue(n);
                        h = new t(F, w + "leave", k, c, e);
                        h.target = J;
                        h.relatedTarget = u;
                        F = null;
                        Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
                        J = F;
                        if (k && n) b: {
                            t = k;
                            x = n;
                            w = 0;
                            for(u = t; u; u = vf(u))w++;
                            u = 0;
                            for(F = x; F; F = vf(F))u++;
                            for(; 0 < w - u;)t = vf(t), w--;
                            for(; 0 < u - w;)x = vf(x), u--;
                            for(; w--;){
                                if (t === x || null !== x && t === x.alternate) break b;
                                t = vf(t);
                                x = vf(x);
                            }
                            t = null;
                        }
                        else t = null;
                        null !== k && wf(g, h, k, t, !1);
                        null !== n && null !== J && wf(g, J, n, t, !0);
                    }
                }
            }
            a: {
                h = d ? ue(d) : window;
                k = h.nodeName && h.nodeName.toLowerCase();
                if ("select" === k || "input" === k && "file" === h.type) var na = ve;
                else if (me(h)) if (we) na = Fe;
                else {
                    na = De;
                    var xa = Ce;
                }
                else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                if (na && (na = na(a, d))) {
                    ne(g, na, c, e);
                    break a;
                }
                xa && xa(a, h, d);
                "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
            }
            xa = d ? ue(d) : window;
            switch(a){
                case "focusin":
                    if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
                    break;
                case "focusout":
                    Se = Re = Qe = null;
                    break;
                case "mousedown":
                    Te = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Te = !1;
                    Ue(g, c, e);
                    break;
                case "selectionchange":
                    if (Pe) break;
                case "keydown":
                case "keyup":
                    Ue(g, c, e);
            }
            var $a;
            if (ae) b: {
                switch(a){
                    case "compositionstart":
                        var ba = "onCompositionStart";
                        break b;
                    case "compositionend":
                        ba = "onCompositionEnd";
                        break b;
                    case "compositionupdate":
                        ba = "onCompositionUpdate";
                        break b;
                }
                ba = void 0;
            }
            else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
                event: ba,
                listeners: xa
            }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                event: e,
                listeners: d
            }), e.data = $a);
        }
        se(g, b);
    });
}
function tf(a, b, c) {
    return {
        instance: a,
        listener: b,
        currentTarget: c
    };
}
function oe(a, b) {
    for(var c = b + "Capture", d = []; null !== a;){
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
        a = a.return;
    }
    return d;
}
function vf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
}
function wf(a, b, c, d, e) {
    for(var f = b._reactName, g = []; null !== c && c !== d;){
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
        c = c.return;
    }
    0 !== g.length && a.push({
        event: b,
        listeners: g
    });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {}
var Cf = null, Df = null;
function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
    setTimeout(function() {
        throw a;
    });
}
function Kf(a, b) {
    var c = b, d = 0;
    do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
            if (0 === d) {
                a.removeChild(e);
                bd(b);
                return;
            }
            d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
    }while (c);
    bd(b);
}
function Lf(a) {
    for(; null != a; a = a.nextSibling){
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
        }
    }
    return a;
}
function Mf(a) {
    a = a.previousSibling;
    for(var b = 0; a;){
        if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
                if (0 === b) return a;
                b--;
            } else "/$" === c && b++;
        }
        a = a.previousSibling;
    }
    return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for(var c = a.parentNode; c;){
        if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for(a = Mf(a); null !== a;){
                if (c = a[Of]) return c;
                a = Mf(a);
            }
            return b;
        }
        a = c;
        c = a.parentNode;
    }
    return null;
}
function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
}
function Db(a) {
    return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
    return {
        current: a
    };
}
function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for(f in c)e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
}
function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
}
function $f() {
    E(Wf);
    E(H);
}
function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
}
function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for(var e in d)if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
}
function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return !0;
}
function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
}
var eg = null, fg = !1, gg = !1;
function hg(a) {
    null === eg ? eg = [
        a
    ] : eg.push(a);
}
function ig(a) {
    fg = !0;
    hg(a);
}
function jg() {
    if (!gg && null !== eg) {
        gg = !0;
        var a = 0, b = C;
        try {
            var c = eg;
            for(C = 1; a < c.length; a++){
                var d = c[a];
                do d = d(!0);
                while (null !== d);
            }
            eg = null;
            fg = !1;
        } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally{
            C = b, gg = !1;
        }
    }
    return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
}
function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f + a;
    } else rg = 1 << f | c << e | d, sg = a;
}
function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
    for(; a === mg;)mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for(; a === qg;)qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = !1, zg = null;
function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [
        c
    ], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
    switch(a.tag){
        case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
        case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
        case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                id: rg,
                overflow: sg
            } : null, a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824
            }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
        default:
            return !1;
    }
}
function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
    if (I) {
        var b = yg;
        if (b) {
            var c = b;
            if (!Cg(a, b)) {
                if (Dg(a)) throw Error(p(418));
                b = Lf(c.nextSibling);
                var d = xg;
                b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
            }
        } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = !1;
            xg = a;
        }
    }
}
function Fg(a) {
    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
    xg = a;
}
function Gg(a) {
    if (a !== xg) return !1;
    if (!I) return Fg(a), I = !0, !1;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for(; b;)Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
            a = a.nextSibling;
            for(b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("/$" === c) {
                        if (0 === b) {
                            yg = Lf(a.nextSibling);
                            break a;
                        }
                        b--;
                    } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                }
                a = a.nextSibling;
            }
            yg = null;
        }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return !0;
}
function Hg() {
    for(var a = yg; a;)a = Lf(a.nextSibling);
}
function Ig() {
    yg = xg = null;
    I = !1;
}
function Jg(a) {
    null === zg ? zg = [
        a
    ] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
    if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
    Pg = Og = Ng = null;
}
function Rg(a) {
    var b = Mg.current;
    E(Mg);
    a._currentValue = b;
}
function Sg(a, b, c) {
    for(; null !== a;){
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
    }
}
function Tg(a, b) {
    Ng = a;
    Pg = Og = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
}
function Vg(a) {
    var b = a._currentValue;
    if (Pg !== a) if (a = {
        context: a,
        memoizedValue: b,
        next: null
    }, null === Og) {
        if (null === Ng) throw Error(p(308));
        Og = a;
        Ng.dependencies = {
            lanes: 0,
            firstContext: a
        };
    } else Og = Og.next = a;
    return b;
}
var Wg = null;
function Xg(a) {
    null === Wg ? Wg = [
        a
    ] : Wg.push(a);
}
function Yg(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return Zg(a, d);
}
function Zg(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
}
var $g = !1;
function ah(a) {
    a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    };
}
function bh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
    });
}
function ch(a, b) {
    return {
        eventTime: a,
        lane: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
}
function dh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return Zg(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return Zg(a, c);
}
function eh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
    }
}
function fh(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
            do {
                var g = {
                    eventTime: c.eventTime,
                    lane: c.lane,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                };
                null === f ? e = f = g : f = f.next = g;
                c = c.next;
            }while (null !== c);
            null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = {
            baseState: d.baseState,
            firstBaseUpdate: e,
            lastBaseUpdate: f,
            shared: d.shared,
            effects: d.effects
        };
        a.updateQueue = c;
        return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
    var e = a.updateQueue;
    $g = !1;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
                null !== m && (m = m.next = {
                    eventTime: y,
                    lane: 0,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                });
                a: {
                    var n = a, t = h;
                    r = b;
                    y = c;
                    switch(t.tag){
                        case 1:
                            n = t.payload;
                            if ("function" === typeof n) {
                                q = n.call(y, q, r);
                                break a;
                            }
                            q = n;
                            break a;
                        case 3:
                            n.flags = n.flags & -65537 | 128;
                        case 0:
                            n = t.payload;
                            r = "function" === typeof n ? n.call(y, q, r) : n;
                            if (null === r || void 0 === r) break a;
                            q = A({}, q, r);
                            break a;
                        case 2:
                            $g = !0;
                    }
                }
                null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [
                    h
                ] : r.push(h));
            } else y = {
                eventTime: y,
                lane: r,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
            }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
            e = b;
            do g |= e.lane, e = e.next;
            while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        hh |= g;
        a.lanes = g;
        a.memoizedState = q;
    }
}
function ih(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for(b = 0; b < a.length; b++){
        var d = a[b], e = d.callback;
        if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
        }
    }
}
var jh = (new aa.Component).refs;
function kh(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = {
    isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : !1;
    },
    enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
    },
    enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = L(), e = lh(a), f = ch(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = dh(a, f, e);
        null !== b && (mh(b, a, e, d), eh(b, a, e));
    },
    enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = L(), d = lh(a), e = ch(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = dh(a, e, d);
        null !== b && (mh(b, a, d, c), eh(b, a, d));
    }
};
function oh(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
}
function ph(a, b, c) {
    var d = !1, e = Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = nh;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
}
function qh(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = jh;
    ah(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
            c = c._owner;
            if (c) {
                if (1 !== c.tag) throw Error(p(309));
                var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a) {
                var b = e.refs;
                b === jh && (b = e.refs = {});
                null === a ? delete b[f] : b[f] = a;
            };
            b._stringRef = f;
            return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
    }
    return a;
}
function th(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
    var b = a._init;
    return b(a._payload);
}
function vh(a) {
    function b(b, c) {
        if (a) {
            var d = b.deletions;
            null === d ? (b.deletions = [
                c
            ], b.flags |= 16) : d.push(c);
        }
    }
    function c(c, d) {
        if (!a) return null;
        for(; null !== d;)b(c, d), d = d.sibling;
        return null;
    }
    function d(a, b) {
        for(a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
        return a;
    }
    function e(a, b) {
        a = wh(a, b);
        a.index = 0;
        a.sibling = null;
        return a;
    }
    function f(b, c, d) {
        b.index = d;
        if (!a) return b.flags |= 1048576, c;
        d = b.alternate;
        if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
        b.flags |= 2;
        return c;
    }
    function g(b) {
        a && null === b.alternate && (b.flags |= 2);
        return b;
    }
    function h(a, b, c, d) {
        if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function k(a, b, c, d) {
        var f = c.type;
        if (f === ya) return m(a, b, c.props.children, d, c.key);
        if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
        d = yh(c.type, c.key, c.props, null, a.mode, d);
        d.ref = sh(a, b, c);
        d.return = a;
        return d;
    }
    function l(a, b, c, d) {
        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
        b = e(b, c.children || []);
        b.return = a;
        return b;
    }
    function m(a, b, c, d, f) {
        if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function q(a, b, c) {
        if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
        if ("object" === typeof b && null !== b) {
            switch(b.$$typeof){
                case va:
                    return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
                case wa:
                    return b = zh(b, a.mode, c), b.return = a, b;
                case Ha:
                    var d = b._init;
                    return q(a, d(b._payload), c);
            }
            if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
            th(a, b);
        }
        return null;
    }
    function r(a, b, c, d) {
        var e = null !== b ? b.key : null;
        if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
        if ("object" === typeof c && null !== c) {
            switch(c.$$typeof){
                case va:
                    return c.key === e ? k(a, b, c, d) : null;
                case wa:
                    return c.key === e ? l(a, b, c, d) : null;
                case Ha:
                    return e = c._init, r(a, b, e(c._payload), d);
            }
            if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
            th(a, c);
        }
        return null;
    }
    function y(a, b, c, d, e) {
        if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
        if ("object" === typeof d && null !== d) {
            switch(d.$$typeof){
                case va:
                    return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
                case wa:
                    return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                case Ha:
                    var f = d._init;
                    return y(a, b, c, f(d._payload), e);
            }
            if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
            th(b, d);
        }
        return null;
    }
    function n(e, g, h, k) {
        for(var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++){
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n = r(e, u, h[w], k);
            if (null === n) {
                null === u && (u = x);
                break;
            }
            a && u && null === n.alternate && b(e, u);
            g = f(n, g, w);
            null === m ? l = n : m.sibling = n;
            m = n;
            u = x;
        }
        if (w === h.length) return c(e, u), I && tg(e, w), l;
        if (null === u) {
            for(; w < h.length; w++)u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
            I && tg(e, w);
            return l;
        }
        for(u = d(e, u); w < h.length; w++)x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
        a && u.forEach(function(a) {
            return b(e, a);
        });
        I && tg(e, w);
        return l;
    }
    function t(e, g, h, k) {
        var l = Ka(h);
        if ("function" !== typeof l) throw Error(p(150));
        h = l.call(h);
        if (null == h) throw Error(p(151));
        for(var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()){
            m.index > w ? (x = m, m = null) : x = m.sibling;
            var t = r(e, m, n.value, k);
            if (null === t) {
                null === m && (m = x);
                break;
            }
            a && m && null === t.alternate && b(e, m);
            g = f(t, g, w);
            null === u ? l = t : u.sibling = t;
            u = t;
            m = x;
        }
        if (n.done) return c(e, m), I && tg(e, w), l;
        if (null === m) {
            for(; !n.done; w++, n = h.next())n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
            I && tg(e, w);
            return l;
        }
        for(m = d(e, m); !n.done; w++, n = h.next())n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
        a && m.forEach(function(a) {
            return b(e, a);
        });
        I && tg(e, w);
        return l;
    }
    function J(a, d, f, h) {
        "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
        if ("object" === typeof f && null !== f) {
            switch(f.$$typeof){
                case va:
                    a: {
                        for(var k = f.key, l = d; null !== l;){
                            if (l.key === k) {
                                k = f.type;
                                if (k === ya) {
                                    if (7 === l.tag) {
                                        c(a, l.sibling);
                                        d = e(l, f.props.children);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
                                    c(a, l.sibling);
                                    d = e(l, f.props);
                                    d.ref = sh(a, l, f);
                                    d.return = a;
                                    a = d;
                                    break a;
                                }
                                c(a, l);
                                break;
                            } else b(a, l);
                            l = l.sibling;
                        }
                        f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
                    }
                    return g(a);
                case wa:
                    a: {
                        for(l = f.key; null !== d;){
                            if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                c(a, d.sibling);
                                d = e(d, f.children || []);
                                d.return = a;
                                a = d;
                                break a;
                            } else {
                                c(a, d);
                                break;
                            }
                            else b(a, d);
                            d = d.sibling;
                        }
                        d = zh(f, a.mode, h);
                        d.return = a;
                        a = d;
                    }
                    return g(a);
                case Ha:
                    return l = f._init, J(a, d, l(f._payload), h);
            }
            if (eb(f)) return n(a, d, f, h);
            if (Ka(f)) return t(a, d, f, h);
            th(a, f);
        }
        return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
    }
    return J;
}
var Bh = vh(!0), Ch = vh(!1), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
    if (a === Dh) throw Error(p(174));
    return a;
}
function Ih(a, b) {
    G(Gh, b);
    G(Fh, a);
    G(Eh, Dh);
    a = b.nodeType;
    switch(a){
        case 9:
        case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
        default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(Eh);
    G(Eh, b);
}
function Jh() {
    E(Eh);
    E(Fh);
    E(Gh);
}
function Kh(a) {
    Hh(Gh.current);
    var b = Hh(Eh.current);
    var c = lb(b, a.type);
    b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
    Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
    for(var b = a; null !== b;){
        if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
        }
        if (b === a) break;
        for(; null === b.sibling;){
            if (null === b.return || b.return === a) return null;
            b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
    }
    return null;
}
var Nh = [];
function Oh() {
    for(var a = 0; a < Nh.length; a++)Nh[a]._workInProgressVersionPrimary = null;
    Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = !1, Th = !1, Uh = 0, Vh = 0;
function Q() {
    throw Error(p(321));
}
function Wh(a, b) {
    if (null === b) return !1;
    for(var c = 0; c < b.length && c < a.length; c++)if (!He(a[c], b[c])) return !1;
    return !0;
}
function Xh(a, b, c, d, e, f) {
    Rh = f;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
    a = c(d, e);
    if (Th) {
        f = 0;
        do {
            Th = !1;
            Uh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            P = O = null;
            b.updateQueue = null;
            Ph.current = $h;
            a = c(d, e);
        }while (Th);
    }
    Ph.current = ai;
    b = null !== O && null !== O.next;
    Rh = 0;
    P = O = N = null;
    Sh = !1;
    if (b) throw Error(p(300));
    return a;
}
function bi() {
    var a = 0 !== Uh;
    Uh = 0;
    return a;
}
function ci() {
    var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
    return P;
}
function di() {
    if (null === O) {
        var a = N.alternate;
        a = null !== a ? a.memoizedState : null;
    } else a = O.next;
    var b = null === P ? N.memoizedState : P.next;
    if (null !== b) P = b, O = a;
    else {
        if (null === a) throw Error(p(310));
        O = a;
        a = {
            memoizedState: O.memoizedState,
            baseState: O.baseState,
            baseQueue: O.baseQueue,
            queue: O.queue,
            next: null
        };
        null === P ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
}
function ei(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function fi(a) {
    var b = di(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = O, e = d.baseQueue, f = c.pending;
    if (null !== f) {
        if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
    }
    if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
            var m = l.lane;
            if ((Rh & m) === m) null !== k && (k = k.next = {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
            }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
                var q = {
                    lane: m,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                };
                null === k ? (h = k = q, g = d) : k = k.next = q;
                N.lanes |= m;
                hh |= m;
            }
            l = l.next;
        }while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        He(d, b.memoizedState) || (Ug = !0);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
        e = a;
        do f = e.lane, N.lanes |= f, hh |= f, e = e.next;
        while (e !== a);
    } else null === e && (c.lanes = 0);
    return [
        b.memoizedState,
        c.dispatch
    ];
}
function gi(a) {
    var b = di(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (Ug = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
    }
    return [
        f,
        d
    ];
}
function hi() {}
function ii(a, b) {
    var c = N, d = di(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, Ug = !0);
    d = d.queue;
    ji(ki.bind(null, c, d, a), [
        a
    ]);
    if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
        c.flags |= 2048;
        li(9, mi.bind(null, c, d, e, b), void 0, null);
        if (null === R) throw Error(p(349));
        0 !== (Rh & 30) || ni(c, b, e);
    }
    return e;
}
function ni(a, b, c) {
    a.flags |= 16384;
    a = {
        getSnapshot: b,
        value: c
    };
    b = N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, N.updateQueue = b, b.stores = [
        a
    ]) : (c = b.stores, null === c ? b.stores = [
        a
    ] : c.push(a));
}
function mi(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    oi(b) && pi(a);
}
function ki(a, b, c) {
    return c(function() {
        oi(b) && pi(a);
    });
}
function oi(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
        var c = b();
        return !He(a, c);
    } catch (d) {
        return !0;
    }
}
function pi(a) {
    var b = Zg(a, 1);
    null !== b && mh(b, a, 1, -1);
}
function qi(a) {
    var b = ci();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ei,
        lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = ri.bind(null, N, a);
    return [
        b.memoizedState,
        a
    ];
}
function li(a, b, c, d) {
    a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
    };
    b = N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
}
function si() {
    return di().memoizedState;
}
function ti(a, b, c, d) {
    var e = ci();
    N.flags |= a;
    e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
    var e = di();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== O) {
        var g = O.memoizedState;
        f = g.destroy;
        if (null !== d && Wh(d, g.deps)) {
            e.memoizedState = li(b, c, f, d);
            return;
        }
    }
    N.flags |= a;
    e.memoizedState = li(1 | b, c, f, d);
}
function vi(a, b) {
    return ti(8390656, 8, a, b);
}
function ji(a, b) {
    return ui(2048, 8, a, b);
}
function wi(a, b) {
    return ui(4, 2, a, b);
}
function xi(a, b) {
    return ui(4, 4, a, b);
}
function yi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
    };
}
function zi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([
        a
    ]) : null;
    return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {}
function Bi(a, b) {
    var c = di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Wh(b, d[1])) return d[0];
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function Ci(a, b) {
    var c = di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Wh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function Di(a, b, c) {
    if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
    He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
    return b;
}
function Ei(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = Qh.transition;
    Qh.transition = {};
    try {
        a(!1), b();
    } finally{
        C = c, Qh.transition = d;
    }
}
function Fi() {
    return di().memoizedState;
}
function Gi(a, b, c) {
    var d = lh(a);
    c = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Hi(a)) Ii(b, c);
    else if (c = Yg(a, b, c, d), null !== c) {
        var e = L();
        mh(c, a, d, e);
        Ji(c, b, d);
    }
}
function ri(a, b, c) {
    var d = lh(a), e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Hi(a)) Ii(b, e);
    else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = !0;
            e.eagerState = h;
            if (He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
            }
        } catch (l) {} finally{}
        c = Yg(a, b, e, d);
        null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
    }
}
function Hi(a) {
    var b = a.alternate;
    return a === N || null !== b && b === N;
}
function Ii(a, b) {
    Th = Sh = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
}
function Ji(a, b, c) {
    if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
    }
}
var ai = {
    readContext: Vg,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useInsertionEffect: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useSyncExternalStore: Q,
    useId: Q,
    unstable_isNewReconciler: !1
}, Yh = {
    readContext: Vg,
    useCallback: function(a, b) {
        ci().memoizedState = [
            a,
            void 0 === b ? null : b
        ];
        return a;
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([
            a
        ]) : null;
        return ti(4194308, 4, yi.bind(null, b, a), c);
    },
    useLayoutEffect: function(a, b) {
        return ti(4194308, 4, a, b);
    },
    useInsertionEffect: function(a, b) {
        return ti(4, 2, a, b);
    },
    useMemo: function(a, b) {
        var c = ci();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [
            a,
            b
        ];
        return a;
    },
    useReducer: function(a, b, c) {
        var d = ci();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: b
        };
        d.queue = a;
        a = a.dispatch = Gi.bind(null, N, a);
        return [
            d.memoizedState,
            a
        ];
    },
    useRef: function(a) {
        var b = ci();
        a = {
            current: a
        };
        return b.memoizedState = a;
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function(a) {
        return ci().memoizedState = a;
    },
    useTransition: function() {
        var a = qi(!1), b = a[0];
        a = Ei.bind(null, a[1]);
        ci().memoizedState = a;
        return [
            b,
            a
        ];
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(a, b, c) {
        var d = N, e = ci();
        if (I) {
            if (void 0 === c) throw Error(p(407));
            c = c();
        } else {
            c = b();
            if (null === R) throw Error(p(349));
            0 !== (Rh & 30) || ni(d, b, c);
        }
        e.memoizedState = c;
        var f = {
            value: c,
            getSnapshot: b
        };
        e.queue = f;
        vi(ki.bind(null, d, f, a), [
            a
        ]);
        d.flags |= 2048;
        li(9, mi.bind(null, d, f, c, b), void 0, null);
        return c;
    },
    useId: function() {
        var a = ci(), b = R.identifierPrefix;
        if (I) {
            var c = sg;
            var d = rg;
            c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
            b = ":" + b + "R" + c;
            c = Uh++;
            0 < c && (b += "H" + c.toString(32));
            b += ":";
        } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
}, Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function() {
        return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a) {
        var b = di();
        return Di(b, O.memoizedState, a);
    },
    useTransition: function() {
        var a = fi(ei)[0], b = di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
}, $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function() {
        return gi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a) {
        var b = di();
        return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
    },
    useTransition: function() {
        var a = gi(ei)[0], b = di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
};
function Ki(a, b) {
    try {
        var c = "", d = b;
        do c += Pa(d), d = d.return;
        while (d);
        var e = c;
    } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
        value: a,
        source: b,
        stack: e,
        digest: null
    };
}
function Li(a, b, c) {
    return {
        value: a,
        source: null,
        stack: null != c ? c : null,
        digest: null != b ? b : null
    };
}
function Mi(a, b) {
    try {
        console.error(b.value);
    } catch (c) {
        setTimeout(function() {
            throw c;
        });
    }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    c.payload = {
        element: null
    };
    var d = b.value;
    c.callback = function() {
        Pi || (Pi = !0, Qi = d);
        Mi(a, b);
    };
    return c;
}
function Ri(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
            return d(e);
        };
        c.callback = function() {
            Mi(a, b);
        };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Mi(a, b);
        "function" !== typeof d && (null === Si ? Si = new Set([
            this
        ]) : Si.add(this));
        var c = b.stack;
        this.componentDidCatch(b.value, {
            componentStack: null !== c ? c : ""
        });
    });
    return c;
}
function Ti(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
        d = a.pingCache = new Ni;
        var e = new Set;
        d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
    do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
        if (b) return a;
        a = a.return;
    }while (null !== a);
    return null;
}
function Wi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
}
var Xi = ua.ReactCurrentOwner, Ug = !1;
function Yi(a, b, c, d) {
    b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    Tg(b, e);
    d = Xh(a, b, c, d, f, e);
    c = bi();
    if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Yi(a, b, d, e);
    return b.child;
}
function aj(a, b, c, d, e) {
    if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
        a = yh(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
    }
    b.flags |= 1;
    a = wh(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
}
function cj(a, b, c, d, e) {
    if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);
        else return b.lanes = a.lanes, $i(a, b, e);
    }
    return dj(a, b, c, d, e);
}
function ej(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, G(fj, gj), gj |= c;
    else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
            baseLanes: a,
            cachePool: null,
            transitions: null
        }, b.updateQueue = null, G(fj, gj), gj |= a, null;
        b.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        };
        d = null !== f ? f.baseLanes : c;
        G(fj, gj);
        gj |= d;
    }
    else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
    Yi(a, b, e, c);
    return b.child;
}
function hj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    Tg(b, e);
    c = Xh(a, b, c, d, f, e);
    d = bi();
    if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Yi(a, b, c, e);
    return b.child;
}
function ij(a, b, c, d, e) {
    if (Zf(c)) {
        var f = !0;
        cg(b);
    } else f = !1;
    Tg(b, e);
    if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;
    else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
        $g = !1;
        var r = b.memoizedState;
        g.state = r;
        gh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
        g = b.stateNode;
        bh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Lg(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
        $g = !1;
        r = b.memoizedState;
        g.state = r;
        gh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return kj(a, b, c, d, f, e);
}
function kj(a, b, c, d, e, f) {
    hj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
    d = b.stateNode;
    Xi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, !0);
    return b.child;
}
function lj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
    Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Yi(a, b, c, d);
    return b.child;
}
var nj = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function oj(a) {
    return {
        baseLanes: a,
        cachePool: null,
        transitions: null
    };
}
function pj(a, b, c) {
    var d = b.pendingProps, e = M.current, f = !1, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(M, e & 1);
    if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = {
            mode: "hidden",
            children: g
        }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
    if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = {
            mode: "hidden",
            children: d.children
        };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? oj(c) : {
            baseLanes: g.baseLanes | c,
            cachePool: null,
            transitions: g.transitions
        };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = nj;
        return d;
    }
    f = a.child;
    a = f.sibling;
    d = wh(f, {
        mode: "visible",
        children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [
        a
    ], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
}
function rj(a, b) {
    b = qj({
        mode: "visible",
        children: b
    }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
}
function tj(a, b, c, d) {
    null !== d && Jg(d);
    Bh(b, a.child, null, c);
    a = rj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
}
function sj(a, b, c, d, e, f, g) {
    if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = qj({
            mode: "visible",
            children: d.children
        }, e, 0, null);
        f = Ah(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && Bh(b, a.child, null, g);
        b.child.memoizedState = oj(g);
        b.memoizedState = nj;
        return f;
    }
    if (0 === (b.mode & 1)) return tj(a, b, g, null);
    if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = Li(f, d, void 0);
        return tj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (Ug || h) {
        d = R;
        if (null !== d) {
            switch(g & -g){
                case 4:
                    e = 2;
                    break;
                case 16:
                    e = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    e = 32;
                    break;
                case 536870912:
                    e = 268435456;
                    break;
                default:
                    e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
        }
        uj();
        d = Li(Error(p(421)));
        return tj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = !0;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = rj(b, d.children);
    b.flags |= 4096;
    return b;
}
function wj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
        isBackwards: b,
        rendering: null,
        renderingStartTime: 0,
        last: d,
        tail: c,
        tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function yj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Yi(a, b, d.children, c);
    d = M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
        if (null !== a && 0 !== (a.flags & 128)) a: for(a = b.child; null !== a;){
            if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);
            else if (19 === a.tag) wj(a, c, b);
            else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
            }
            if (a === b) break a;
            for(; null === a.sibling;){
                if (null === a.return || a.return === b) break a;
                a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
        }
        d &= 1;
    }
    G(M, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch(e){
        case "forwards":
            c = b.child;
            for(e = null; null !== c;)a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            xj(b, !1, e, c, f);
            break;
        case "backwards":
            c = null;
            e = b.child;
            for(b.child = null; null !== e;){
                a = e.alternate;
                if (null !== a && null === Mh(a)) {
                    b.child = e;
                    break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
            }
            xj(b, !0, c, null, f);
            break;
        case "together":
            xj(b, !1, null, null, void 0);
            break;
        default:
            b.memoizedState = null;
    }
    return b.child;
}
function jj(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    hh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
        a = b.child;
        c = wh(a, a.pendingProps);
        b.child = c;
        for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
        c.sibling = null;
    }
    return b.child;
}
function zj(a, b, c) {
    switch(b.tag){
        case 3:
            lj(b);
            Ig();
            break;
        case 5:
            Kh(b);
            break;
        case 1:
            Zf(b.type) && cg(b);
            break;
        case 4:
            Ih(b, b.stateNode.containerInfo);
            break;
        case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Mg, d._currentValue);
            d._currentValue = e;
            break;
        case 13:
            d = b.memoizedState;
            if (null !== d) {
                if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
                if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
                G(M, M.current & 1);
                a = $i(a, b, c);
                return null !== a ? a.sibling : null;
            }
            G(M, M.current & 1);
            break;
        case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
                if (d) return yj(a, b, c);
                b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(M, M.current);
            if (d) break;
            else return null;
        case 22:
        case 23:
            return b.lanes = 0, ej(a, b, c);
    }
    return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
    for(var c = b.child; null !== c;){
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
        }
        if (c === b) break;
        for(; null === c.sibling;){
            if (null === c.return || c.return === b) return;
            c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
    }
};
Bj = function() {};
Cj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
        a = b.stateNode;
        Hh(Eh.current);
        var f = null;
        switch(c){
            case "input":
                e = Ya(a, e);
                d = Ya(a, d);
                f = [];
                break;
            case "select":
                e = A({}, e, {
                    value: void 0
                });
                d = A({}, d, {
                    value: void 0
                });
                f = [];
                break;
            case "textarea":
                e = gb(a, e);
                d = gb(a, d);
                f = [];
                break;
            default:
                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for(l in d){
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
                for(g in h)!h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                for(g in k)k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else c || (f || (f = []), f.push(l, c)), c = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
    }
};
Dj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
};
function Ej(a, b) {
    if (!I) switch(a.tailMode){
        case "hidden":
            b = a.tail;
            for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
        case "collapsed":
            c = a.tail;
            for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for(var e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for(e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
}
function Fj(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch(b.tag){
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return S(b), null;
        case 1:
            return Zf(b.type) && $f(), S(b), null;
        case 3:
            d = b.stateNode;
            Jh();
            E(Wf);
            E(H);
            Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
            Bj(a, b);
            S(b);
            return null;
        case 5:
            Lh(b);
            var e = Hh(Gh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
                if (!d) {
                    if (null === b.stateNode) throw Error(p(166));
                    S(b);
                    return null;
                }
                a = Hh(Eh.current);
                if (Gg(b)) {
                    d = b.stateNode;
                    c = b.type;
                    var f = b.memoizedProps;
                    d[Of] = b;
                    d[Pf] = f;
                    a = 0 !== (b.mode & 1);
                    switch(c){
                        case "dialog":
                            D("cancel", d);
                            D("close", d);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", d);
                            break;
                        case "video":
                        case "audio":
                            for(e = 0; e < lf.length; e++)D(lf[e], d);
                            break;
                        case "source":
                            D("error", d);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", d);
                            D("load", d);
                            break;
                        case "details":
                            D("toggle", d);
                            break;
                        case "input":
                            Za(d, f);
                            D("invalid", d);
                            break;
                        case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            D("invalid", d);
                            break;
                        case "textarea":
                            hb(d, f), D("invalid", d);
                    }
                    ub(c, f);
                    e = null;
                    for(var g in f)if (f.hasOwnProperty(g)) {
                        var h = f[g];
                        "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = [
                            "children",
                            h
                        ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = [
                            "children",
                            "" + h
                        ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                    }
                    switch(c){
                        case "input":
                            Va(d);
                            db(d, f, !0);
                            break;
                        case "textarea":
                            Va(d);
                            jb(d);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" === typeof f.onClick && (d.onclick = Bf);
                    }
                    d = e;
                    b.updateQueue = d;
                    null !== d && (b.flags |= 4);
                } else {
                    g = 9 === e.nodeType ? e : e.ownerDocument;
                    "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                    "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                        is: d.is
                    }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                    a[Of] = b;
                    a[Pf] = d;
                    Aj(a, b, !1, !1);
                    b.stateNode = a;
                    a: {
                        g = vb(c, d);
                        switch(c){
                            case "dialog":
                                D("cancel", a);
                                D("close", a);
                                e = d;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", a);
                                e = d;
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < lf.length; e++)D(lf[e], a);
                                e = d;
                                break;
                            case "source":
                                D("error", a);
                                e = d;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", a);
                                D("load", a);
                                e = d;
                                break;
                            case "details":
                                D("toggle", a);
                                e = d;
                                break;
                            case "input":
                                Za(a, d);
                                e = Ya(a, d);
                                D("invalid", a);
                                break;
                            case "option":
                                e = d;
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                e = A({}, d, {
                                    value: void 0
                                });
                                D("invalid", a);
                                break;
                            case "textarea":
                                hb(a, d);
                                e = gb(a, d);
                                D("invalid", a);
                                break;
                            default:
                                e = d;
                        }
                        ub(c, e);
                        h = e;
                        for(f in h)if (h.hasOwnProperty(f)) {
                            var k = h[f];
                            "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                        }
                        switch(c){
                            case "input":
                                Va(a);
                                db(a, d, !1);
                                break;
                            case "textarea":
                                Va(a);
                                jb(a);
                                break;
                            case "option":
                                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                break;
                            case "select":
                                a.multiple = !!d.multiple;
                                f = d.value;
                                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof e.onClick && (a.onclick = Bf);
                        }
                        switch(c){
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                d = !!d.autoFocus;
                                break a;
                            case "img":
                                d = !0;
                                break a;
                            default:
                                d = !1;
                        }
                    }
                    d && (b.flags |= 4);
                }
                null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
        case 6:
            if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);
            else {
                if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
                c = Hh(Gh.current);
                Hh(Eh.current);
                if (Gg(b)) {
                    d = b.stateNode;
                    c = b.memoizedProps;
                    d[Of] = b;
                    if (f = d.nodeValue !== c) {
                        if (a = xg, null !== a) switch(a.tag){
                            case 3:
                                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;
                            case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                    }
                    f && (b.flags |= 4);
                } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
        case 13:
            E(M);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;
                else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                    if (null === a) {
                        if (!f) throw Error(p(318));
                        f = b.memoizedState;
                        f = null !== f ? f.dehydrated : null;
                        if (!f) throw Error(p(317));
                        f[Of] = b;
                    } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                    S(b);
                    f = !1;
                } else null !== zg && (Gj(zg), zg = null), f = !0;
                if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
        case 4:
            return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
            return Rg(b.type._context), S(b), null;
        case 17:
            return Zf(b.type) && $f(), S(b), null;
        case 19:
            E(M);
            f = b.memoizedState;
            if (null === f) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) if (d) Ej(f, !1);
            else {
                if (0 !== T || null !== a && 0 !== (a.flags & 128)) for(a = b.child; null !== a;){
                    g = Mh(a);
                    if (null !== g) {
                        b.flags |= 128;
                        Ej(f, !1);
                        d = g.updateQueue;
                        null !== d && (b.updateQueue = d, b.flags |= 4);
                        b.subtreeFlags = 0;
                        d = c;
                        for(c = b.child; null !== c;)f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                            lanes: a.lanes,
                            firstContext: a.firstContext
                        }), c = c.sibling;
                        G(M, M.current & 1 | 2);
                        return b.child;
                    }
                    a = a.sibling;
                }
                null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
            }
            else {
                if (!d) if (a = Mh(g), null !== a) {
                    if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
                } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
                f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
        case 22:
        case 23:
            return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(p(156, b.tag));
}
function Jj(a, b) {
    wg(b);
    switch(b.tag){
        case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
            return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
            return Lh(b), null;
        case 13:
            E(M);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                if (null === b.alternate) throw Error(p(340));
                Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
            return E(M), null;
        case 4:
            return Jh(), null;
        case 10:
            return Rg(b.type._context), null;
        case 22:
        case 23:
            return Ij(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Kj = !1, U = !1, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
        c(null);
    } catch (d) {
        W(a, b, d);
    }
    else c.current = null;
}
function Nj(a, b, c) {
    try {
        c();
    } catch (d) {
        W(a, b, d);
    }
}
var Oj = !1;
function Pj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
        if ("selectionStart" in a) var c = {
            start: a.selectionStart,
            end: a.selectionEnd
        };
        else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                    c.nodeType, f.nodeType;
                } catch (F) {
                    c = null;
                    break a;
                }
                var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                b: for(;;){
                    for(var y;;){
                        q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                        q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                        3 === q.nodeType && (g += q.nodeValue.length);
                        if (null === (y = q.firstChild)) break;
                        r = q;
                        q = y;
                    }
                    for(;;){
                        if (q === a) break b;
                        r === c && ++l === e && (h = g);
                        r === f && ++m === d && (k = g);
                        if (null !== (y = q.nextSibling)) break;
                        q = r;
                        r = q.parentNode;
                    }
                    q = y;
                }
                c = -1 === h || -1 === k ? null : {
                    start: h,
                    end: k
                };
            } else c = null;
        }
        c = c || {
            start: 0,
            end: 0
        };
    } else c = null;
    Df = {
        focusedElem: a,
        selectionRange: c
    };
    dd = !1;
    for(V = b; null !== V;)if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
    else for(; null !== V;){
        b = V;
        try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch(b.tag){
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
                        x.__reactInternalSnapshotBeforeUpdate = w;
                    }
                    break;
                case 3:
                    var u = b.stateNode.containerInfo;
                    1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(p(163));
            }
        } catch (F) {
            W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
            a.return = b.return;
            V = a;
            break;
        }
        V = b.return;
    }
    n = Oj;
    Oj = !1;
    return n;
}
function Qj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
        var e = d = d.next;
        do {
            if ((e.tag & a) === a) {
                var f = e.destroy;
                e.destroy = void 0;
                void 0 !== f && Nj(b, c, f);
            }
            e = e.next;
        }while (e !== d);
    }
}
function Rj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
        var c = b = b.next;
        do {
            if ((c.tag & a) === a) {
                var d = c.create;
                c.destroy = d();
            }
            c = c.next;
        }while (c !== b);
    }
}
function Sj(a) {
    var b = a.ref;
    if (null !== b) {
        var c = a.stateNode;
        switch(a.tag){
            case 5:
                a = c;
                break;
            default:
                a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
    }
}
function Tj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Tj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
}
function Uj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
    a: for(;;){
        for(; null === a.sibling;){
            if (null === a.return || Uj(a.return)) return null;
            a = a.return;
        }
        a.sibling.return = a.return;
        for(a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;){
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
    }
}
function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a)) for(Wj(a, b, c), a = a.sibling; null !== a;)Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for(Xj(a, b, c), a = a.sibling; null !== a;)Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = !1;
function Zj(a, b, c) {
    for(c = c.child; null !== c;)ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
    } catch (h) {}
    switch(c.tag){
        case 5:
            U || Mj(c, b);
        case 6:
            var d = X, e = Yj;
            X = null;
            Zj(a, b, c);
            X = d;
            Yj = e;
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
        case 18:
            null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
        case 4:
            d = X;
            e = Yj;
            X = c.stateNode.containerInfo;
            Yj = !0;
            Zj(a, b, c);
            X = d;
            Yj = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                e = d = d.next;
                do {
                    var f = e, g = f.destroy;
                    f = f.tag;
                    void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
                    e = e.next;
                }while (e !== d);
            }
            Zj(a, b, c);
            break;
        case 1:
            if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
                W(c, b, h);
            }
            Zj(a, b, c);
            break;
        case 21:
            Zj(a, b, c);
            break;
        case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
            break;
        default:
            Zj(a, b, c);
    }
}
function bk(a) {
    var b = a.updateQueue;
    if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Lj);
        b.forEach(function(b) {
            var d = ck.bind(null, a, b);
            c.has(b) || (c.add(b), b.then(d, d));
        });
    }
}
function dk(a, b) {
    var c = b.deletions;
    if (null !== c) for(var d = 0; d < c.length; d++){
        var e = c[d];
        try {
            var f = a, g = b, h = g;
            a: for(; null !== h;){
                switch(h.tag){
                    case 5:
                        X = h.stateNode;
                        Yj = !1;
                        break a;
                    case 3:
                        X = h.stateNode.containerInfo;
                        Yj = !0;
                        break a;
                    case 4:
                        X = h.stateNode.containerInfo;
                        Yj = !0;
                        break a;
                }
                h = h.return;
            }
            if (null === X) throw Error(p(160));
            ak(f, g, e);
            X = null;
            Yj = !1;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
        } catch (l) {
            W(e, b, l);
        }
    }
    if (b.subtreeFlags & 12854) for(b = b.child; null !== b;)ek(b, a), b = b.sibling;
}
function ek(a, b) {
    var c = a.alternate, d = a.flags;
    switch(a.tag){
        case 0:
        case 11:
        case 14:
        case 15:
            dk(b, a);
            fk(a);
            if (d & 4) {
                try {
                    Qj(3, a, a.return), Rj(3, a);
                } catch (t) {
                    W(a, a.return, t);
                }
                try {
                    Qj(5, a, a.return);
                } catch (t) {
                    W(a, a.return, t);
                }
            }
            break;
        case 1:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            break;
        case 5:
            dk(b, a);
            fk(a);
            d & 512 && null !== c && Mj(c, c.return);
            if (a.flags & 32) {
                var e = a.stateNode;
                try {
                    ob(e, "");
                } catch (t) {
                    W(a, a.return, t);
                }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                a.updateQueue = null;
                if (null !== k) try {
                    "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                    vb(h, g);
                    var l = vb(h, f);
                    for(g = 0; g < k.length; g += 2){
                        var m = k[g], q = k[g + 1];
                        "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                    }
                    switch(h){
                        case "input":
                            bb(e, f);
                            break;
                        case "textarea":
                            ib(e, f);
                            break;
                        case "select":
                            var r = e._wrapperState.wasMultiple;
                            e._wrapperState.wasMultiple = !!f.multiple;
                            var y = f.value;
                            null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                    }
                    e[Pf] = f;
                } catch (t) {
                    W(a, a.return, t);
                }
            }
            break;
        case 6:
            dk(b, a);
            fk(a);
            if (d & 4) {
                if (null === a.stateNode) throw Error(p(162));
                e = a.stateNode;
                f = a.memoizedProps;
                try {
                    e.nodeValue = f;
                } catch (t) {
                    W(a, a.return, t);
                }
            }
            break;
        case 3:
            dk(b, a);
            fk(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                bd(b.containerInfo);
            } catch (t) {
                W(a, a.return, t);
            }
            break;
        case 4:
            dk(b, a);
            fk(a);
            break;
        case 13:
            dk(b, a);
            fk(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
            d & 4 && bk(a);
            break;
        case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
            fk(a);
            if (d & 8192) {
                l = null !== a.memoizedState;
                if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for(V = a, m = a.child; null !== m;){
                    for(q = V = m; null !== V;){
                        r = V;
                        y = r.child;
                        switch(r.tag){
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Qj(4, r, r.return);
                                break;
                            case 1:
                                Mj(r, r.return);
                                var n = r.stateNode;
                                if ("function" === typeof n.componentWillUnmount) {
                                    d = r;
                                    c = r.return;
                                    try {
                                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                    } catch (t) {
                                        W(d, c, t);
                                    }
                                }
                                break;
                            case 5:
                                Mj(r, r.return);
                                break;
                            case 22:
                                if (null !== r.memoizedState) {
                                    hk(q);
                                    continue;
                                }
                        }
                        null !== y ? (y.return = r, V = y) : hk(q);
                    }
                    m = m.sibling;
                }
                a: for(m = null, q = a;;){
                    if (5 === q.tag) {
                        if (null === m) {
                            m = q;
                            try {
                                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                            } catch (t) {
                                W(a, a.return, t);
                            }
                        }
                    } else if (6 === q.tag) {
                        if (null === m) try {
                            q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                        q.child.return = q;
                        q = q.child;
                        continue;
                    }
                    if (q === a) break a;
                    for(; null === q.sibling;){
                        if (null === q.return || q.return === a) break a;
                        m === q && (m = null);
                        q = q.return;
                    }
                    m === q && (m = null);
                    q.sibling.return = q.return;
                    q = q.sibling;
                }
            }
            break;
        case 19:
            dk(b, a);
            fk(a);
            d & 4 && bk(a);
            break;
        case 21:
            break;
        default:
            dk(b, a), fk(a);
    }
}
function fk(a) {
    var b = a.flags;
    if (b & 2) {
        try {
            a: {
                for(var c = a.return; null !== c;){
                    if (Uj(c)) {
                        var d = c;
                        break a;
                    }
                    c = c.return;
                }
                throw Error(p(160));
            }
            switch(d.tag){
                case 5:
                    var e = d.stateNode;
                    d.flags & 32 && (ob(e, ""), d.flags &= -33);
                    var f = Vj(a);
                    Xj(a, f, e);
                    break;
                case 3:
                case 4:
                    var g = d.stateNode.containerInfo, h = Vj(a);
                    Wj(a, h, g);
                    break;
                default:
                    throw Error(p(161));
            }
        } catch (k) {
            W(a, a.return, k);
        }
        a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
    V = a;
    jk(a, b, c);
}
function jk(a, b, c) {
    for(var d = 0 !== (a.mode & 1); null !== V;){
        var e = V, f = e.child;
        if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Kj;
            if (!g) {
                var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                h = Kj;
                var l = U;
                Kj = g;
                if ((U = k) && !l) for(V = e; null !== V;)g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
                for(; null !== f;)V = f, jk(f, b, c), f = f.sibling;
                V = e;
                Kj = h;
                U = l;
            }
            lk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a, b, c);
    }
}
function lk(a) {
    for(; null !== V;){
        var b = V;
        if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
                if (0 !== (b.flags & 8772)) switch(b.tag){
                    case 0:
                    case 11:
                    case 15:
                        U || Rj(5, b);
                        break;
                    case 1:
                        var d = b.stateNode;
                        if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                        else {
                            var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                            d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                        }
                        var f = b.updateQueue;
                        null !== f && ih(b, f, d);
                        break;
                    case 3:
                        var g = b.updateQueue;
                        if (null !== g) {
                            c = null;
                            if (null !== b.child) switch(b.child.tag){
                                case 5:
                                    c = b.child.stateNode;
                                    break;
                                case 1:
                                    c = b.child.stateNode;
                            }
                            ih(b, g, c);
                        }
                        break;
                    case 5:
                        var h = b.stateNode;
                        if (null === c && b.flags & 4) {
                            c = h;
                            var k = b.memoizedProps;
                            switch(b.type){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    k.autoFocus && c.focus();
                                    break;
                                case "img":
                                    k.src && (c.src = k.src);
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (null === b.memoizedState) {
                            var l = b.alternate;
                            if (null !== l) {
                                var m = l.memoizedState;
                                if (null !== m) {
                                    var q = m.dehydrated;
                                    null !== q && bd(q);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(p(163));
                }
                U || b.flags & 512 && Sj(b);
            } catch (r) {
                W(b, b.return, r);
            }
        }
        if (b === a) {
            V = null;
            break;
        }
        c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            V = c;
            break;
        }
        V = b.return;
    }
}
function hk(a) {
    for(; null !== V;){
        var b = V;
        if (b === a) {
            V = null;
            break;
        }
        var c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            V = c;
            break;
        }
        V = b.return;
    }
}
function kk(a) {
    for(; null !== V;){
        var b = V;
        try {
            switch(b.tag){
                case 0:
                case 11:
                case 15:
                    var c = b.return;
                    try {
                        Rj(4, b);
                    } catch (k) {
                        W(b, c, k);
                    }
                    break;
                case 1:
                    var d = b.stateNode;
                    if ("function" === typeof d.componentDidMount) {
                        var e = b.return;
                        try {
                            d.componentDidMount();
                        } catch (k) {
                            W(b, e, k);
                        }
                    }
                    var f = b.return;
                    try {
                        Sj(b);
                    } catch (k) {
                        W(b, f, k);
                    }
                    break;
                case 5:
                    var g = b.return;
                    try {
                        Sj(b);
                    } catch (k) {
                        W(b, g, k);
                    }
            }
        } catch (k) {
            W(b, b.return, k);
        }
        if (b === a) {
            V = null;
            break;
        }
        var h = b.sibling;
        if (null !== h) {
            h.return = b.return;
            V = h;
            break;
        }
        V = b.return;
    }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = !1, Qi = null, Si = null, wk = !1, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
    return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
}
function mh(a, b, c, d) {
    if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === R ? Z : 0);
    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
        }), c = null;
        else {
            switch(Dc(d)){
                case 1:
                    c = fc;
                    break;
                case 4:
                    c = gc;
                    break;
                case 16:
                    c = hc;
                    break;
                case 536870912:
                    c = jc;
                    break;
                default:
                    c = hc;
            }
            c = Gk(c, Hk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
    }
}
function Hk(a, b) {
    Bk = -1;
    Ck = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Ik() && a.callbackNode !== c) return null;
    var d = uc(a, a === R ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);
    else {
        b = d;
        var e = K;
        K |= 2;
        var f = Kk();
        if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
        do try {
            Mk();
            break;
        } catch (h) {
            Nk(a, h);
        }
        while (1);
        Qg();
        nk.current = f;
        K = e;
        null !== Y ? b = 0 : (R = null, Z = 0, b = T);
    }
    if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
        if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
        if (6 === b) Dk(a, d);
        else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch(b){
                case 0:
                case 1:
                    throw Error(p(345));
                case 2:
                    Qk(a, uk, vk);
                    break;
                case 3:
                    Dk(a, d);
                    if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
                        if (0 !== uc(a, 0)) break;
                        e = a.suspendedLanes;
                        if ((e & d) !== d) {
                            L();
                            a.pingedLanes |= a.suspendedLanes & e;
                            break;
                        }
                        a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
                        break;
                    }
                    Qk(a, uk, vk);
                    break;
                case 4:
                    Dk(a, d);
                    if ((d & 4194240) === d) break;
                    b = a.eventTimes;
                    for(e = -1; 0 < d;){
                        var g = 31 - oc(d);
                        f = 1 << g;
                        g = b[g];
                        g > e && (e = g);
                        d &= ~f;
                    }
                    d = e;
                    d = B() - d;
                    d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                    if (10 < d) {
                        a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
                        break;
                    }
                    Qk(a, uk, vk);
                    break;
                case 5:
                    Qk(a, uk, vk);
                    break;
                default:
                    throw Error(p(329));
            }
        }
    }
    Ek(a, B());
    return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
    var c = tk;
    a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
    a = Jk(a, b);
    2 !== a && (b = uk, uk = c, null !== b && Gj(b));
    return a;
}
function Gj(a) {
    null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
    for(var b = a;;){
        if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for(var d = 0; d < c.length; d++){
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                    if (!He(f(), e)) return !1;
                } catch (g) {
                    return !1;
                }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
            if (b === a) break;
            for(; null === b.sibling;){
                if (null === b.return || b.return === a) return !0;
                b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
        }
    }
    return !0;
}
function Dk(a, b) {
    b &= ~sk;
    b &= ~rk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for(a = a.expirationTimes; 0 < b;){
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
    }
}
function Fk(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Ik();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Ek(a, B()), null;
    var c = Jk(a, b);
    if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Ok(a, d));
    }
    if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Qk(a, uk, vk);
    Ek(a, B());
    return null;
}
function Rk(a, b) {
    var c = K;
    K |= 1;
    try {
        return a(b);
    } finally{
        K = c, 0 === K && (Hj = B() + 500, fg && jg());
    }
}
function Sk(a) {
    null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
    var b = K;
    K |= 1;
    var c = pk.transition, d = C;
    try {
        if (pk.transition = null, C = 1, a) return a();
    } finally{
        C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
    }
}
function Ij() {
    gj = fj.current;
    E(fj);
}
function Lk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y) for(c = Y.return; null !== c;){
        var d = c;
        wg(d);
        switch(d.tag){
            case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f();
                break;
            case 3:
                Jh();
                E(Wf);
                E(H);
                Oh();
                break;
            case 5:
                Lh(d);
                break;
            case 4:
                Jh();
                break;
            case 13:
                E(M);
                break;
            case 19:
                E(M);
                break;
            case 10:
                Rg(d.type._context);
                break;
            case 22:
            case 23:
                Ij();
        }
        c = c.return;
    }
    R = a;
    Y = a = wh(a.current, null);
    Z = gj = b;
    T = 0;
    qk = null;
    sk = rk = hh = 0;
    uk = tk = null;
    if (null !== Wg) {
        for(b = 0; b < Wg.length; b++)if (c = Wg[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
            }
            c.pending = d;
        }
        Wg = null;
    }
    return a;
}
function Nk(a, b) {
    do {
        var c = Y;
        try {
            Qg();
            Ph.current = ai;
            if (Sh) {
                for(var d = N.memoizedState; null !== d;){
                    var e = d.queue;
                    null !== e && (e.pending = null);
                    d = d.next;
                }
                Sh = !1;
            }
            Rh = 0;
            P = O = N = null;
            Th = !1;
            Uh = 0;
            ok.current = null;
            if (null === c || null === c.return) {
                T = 1;
                qk = b;
                Y = null;
                break;
            }
            a: {
                var f = a, g = c.return, h = c, k = b;
                b = Z;
                h.flags |= 32768;
                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                    var l = k, m = h, q = m.tag;
                    if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                        var r = m.alternate;
                        r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                    }
                    var y = Vi(g);
                    if (null !== y) {
                        y.flags &= -257;
                        Wi(y, g, h, f, b);
                        y.mode & 1 && Ti(f, l, b);
                        b = y;
                        k = l;
                        var n = b.updateQueue;
                        if (null === n) {
                            var t = new Set;
                            t.add(k);
                            b.updateQueue = t;
                        } else n.add(k);
                        break a;
                    } else {
                        if (0 === (b & 1)) {
                            Ti(f, l, b);
                            uj();
                            break a;
                        }
                        k = Error(p(426));
                    }
                } else if (I && h.mode & 1) {
                    var J = Vi(g);
                    if (null !== J) {
                        0 === (J.flags & 65536) && (J.flags |= 256);
                        Wi(J, g, h, f, b);
                        Jg(Ki(k, h));
                        break a;
                    }
                }
                f = k = Ki(k, h);
                4 !== T && (T = 2);
                null === tk ? tk = [
                    f
                ] : tk.push(f);
                f = g;
                do {
                    switch(f.tag){
                        case 3:
                            f.flags |= 65536;
                            b &= -b;
                            f.lanes |= b;
                            var x = Oi(f, k, b);
                            fh(f, x);
                            break a;
                        case 1:
                            h = k;
                            var w = f.type, u = f.stateNode;
                            if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var F = Ri(f, h, b);
                                fh(f, F);
                                break a;
                            }
                    }
                    f = f.return;
                }while (null !== f);
            }
            Tk(c);
        } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
        }
        break;
    }while (1);
}
function Kk() {
    var a = nk.current;
    nk.current = ai;
    return null === a ? ai : a;
}
function uj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
    var c = K;
    K |= 2;
    var d = Kk();
    if (R !== a || Z !== b) vk = null, Lk(a, b);
    do try {
        Uk();
        break;
    } catch (e) {
        Nk(a, e);
    }
    while (1);
    Qg();
    K = c;
    nk.current = d;
    if (null !== Y) throw Error(p(261));
    R = null;
    Z = 0;
    return T;
}
function Uk() {
    for(; null !== Y;)Vk(Y);
}
function Mk() {
    for(; null !== Y && !cc();)Vk(Y);
}
function Vk(a) {
    var b = Wk(a.alternate, a, gj);
    a.memoizedProps = a.pendingProps;
    null === b ? Tk(a) : Y = b;
    ok.current = null;
}
function Tk(a) {
    var b = a;
    do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
            if (c = Fj(c, b, gj), null !== c) {
                Y = c;
                return;
            }
        } else {
            c = Jj(c, b);
            if (null !== c) {
                c.flags &= 32767;
                Y = c;
                return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
                T = 6;
                Y = null;
                return;
            }
        }
        b = b.sibling;
        if (null !== b) {
            Y = b;
            return;
        }
        Y = b = a;
    }while (null !== b);
    0 === T && (T = 5);
}
function Qk(a, b, c) {
    var d = C, e = pk.transition;
    try {
        pk.transition = null, C = 1, Xk(a, b, c, d);
    } finally{
        pk.transition = e, C = d;
    }
    return null;
}
function Xk(a, b, c, d) {
    do Ik();
    while (null !== xk);
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === R && (Y = R = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function() {
        Ik();
        return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
        f = pk.transition;
        pk.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        ok.current = null;
        Pj(a, c);
        ek(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        ik(c, a, e);
        dc();
        K = h;
        C = g;
        pk.transition = f;
    } else a.current = c;
    wk && (wk = !1, xk = a, yk = e);
    f = a.pendingLanes;
    0 === f && (Si = null);
    mc(c.stateNode, d);
    Ek(a, B());
    if (null !== b) for(d = a.onRecoverableError, c = 0; c < b.length; c++)e = b[c], d(e.value, {
        componentStack: e.stack,
        digest: e.digest
    });
    if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
    0 !== (yk & 1) && 0 !== a.tag && Ik();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
    jg();
    return null;
}
function Ik() {
    if (null !== xk) {
        var a = Dc(yk), b = pk.transition, c = C;
        try {
            pk.transition = null;
            C = 16 > a ? 16 : a;
            if (null === xk) var d = !1;
            else {
                a = xk;
                xk = null;
                yk = 0;
                if (0 !== (K & 6)) throw Error(p(331));
                var e = K;
                K |= 4;
                for(V = a.current; null !== V;){
                    var f = V, g = f.child;
                    if (0 !== (V.flags & 16)) {
                        var h = f.deletions;
                        if (null !== h) {
                            for(var k = 0; k < h.length; k++){
                                var l = h[k];
                                for(V = l; null !== V;){
                                    var m = V;
                                    switch(m.tag){
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qj(8, m, f);
                                    }
                                    var q = m.child;
                                    if (null !== q) q.return = m, V = q;
                                    else for(; null !== V;){
                                        m = V;
                                        var r = m.sibling, y = m.return;
                                        Tj(m);
                                        if (m === l) {
                                            V = null;
                                            break;
                                        }
                                        if (null !== r) {
                                            r.return = y;
                                            V = r;
                                            break;
                                        }
                                        V = y;
                                    }
                                }
                            }
                            var n = f.alternate;
                            if (null !== n) {
                                var t = n.child;
                                if (null !== t) {
                                    n.child = null;
                                    do {
                                        var J = t.sibling;
                                        t.sibling = null;
                                        t = J;
                                    }while (null !== t);
                                }
                            }
                            V = f;
                        }
                    }
                    if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                    else b: for(; null !== V;){
                        f = V;
                        if (0 !== (f.flags & 2048)) switch(f.tag){
                            case 0:
                            case 11:
                            case 15:
                                Qj(9, f, f.return);
                        }
                        var x = f.sibling;
                        if (null !== x) {
                            x.return = f.return;
                            V = x;
                            break b;
                        }
                        V = f.return;
                    }
                }
                var w = a.current;
                for(V = w; null !== V;){
                    g = V;
                    var u = g.child;
                    if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                    else b: for(g = w; null !== V;){
                        h = V;
                        if (0 !== (h.flags & 2048)) try {
                            switch(h.tag){
                                case 0:
                                case 11:
                                case 15:
                                    Rj(9, h);
                            }
                        } catch (na) {
                            W(h, h.return, na);
                        }
                        if (h === g) {
                            V = null;
                            break b;
                        }
                        var F = h.sibling;
                        if (null !== F) {
                            F.return = h.return;
                            V = F;
                            break b;
                        }
                        V = h.return;
                    }
                }
                K = e;
                jg();
                if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                    lc.onPostCommitFiberRoot(kc, a);
                } catch (na) {}
                d = !0;
            }
            return d;
        } finally{
            C = c, pk.transition = b;
        }
    }
    return !1;
}
function Yk(a, b, c) {
    b = Ki(c, b);
    b = Oi(a, b, 1);
    a = dh(a, b, 1);
    b = L();
    null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
    if (3 === a.tag) Yk(a, a, c);
    else for(; null !== b;){
        if (3 === b.tag) {
            Yk(b, a, c);
            break;
        } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                a = Ki(c, a);
                a = Ri(b, a, 1);
                b = dh(b, a, 1);
                a = L();
                null !== b && (Ac(b, 1, a), Ek(b, a));
                break;
            }
        }
        b = b.return;
    }
}
function Ui(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = L();
    a.pingedLanes |= a.suspendedLanes & c;
    R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
    Ek(a, b);
}
function Zk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = L();
    a = Zg(a, b);
    null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Zk(a, c);
}
function ck(a, b) {
    var c = 0;
    switch(a.tag){
        case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
        case 19:
            d = a.stateNode;
            break;
        default:
            throw Error(p(314));
    }
    null !== d && d.delete(b);
    Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;
    else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
        Ug = 0 !== (a.flags & 131072) ? !0 : !1;
    }
    else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch(b.tag){
        case 2:
            var d = b.type;
            jj(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            Tg(b, c);
            e = Xh(null, b, d, a, e, c);
            var f = bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
            return b;
        case 16:
            d = b.elementType;
            a: {
                jj(a, b);
                a = b.pendingProps;
                e = d._init;
                d = e(d._payload);
                b.type = d;
                e = b.tag = $k(d);
                a = Lg(d, a);
                switch(e){
                    case 0:
                        b = dj(null, b, d, a, c);
                        break a;
                    case 1:
                        b = ij(null, b, d, a, c);
                        break a;
                    case 11:
                        b = Zi(null, b, d, a, c);
                        break a;
                    case 14:
                        b = aj(null, b, d, Lg(d.type, a), c);
                        break a;
                }
                throw Error(p(306, d, ""));
            }
            return b;
        case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
        case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
        case 3:
            a: {
                lj(b);
                if (null === a) throw Error(p(387));
                d = b.pendingProps;
                f = b.memoizedState;
                e = f.element;
                bh(a, b);
                gh(b, d, null, c);
                var g = b.memoizedState;
                d = g.element;
                if (f.isDehydrated) if (f = {
                    element: d,
                    isDehydrated: !1,
                    cache: g.cache,
                    pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                    transitions: g.transitions
                }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                    e = Ki(Error(p(423)), b);
                    b = mj(a, b, d, c, e);
                    break a;
                } else if (d !== e) {
                    e = Ki(Error(p(424)), b);
                    b = mj(a, b, d, c, e);
                    break a;
                } else for(yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;)c.flags = c.flags & -3 | 4096, c = c.sibling;
                else {
                    Ig();
                    if (d === e) {
                        b = $i(a, b, c);
                        break a;
                    }
                    Yi(a, b, d, c);
                }
                b = b.child;
            }
            return b;
        case 5:
            return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
        case 6:
            return null === a && Eg(b), null;
        case 13:
            return pj(a, b, c);
        case 4:
            return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
        case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
        case 7:
            return Yi(a, b, b.pendingProps, c), b.child;
        case 8:
            return Yi(a, b, b.pendingProps.children, c), b.child;
        case 12:
            return Yi(a, b, b.pendingProps.children, c), b.child;
        case 10:
            a: {
                d = b.type._context;
                e = b.pendingProps;
                f = b.memoizedProps;
                g = e.value;
                G(Mg, d._currentValue);
                d._currentValue = g;
                if (null !== f) if (He(f.value, g)) {
                    if (f.children === e.children && !Wf.current) {
                        b = $i(a, b, c);
                        break a;
                    }
                } else for(f = b.child, null !== f && (f.return = b); null !== f;){
                    var h = f.dependencies;
                    if (null !== h) {
                        g = f.child;
                        for(var k = h.firstContext; null !== k;){
                            if (k.context === d) {
                                if (1 === f.tag) {
                                    k = ch(-1, c & -c);
                                    k.tag = 2;
                                    var l = f.updateQueue;
                                    if (null !== l) {
                                        l = l.shared;
                                        var m = l.pending;
                                        null === m ? k.next = k : (k.next = m.next, m.next = k);
                                        l.pending = k;
                                    }
                                }
                                f.lanes |= c;
                                k = f.alternate;
                                null !== k && (k.lanes |= c);
                                Sg(f.return, c, b);
                                h.lanes |= c;
                                break;
                            }
                            k = k.next;
                        }
                    } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                    else if (18 === f.tag) {
                        g = f.return;
                        if (null === g) throw Error(p(341));
                        g.lanes |= c;
                        h = g.alternate;
                        null !== h && (h.lanes |= c);
                        Sg(g, c, b);
                        g = f.sibling;
                    } else g = f.child;
                    if (null !== g) g.return = f;
                    else for(g = f; null !== g;){
                        if (g === b) {
                            g = null;
                            break;
                        }
                        f = g.sibling;
                        if (null !== f) {
                            f.return = g.return;
                            g = f;
                            break;
                        }
                        g = g.return;
                    }
                    f = g;
                }
                Yi(a, b, e.children, c);
                b = b.child;
            }
            return b;
        case 9:
            return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
        case 14:
            return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
        case 15:
            return cj(a, b, b.type, b.pendingProps, c);
        case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
        case 19:
            return yj(a, b, c);
        case 22:
            return ej(a, b, c);
    }
    throw Error(p(156, b.tag));
};
function Gk(a, b) {
    return ac(a, b);
}
function al(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
}
function Bg(a, b, c, d) {
    return new al(a, b, c, d);
}
function bj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
}
function $k(a) {
    if ("function" === typeof a) return bj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
    }
    return 2;
}
function wh(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
        lanes: b.lanes,
        firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
}
function yh(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) bj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch(a){
        case ya:
            return Ah(c.children, e, f, b);
        case za:
            g = 8;
            e |= 8;
            break;
        case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
            return qj(c, e, f, b);
        default:
            if ("object" === typeof a && null !== a) switch(a.$$typeof){
                case Ba:
                    g = 10;
                    break a;
                case Ca:
                    g = 9;
                    break a;
                case Da:
                    g = 11;
                    break a;
                case Ga:
                    g = 14;
                    break a;
                case Ha:
                    g = 16;
                    d = null;
                    break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
    }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
}
function Ah(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
}
function qj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = {
        isHidden: !1
    };
    return a;
}
function xh(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
}
function zh(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
    };
    return b;
}
function bl(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f, g, h, k) {
    a = new bl(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
        element: d,
        isDehydrated: c,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    };
    ah(f);
    return a;
}
function dl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: wa,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
    };
}
function el(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
            switch(b.tag){
                case 3:
                    b = b.stateNode.context;
                    break a;
                case 1:
                    if (Zf(b.type)) {
                        b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                        break a;
                    }
            }
            b = b.return;
        }while (null !== b);
        throw Error(p(171));
    }
    if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
    }
    return b;
}
function fl(a, b, c, d, e, f, g, h, k) {
    a = cl(c, d, !0, a, e, f, g, h, k);
    a.context = el(null);
    c = a.current;
    d = L();
    e = lh(c);
    f = ch(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    dh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Ek(a, d);
    return a;
}
function gl(a, b, c, d) {
    var e = b.current, f = L(), g = lh(e);
    c = el(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = ch(f, g);
    b.payload = {
        element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = dh(e, b, g);
    null !== a && (mh(a, e, g, f), eh(a, e, g));
    return g;
}
function hl(a) {
    a = a.current;
    if (!a.child) return null;
    switch(a.child.tag){
        case 5:
            return a.child.stateNode;
        default:
            return a.child.stateNode;
    }
}
function il(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
    }
}
function jl(a, b) {
    il(a, b);
    (a = a.alternate) && il(a, b);
}
function kl() {
    return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
};
function ml(a) {
    this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Sk(function() {
            gl(null, a, null, null);
        });
        b[uf] = null;
    }
};
function nl(a) {
    this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
        var b = Hc();
        a = {
            blockedOn: null,
            target: a,
            priority: b
        };
        for(var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
    }
};
function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {}
function rl(a, b, c, d, e) {
    if (e) {
        if ("function" === typeof d) {
            var f = d;
            d = function() {
                var a = hl(g);
                f.call(a);
            };
        }
        var g = fl(b, d, a, 0, null, !1, !1, "", ql);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Sk();
        return g;
    }
    for(; e = a.lastChild;)a.removeChild(e);
    if ("function" === typeof d) {
        var h = d;
        d = function() {
            var a = hl(k);
            h.call(a);
        };
    }
    var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk(function() {
        gl(b, k, c, d);
    });
    return k;
}
function sl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
        var g = f;
        if ("function" === typeof e) {
            var h = e;
            e = function() {
                var a = hl(g);
                h.call(a);
            };
        }
        gl(b, g, a, e);
    } else g = rl(c, b, a, e, d);
    return hl(g);
}
Ec = function(a) {
    switch(a.tag){
        case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
                var c = tc(b.pendingLanes);
                0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
            }
            break;
        case 13:
            Sk(function() {
                var b = Zg(a, 1);
                if (null !== b) {
                    var c = L();
                    mh(b, a, 1, c);
                }
            }), jl(a, 1);
    }
};
Fc = function(a) {
    if (13 === a.tag) {
        var b = Zg(a, 134217728);
        if (null !== b) {
            var c = L();
            mh(b, a, 134217728, c);
        }
        jl(a, 134217728);
    }
};
Gc = function(a) {
    if (13 === a.tag) {
        var b = lh(a), c = Zg(a, b);
        if (null !== c) {
            var d = L();
            mh(c, a, b, d);
        }
        jl(a, b);
    }
};
Hc = function() {
    return C;
};
Ic = function(a, b) {
    var c = C;
    try {
        return C = a, b();
    } finally{
        C = c;
    }
};
yb = function(a, b, c) {
    switch(b){
        case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
                for(c = a; c.parentNode;)c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                for(b = 0; b < c.length; b++){
                    var d = c[b];
                    if (d !== a && d.form === a.form) {
                        var e = Db(d);
                        if (!e) throw Error(p(90));
                        Wa(d);
                        bb(d, e);
                    }
                }
            }
            break;
        case "textarea":
            ib(a, c);
            break;
        case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, !1);
    }
};
Gb = Rk;
Hb = Sk;
var tl = {
    usingClientEntryPoint: !1,
    Events: [
        Cb,
        ue,
        Db,
        Eb,
        Fb,
        Rk
    ]
}, ul = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
};
var vl = {
    bundleType: ul.bundleType,
    version: ul.version,
    rendererPackageName: ul.rendererPackageName,
    rendererConfig: ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: ul.findFiberByHostInstance || kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber) try {
        kc = wl.inject(vl), lc = wl;
    } catch (a) {}
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
exports.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!ol(b)) throw Error(p(200));
    return dl(a, b, null, c);
};
exports.createRoot = function(a, b) {
    if (!ol(a)) throw Error(p(299));
    var c = !1, d = "", e = ll;
    null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = cl(a, 1, !1, null, null, c, !1, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ml(b);
};
exports.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
};
exports.flushSync = function(a) {
    return Sk(a);
};
exports.hydrate = function(a, b, c) {
    if (!pl(b)) throw Error(p(200));
    return sl(null, a, b, !0, c);
};
exports.hydrateRoot = function(a, b, c) {
    if (!ol(a)) throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = !1, f = "", g = ll;
    null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
    a[uf] = b.current;
    sf(a);
    if (d) for(a = 0; a < d.length; a++)c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [
        c,
        e
    ] : b.mutableSourceEagerHydrationData.push(c, e);
    return new nl(b);
};
exports.render = function(a, b, c) {
    if (!pl(b)) throw Error(p(200));
    return sl(null, a, b, !1, c);
};
exports.unmountComponentAtNode = function(a) {
    if (!pl(a)) throw Error(p(40));
    return a._reactRootContainer ? (Sk(function() {
        sl(null, null, a, !1, function() {
            a._reactRootContainer = null;
            a[uf] = null;
        });
    }), !0) : !1;
};
exports.unstable_batchedUpdates = Rk;
exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!pl(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return sl(a, b, c, !1, d);
};
exports.version = "18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 8276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
    }
    if (false) {}
    try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
    }
}
if (true) {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    module.exports = __webpack_require__(4831);
} else {}


/***/ }),

/***/ 4578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, C = Object.assign, D = {};
function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
}
var H = G.prototype = new F;
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
    current: null
}, L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current
    };
}
function N(a, b) {
    return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var P = /\/+/g;
function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case l:
                case n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
        return a;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var U = {
    current: null
}, V = {
    transition: null
}, W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
};
exports.Children = {
    map: S,
    forEach: function(a, b, e) {
        S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
exports.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
exports.createContext = function(a) {
    a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: t,
        _context: a
    };
    return a.Consumer = a;
};
exports.createElement = M;
exports.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.forwardRef = function(a) {
    return {
        $$typeof: v,
        render: a
    };
};
exports.isValidElement = O;
exports.lazy = function(a) {
    return {
        $$typeof: y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: T
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
        a();
    } finally{
        V.transition = b;
    }
};
exports.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
exports.useCallback = function(a, b) {
    return U.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return U.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
};
exports.useEffect = function(a, b) {
    return U.current.useEffect(a, b);
};
exports.useId = function() {
    return U.current.useId();
};
exports.useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
};
exports.useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
};
exports.useMemo = function(a, b) {
    return U.current.useMemo(a, b);
};
exports.useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
};
exports.useRef = function(a) {
    return U.current.useRef(a);
};
exports.useState = function(a) {
    return U.current.useState(a);
};
exports.useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
};
exports.useTransition = function() {
    return U.current.useTransition();
};
exports.version = "18.2.0";


/***/ }),

/***/ 9040:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(4578);
} else {}


/***/ }),

/***/ 6892:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function f(a, b) {
    var c = a.length;
    a.push(b);
    a: for(; 0 < c;){
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
    }
}
function h(a) {
    return 0 === a.length ? null : a[0];
}
function k(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
        a[0] = c;
        a: for(var d = 0, e = a.length, w = e >>> 1; d < w;){
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
        }
    }
    return b;
}
function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
    var l = performance;
    exports.unstable_now = function() {
        return l.now();
    };
} else {
    var p = Date, q = p.now();
    exports.unstable_now = function() {
        return p.now() - q;
    };
}
var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(a) {
    for(var b = h(t); null !== b;){
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
    }
}
function H(a) {
    B = !1;
    G(a);
    if (!A) if (null !== h(r)) A = !0, I(J);
    else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
    }
}
function J(a, b) {
    A = !1;
    B && (B = !1, E(L), L = -1);
    z = !0;
    var c = y;
    try {
        G(b);
        for(v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());){
            var d = v.callback;
            if ("function" === typeof d) {
                v.callback = null;
                y = v.priorityLevel;
                var e = d(v.expirationTime <= b);
                b = exports.unstable_now();
                "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                G(b);
            } else k(r);
            v = h(r);
        }
        if (null !== v) var w = !0;
        else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = !1;
        }
        return w;
    } finally{
        v = null, y = c, z = !1;
    }
}
var N = !1, O = null, L = -1, P = 5, Q = -1;
function M() {
    return exports.unstable_now() - Q < P ? !1 : !0;
}
function R() {
    if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = !0;
        try {
            b = O(!0, a);
        } finally{
            b ? S() : (N = !1, O = null);
        }
    } else N = !1;
}
var S;
if ("function" === typeof F) S = function() {
    F(R);
};
else if ("undefined" !== typeof MessageChannel) {
    var T = new MessageChannel, U = T.port2;
    T.port1.onmessage = R;
    S = function() {
        U.postMessage(null);
    };
} else S = function() {
    D(R, 0);
};
function I(a) {
    O = a;
    N || (N = !0, S());
}
function K(a, b) {
    L = D(function() {
        a(exports.unstable_now());
    }, b);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function(a) {
    a.callback = null;
};
exports.unstable_continueExecution = function() {
    A || z || (A = !0, I(J));
};
exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};
exports.unstable_getCurrentPriorityLevel = function() {
    return y;
};
exports.unstable_getFirstCallbackNode = function() {
    return h(r);
};
exports.unstable_next = function(a) {
    switch(y){
        case 1:
        case 2:
        case 3:
            var b = 3;
            break;
        default:
            b = y;
    }
    var c = y;
    y = b;
    try {
        return a();
    } finally{
        y = c;
    }
};
exports.unstable_pauseExecution = function() {};
exports.unstable_requestPaint = function() {};
exports.unstable_runWithPriority = function(a, b) {
    switch(a){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            a = 3;
    }
    var c = y;
    y = a;
    try {
        return b();
    } finally{
        y = c;
    }
};
exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch(a){
        case 1:
            var e = -1;
            break;
        case 2:
            e = 250;
            break;
        case 5:
            e = 1073741823;
            break;
        case 4:
            e = 1E4;
            break;
        default:
            e = 5E3;
    }
    e = c + e;
    a = {
        id: u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
    };
    c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
    return a;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function(a) {
    var b = y;
    return function() {
        var c = y;
        y = b;
        try {
            return a.apply(this, arguments);
        } finally{
            y = c;
        }
    };
};


/***/ }),

/***/ 4102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(6892);
} else {}


/***/ }),

/***/ 2573:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_default),
/* harmony export */   _interop_require_default: () => (/* binding */ _interop_require_default)
/* harmony export */ });
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}



/***/ }),

/***/ 7736:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _interop_require_wildcard),
/* harmony export */   _interop_require_wildcard: () => (/* binding */ _interop_require_wildcard)
/* harmony export */ });
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(146));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map