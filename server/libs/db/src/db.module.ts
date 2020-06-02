import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Bill } from './models/bill.model';

const models = TypegooseModule.forFeature([
  { typegooseClass: User, schemaOptions: { collection: "User" } },
  { typegooseClass: Bill, schemaOptions: { collection: "Bill" } }
]);

@Global()
@Module({
  imports: [TypegooseModule.forRoot('mongodb+srv://vincedd:1118@piggybank-cwj1z.azure.mongodb.net/Piggybank?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false,// Don't build indexes
    // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    // reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  }),
    models],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule { }
