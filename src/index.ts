import { Router, Request, Response, NextFunction } from 'express';

type Wrapper = (router: Router) => void;

export const applyMiddleware = (
    middlewareWrappers: Wrapper[],
    router: Router
) => {
    for(const f of middlewareWrappers) f(router);
};

export type Handler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<Response | void> | void;

export type Route = {
    path: string;
    method: string;
    handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
    for(const route of routes){
        const { method, path, handler } = route;
        (router as any)[method](path, handler);
    }
};