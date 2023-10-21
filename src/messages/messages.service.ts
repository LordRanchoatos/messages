import { MessagesRepository } from "./massages.repository"

class MessageService {
    messagesRepo: MessagesRepository;

    constructor() {

        // Service is creating its own dependencies
        // DON'T DO THIS ON REAL APPS
        this.messagesRepo = new MessagesRepository()
    }
}