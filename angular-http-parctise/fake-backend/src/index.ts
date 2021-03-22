import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";

const fakeBackendApp = new Koa()
const router = new Router();


router.get("/", async (ctx, next) => {
    ctx.body = {msg: "Fake Backend Service Started!"};

    await next()
});


// enable logger and json middleware
fakeBackendApp
    .use(json())
    .use(logger())
    // enable router middleware and its configuration
    .use(router.routes())
    .use(router.allowedMethods());

// startup application and bind to port 1234
fakeBackendApp.listen(1234, () => {
    console.log("Fake Backend Service Started in Port: 1234")
});