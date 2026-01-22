import { app, initApp } from "../server/index";

let initialized = false;

export default async (req: any, res: any) => {
    if (!initialized) {
        await initApp();
        initialized = true;
    }
    app(req, res);
};
