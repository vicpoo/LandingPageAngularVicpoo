import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './component/home/home.component';
import { Component } from '@angular/core';
import { SuplementosComponent } from './component/suplementos/suplementos.component';
import { RutinaComponent } from './component/rutina/rutina.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'suplementos', component :SuplementosComponent},
    {path:'rutina', component: RutinaComponent}
];
