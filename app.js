/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-05-14 09:20:12
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-14 11:14:59
 */
const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const index = require("./routes/index");

// error handler
onerror(app);
// logger
app.use(async (ctx, next) => {
  console.log("测试数据1");
  await next();
});

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(async (ctx, next) => {
  console.log("测试数据2");
  await next();
});
app.use(json());
app.use(async (ctx, next) => {
  console.log("测试数据3");
  await next();
});
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger
app.use(async (ctx, next) => {
  console.log("测试数据4");
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
