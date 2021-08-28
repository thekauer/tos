import { Module } from '@nestjs/common';
import { GameModule } from 'src/game/game.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
    imports: [
        GameModule
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}