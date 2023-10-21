import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return 'list messages'
    }

    @Post()
    createMessages(@Body() body: any){
        console.log(body)
        return 'create a message'
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        console.log(id)
        return 'a particular messsage'
    }
}
