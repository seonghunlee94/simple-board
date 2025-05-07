import { ApiProperty, OmitType, PartialType, PickType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { CreateBoardDto } from "./create-board.dto";

export class UpdateBoardDto {
    
    @IsNotEmpty()
    @ApiProperty({
            description: '게시글 내용',
            required: true,
            example: 'hello world content',
        })
    content?: string;
}

// export class UpdateBoardDto extends PartialType(CreateBoardDto) {};
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['title']) {};
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['content']) {};