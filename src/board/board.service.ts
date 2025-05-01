import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {

    private boards = [
        {
            id: 1,
            title: 'hello world',
            content: 'content1',
        },
        {
            id: 2,
            title: 'hello world2',
            content: 'content2',
        },
        {
            id: 3,
            title: 'hello world3',
            content: 'content3',
        },
        {
            id: 4,
            title: 'hello world4',
            content: 'content4',
        },
    ];

    findAll() {
        return this.boards;   
    }

    find(id: number) {
        const index = this.boards.findIndex(board => board.id === id);  
        return this.boards[index]; 
    }

    create(data) {
        const newBoard = {
            id: this.getNextId(), ...data
        };
        this.boards.push(newBoard);
        return newBoard;   
    }

    getNextId() {
        return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
    }

    update(id: number, data) {
        return `update ${id}`;   
    }

    remove(id: number) {
        return `remove ${id}`;   
    }



}
