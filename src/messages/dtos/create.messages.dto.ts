// external packages
import { IsString } from 'class-validator';

/// think of this as a schema for validation of the incoming body
/// or as an interface for an object
export class CreateMessageDto {
  @IsString()
  content: string;
}
