export default defineNuxtRouteMiddleware((to) => {
    console.log("Middleware running");

    if (to.path === '/') {
        return navigateTo('/inbox');
    }
});
