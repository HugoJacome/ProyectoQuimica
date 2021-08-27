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
    MatIconModule
  ],
  exports:[
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
