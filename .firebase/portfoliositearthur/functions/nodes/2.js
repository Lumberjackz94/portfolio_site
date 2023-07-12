

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.85126816.js","_app/immutable/chunks/scheduler.283841f9.js","_app/immutable/chunks/index.c9f7c5ae.js","_app/immutable/chunks/stores.d8ffc7f2.js","_app/immutable/chunks/singletons.91d2ce55.js","_app/immutable/chunks/index.145e5b94.js","_app/immutable/chunks/index.40b40403.js"];
export const stylesheets = [];
export const fonts = [];
