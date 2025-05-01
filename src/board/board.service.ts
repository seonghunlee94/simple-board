import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {

    private boards = [
        {
            id: '1',
            title: 'hello world',
            content: 'content1',
        },
        {
            id: '2',
            title: 'hello world2',
            content: 'content2',
        },
        {
            id: '3',
            title: 'hello world3',
            content: 'content3',
        },
        {
            id: '4',
            title: 'hello world4',
            content: 'content4',
        },
    ];

    findAll() {
        return this.boards;   
    }

    find(id: string) {
        const index = this.boards.findIndex(board => board.id === id);  
        return this.boards[index]; 
    }

    create(data) {
        return 'create';   
    }

    update(id: number, data) {
        return `update ${id}`;   
    }

    remove(id: number) {
        return `remove ${id}`;   
    }



}
