import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { AnagramComponent } from './components/games/anagram/anagram.component';
import { GamesComponent } from './components/games/games.component';
import { HangoutComponent } from './components/games/hangout/hangout.component';
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
  },
  {
    path: 'anagram',
    component: AnagramComponent
  },
  {
    path: 'hangout',
    component: HangoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
