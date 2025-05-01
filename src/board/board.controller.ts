import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {

    constructor(
        private readonly boardService: BoardService
    ) {}

    @Get()
    findAll() {
        return this.boardService.findAll();   
    }

    @Get(':id')
    find(
        @Param('id') id: string
    ) {
        return this.boardService.find(id);   
    }

    @Post()
    create(
        @Body() data
    ) {
        return 'create';   
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() data
    ) {
        return `update ${id}`;   
    }

    @Delete(':id')
    remove(
        @Param('id') id: number 
    ) {
        return `remove ${id}`;   
    }

}
