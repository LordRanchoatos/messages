import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import {MessagesService} from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor(){
        // DONNT DO THIS ON REAL APPS
        // USE DEEEPENDEENCY INJECTION
        this.messagesService = new MessagesService
    }
    @Get()
    listMessages(){
        return this.messagesService.findAll()
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        return this.messagesService.findOne(id)
    }
}
