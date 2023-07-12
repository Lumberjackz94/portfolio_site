import * as server from '../entries/pages/login/username/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/username/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/username/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.453d7e03.js","_app/immutable/chunks/scheduler.283841f9.js","_app/immutable/chunks/index.c9f7c5ae.js","_app/immutable/chunks/stores.d8ffc7f2.js","_app/immutable/chunks/singletons.91d2ce55.js","_app/immutable/chunks/index.145e5b94.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
