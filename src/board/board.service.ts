import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { Board } from 'src/entity/board.entity';

@Injectable()
export class BoardService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

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

    async findAll() {
        return this.boardRepository.find();   
    }

    async find(id: number) {
        const board = await this.boardRepository.findOne({
            where: {
                id
            },
            relations: {
                user: true,
            }
        }); 

        if (!board) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return board;
    }

    create(data: CreateBoardDto) {
        const newBoard = {
            id: this.getNextId(), ...data
        };
        this.boards.push(newBoard);
        return newBoard;   
    }

    getNextId() {
        return this.boards.sort((a, b) => b.id - a.id)[0].id + 1;
    }

    update(id: number, data: UpdateBoardDto) {
        const index = this.getBoard(id);
        if (index > -1) {
            this.boards[index] = { ...this.boards[index], ...data };
            return this.boards[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.getBoard(id);
        if (index > -1) {
            const deleteBoard = this.boards[index];
            this.boards.splice(index, 1);
            return deleteBoard;
        }
        return null;  
    }

    getBoard(id: number) {
        return this.boards.findIndex(board => board.id === id);   
    }


}
