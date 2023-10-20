import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return 'list messages'
    }

    @Post()
    createMessages(){
        return 'create a message'
    }

    @Get('/:id')
    getMessage(){
        return 'a particular messsage'
    }
}
