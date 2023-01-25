export const routes = (app:any) =>{
    app.use("/api/teacher", require("./api/crud"));
    app.use("/api/student", require("./api/student-crud"));
    app.use("/api/signup", require("./api/signup"));
    app.use("/api/login", require("./api/login"));
}