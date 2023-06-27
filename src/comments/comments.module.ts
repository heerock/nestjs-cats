import { Module, forwardRef } from '@nestjs/common';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './services/comments.service';
import { CatsModule } from 'src/cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Comments, CommentsSchema } from './comments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
    ]),
    CatsModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
