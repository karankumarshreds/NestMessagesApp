// external packages
import { IsString } from 'class-validator';

/// think of this as a schema for validation of the incoming body
/// or as an interface for an object

/// NEST JS internally uses class-transformer package to turn the req body into
/// an instance of the following DTO class. And we make use of class-validator
/// package to do validations on the class properties on the instance of the class
export class CreateMessageDto {
  @IsString()
  content: string;
}
