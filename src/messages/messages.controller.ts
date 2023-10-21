import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return 'list messages'
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto){
        console.log(body)
        return 'create a message'
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        console.log(id)
        return 'a particular messsage'
    }
}
