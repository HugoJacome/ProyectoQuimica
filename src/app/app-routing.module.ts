import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { RiddlesComponent } from './components/riddles/riddles.component';
import { SongsComponent } from './components/songs/songs.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'riddles',
    component: RiddlesComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
