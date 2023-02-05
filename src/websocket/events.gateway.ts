import { JwtService } from '@nestjs/jwt';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
        origin:['https://ampedxmusic.io', 'http://localhost:3000']
    },
  })

  export class EventsGateway {
    constructor(private jwtService: JwtService){}
    @WebSocketServer()
    server: Server;


    async handleConnection(socket: Socket) {  
      const jwt = (socket.handshake.query.token as string) || null;

      const user = await this.jwtService.verifyAsync(jwt, {
        secret: process.env.JWT_SECRET,
      });      
    }
  
    // @SubscribeMessage('sendNotification')
    // findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    //   return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    // }
  
    // @SubscribeMessage('identity')
    // async identity(@MessageBody() data: number): Promise<number> {
    //   return data;
    // }
  }