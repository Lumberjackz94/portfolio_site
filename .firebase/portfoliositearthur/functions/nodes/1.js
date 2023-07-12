

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.95f17815.js","_app/immutable/chunks/scheduler.283841f9.js","_app/immutable/chunks/index.c9f7c5ae.js","_app/immutable/chunks/stores.d8ffc7f2.js","_app/immutable/chunks/singletons.91d2ce55.js","_app/immutable/chunks/index.145e5b94.js"];
export const stylesheets = [];
export const fonts = [];
