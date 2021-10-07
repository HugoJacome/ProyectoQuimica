import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './components/game/game-card/game-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestartDialogComponent } from './components/game/restart-dialog/restart-dialog.component';
import { GameComponent } from './components/game/game.component';
import { StoriesComponent } from './components/stories/stories.component';
import { RiddlesComponent } from './components/riddles/riddles.component';
import { SongsComponent } from './components/songs/songs.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SelectionDialogComponent } from './components/riddles/selection-dialog/selection-dialog.component';
import { GamesComponent } from './components/games/games.component';
import { AnagramComponent } from './components/games/anagram/anagram.component';
import { HangoutComponent } from './components/games/hangout/hangout.component';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    RestartDialogComponent,
    GameComponent,
    StoriesComponent,
    RiddlesComponent,
    SongsComponent,
    HeaderComponent,
    HomeComponent,
    SelectionDialogComponent,
    GamesComponent,
    AnagramComponent,
    HangoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'game', component: GameComponent},
      {path: 'stories', component: StoriesComponent},
      {path: 'riddles', component: RiddlesComponent},
      {path: 'songs', component: SongsComponent},
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    YouTubePlayerModule,
    // ReactiveFormsModule
  ],
  exports:[
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
