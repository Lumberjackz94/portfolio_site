

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.865f04cb.js","_app/immutable/chunks/scheduler.283841f9.js","_app/immutable/chunks/index.c9f7c5ae.js","_app/immutable/chunks/firebase.2a115845.js","_app/immutable/chunks/index.145e5b94.js"];
export const stylesheets = [];
export const fonts = [];
