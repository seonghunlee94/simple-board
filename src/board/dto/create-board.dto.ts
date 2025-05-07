import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, MaxLength, MinLength } from "class-validator";

export class CreateBoardDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: '작성자 ', 
        required: true,
        example: 'hello world',
    })
    userId: number;

    @IsNotEmpty()
    @ApiProperty({
        description: '게시글 내용',
        required: true,
        example: 'hello world content',
    })
    content: string;
}