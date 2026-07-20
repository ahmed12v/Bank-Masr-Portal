import { Notfound } from './pages/notfound/notfound';
import { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth-guard";

export const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" },
   //Auth
  {
    path: "login",
    loadComponent: () => import("./pages/login/login").then((c) => c.Login),
  },
  //pages
  {
    path: "home",
    loadComponent: () => import("./pages/home/home").then((c) => c.Home),
    canActivate: [authGuard],
  },
  {
    path: "**",
    loadComponent: () => import("./pages/notfound/notfound").then((c) => c.Notfound),
    
  },
 
];
