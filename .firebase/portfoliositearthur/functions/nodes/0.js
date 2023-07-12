

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dfb07c8e.js","_app/immutable/chunks/scheduler.283841f9.js","_app/immutable/chunks/index.c9f7c5ae.js"];
export const stylesheets = ["_app/immutable/assets/0.49763fd1.css"];
export const fonts = [];
