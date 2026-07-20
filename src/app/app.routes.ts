import { Routes } from "@angular/router";

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
  },
 
];
